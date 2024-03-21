import controller from '../../controllers/order_item.controller';
import express from 'express';
import { Router } from 'express';
import {authenticate} from '../../middlewares/authenticate';
const router: Router = express.Router();
router.post('/add', authenticate, controller.order_item_add);

export default router;

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
    