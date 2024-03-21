import productType from "../models/product_type.model";
import DefaultResponse from "../utils/DefaultResponse";
import logger from '../config/logger';
import {product_type_list_data} from "../config/types/product_type";

const product_type_list = async ( data: product_type_list_data ) => {

    try {

        let result;
        result = await productType.product_type_list(  );
        return result;

    } catch (err) {
        logger.error(err);
        return DefaultResponse.errorFormat("500");
    }
};

export default {
    product_type_list
}