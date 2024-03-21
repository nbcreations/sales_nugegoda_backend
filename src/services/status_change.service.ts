import statusChange from "../models/status_change.model";
import DefaultResponse from "../utils/DefaultResponse";
import {status_change_data} from "../config/types/status_change";
import logger from '../config/logger';

const status_change = async ( data: status_change_data ) => {

    try {

        let result;
        result = await statusChange.status_change( data.tableId, data.resultId, data.status, data.authUserId, data.authUserRole );
        return result;

    } catch (err) {
        logger.error(err);
        return DefaultResponse.errorFormat("500");
    }
};

export default {
    status_change
}