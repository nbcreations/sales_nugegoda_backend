"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var db_1 = __importDefault(require("../config/db"));
var logger_1 = __importDefault(require("../config/logger"));
var DefaultResponse_1 = __importDefault(require("../utils/DefaultResponse"));
var luxon_1 = require("luxon");
var product_add = function (name, stock, price, productId, type, category, subCategory, authUserId, color, size) { return __awaiter(void 0, void 0, void 0, function () {
    var currentDateTime, result, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                currentDateTime = luxon_1.DateTime.now().setZone("UTC").toFormat("y-MM-dd HH:mm:ss");
                return [4 /*yield*/, db_1.default.query('INSERT INTO `product`(name, stock, price, product_id, type, category, sub_category, status, added_by, added_time, color, size) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [name, stock, price, productId, type, category, subCategory, 1, authUserId, currentDateTime, color, size])];
            case 1:
                result = _a.sent();
                if (result.status) {
                    return [2 /*return*/, DefaultResponse_1.default.successFormat("200", {
                            insertId: result.data.insertId
                        })];
                }
                return [2 /*return*/, result];
            case 2:
                err_1 = _a.sent();
                logger_1.default.error(err_1);
                return [2 /*return*/, DefaultResponse_1.default.errorFormat("500")];
            case 3: return [2 /*return*/];
        }
    });
}); };
var product_list = function () { return __awaiter(void 0, void 0, void 0, function () {
    var result, err_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, db_1.default.query("\n            SELECT \n                product.id, \n                product.name, \n                product.color, \n                product.size, \n                product.stock, \n                product.price, \n                product.product_id, \n                product.type, \n                product.category, \n                product.sub_category, \n                product.status, \n                product.added_by, \n                product.added_time, \n                product.updated_by, \n                product.updated_time,\n                product_type.name AS type_name, \n                product_category.name AS category_name, \n                product_sub_category.name AS sub_category_name\n            FROM \n                product\n            INNER JOIN \n                product_type ON product.type = product_type.id\n            INNER JOIN \n                product_category ON product.category = product_category.id\n            INNER JOIN \n                product_sub_category ON product.sub_category = product_sub_category.id\n            WHERE \n                product.status != ?  \n            ORDER BY \n                product.id DESC\n        ", [403])];
            case 1:
                result = _a.sent();
                return [2 /*return*/, result];
            case 2:
                err_2 = _a.sent();
                logger_1.default.error(err_2);
                return [2 /*return*/, DefaultResponse_1.default.errorFormat("500")];
            case 3: return [2 /*return*/];
        }
    });
}); };
var product_edit = function (name, stock, price, productId, type, category, subCategory, authUserId, id, color, size) { return __awaiter(void 0, void 0, void 0, function () {
    var currentDateTime, result, err_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                currentDateTime = luxon_1.DateTime.now().setZone("UTC").toFormat("y-MM-dd HH:mm:ss");
                return [4 /*yield*/, db_1.default.query('UPDATE `product` SET name = ?, stock = ?, price = ?, product_id = ?, type = ?, category = ?, sub_category = ?, updated_by = ?, updated_time = ?, color = ?, size = ? WHERE id = ? && status != ? ', [name, stock, price, productId, type, category, subCategory, authUserId, currentDateTime, color, size, id, 403])];
            case 1:
                result = _a.sent();
                if (result.status) {
                    return [2 /*return*/, DefaultResponse_1.default.successFormat("200")];
                }
                return [2 /*return*/, result];
            case 2:
                err_3 = _a.sent();
                logger_1.default.error(err_3);
                return [2 /*return*/, DefaultResponse_1.default.errorFormat("500")];
            case 3: return [2 /*return*/];
        }
    });
}); };
var product_view = function (id) { return __awaiter(void 0, void 0, void 0, function () {
    var result, err_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, db_1.default.query("SELECT product.id,\n        product.color, \n        product.size, product.name, product.stock, product.price, product.product_id, product.type, product.category, product.sub_category, product.status, product.added_by, product.added_time, product.updated_by, product.updated_time\n        FROM product\n        WHERE product.id = ? && product.status != ? ", [id, 403])];
            case 1:
                result = _a.sent();
                if (!result.status) {
                    return [2 /*return*/, result];
                }
                if (result.data.length === 0) {
                    return [2 /*return*/, DefaultResponse_1.default.errorFormat("404")];
                }
                return [2 /*return*/, DefaultResponse_1.default.successFormat("200", result.data[0])];
            case 2:
                err_4 = _a.sent();
                logger_1.default.error(err_4);
                return [2 /*return*/, DefaultResponse_1.default.errorFormat("500")];
            case 3: return [2 /*return*/];
        }
    });
}); };
var product_sales_list = function (sub_category, type) { return __awaiter(void 0, void 0, void 0, function () {
    var result, err_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, db_1.default.query("SELECT product.id, product.name, product.stock, product.price, product.product_id, product.type, product.category, product.sub_category, product.status, product.added_by, product.added_time, product.updated_by, product.updated_time\n        FROM product\n        WHERE product.status != ? && product.sub_category = ? && product.type = ?  ORDER BY product.id DESC", [403, sub_category, type])];
            case 1:
                result = _a.sent();
                console.log(result);
                return [2 /*return*/, result];
            case 2:
                err_5 = _a.sent();
                logger_1.default.error(err_5);
                return [2 /*return*/, DefaultResponse_1.default.errorFormat("500")];
            case 3: return [2 /*return*/];
        }
    });
}); };
var product_stock_check = function (id, quantity) { return __awaiter(void 0, void 0, void 0, function () {
    var result, err_6;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, db_1.default.query("SELECT product.id\n        FROM product\n        WHERE product.stock >= ? && product.id = ?", [quantity, id])];
            case 1:
                result = _a.sent();
                if (!result.status) {
                    return [2 /*return*/, false];
                }
                console.log(result, id);
                if (result.data.length === 0) {
                    return [2 /*return*/, false];
                }
                return [2 /*return*/, true];
            case 2:
                err_6 = _a.sent();
                logger_1.default.error(err_6);
                return [2 /*return*/, false];
            case 3: return [2 /*return*/];
        }
    });
}); };
var product_status_check = function (id) { return __awaiter(void 0, void 0, void 0, function () {
    var result, err_7;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, db_1.default.query("SELECT product.id\n        FROM product\n        WHERE product.status = ? && product.id = ?", [1, id])];
            case 1:
                result = _a.sent();
                if (!result.status) {
                    return [2 /*return*/, false];
                }
                if (result.data.length === 0) {
                    return [2 /*return*/, false];
                }
                return [2 /*return*/, true];
            case 2:
                err_7 = _a.sent();
                logger_1.default.error(err_7);
                return [2 /*return*/, false];
            case 3: return [2 /*return*/];
        }
    });
}); };
var product_stock_increase = function (stock, id) { return __awaiter(void 0, void 0, void 0, function () {
    var currentDateTime, result, err_8;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                currentDateTime = luxon_1.DateTime.now().setZone("UTC").toFormat("y-MM-dd HH:mm:ss");
                return [4 /*yield*/, db_1.default.query('UPDATE `product` SET stock = stock + ? WHERE id = ? ', [stock, id])];
            case 1:
                result = _a.sent();
                if (result.status) {
                    return [2 /*return*/, DefaultResponse_1.default.successFormat("200")];
                }
                return [2 /*return*/, result];
            case 2:
                err_8 = _a.sent();
                logger_1.default.error(err_8);
                return [2 /*return*/, DefaultResponse_1.default.errorFormat("500")];
            case 3: return [2 /*return*/];
        }
    });
}); };
var product_stock_decrease = function (stock, id) { return __awaiter(void 0, void 0, void 0, function () {
    var currentDateTime, result, err_9;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                currentDateTime = luxon_1.DateTime.now().setZone("UTC").toFormat("y-MM-dd HH:mm:ss");
                return [4 /*yield*/, db_1.default.query('UPDATE `product` SET stock = stock - ? WHERE id = ? ', [stock, id])];
            case 1:
                result = _a.sent();
                if (result.status) {
                    return [2 /*return*/, DefaultResponse_1.default.successFormat("200")];
                }
                return [2 /*return*/, result];
            case 2:
                err_9 = _a.sent();
                logger_1.default.error(err_9);
                return [2 /*return*/, DefaultResponse_1.default.errorFormat("500")];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.default = {
    product_add: product_add,
    product_list: product_list,
    product_edit: product_edit,
    product_view: product_view,
    product_sales_list: product_sales_list,
    product_stock_check: product_stock_check,
    product_status_check: product_status_check,
    product_stock_increase: product_stock_increase,
    product_stock_decrease: product_stock_decrease
};
//# sourceMappingURL=product.model.js.map