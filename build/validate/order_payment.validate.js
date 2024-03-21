"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var joi_1 = __importDefault(require("joi"));
var order_payment_add = joi_1.default.object({
    orderId: joi_1.default.number()
        .min(1)
        .max(2147483647)
        .label("order id")
        .required(),
    amount: joi_1.default.number()
        .min(1)
        .max(2147483647)
        .label("amount")
        .required(),
    type: joi_1.default.number()
        .min(1)
        .max(2147483647)
        .label("type")
        .required(),
});
var order_payment_history = joi_1.default.object({
    orderId: joi_1.default.number()
        .min(1)
        .max(9999999)
        .label("order id")
        .messages({ 'string.min': 'wrong order id' })
        .required(),
});
exports.default = {
    order_payment_add: order_payment_add,
    order_payment_history: order_payment_history
};
//# sourceMappingURL=order_payment.validate.js.map