"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var product_type_controller_1 = __importDefault(require("../../controllers/product_type.controller"));
var express_1 = __importDefault(require("express"));
var authenticate_1 = require("../../middlewares/authenticate");
var router = express_1.default.Router();
router.post('/list', authenticate_1.authenticate, product_type_controller_1.default.product_type_list);
exports.default = router;
/**
 * @swagger
 * tags:
 *   name: product_type
 *   description: product_type management
 */
/**
 * @swagger
 * /product_type/list:
 *   post:
 *     summary: product_type
 *     description: product_type_list
 *     tags: [product_type]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       '200':
 *         description: Success
 */
//# sourceMappingURL=product_type.route.js.map