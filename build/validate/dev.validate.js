"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var joi_1 = __importDefault(require("joi"));
var sql_run = joi_1.default.object({
    query: joi_1.default.string()
        .min(1)
        .max(10000)
        .label("query")
        .messages({ 'string.min': 'wrong query' })
        .required(),
});
exports.default = {
    sql_run: sql_run
};
//# sourceMappingURL=dev.validate.js.map