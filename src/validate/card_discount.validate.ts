import joi from "joi";
import { xssPrevent, validatePhoneNumber, isValidDateString, isValidTimeString } from "../utils/commonValidation";

const card_discount_add = joi.object({

    bank: joi.number()
        .min(1)
        .max(2147483647)
        .label("bank")
        .required()
    ,
    cardType: joi.number()
        .min(1)
        .max(2147483647)
        .label("card type")
        .required()
    ,
    discountType: joi.number()
        .min(1)
        .max(2147483647)
        .label("discount type")
        .required()
    ,
    amount: joi.number()
        .min(1)
        .max(2147483647)
        .label("amount")
        .required()
    ,
    validDateStart: joi.string()
        .min(1)
        .max(10)
        .label("valid date start")
        .custom((value, helper) => {return xssPrevent(value);})
        .required()
    ,
    validDateEnd: joi.string()
        .min(1)
        .max(10)
        .label("valid date end")
        .custom((value, helper) => {return xssPrevent(value);})
        .required()
    ,

});

const card_discount_edit = joi.object({

    id: joi.number()
        .min(1)
        .max(2147483647)
        .label("id")
        .required()
    ,
    bank: joi.number()
        .min(1)
        .max(2147483647)
        .label("bank")
        .required()
    ,
    cardType: joi.number()
        .min(1)
        .max(2147483647)
        .label("card type")
        .required()
    ,
    discountType: joi.number()
        .min(1)
        .max(2147483647)
        .label("discount type")
        .required()
    ,
    amount: joi.number()
        .min(1)
        .max(2147483647)
        .label("amount")
        .required()
    ,
    validDateStart: joi.string()
        .min(1)
        .max(10)
        .label("valid date start")
        .custom((value, helper) => {return xssPrevent(value);})
        .required()
    ,
    validDateEnd: joi.string()
        .min(1)
        .max(10)
        .label("valid date end")
        .custom((value, helper) => {return xssPrevent(value);})
        .required()
    ,

});

const card_discount_view = joi.object({

    id: joi.number()
        .min(1)
        .max(2147483647)
        .label("id")
        .messages({ 'string.min': 'wrong id' })
        .required()
    ,

});

const card_discount_list = joi.object({


});

export default {
    card_discount_add,
    card_discount_edit,
    card_discount_view,
    card_discount_list
}