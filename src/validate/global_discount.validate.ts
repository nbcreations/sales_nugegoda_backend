import joi from "joi";
import { xssPrevent, validatePhoneNumber, isValidDateString, isValidTimeString } from "../utils/commonValidation";

const global_discount_update = joi.object({

    discountType: joi.number()
        .min(1)
        .max(2)
        .label("discount type")
        .required()
    ,
    flatRate: joi.number()
        .min(-2147483647)
        .max(2147483647)
        .label("flat rate")
        .required()
    ,
    percentage: joi.number()
        .min(-100)
        .max(100)
        .label("percentage")
        .required()
    ,

});

const global_discount_view = joi.object({


});

export default {
    global_discount_update,
    global_discount_view
}