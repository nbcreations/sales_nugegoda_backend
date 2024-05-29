"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var joi_1 = __importDefault(require("joi"));
var commonValidation_1 = require("../utils/commonValidation");
var card_discount_add = joi_1.default.object({
    bank: joi_1.default.number()
        .min(1)
        .max(2147483647)
        .label("bank")
        .required(),
    cardType: joi_1.default.number()
        .min(1)
        .max(2147483647)
        .label("card type")
        .required(),
    discountType: joi_1.default.number()
        .min(1)
        .max(2147483647)
        .label("discount type")
        .required(),
    amount: joi_1.default.number()
        .min(1)
        .max(2147483647)
        .label("amount")
        .required(),
    validDateStart: joi_1.default.string()
        .min(1)
        .max(10)
        .label("valid date start")
        .custom(function (value, helper) { return (0, commonValidation_1.xssPrevent)(value); })
        .required(),
    validDateEnd: joi_1.default.string()
        .min(1)
        .max(10)
        .label("valid date end")
        .custom(function (value, helper) { return (0, commonValidation_1.xssPrevent)(value); })
        .required(),
});
var card_discount_edit = joi_1.default.object({
    id: joi_1.default.number()
        .min(1)
        .max(2147483647)
        .label("id")
        .required(),
    bank: joi_1.default.number()
        .min(1)
        .max(2147483647)
        .label("bank")
        .required(),
    cardType: joi_1.default.number()
        .min(1)
        .max(2147483647)
        .label("card type")
        .required(),
    discountType: joi_1.default.number()
        .min(1)
        .max(2147483647)
        .label("discount type")
        .required(),
    amount: joi_1.default.number()
        .min(1)
        .max(2147483647)
        .label("amount")
        .required(),
    validDateStart: joi_1.default.string()
        .min(1)
        .max(10)
        .label("valid date start")
        .custom(function (value, helper) { return (0, commonValidation_1.xssPrevent)(value); })
        .required(),
    validDateEnd: joi_1.default.string()
        .min(1)
        .max(10)
        .label("valid date end")
        .custom(function (value, helper) { return (0, commonValidation_1.xssPrevent)(value); })
        .required(),
});
var card_discount_view = joi_1.default.object({
    id: joi_1.default.number()
        .min(1)
        .max(2147483647)
        .label("id")
        .messages({ 'string.min': 'wrong id' })
        .required(),
});
var card_discount_list = joi_1.default.object({});
exports.default = {
    card_discount_add: card_discount_add,
    card_discount_edit: card_discount_edit,
    card_discount_view: card_discount_view,
    card_discount_list: card_discount_list
};
//# sourceMappingURL=card_discount.validate.js.map