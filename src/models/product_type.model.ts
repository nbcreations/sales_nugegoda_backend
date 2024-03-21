import db from "../config/db";
import logger from '../config/logger';
import DefaultResponse from "../utils/DefaultResponse";
import { DateTime } from 'luxon';

const product_type_list = async (  ) => {

    try {

        let result = await db.query(`SELECT product_type.id, product_type.name, product_type.status, product_type.added_by, product_type.added_time, product_type.updated_by, product_type.updated_time
        FROM product_type
        WHERE product_type.status != ?  ORDER BY product_type.id DESC`, [ 403]);
        return result;

    } catch ( err ) {
        logger.error( err );
        return DefaultResponse.errorFormat("500");
    }
    
};

export default {
    product_type_list
}