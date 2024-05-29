"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var joi_1 = __importDefault(require("joi"));
var user_login = joi_1.default.object({
    email: joi_1.default.string()
        .min(1)
        .max(1000)
        .label("email")
        .messages({ 'string.min': 'wrong email' })
        .required(),
    password: joi_1.default.string()
        .min(1)
        .max(1000)
        .label("password")
        .messages({ 'string.min': 'wrong password' })
        .required(),
});
var user_check = joi_1.default.object({});
exports.default = {
    user_login: user_login,
    user_check: user_check
};
//# sourceMappingURL=user.validate.js.map