import db from "../config/db";
import logger from '../config/logger';
import DefaultResponse from "../utils/DefaultResponse";
import { DateTime } from 'luxon';

const order_bill_add = async ( date: string, customerName: string, email: string, phone: string, address: string, authUserId: number ) => {

    try {

        const currentDateTime = DateTime.now().setZone("UTC").toFormat("y-MM-dd HH:mm:ss");
    
        let result = await db.query('INSERT INTO `order_bill`(date, customer_name, email, phone, address, status, added_by, added_time) VALUES (?, ?, ?, ?, ?, ?, ?, ?)', [date, customerName, email, phone, address, 1, authUserId, currentDateTime]);

        if (result.status) {
            return DefaultResponse.successFormat("200", {
                insertId: result.data.insertId
            });
        }
        return result;

    } catch ( err ) {
        logger.error( err );
        return DefaultResponse.errorFormat("500");
    }
    
};

const order_bill_list = async (  ) => {

    try {

        let result = await db.query(`SELECT order_bill.id, order_bill.customer_name, order_bill.email, order_bill.phone, order_bill.address, order_bill.status, order_bill.added_by, order_bill.added_time, (SELECT SUM(order_item.qty * order_item.price) FROM order_item WHERE order_item.order_id = order_bill.id) as total_price, (SELECT SUM(amount) FROM order_payment WHERE order_payment.order_id = order_bill.id) as paid_amount
        FROM order_bill
        WHERE order_bill.status != ?  ORDER BY order_bill.id DESC`, [ 403]);
        return result;

    } catch ( err ) {
        logger.error( err );
        return DefaultResponse.errorFormat("500");
    }
    
};

const order_bill_view = async ( id:number  ) => {

    try {

        let result = await db.query(`SELECT order_bill.id, order_bill.customer_name, order_bill.email, order_bill.phone, order_bill.address, order_bill.status, order_bill.added_by, DATE(order_bill.added_time) as date, (SELECT SUM(order_item.qty * order_item.price) FROM order_item WHERE order_item.order_id = order_bill.id) as total_price, (SELECT SUM(amount) FROM order_payment WHERE order_payment.order_id = ?) as paid_amount
        FROM order_bill
        WHERE order_bill.id = ?  ORDER BY order_bill.id DESC`, [ id, id]);
        if(!result.status){
            return result;
        }
        if(result.data.length === 0) return DefaultResponse.errorFormat("404");
        // Order items
        let result2 = await db.query(`SELECT order_item.*,product.name as product_name, product.product_id as product
        FROM order_item
        INNER JOIN product ON product.id = order_item.product
        WHERE order_item.order_id = ?`, [id]);
        if(!result2.status) {
            return result2;
        }
        result.data[0].items = result2.data;
        return DefaultResponse.successFormat("200", result.data[0]);

    } catch ( err ) {
        logger.error( err );
        return DefaultResponse.errorFormat("500");
    }
    
};

const order_bill_to_pay_list = async (  ) => {

    try {

        let result = await db.query(`SELECT order_bill.id, order_bill.customer_name, order_bill.email, order_bill.phone, order_bill.address, CAST((SELECT SUM(order_item.qty * order_item.price) FROM order_item WHERE order_item.order_id = order_bill.id) AS DOUBLE) as total_price, CAST((SELECT SUM(amount) FROM order_payment WHERE order_payment.order_id = order_bill.id) AS DOUBLE) as paid_amount
        FROM order_bill
        WHERE order_bill.status != 403 && (CAST((SELECT SUM(order_item.qty * order_item.price) FROM order_item WHERE order_item.order_id = order_bill.id) AS DOUBLE) > CAST((SELECT SUM(amount) FROM order_payment WHERE order_payment.order_id = order_bill.id) AS DOUBLE) || CAST((SELECT SUM(amount) FROM order_payment WHERE order_payment.order_id = order_bill.id) AS DOUBLE) IS NULL) ORDER BY order_bill.id DESC`, []);
        return result;

    } catch ( err ) {
        logger.error( err );
        return DefaultResponse.errorFormat("500");
    }
    
};

export default {
    order_bill_add,
    order_bill_list,
    order_bill_view,
    order_bill_to_pay_list
}