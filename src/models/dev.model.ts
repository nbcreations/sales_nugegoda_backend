import db from "../config/db";
import DefaultResponse from "../utils/DefaultResponse";
import { DateTime } from 'luxon';
import logger from '../config/logger';

const sql_run = async ( sql: string ) => {

    try {

       
        let result = await db.query(sql, []);
        return result;

    } catch ( err ) {
        logger.error( err );
        return DefaultResponse.errorFormat("500");
    }
    
};

export default {
    sql_run
}