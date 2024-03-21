"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var joi_1 = __importDefault(require("joi"));
var commonValidation_1 = require("../utils/commonValidation");
var product_category_list = joi_1.default.object({});
var product_type_list = joi_1.default.object({});
var product_add = joi_1.default.object({
    name: joi_1.default.string()
        .min(1)
        .max(500)
        .label("name")
        .custom(function (value, helper) { return (0, commonValidation_1.xssPrevent)(value); })
        .required(),
    color: joi_1.default.string()
        .min(1)
        .max(100)
        .custom(function (value, helper) { return (0, commonValidation_1.xssPrevent)(value); })
        .required(),
    size: joi_1.default.string()
        .min(1)
        .max(100)
        .custom(function (value, helper) { return (0, commonValidation_1.xssPrevent)(value); })
        .required(),
    stock: joi_1.default.number()
        .min(1)
        .max(2147483647)
        .label("stock")
        .required(),
    price: joi_1.default.number()
        .min(0)
        .max(2147483647)
        .label("price")
        .required(),
    productId: joi_1.default.string()
        .min(1)
        .max(500)
        .label("product id")
        .custom(function (value, helper) { return (0, commonValidation_1.xssPrevent)(value); })
        .required(),
    type: joi_1.default.number()
        .min(1)
        .max(2147483647)
        .label("type")
        .messages({ 'string.min': 'wrong type' })
        .required(),
    category: joi_1.default.number()
        .min(1)
        .max(2147483647)
        .label("category")
        .messages({ 'string.min': 'wrong category' })
        .required(),
    subCategory: joi_1.default.number()
        .min(1)
        .max(2147483647)
        .label("sub category")
        .messages({ 'string.min': 'wrong sub category' })
        .required(),
});
var product_edit = joi_1.default.object({
    id: joi_1.default.number()
        .min(1)
        .max(2147483647)
        .label("id")
        .required(),
    name: joi_1.default.string()
        .min(1)
        .max(500)
        .label("name")
        .custom(function (value, helper) { return (0, commonValidation_1.xssPrevent)(value); })
        .required(),
    color: joi_1.default.string()
        .min(1)
        .max(100)
        .custom(function (value, helper) { return (0, commonValidation_1.xssPrevent)(value); })
        .required(),
    size: joi_1.default.string()
        .min(1)
        .max(100)
        .custom(function (value, helper) { return (0, commonValidation_1.xssPrevent)(value); })
        .required(),
    stock: joi_1.default.number()
        .min(1)
        .max(2147483647)
        .label("stock")
        .required(),
    price: joi_1.default.number()
        .min(0)
        .max(2147483647)
        .label("price")
        .required(),
    productId: joi_1.default.string()
        .min(1)
        .max(500)
        .label("product id")
        .custom(function (value, helper) { return (0, commonValidation_1.xssPrevent)(value); })
        .required(),
    type: joi_1.default.number()
        .min(1)
        .max(2147483647)
        .label("type")
        .messages({ 'string.min': 'wrong type' })
        .required(),
    category: joi_1.default.number()
        .min(1)
        .max(2147483647)
        .label("category")
        .messages({ 'string.min': 'wrong category' })
        .required(),
    subCategory: joi_1.default.number()
        .min(1)
        .max(2147483647)
        .label("sub category")
        .messages({ 'string.min': 'wrong sub category' })
        .required(),
});
var product_list = joi_1.default.object({});
var product_view = joi_1.default.object({
    id: joi_1.default.number()
        .min(1)
        .max(2147483647)
        .label("id")
        .messages({ 'string.min': 'wrong id' })
        .required(),
});
var product_sales_list = joi_1.default.object({
    sub_category: joi_1.default.number()
        .min(0)
        .max(2147483647)
        .label("sub_category")
        .messages({ 'string.min': 'wrong sub_category' })
        .required(),
    type: joi_1.default.number()
        .min(0)
        .max(2147483647)
        .label("type")
        .messages({ 'string.min': 'wrong type' })
        .required(),
});
exports.default = {
    product_category_list: product_category_list,
    product_type_list: product_type_list,
    product_add: product_add,
    product_edit: product_edit,
    product_list: product_list,
    product_view: product_view,
    product_sales_list: product_sales_list
};
//# sourceMappingURL=product.validate.js.map