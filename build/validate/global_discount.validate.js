"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var joi_1 = __importDefault(require("joi"));
var global_discount_update = joi_1.default.object({
    discountType: joi_1.default.number()
        .min(1)
        .max(2)
        .label("discount type")
        .required(),
    flatRate: joi_1.default.number()
        .min(-2147483647)
        .max(2147483647)
        .label("flat rate")
        .required(),
    percentage: joi_1.default.number()
        .min(-100)
        .max(100)
        .label("percentage")
        .required(),
});
var global_discount_view = joi_1.default.object({});
exports.default = {
    global_discount_update: global_discount_update,
    global_discount_view: global_discount_view
};
//# sourceMappingURL=global_discount.validate.js.map