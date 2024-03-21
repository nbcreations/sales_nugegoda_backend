"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var order_payment_controller_1 = __importDefault(require("../../controllers/order_payment.controller"));
var express_1 = __importDefault(require("express"));
var authenticate_1 = require("../../middlewares/authenticate");
var router = express_1.default.Router();
router.post('/add', authenticate_1.authenticate, order_payment_controller_1.default.order_payment_add);
router.post('/list', authenticate_1.authenticate, order_payment_controller_1.default.order_payment_history);
exports.default = router;
/**
 * @swagger
 * tags:
 *   name: order_payment
 *   description: order_payment management
 */
/**
 * @swagger
 * /order_payment/add:
 *   post:
 *     summary: order_payment
 *     description: order_payment_add
 *     tags: [order_payment]
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
 *               amount:
 *                 type: number
 *                 description: amount
 *                 example: "1"
 *               type:
 *                 type: number
 *                 description: type
 *                 example: "1"
 *     responses:
 *       '200':
 *         description: Success
 */
/**
 * @swagger
 * /order_payment/list:
 *   post:
 *     summary: order_payment
 *     description: order_payment_history
 *     tags: [order_payment]
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
 *     responses:
 *       '200':
 *         description: Success
 */
//# sourceMappingURL=order_payment.route.js.map