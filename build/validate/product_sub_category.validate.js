"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var joi_1 = __importDefault(require("joi"));
var commonValidation_1 = require("../utils/commonValidation");
var product_sub_category_add = joi_1.default.object({
    name: joi_1.default.string()
        .min(1)
        .max(100)
        .label("name")
        .custom(function (value, helper) { return (0, commonValidation_1.xssPrevent)(value); })
        .required(),
    imgUrl: joi_1.default.string()
        .min(1)
        .max(500)
        .label("img url")
        .custom(function (value, helper) { return (0, commonValidation_1.xssPrevent)(value); })
        .required(),
    category: joi_1.default.number()
        .min(1)
        .max(2147483647)
        .label("category")
        .messages({ 'string.min': 'wrong category' })
        .required(),
});
var product_sub_category_list = joi_1.default.object({});
var product_sub_category_edit = joi_1.default.object({
    id: joi_1.default.number()
        .min(1)
        .max(2147483647)
        .label("id")
        .required(),
    name: joi_1.default.string()
        .min(1)
        .max(100)
        .label("name")
        .custom(function (value, helper) { return (0, commonValidation_1.xssPrevent)(value); })
        .required(),
    imgUrl: joi_1.default.string()
        .min(1)
        .max(500)
        .label("img url")
        .custom(function (value, helper) { return (0, commonValidation_1.xssPrevent)(value); })
        .required(),
    category: joi_1.default.number()
        .min(1)
        .max(2147483647)
        .label("category")
        .messages({ 'string.min': 'wrong category' })
        .required(),
});
var product_sub_category_view = joi_1.default.object({
    id: joi_1.default.number()
        .min(1)
        .max(2147483647)
        .label("id")
        .messages({ 'string.min': 'wrong id' })
        .required(),
});
var product_sub_category_select = joi_1.default.object({
    category_Id: joi_1.default.number()
        .min(0)
        .max(99999)
        .label("category_Id")
        .messages({ 'string.min': 'wrong category_Id' })
        .required(),
});
var product_sub_category_sales_list = joi_1.default.object({
    category: joi_1.default.number()
        .min(0)
        .max(2147483647)
        .label("category")
        .messages({ 'string.min': 'wrong category' })
        .required(),
    type: joi_1.default.number()
        .min(0)
        .max(2147483647)
        .label("type")
        .messages({ 'string.min': 'wrong type' })
        .required()
});
exports.default = {
    product_sub_category_add: product_sub_category_add,
    product_sub_category_list: product_sub_category_list,
    product_sub_category_edit: product_sub_category_edit,
    product_sub_category_view: product_sub_category_view,
    product_sub_category_select: product_sub_category_select,
    product_sub_category_sales_list: product_sub_category_sales_list
};
//# sourceMappingURL=product_sub_category.validate.js.map