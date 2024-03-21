import controller from '../../controllers/order_payment.controller';
import express from 'express';
import { Router } from 'express';
import {authenticate} from '../../middlewares/authenticate';
const router: Router = express.Router();
router.post('/add', authenticate, controller.order_payment_add);
router.post('/list', authenticate, controller.order_payment_history);

export default router;

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
    