import productCategory from "../models/product_category.model";
import DefaultResponse from "../utils/DefaultResponse";
import logger from '../config/logger';
import {product_category_list_data} from "../config/types/product_category";

const product_category_list = async ( data: product_category_list_data ) => {

    try {

        let result;
        result = await productCategory.product_category_list(  );
        return result;

    } catch (err) {
        logger.error(err);
        return DefaultResponse.errorFormat("500");
    }
};

export default {
    product_category_list
}