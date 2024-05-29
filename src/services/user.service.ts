import userModel from "../models/user.model";
import user from "../models/user.model";
import DefaultResponse from "../utils/DefaultResponse";
import logger from '../config/logger';
import {user_login_data, user_check_data} from "../config/types/user";

const user_login = async ( data: user_login_data ) => {

    try {

        let result;
        result = await user.user_login( data.email, data.password );
        return result;

    } catch (err) {
        logger.error(err);
        return DefaultResponse.errorFormat("500");
    }
};

const user_check = async ( data: user_check_data ) => {

    try {

        let result;
        result = await userModel.user_check( data.authUserId );
        return result;

    } catch (err) {
        logger.error(err);
        return DefaultResponse.errorFormat("500");
    }
};

export default {
    user_login,
    user_check
}