"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var file_model_1 = __importDefault(require("../../models/file.model"));
var express_1 = __importDefault(require("express"));
var authenticate_1 = require("../../middlewares/authenticate");
var router = express_1.default.Router();
router.post('/upload', authenticate_1.authenticate, file_model_1.default.image_add);
exports.default = router;
//# sourceMappingURL=file.route.js.map