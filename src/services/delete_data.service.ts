import deleteData from "../models/delete_data.model";
import DefaultResponse from "../utils/DefaultResponse";
import logger from '../config/logger';
import {delete_data_data} from "../config/types/delete_data";

const delete_data = async ( data: delete_data_data ) => {

    try {

        let result;
        result = await deleteData.delete_data( data.tableId, data.resultId, data.authUserId, data.authUserRole );
        return result;

    } catch (err) {
        logger.error(err);
        return DefaultResponse.errorFormat("500");
    }
};

export default {
    delete_data
}