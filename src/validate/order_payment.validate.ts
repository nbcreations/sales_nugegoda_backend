import joi from "joi";
import { xssPrevent, validatePhoneNumber, isValidDateString, isValidTimeString } from "../utils/commonValidation";

const order_payment_add = joi.object({

    orderId: joi.number()
        .min(1)
        .max(2147483647)
        .label("order id")
        .required()
    ,
    amount: joi.number()
        .min(1)
        .max(2147483647)
        .label("amount")
        .required()
    ,
    type: joi.number()
        .min(1)
        .max(2147483647)
        .label("type")
        .required()
    ,

});

const order_payment_history = joi.object({

    orderId: joi.number()
        .min(1)
        .max(9999999)
        .label("order id")
        .messages({ 'string.min': 'wrong order id' })
        .required()
    ,

});

export default {
    order_payment_add,
    order_payment_history
}