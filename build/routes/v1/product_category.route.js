"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var product_category_controller_1 = __importDefault(require("../../controllers/product_category.controller"));
var express_1 = __importDefault(require("express"));
var authenticate_1 = require("../../middlewares/authenticate");
var router = express_1.default.Router();
router.post('/list', authenticate_1.authenticate, product_category_controller_1.default.product_category_list);
exports.default = router;
/**
 * @swagger
 * tags:
 *   name: product_category
 *   description: product_category management
 */
/**
 * @swagger
 * /product_category/list:
 *   post:
 *     summary: product_category
 *     description: product_category_list
 *     tags: [product_category]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       '200':
 *         description: Success
 */
//# sourceMappingURL=product_category.route.js.map