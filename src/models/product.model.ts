import db from "../config/db";
import logger from '../config/logger';
import DefaultResponse from "../utils/DefaultResponse";
import { DateTime } from 'luxon';









const product_add = async (name: string, stock: number, price: number, productId: string, type: number, category: number, subCategory: number, authUserId: number, color: string, size: string) => {

    try {

        const currentDateTime = DateTime.now().setZone("UTC").toFormat("y-MM-dd HH:mm:ss");

        let result = await db.query('INSERT INTO `product`(name, stock, price, product_id, type, category, sub_category, status, added_by, added_time, color, size) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [name, stock, price, productId, type, category, subCategory, 1, authUserId, currentDateTime, color, size ]);

        if (result.status) {
            return DefaultResponse.successFormat("200", {
                insertId: result.data.insertId
            });
        }
        return result;

    } catch (err) {
        logger.error(err);
        return DefaultResponse.errorFormat("500");
    }

};

const product_list = async () => {

    try {
        let result = await db.query(`
            SELECT 
                product.id, 
                product.name, 
                product.color, 
                product.size, 
                product.stock, 
                product.price, 
                product.product_id, 
                product.type, 
                product.category, 
                product.sub_category, 
                product.status, 
                product.added_by, 
                product.added_time, 
                product.updated_by, 
                product.updated_time,
                product_type.name AS type_name, 
                product_category.name AS category_name, 
                product_sub_category.name AS sub_category_name
            FROM 
                product
            INNER JOIN 
                product_type ON product.type = product_type.id
            INNER JOIN 
                product_category ON product.category = product_category.id
            INNER JOIN 
                product_sub_category ON product.sub_category = product_sub_category.id
            WHERE 
                product.status != ?  
            ORDER BY 
                product.id DESC
        `, [403]);

        return result;
    }

    catch (err) {
        logger.error(err);
        return DefaultResponse.errorFormat("500");
    }

};

const product_edit = async (name: string, stock: number, price: number, productId: string, type: number, category: number, subCategory: number, authUserId: number, id: number, color: string, size: string) => {

    try {

        const currentDateTime = DateTime.now().setZone("UTC").toFormat("y-MM-dd HH:mm:ss");

        let result = await db.query('UPDATE `product` SET name = ?, stock = ?, price = ?, product_id = ?, type = ?, category = ?, sub_category = ?, updated_by = ?, updated_time = ?, color = ?, size = ? WHERE id = ? && status != ? ', [name, stock, price, productId, type, category, subCategory, authUserId, currentDateTime, color, size, id, 403]);

        if (result.status) {
            return DefaultResponse.successFormat("200");
        }
        return result;

    } catch (err) {
        logger.error(err);
        return DefaultResponse.errorFormat("500");
    }

};

const product_view = async (id: number) => {

    try {

        let result = await db.query(`SELECT product.id,
        product.color, 
        product.size, product.name, product.stock, product.price, product.product_id, product.type, product.category, product.sub_category, product.status, product.added_by, product.added_time, product.updated_by, product.updated_time
        FROM product
        WHERE product.id = ? && product.status != ? `, [id, 403]);
        if (!result.status) {
            return result;
        }
        if (result.data.length === 0) {
            return DefaultResponse.errorFormat("404");
        }
        return DefaultResponse.successFormat("200", result.data[0]);

    } catch (err) {
        logger.error(err);
        return DefaultResponse.errorFormat("500");
    }

};

const product_sales_list = async ( sub_category: number, type: number ) => {

    try {

        let result = await db.query(`SELECT product.id, product.name, product.stock, product.price, product.product_id, product.type, product.category, product.sub_category, product.status, product.added_by, product.added_time, product.updated_by, product.updated_time
        FROM product
        WHERE product.status != ? && product.sub_category = ? && product.type = ?  ORDER BY product.id DESC`, [ 403, sub_category, type]);
        console.log(result);
        return result;

    } catch ( err ) {
        logger.error( err );
        return DefaultResponse.errorFormat("500");
    }
    
};

const product_stock_check = async ( id:number, quantity:number ) => {

    try {

        let result = await db.query(`SELECT product.id
        FROM product
        WHERE product.stock >= ? && product.id = ?`, [ quantity, id]);
        if (!result.status) {
            return false;
        }
        console.log(result, id)
        if(result.data.length === 0) {
            return false;
        }
        return true;

    } catch ( err ) {
        logger.error( err );
        return false;
    }
    
};
const product_status_check = async ( id:number ) => {

    try {

        let result = await db.query(`SELECT product.id
        FROM product
        WHERE product.status = ? && product.id = ?`, [ 1, id ]);
        if (!result.status) {
            return false;
        }
        if(result.data.length === 0) {
            return false;
        }
        return true;

    } catch ( err ) {
        logger.error( err );
        return false;
    }
    
};

const product_stock_increase = async ( stock: number, id: number ) => {

    try {

        const currentDateTime = DateTime.now().setZone("UTC").toFormat("y-MM-dd HH:mm:ss");
    
        let result = await db.query('UPDATE `product` SET stock = stock + ? WHERE id = ? ', [stock, id]);

        if (result.status) {
            return DefaultResponse.successFormat("200");
        }
        return result;

    } catch ( err ) {
        logger.error( err );
        return DefaultResponse.errorFormat("500");
    }
    
};

const product_stock_decrease = async ( stock: number, id: number ) => {

    try {

        const currentDateTime = DateTime.now().setZone("UTC").toFormat("y-MM-dd HH:mm:ss");
    
        let result = await db.query('UPDATE `product` SET stock = stock - ? WHERE id = ? ', [stock, id]);

        if (result.status) {
            return DefaultResponse.successFormat("200");
        }
        return result;

    } catch ( err ) {
        logger.error( err );
        return DefaultResponse.errorFormat("500");
    }
    
};

export default {
    product_add,
    product_list,
    product_edit,
    product_view,
    product_sales_list,
    product_stock_check,
    product_status_check,
    product_stock_increase,
    product_stock_decrease
}