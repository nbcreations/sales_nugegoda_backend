import joi from "joi";
import { xssPrevent, validatePhoneNumber, isValidDateString, isValidTimeString } from "../utils/commonValidation";





const product_category_list = joi.object({


});

const product_type_list = joi.object({


});





const product_add = joi.object({

    name: joi.string()
        .min(1)
        .max(500)
        .label("name")
        .custom((value, helper) => {return xssPrevent(value);})
        .required()
    ,
    color: joi.string()
        .min(1)
        .max(100)
        .custom((value, helper) => {return xssPrevent(value);})
        .required()
    ,
    size: joi.string()
        .min(1)
        .max(100)
        .custom((value, helper) => {return xssPrevent(value);})
        .required()
    ,
    stock: joi.number()
        .min(1)
        .max(2147483647)
        .label("stock")
        .required()
    ,
    price: joi.number()
        .min(0)
        .max(2147483647)
        .label("price")
        .required()
    ,
    productId: joi.string()
        .min(1)
        .max(500)
        .label("product id")
        .custom((value, helper) => {return xssPrevent(value);})
        .required()
    ,
    type: joi.number()
        .min(1)
        .max(2147483647)
        .label("type")
        .messages({ 'string.min': 'wrong type' })
        .required()
    ,
    category: joi.number()
        .min(1)
        .max(2147483647)
        .label("category")
        .messages({ 'string.min': 'wrong category' })
        .required()
    ,
    subCategory: joi.number()
        .min(1)
        .max(2147483647)
        .label("sub category")
        .messages({ 'string.min': 'wrong sub category' })
        .required()
    ,

});

const product_edit = joi.object({

    id: joi.number()
        .min(1)
        .max(2147483647)
        .label("id")
        .required()
    ,
    name: joi.string()
        .min(1)
        .max(500)
        .label("name")
        .custom((value, helper) => {return xssPrevent(value);})
        .required()
    ,
    color: joi.string()
        .min(1)
        .max(100)
        .custom((value, helper) => {return xssPrevent(value);})
        .required()
    ,
    size: joi.string()
        .min(1)
        .max(100)
        .custom((value, helper) => {return xssPrevent(value);})
        .required()
    ,
    stock: joi.number()
        .min(1)
        .max(2147483647)
        .label("stock")
        .required()
    ,
    price: joi.number()
        .min(0)
        .max(2147483647)
        .label("price")
        .required()
    ,
    productId: joi.string()
        .min(1)
        .max(500)
        .label("product id")
        .custom((value, helper) => {return xssPrevent(value);})
        .required()
    ,
    type: joi.number()
        .min(1)
        .max(2147483647)
        .label("type")
        .messages({ 'string.min': 'wrong type' })
        .required()
    ,
    category: joi.number()
        .min(1)
        .max(2147483647)
        .label("category")
        .messages({ 'string.min': 'wrong category' })
        .required()
    ,
    subCategory: joi.number()
        .min(1)
        .max(2147483647)
        .label("sub category")
        .messages({ 'string.min': 'wrong sub category' })
        .required()
    ,

});

const product_list = joi.object({


});

const product_view = joi.object({

    id: joi.number()
        .min(1)
        .max(2147483647)
        .label("id")
        .messages({ 'string.min': 'wrong id' })
        .required()
    ,

});

const product_sales_list = joi.object({

    sub_category: joi.number()
        .min(0)
        .max(2147483647)
        .label("sub_category")
        .messages({ 'string.min': 'wrong sub_category' })
        .required()
    ,
    type: joi.number()
    .min(0)
    .max(2147483647)
    .label("type")
    .messages({ 'string.min': 'wrong type' })
    .required()
,

});

export default {
    product_category_list,
    product_type_list,
    product_add,
    product_edit,
    product_list,
    product_view,
    product_sales_list
}