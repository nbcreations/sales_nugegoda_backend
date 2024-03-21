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
var multer_1 = __importDefault(require("multer"));
var path_1 = __importDefault(require("path"));
var pickBy_1 = __importDefault(require("lodash/pickBy"));
var multer_s3_1 = __importDefault(require("multer-s3"));
var logger_1 = __importDefault(require("../config/logger"));
var config_1 = __importDefault(require("../config/config"));
var client_s3_1 = require("@aws-sdk/client-s3");
function checkFileType(file, cb, Allowed, mimetype) {
    // Check ext
    var extname = Allowed.test(path_1.default.extname(file.originalname).toLowerCase());
    // Check mime
    if (!mimetype) {
        mimetype = Allowed.test(file.mimetype);
    }
    if (mimetype && extname) {
        cb(null, true);
    }
    else {
        cb({ status: false, message: 'This file type is not allowed' }, false);
    }
}
var s3Client = function () {
    var credentials = process.env.S3_ACCESS_KEY_ID
        ? {
            accessKeyId: config_1.default.s3.accessKey,
            secretAccessKey: config_1.default.s3.secretIKey,
        }
        : undefined;
    var options = (0, pickBy_1.default)({
        region: config_1.default.s3.region,
        credentials: credentials,
    }, Boolean);
    var client = new client_s3_1.S3(options);
    return client;
};
var image = (0, multer_1.default)({
    storage: (0, multer_s3_1.default)({
        s3: s3Client(),
        bucket: 'nbc-storage',
        key: function (_req, file, cb) {
            cb(null, "images/".concat(file.originalname, "-").concat(Date.now(), "-").concat(path_1.default.extname(file.originalname).toLowerCase()));
        },
    }),
    fileFilter: function (_req, file, cb) {
        checkFileType(file, cb, /jpeg|jpg|webp|png|svg|gif|avif/);
    },
}).single('image');
var getObjectVersionId = function (fileName) { return __awaiter(void 0, void 0, void 0, function () {
    var s3, params, response, _i, _a, version, err_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                s3 = s3Client();
                params = {
                    Bucket: 'nbc-storage',
                    Prefix: fileName,
                };
                _b.label = 1;
            case 1:
                _b.trys.push([1, 3, , 4]);
                return [4 /*yield*/, s3.listObjectVersions(params)];
            case 2:
                response = _b.sent();
                if (response.Versions) {
                    // Iterate through the versions to find the one you want
                    for (_i = 0, _a = response.Versions; _i < _a.length; _i++) {
                        version = _a[_i];
                        // Check if the version's Key matches the file name
                        if (version.Key === fileName) {
                            return [2 /*return*/, version.VersionId];
                        }
                    }
                }
                return [2 /*return*/, null]; // Return null if the object/version is not found
            case 3:
                err_1 = _b.sent();
                logger_1.default.error('Error listing object versions in S3:', err_1);
                return [2 /*return*/, null];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.default = {
    image: image
};
//# sourceMappingURL=fileUpload.js.map