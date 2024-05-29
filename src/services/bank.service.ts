import bankModel from "../models/bank.model";
import DefaultResponse from "../utils/DefaultResponse";
import logger from '../config/logger';
import {bank_add_data, bank_edit_data, bank_view_data, bank_list_data, bank_active_list_data} from "../config/types/bank";

const bank_add = async ( data: bank_add_data ) => {

    try {

        let result;
        result = await bankModel.bank_add( data.name, data.authUserId );
        return result;

    } catch (err) {
        logger.error(err);
        return DefaultResponse.errorFormat("500");
    }
};

const bank_edit = async ( data: bank_edit_data ) => {

    try {

        let result;
        result = await bankModel.bank_edit( data.name, data.authUserId, data.id );
        return result;

    } catch (err) {
        logger.error(err);
        return DefaultResponse.errorFormat("500");
    }
};

const bank_view = async ( data: bank_view_data ) => {

    try {

        let result;
        result = await bankModel.bank_view( data.id );
        return result;

    } catch (err) {
        logger.error(err);
        return DefaultResponse.errorFormat("500");
    }
};

const bank_list = async ( data: bank_list_data ) => {

    try {

        let result;
        result = await bankModel.bank_list(  );
        return result;

    } catch (err) {
        logger.error(err);
        return DefaultResponse.errorFormat("500");
    }
};

const bank_active_list = async ( data: bank_active_list_data ) => {

    try {

        let result;
        result = await bankModel.bank_active_list(  );
        return result;

    } catch (err) {
        logger.error(err);
        return DefaultResponse.errorFormat("500");
    }
};

export default {
    bank_add,
    bank_edit,
    bank_view,
    bank_list,
    bank_active_list
}