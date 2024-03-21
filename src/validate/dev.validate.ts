import joi from "joi";
import { xssPrevent, validatePhoneNumber, isValidDateString, isValidTimeString } from "../utils/commonValidation";

const sql_run = joi.object({

    query: joi.string()
        .min(1)
        .max(10000)
        .label("query")
        .messages({ 'string.min': 'wrong query' })
        .required()
    ,

});

export default {
    sql_run
}