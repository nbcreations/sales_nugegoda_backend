import joi from "joi";
import { xssPrevent, validatePhoneNumber, isValidDateString, isValidTimeString } from "../utils/commonValidation";

const product_sub_category_add = joi.object({

    name: joi.string()
        .min(1)
        .max(100)
        .label("name")
        .custom((value, helper) => {return xssPrevent(value);})
        .required()
    ,
    imgUrl: joi.string()
        .min(1)
        .max(500)
        .label("img url")
        .custom((value, helper) => {return xssPrevent(value);})
        .required()
    ,
    category: joi.number()
        .min(1)
        .max(2147483647)
        .label("category")
        .messages({ 'string.min': 'wrong category' })
        .required()
    ,

});

const product_sub_category_list = joi.object({


});

const product_sub_category_edit = joi.object({

    id: joi.number()
        .min(1)
        .max(2147483647)
        .label("id")
        .required()
    ,
    name: joi.string()
        .min(1)
        .max(100)
        .label("name")
        .custom((value, helper) => {return xssPrevent(value);})
        .required()
    ,
    imgUrl: joi.string()
        .min(1)
        .max(500)
        .label("img url")
        .custom((value, helper) => {return xssPrevent(value);})
        .required()
    ,
    category: joi.number()
        .min(1)
        .max(2147483647)
        .label("category")
        .messages({ 'string.min': 'wrong category' })
        .required()
    ,

});

const product_sub_category_view = joi.object({

    id: joi.number()
        .min(1)
        .max(2147483647)
        .label("id")
        .messages({ 'string.min': 'wrong id' })
        .required()
    ,

});

const product_sub_category_select = joi.object({

    category_Id: joi.number()
        .min(0)
        .max(99999)
        .label("category_Id")
        .messages({ 'string.min': 'wrong category_Id' })
        .required()
    ,

});

const product_sub_category_sales_list = joi.object({

    category: joi.number()
        .min(0)
        .max(2147483647)
        .label("category")
        .messages({ 'string.min': 'wrong category' })
        .required()
    ,
    type: joi.number()
        .min(0)
        .max(2147483647)
        .label("type")
        .messages({ 'string.min': 'wrong type' })
        .required()

});

export default {
    product_sub_category_add,
    product_sub_category_list,
    product_sub_category_edit,
    product_sub_category_view,
    product_sub_category_select,
    product_sub_category_sales_list
}