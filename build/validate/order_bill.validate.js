"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var joi_1 = __importDefault(require("joi"));
var commonValidation_1 = require("../utils/commonValidation");
var order_bill_add = joi_1.default.object({
    date: joi_1.default.string()
        .min(1)
        .max(10)
        .label("date")
        .custom(function (value, helper) {
        if (!(0, commonValidation_1.isValidDateString)(value)) {
            return helper.message({ custom: "date is incorrect" });
        }
        return value;
    })
        .required(),
    customerName: joi_1.default.string()
        .min(1)
        .max(200)
        .label("customer name")
        .custom(function (value, helper) { return (0, commonValidation_1.xssPrevent)(value); })
        .required(),
    email: joi_1.default.string()
        .min(1)
        .max(320)
        .label("email")
        .email()
        .allow("")
        .required(),
    phone: joi_1.default.string()
        .min(1)
        .max(15)
        .label("phone")
        .custom(function (value, helper) {
        if (!(0, commonValidation_1.validatePhoneNumber)(value)) {
            return helper.message({ custom: "phone is incorrect" });
        }
        return value;
    })
        .required(),
    address: joi_1.default.string()
        .min(1)
        .max(500)
        .label("address")
        .custom(function (value, helper) { return (0, commonValidation_1.xssPrevent)(value); })
        .required(),
    items: joi_1.default.array()
        .items(joi_1.default.object({
        name: joi_1.default.string(),
        id: joi_1.default.number(),
        price: joi_1.default.number(),
        quantity: joi_1.default.number(),
        product_id: joi_1.default.string()
    }))
        .required(),
});
var order_bill_list = joi_1.default.object({});
var order_bill_view = joi_1.default.object({
    id: joi_1.default.number()
        .min(1)
        .max(2147483647)
        .label("id")
        .messages({ 'string.min': 'wrong id' })
        .required(),
});
var order_bill_to_pay_list = joi_1.default.object({});
exports.default = {
    order_bill_add: order_bill_add,
    order_bill_list: order_bill_list,
    order_bill_view: order_bill_view,
    order_bill_to_pay_list: order_bill_to_pay_list
};
//# sourceMappingURL=order_bill.validate.js.map