import joi from "joi";
import { xssPrevent, validatePhoneNumber, isValidDateString, isValidTimeString } from "../utils/commonValidation";

const order_bill_add = joi.object({

    date: joi.string()
        .min(1)
        .max(10)
        .label("date")
        .custom((value, helper) => {
            if (!isValidDateString(value)) {
                return helper.message({ custom: "date is incorrect"})
            }
            return value;
        })
        .required()
    ,
    customerName: joi.string()
        .min(1)
        .max(200)
        .label("customer name")
        .custom((value, helper) => {return xssPrevent(value);})
        .required()
    ,
    email: joi.string()
        .min(1)
        .max(320)
        .label("email")
        .email()
        .allow("")
        .required()
    ,
    phone: joi.string()
        .min(1)
        .max(15)
        .label("phone")
        .custom((value, helper) => {
            if (!validatePhoneNumber(value)) {
                return helper.message({ custom: "phone is incorrect"})
            }
            return value;
        })
        .required()
    ,
    address: joi.string()
        .min(1)
        .max(500)
        .label("address")
        .custom((value, helper) => {return xssPrevent(value);})
        .required()
    ,
    items: joi.array()
        .items(
            joi.object({
                name: joi.string(),
                id: joi.number(),
                price: joi.number(),
                quantity: joi.number(),
                product_id: joi.string()
            })
        )
        .required()
    ,

});

const order_bill_list = joi.object({


});

const order_bill_view = joi.object({

    id: joi.number()
        .min(1)
        .max(2147483647)
        .label("id")
        .messages({ 'string.min': 'wrong id' })
        .required()
    ,

});

const order_bill_to_pay_list = joi.object({


});

export default {
    order_bill_add,
    order_bill_list,
    order_bill_view,
    order_bill_to_pay_list
}