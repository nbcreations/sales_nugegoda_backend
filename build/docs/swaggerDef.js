"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = __importDefault(require("../config/config"));
var swaggerDef = {
    openapi: '3.0.0',
    info: {
        title: 'Documentation',
        version: "1.0.0",
        license: {
            name: 'MIT',
            url: 'https://github.com/hagopj13/node-express-boilerplate/blob/master/LICENSE',
        },
    },
    servers: [
        {
            url: "http://localhost:".concat(config_1.default.port, "/api/v1"),
        },
        {
            url: "https://viverastray.similater.com/api/v1",
        },
        {
            url: "https://api.vivrestays.net/api/v1",
        }
    ],
};
exports.default = swaggerDef;
//# sourceMappingURL=swaggerDef.js.map