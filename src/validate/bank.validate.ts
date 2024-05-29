import joi from "joi";
import { xssPrevent, validatePhoneNumber, isValidDateString, isValidTimeString } from "../utils/commonValidation";

const bank_add = joi.object({

    name: joi.string()
        .min(1)
        .max(200)
        .label("name")
        .custom((value, helper) => {return xssPrevent(value);})
        .required()
    ,

});

const bank_edit = joi.object({

    id: joi.number()
        .min(1)
        .max(2147483647)
        .label("id")
        .required()
    ,
    name: joi.string()
        .min(1)
        .max(200)
        .label("name")
        .custom((value, helper) => {return xssPrevent(value);})
        .required()
    ,

});

const bank_view = joi.object({

    id: joi.number()
        .min(1)
        .max(2147483647)
        .label("id")
        .messages({ 'string.min': 'wrong id' })
        .required()
    ,

});

const bank_list = joi.object({


});

const bank_active_list = joi.object({


});

export default {
    bank_add,
    bank_edit,
    bank_view,
    bank_list,
    bank_active_list
}