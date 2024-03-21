import product from "../models/product.model";
import productType from "../models/product_type.model";
import productCategory from "../models/product_category.model";
import DefaultResponse from "../utils/DefaultResponse";
import logger from '../config/logger';
import {product_add_data, product_category_list_data, product_type_list_data, product_edit_data, product_list_data, product_view_data, product_sales_list_data} from "../config/types/product";





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





const product_add = async ( data: product_add_data ) => {

    try {

        let result;
        result = await product.product_add( data.name, data.stock, data.price, data.productId, data.type, data.category, data.subCategory, data.authUserId, data.color, data.size );
        return result;

    } catch (err) {
        logger.error(err);
        return DefaultResponse.errorFormat("500");
    }
};

const product_edit = async ( data: product_edit_data ) => {

    try {

        let result;
        result = await product.product_edit( data.name, data.stock, data.price, data.productId, data.type, data.category, data.subCategory, data.authUserId, data.id, data.color, data.size );
        return result;

    } catch (err) {
        logger.error(err);
        return DefaultResponse.errorFormat("500");
    }
};

const product_list = async ( data: product_list_data ) => {

    try {

        let result;
        result = await product.product_list(  );
        return result;

    } catch (err) {
        logger.error(err);
        return DefaultResponse.errorFormat("500");
    }
};

const product_view = async ( data: product_view_data ) => {

    try {

        let result;
        result = await product.product_view( data.id );
        return result;

    } catch (err) {
        logger.error(err);
        return DefaultResponse.errorFormat("500");
    }
};

const product_sales_list = async ( data: product_sales_list_data ) => {

    try {

        let result;
        result = await product.product_sales_list( data.sub_category, data.type );
        return result;

    } catch (err) {
        logger.error(err);
        return DefaultResponse.errorFormat("500");
    }
};

export default {
    product_category_list,
    product_type_list,
    product_add,
    product_edit,
    product_list,
    product_view,
    product_sales_list
}