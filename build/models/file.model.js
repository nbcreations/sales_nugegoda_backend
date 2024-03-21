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
var DefaultResponse_1 = __importDefault(require("../utils/DefaultResponse"));
var multer_1 = __importDefault(require("multer"));
var fileUpload_1 = __importDefault(require("../utils/fileUpload"));
var authorize_1 = __importDefault(require("../utils/authorize"));
var logger_1 = __importDefault(require("../config/logger"));
var comment = {
    "1": {
        "description": "product image upload"
    },
    "2": {
        "description": "listing category image upload"
    },
    "3": {
        "description": "listing feature image upload"
    },
    "4": {
        "description": "listing add by supplier image upload"
    },
    "5": {
        "description": "listing add by admin image upload"
    },
    "6": {
        "description": "listing services admin image upload"
    },
    "7": {
        "description": "listing services supplier image upload"
    },
    "8": {
        "description": "Profile picturer upload"
    }
};
var image_add = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        fileUpload_1.default.image(req, res, function (err) { return __awaiter(void 0, void 0, void 0, function () {
            var authData, authUserId, authUserRole, result, fileUploaded, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // Check if file is set && if file has errors
                        if (req.file === undefined) {
                            if (err === undefined) {
                                DefaultResponse_1.default.error(res, "017");
                                return [2 /*return*/];
                            }
                            else {
                                logger_1.default.error(err);
                                DefaultResponse_1.default.error(res, "000", err.message);
                                return [2 /*return*/];
                            }
                        }
                        if (err instanceof multer_1.default.MulterError) {
                            if (err.code === "LIMIT_UNEXPECTED_FILE") {
                                DefaultResponse_1.default.error(res, "000", 'Unexpected field ' + err.field);
                                return [2 /*return*/];
                            }
                        }
                        else if (err) {
                            DefaultResponse_1.default.error(res, "018");
                            return [2 /*return*/];
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 8, , 9]);
                        /**
                         * @detail
                         * Process
                         * await fileUpload.deleteFileFromS3("images/image_1698743209494.png"); // Delete file from S3
                         */
                        if (req.body.resultId === undefined)
                            req.body.resultId = 0;
                        authData = (0, authorize_1.default)('file', 'image_add', req);
                        if (!authData.status) {
                            DefaultResponse_1.default.error(res, '403');
                            return [2 /*return*/];
                        }
                        authUserId = authData.data.user;
                        authUserRole = authData.data.role;
                        if (!(req.body.imageId == 1 && authUserRole == 1)) return [3 /*break*/, 6];
                        return [4 /*yield*/, db_1.default.query("SELECT img_url FROM product_sub_category WHERE id = ? && status != 403", [req.body.resultId])];
                    case 2:
                        result = _a.sent();
                        if (!result.status) {
                            logger_1.default.error(result); // :)3v
                            DefaultResponse_1.default.error(res, "500");
                            return [2 /*return*/];
                        }
                        if (!(result.data.length > 0)) return [3 /*break*/, 4];
                        fileUploaded = req.file.location;
                        return [4 /*yield*/, db_1.default.query("UPDATE product_sub_category SET img_url = ? WHERE id = ? && status != 403", [fileUploaded, req.body.resultId])];
                    case 3:
                        result = _a.sent();
                        if (!result.status) {
                            logger_1.default.error(result); // :)3v
                            DefaultResponse_1.default.error(res, "500");
                            return [2 /*return*/];
                        }
                        DefaultResponse_1.default.success(res, "200", {
                            filename: fileUploaded
                        });
                        return [2 /*return*/];
                    case 4:
                        DefaultResponse_1.default.error(res, "006");
                        return [2 /*return*/];
                    case 5: return [3 /*break*/, 7];
                    case 6:
                        DefaultResponse_1.default.error(res, "006");
                        return [2 /*return*/];
                    case 7: return [3 /*break*/, 9];
                    case 8:
                        err_1 = _a.sent();
                        logger_1.default.error(err_1); // :)3v
                        DefaultResponse_1.default.error(res, "500");
                        return [2 /*return*/];
                    case 9: return [2 /*return*/];
                }
            });
        }); });
        return [2 /*return*/];
    });
}); };
exports.default = {
    image_add: image_add
};
//# sourceMappingURL=file.model.js.map