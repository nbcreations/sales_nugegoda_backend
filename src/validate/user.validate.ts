import joi from "joi";
import { xssPrevent, validatePhoneNumber, isValidDateString, isValidTimeString } from "../utils/commonValidation";

const user_login = joi.object({

    email: joi.string()
        .min(1)
        .max(1000)
        .label("email")
        .messages({ 'string.min': 'wrong email' })
        .required()
    ,
    password: joi.string()
        .min(1)
        .max(1000)
        .label("password")
        .messages({ 'string.min': 'wrong password' })
        .required()
    ,

});

export default {
    user_login
}