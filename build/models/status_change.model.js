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
var DefaultResponse_1 = __importDefault(require("../utils/DefaultResponse"));
var tableControl_json_1 = __importDefault(require("../json/tableControl.json"));
var luxon_1 = require("luxon");
var db_1 = __importDefault(require("../config/db"));
var logger_1 = __importDefault(require("../config/logger"));
var status_change_previous_check = function (number, status, tableName, resultId, authUserId, authUserRole) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        if (number === 1) {
            return [2 /*return*/, check_user_role(resultId)];
        }
        else if (number === 2) {
            return [2 /*return*/, listing_approve_time_change(resultId, status)];
        }
        else if (number === 3) {
        }
        return [2 /*return*/, DefaultResponse_1.default.errorFormat("006")];
    });
}); };
var status_change = function (tableId, resultId, status, authUserId, authUserRole) { return __awaiter(void 0, void 0, void 0, function () {
    var tblKey, tableName, roleKey, statusAccess, data, statusArr, checkNo, previousCheck, result, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 4, , 5]);
                tblKey = tableId.toString();
                // Check if the tblKey exists in the tableControl
                if (!tableControl_json_1.default[tblKey]) {
                    return [2 /*return*/, DefaultResponse_1.default.errorFormat("000", "This table id does not exist")];
                }
                // Check if the statusAccess exists in the tableControl[tblKey]
                if (!tableControl_json_1.default[tblKey]["statusAccess"]) {
                    return [2 /*return*/, DefaultResponse_1.default.errorFormat("000", "This table does not have delete access")];
                }
                // Check if the table exists in the tableControl[tblKey]
                if (!tableControl_json_1.default[tblKey]["table"]) {
                    return [2 /*return*/, DefaultResponse_1.default.errorFormat("000", "No table found")];
                }
                tableName = tableControl_json_1.default[tblKey]["table"];
                roleKey = authUserRole.toString();
                statusAccess = tableControl_json_1.default[tblKey]["statusAccess"];
                if (!statusAccess[roleKey]) {
                    return [2 /*return*/, DefaultResponse_1.default.errorFormat("000", "You have no delete access")];
                }
                data = statusAccess[roleKey];
                // Check Status Availability
                if (data["status"]) {
                    statusArr = typeof data["status"] === "object" ? data["status"] : [];
                    if (!statusArr.includes(status)) {
                        return [2 /*return*/, DefaultResponse_1.default.errorFormat("403")];
                    }
                }
                if (!data["check"]) return [3 /*break*/, 2];
                checkNo = typeof data["check"] === "number" ? data["check"] : 0;
                return [4 /*yield*/, status_change_previous_check(checkNo, status, tableName, resultId, authUserId, authUserRole)];
            case 1:
                previousCheck = _a.sent();
                if (!previousCheck.status) {
                    return [2 /*return*/, previousCheck];
                }
                _a.label = 2;
            case 2: return [4 /*yield*/, db_1.default.query("UPDATE `" + tableName + "` SET status = ? WHERE `id`=?", [status, resultId])];
            case 3:
                result = _a.sent();
                if (result.status) {
                    return [2 /*return*/, DefaultResponse_1.default.successFormat("200")];
                }
                return [2 /*return*/, result];
            case 4:
                err_1 = _a.sent();
                logger_1.default.error(err_1);
                DefaultResponse_1.default.errorFormat("500");
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); };
var check_user_role = function (resultId) { return __awaiter(void 0, void 0, void 0, function () {
    var result, err_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, db_1.default.query("SELECT user.id FROM user WHERE (role = ? || role = ?) && id = ? ", [2, 3, resultId])];
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
                err_2 = _a.sent();
                logger_1.default.error(err_2);
                return [2 /*return*/, DefaultResponse_1.default.errorFormat("500")];
            case 3: return [2 /*return*/];
        }
    });
}); };
var listing_approve_time_change = function (resultId, status) { return __awaiter(void 0, void 0, void 0, function () {
    var currentDateTime, result, err_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                currentDateTime = luxon_1.DateTime.now().setZone("UTC").toFormat("y-MM-dd HH:mm:ss");
                return [4 /*yield*/, db_1.default.query("UPDATE listing SET updated_time = ? WHERE id = ?", [currentDateTime, resultId])];
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
                err_3 = _a.sent();
                logger_1.default.error(err_3);
                return [2 /*return*/, DefaultResponse_1.default.errorFormat("500")];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.default = {
    status_change: status_change,
    check_user_role: check_user_role
};
//# sourceMappingURL=status_change.model.js.map