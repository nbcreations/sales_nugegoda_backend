import cardDiscountModel from "../models/card_discount.model";
import DefaultResponse from "../utils/DefaultResponse";
import logger from '../config/logger';
import {card_discount_add_data, card_discount_edit_data, card_discount_view_data, card_discount_list_data} from "../config/types/card_discount";

const card_discount_add = async ( data: card_discount_add_data ) => {

    try {

        let result;
        result = await cardDiscountModel.card_discount_add( data.bank, data.cardType, data.discountType, data.amount, data.validDateStart, data.validDateEnd, data.authUserId );
        return result;

    } catch (err) {
        logger.error(err);
        return DefaultResponse.errorFormat("500");
    }
};

const card_discount_edit = async ( data: card_discount_edit_data ) => {

    try {

        let result;
        result = await cardDiscountModel.card_discount_edit( data.bank, data.cardType, data.discountType, data.amount, data.validDateStart, data.validDateEnd, data.authUserId, data.id );
        return result;

    } catch (err) {
        logger.error(err);
        return DefaultResponse.errorFormat("500");
    }
};

const card_discount_view = async ( data: card_discount_view_data ) => {

    try {

        let result;
        result = await cardDiscountModel.card_discount_view( data.id );
        return result;

    } catch (err) {
        logger.error(err);
        return DefaultResponse.errorFormat("500");
    }
};

const card_discount_list = async ( data: card_discount_list_data ) => {

    try {

        let result;
        result = await cardDiscountModel.card_discount_list(  );
        return result;

    } catch (err) {
        logger.error(err);
        return DefaultResponse.errorFormat("500");
    }
};

export default {
    card_discount_add,
    card_discount_edit,
    card_discount_view,
    card_discount_list
}