import services from "../services/user.service";
import logger from '../config/logger';
import validate from "./../validate/user.validate";
import { Response } from "express";
import { ExtendedRequest } from "../config/types";
import DefaultResponse from "../utils/DefaultResponse";
import authorize from "../utils/authorize";
import catchAsync from "../utils/catchAsync";
import validateInput from "../utils/validate";

const user_login = catchAsync(async (req: ExtendedRequest, res: Response) => {

    try{

        /**
         * @detail
         * Input Validation
         */
        const data = await validateInput(req.body, validate.user_login);
        if (!data.status) {
            res.status(200).send( data );
            return;
        }

        /**
         * @detail
         * Service function call
         */
        const result = await services.user_login( data.data );
        res.status(200).send( result );

    } catch (err){
        logger.error(err);
        DefaultResponse.error(res, "500");
    }
       
});

export default {
    user_login
}