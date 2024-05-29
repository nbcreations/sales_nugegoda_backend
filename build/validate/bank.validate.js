"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var joi_1 = __importDefault(require("joi"));
var commonValidation_1 = require("../utils/commonValidation");
var bank_add = joi_1.default.object({
    name: joi_1.default.string()
        .min(1)
        .max(200)
        .label("name")
        .custom(function (value, helper) { return (0, commonValidation_1.xssPrevent)(value); })
        .required(),
});
var bank_edit = joi_1.default.object({
    id: joi_1.default.number()
        .min(1)
        .max(2147483647)
        .label("id")
        .required(),
    name: joi_1.default.string()
        .min(1)
        .max(200)
        .label("name")
        .custom(function (value, helper) { return (0, commonValidation_1.xssPrevent)(value); })
        .required(),
});
var bank_view = joi_1.default.object({
    id: joi_1.default.number()
        .min(1)
        .max(2147483647)
        .label("id")
        .messages({ 'string.min': 'wrong id' })
        .required(),
});
var bank_list = joi_1.default.object({});
var bank_active_list = joi_1.default.object({});
exports.default = {
    bank_add: bank_add,
    bank_edit: bank_edit,
    bank_view: bank_view,
    bank_list: bank_list,
    bank_active_list: bank_active_list
};
//# sourceMappingURL=bank.validate.js.map