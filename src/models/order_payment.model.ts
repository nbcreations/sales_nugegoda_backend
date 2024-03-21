import db from "../config/db";
import logger from '../config/logger';
import DefaultResponse from "../utils/DefaultResponse";
import { DateTime } from 'luxon';

const order_payment_add = async ( orderId: number, amount: number, type: number, authUserId: number ) => {

    try {

        const currentDateTime = DateTime.now().setZone("UTC").toFormat("y-MM-dd HH:mm:ss");
    
        let result = await db.query('INSERT INTO `order_payment`(order_id, amount, type, added_by, added_time) VALUES (?, ?, ?, ?, ?)', [orderId, amount, type, authUserId, currentDateTime]);

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

const order_payment_history = async ( orderId: number ) => {

    try {

        let result = await db.query(`SELECT order_payment.id, order_payment.order_id, order_payment.amount, order_payment.type, order_payment.added_time
        FROM order_payment
        WHERE order_payment.order_id = ?  ORDER BY order_payment.id DESC`, [ orderId]);
        return result;

    } catch ( err ) {
        logger.error( err );
        return DefaultResponse.errorFormat("500");
    }
    
};

export default {
    order_payment_add,
    order_payment_history
}