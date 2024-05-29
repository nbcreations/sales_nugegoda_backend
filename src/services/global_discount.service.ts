import globalDiscountModel from "../models/global_discount.model";
import DefaultResponse from "../utils/DefaultResponse";
import logger from '../config/logger';
import {global_discount_update_data, global_discount_view_data} from "../config/types/global_discount";

const global_discount_update = async ( data: global_discount_update_data ) => {

    try {

        let result;
        result = await globalDiscountModel.global_discount_update( data.discountType, data.flatRate, data.percentage );
        return result;

    } catch (err) {
        logger.error(err);
        return DefaultResponse.errorFormat("500");
    }
};

const global_discount_view = async ( data: global_discount_view_data ) => {

    try {

        let result;
        result = await globalDiscountModel.global_discount_view(  );
        return result;

    } catch (err) {
        logger.error(err);
        return DefaultResponse.errorFormat("500");
    }
};

export default {
    global_discount_update,
    global_discount_view
}