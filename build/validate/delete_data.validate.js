"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var joi_1 = __importDefault(require("joi"));
var delete_data = joi_1.default.object({
    tableId: joi_1.default.number()
        .min(1)
        .max(1000)
        .label("table id")
        .messages({ 'string.min': 'wrong table id' })
        .required(),
    resultId: joi_1.default.number()
        .min(1)
        .max(2147483647)
        .label("result id")
        .messages({ 'string.min': 'wrong result id' })
        .required(),
});
exports.default = {
    delete_data: delete_data
};
//# sourceMappingURL=delete_data.validate.js.map