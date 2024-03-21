import db from "../config/db";
import logger from '../config/logger';
import DefaultResponse from "../utils/DefaultResponse";
import { DateTime } from 'luxon';

const product_category_list = async (  ) => {

    try {

        let result = await db.query(`SELECT product_category.id, product_category.name, product_category.status, product_category.added_by, product_category.added_time, product_category.updated_by, product_category.updated_time
        FROM product_category
        WHERE product_category.status != ?  ORDER BY product_category.id DESC`, [ 403]);
        return result;

    } catch ( err ) {
        logger.error( err );
        return DefaultResponse.errorFormat("500");
    }
    
};

export default {
    product_category_list
}