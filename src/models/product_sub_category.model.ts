import db from "../config/db";
import logger from '../config/logger';
import DefaultResponse from "../utils/DefaultResponse";
import { DateTime } from 'luxon';

const product_sub_category_add = async ( name: string, imgUrl: string, category: number, authUserId: number ) => {

    try {

        const currentDateTime = DateTime.now().setZone("UTC").toFormat("y-MM-dd HH:mm:ss");
    
        let result = await db.query('INSERT INTO `product_sub_category`(name, img_url, category, status, added_by, added_time) VALUES (?, ?, ?, ?, ?, ?)', [name, imgUrl, category, 1, authUserId, currentDateTime]);

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

const product_sub_category_list = async (  ) => {

    try {
        let result = await db.query(`
            SELECT 
                product_sub_category.id, 
                product_sub_category.name, 
                product_sub_category.img_url, 
                product_sub_category.category, 
                product_sub_category.status, 
                product_sub_category.added_by, 
                product_sub_category.added_time,
                product_sub_category.updated_by,
                product_sub_category.updated_time,
                product_category.name AS category_name
            FROM
                product_sub_category
            INNER JOIN 
                product_category ON product_sub_category.category = product_category.id
            WHERE 
                product_sub_category.status != ?  
            ORDER BY 
                product_sub_category.id DESC
        `, [403]);
    
        return result;
    
    } 
     catch ( err ) {
        logger.error( err );
        return DefaultResponse.errorFormat("500");
    }
    
};

const product_sub_category_edit = async ( name: string, imgUrl: string, category: number, authUserId: number, id: number ) => {

    try {

        const currentDateTime = DateTime.now().setZone("UTC").toFormat("y-MM-dd HH:mm:ss");
    
        let result = await db.query('UPDATE `product_sub_category` SET name = ?, category = ?, updated_by = ?, updated_time = ? WHERE id = ? && status != ? ', [name, category, authUserId, currentDateTime, id, 403]);

        if (result.status) {
            return DefaultResponse.successFormat("200");
        }
        return result;

    } catch ( err ) {
        logger.error( err );
        return DefaultResponse.errorFormat("500");
    }
    
};

const product_sub_category_view = async ( id: number ) => {

    try {

        let result = await db.query(`SELECT product_sub_category.id, product_sub_category.name, product_sub_category.img_url, product_sub_category.category, product_sub_category.status, product_sub_category.added_by, product_sub_category.added_time, product_sub_category.updated_by, product_sub_category.updated_time
        FROM product_sub_category
        WHERE product_sub_category.id = ? && product_sub_category.status != ? `, [ id, 403]);
        if (!result.status) {
            return result;
        }
        if(result.data.length === 0) {
            return DefaultResponse.errorFormat("404");
        }
        return DefaultResponse.successFormat("200", result.data[0]);

    } catch ( err ) {
        logger.error( err );
        return DefaultResponse.errorFormat("500");
    }
    
};

const product_sub_category_select = async ( category_Id: number ) => {

    try {

        let result = await db.query(`SELECT product_sub_category.id, product_sub_category.name, product_sub_category.img_url, product_sub_category.category, product_sub_category.status, product_sub_category.added_by, product_sub_category.added_time, product_sub_category.updated_by, product_sub_category.updated_time
        FROM product_sub_category
        WHERE product_sub_category.status != ? && product_sub_category.category = ?  ORDER BY product_sub_category.id DESC`, [ 403, category_Id]);
        return result;

    } catch ( err ) {
        logger.error( err );
        return DefaultResponse.errorFormat("500");
    }
    
};

const product_sub_category_sales_list = async ( category: number, type: number ) => {

    try {

        let result = await db.query(`SELECT product_sub_category.id, product_sub_category.name, product_sub_category.img_url, product_sub_category.category, product_sub_category.status, product_sub_category.added_by, product_sub_category.added_time, product_sub_category.updated_by, product_sub_category.updated_time
        FROM product_sub_category
        WHERE product_sub_category.status = ? && product_sub_category.category = ? && (SELECT COUNT(*) FROM product WHERE sub_category = product_sub_category.id && type = ? && stock > 0) != 0 ORDER BY product_sub_category.id DESC`, [ 1, category, type ]);
        return result;

    } catch ( err ) {
        logger.error( err );
        return DefaultResponse.errorFormat("500");
    }
    
};

export default {
    product_sub_category_add,
    product_sub_category_list,
    product_sub_category_edit,
    product_sub_category_view,
    product_sub_category_select,
    product_sub_category_sales_list
}