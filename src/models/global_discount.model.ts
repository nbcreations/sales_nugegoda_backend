import db from "../config/db";
import logger from '../config/logger';
import DefaultResponse from "../utils/DefaultResponse";
import { DateTime } from 'luxon';

const global_discount_update = async ( discountType: number, flatRate: number, percentage: number,  ) => {

    try {

        const currentDateTime = DateTime.now().setZone("UTC").toFormat("y-MM-dd HH:mm:ss");
        if(discountType === 1) {
            // Flat rate
            let result = await db.query('UPDATE `product` SET price = price + ?', [flatRate]);
            if (result.status) {
                return DefaultResponse.successFormat("200");
            }
            return result;
        } else {
            // Percentage
            let result = await db.query('UPDATE `product` SET price = ((price * ?) / 100) + price', [percentage]);
            if (result.status) {
                return DefaultResponse.successFormat("200");
            }
            return result;
        }

    } catch ( err ) {
        logger.error( err );
        return DefaultResponse.errorFormat("500");
    }
    
};

const global_discount_view = async (  ) => {

    try {

        let result = await db.query(`SELECT global_discount.discount_type, global_discount.flat_rate, global_discount.percentage
        FROM global_discount`, [ ]);
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

export default {
    global_discount_update,
    global_discount_view
}