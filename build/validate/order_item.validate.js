"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var joi_1 = __importDefault(require("joi"));
var order_item_add = joi_1.default.object({
    orderId: joi_1.default.number()
        .min(1)
        .max(2147483647)
        .label("order id")
        .messages({ 'string.min': 'wrong order id' })
        .required(),
    product: joi_1.default.number()
        .min(1)
        .max(2147483647)
        .label("product")
        .messages({ 'string.min': 'wrong product' })
        .required(),
    price: joi_1.default.number()
        .min(1)
        .max(2147483647)
        .label("price")
        .required(),
    qty: joi_1.default.number()
        .min(1)
        .max(2147483647)
        .label("qty")
        .required(),
});
exports.default = {
    order_item_add: order_item_add
};
//# sourceMappingURL=order_item.validate.js.map