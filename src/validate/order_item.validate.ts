import joi from "joi";
import { xssPrevent, validatePhoneNumber, isValidDateString, isValidTimeString } from "../utils/commonValidation";

const order_item_add = joi.object({

    orderId: joi.number()
        .min(1)
        .max(2147483647)
        .label("order id")
        .messages({ 'string.min': 'wrong order id' })
        .required()
    ,
    product: joi.number()
        .min(1)
        .max(2147483647)
        .label("product")
        .messages({ 'string.min': 'wrong product' })
        .required()
    ,
    price: joi.number()
        .min(1)
        .max(2147483647)
        .label("price")
        .required()
    ,
    qty: joi.number()
        .min(1)
        .max(2147483647)
        .label("qty")
        .required()
    ,

});

export default {
    order_item_add
}