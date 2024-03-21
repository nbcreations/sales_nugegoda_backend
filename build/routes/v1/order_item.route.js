"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var order_item_controller_1 = __importDefault(require("../../controllers/order_item.controller"));
var express_1 = __importDefault(require("express"));
var authenticate_1 = require("../../middlewares/authenticate");
var router = express_1.default.Router();
router.post('/add', authenticate_1.authenticate, order_item_controller_1.default.order_item_add);
exports.default = router;
/**
 * @swagger
 * tags:
 *   name: order_item
 *   description: order_item management
 */
/**
 * @swagger
 * /order_item/add:
 *   post:
 *     summary: order_item
 *     description: order_item_add
 *     tags: [order_item]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               orderId:
 *                 type: number
 *                 description: order id
 *                 example: "1"
 *               product:
 *                 type: number
 *                 description: product
 *                 example: "1"
 *               price:
 *                 type: number
 *                 description: price
 *                 example: "1"
 *               qty:
 *                 type: number
 *                 description: qty
 *                 example: "1"
 *     responses:
 *       '200':
 *         description: Success
 */
//# sourceMappingURL=order_item.route.js.map