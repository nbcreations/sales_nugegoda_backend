import controller from '../../controllers/order_bill.controller';
import express from 'express';
import { Router } from 'express';
import {authenticate} from '../../middlewares/authenticate';
const router: Router = express.Router();
router.post('/add', authenticate, controller.order_bill_add);
router.get('/list', authenticate, controller.order_bill_list);
router.post('/view', authenticate, controller.order_bill_view);
router.get('/to/pay/list', authenticate, controller.order_bill_to_pay_list);

export default router;

/**
 * @swagger
 * tags:
 *   name: order_bill
 *   description: order_bill management
 */

/**
 * @swagger
 * /order_bill/add:
 *   post:
 *     summary: order_bill
 *     description: order_bill_add
 *     tags: [order_bill]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               date:
 *                 type: string
 *                 description: date
 *                 example: "2024-04-24"
 *               customerName:
 *                 type: string
 *                 description: customer name
 *                 example: "example text"
 *               email:
 *                 type: string
 *                 description: email
 *                 example: "sample@example.com"
 *               phone:
 *                 type: string
 *                 description: phone
 *                 example: "0760358784"
 *               address:
 *                 type: string
 *                 description: address
 *                 example: "example text"
 *     responses:
 *       '200':
 *         description: Success
 */

/**
 * @swagger
 * /order_bill/list:
 *   get:
 *     summary: order_bill
 *     description: order_bill_list
 *     tags: [order_bill]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       '200':
 *         description: Success
 */

/**
 * @swagger
 * /order_bill/view:
 *   post:
 *     summary: order_bill
 *     description: order_bill_view
 *     tags: [order_bill]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: number
 *                 description: id
 *                 example: "1"
 *     responses:
 *       '200':
 *         description: Success
 */

/**
 * @swagger
 * /order_bill/to/pay/list:
 *   get:
 *     summary: order_bill
 *     description: order_bill_to_pay_list
 *     tags: [order_bill]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       '200':
 *         description: Success
 */
    