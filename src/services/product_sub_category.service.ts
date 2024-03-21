import productSubCategory from "../models/product_sub_category.model";
import DefaultResponse from "../utils/DefaultResponse";
import logger from '../config/logger';
import {product_sub_category_add_data, product_sub_category_list_data, product_sub_category_edit_data, product_sub_category_view_data, product_sub_category_select_data, product_sub_category_sales_list_data} from "../config/types/product_sub_category";

const product_sub_category_add = async ( data: product_sub_category_add_data ) => {

    try {

        let result;
        result = await productSubCategory.product_sub_category_add( data.name, data.imgUrl, data.category, data.authUserId );
        return result;

    } catch (err) {
        logger.error(err);
        return DefaultResponse.errorFormat("500");
    }
};

const product_sub_category_list = async ( data: product_sub_category_list_data ) => {

    try {

        let result;
        result = await productSubCategory.product_sub_category_list(  );
        return result;

    } catch (err) {
        logger.error(err);
        return DefaultResponse.errorFormat("500");
    }
};

const product_sub_category_edit = async ( data: product_sub_category_edit_data ) => {

    try {

        let result;
        result = await productSubCategory.product_sub_category_edit( data.name, data.imgUrl, data.category, data.authUserId, data.id );
        return result;

    } catch (err) {
        logger.error(err);
        return DefaultResponse.errorFormat("500");
    }
};

const product_sub_category_view = async ( data: product_sub_category_view_data ) => {

    try {

        let result;
        result = await productSubCategory.product_sub_category_view( data.id );
        return result;

    } catch (err) {
        logger.error(err);
        return DefaultResponse.errorFormat("500");
    }
};

const product_sub_category_select = async ( data: product_sub_category_select_data ) => {

    try {

        let result;
        result = await productSubCategory.product_sub_category_select( data.category_Id );
        return result;

    } catch (err) {
        logger.error(err);
        return DefaultResponse.errorFormat("500");
    }
};

const product_sub_category_sales_list = async ( data: product_sub_category_sales_list_data ) => {

    try {

        let result;
        result = await productSubCategory.product_sub_category_sales_list( data.category, data.type );
        return result;

    } catch (err) {
        logger.error(err);
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