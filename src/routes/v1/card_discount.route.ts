import controller from '../../controllers/card_discount.controller';
import express from 'express';
import { Router } from 'express';
import {authenticate} from '../../middlewares/authenticate';
const router: Router = express.Router();
router.post('/add', authenticate, controller.card_discount_add);
router.post('/edit', authenticate, controller.card_discount_edit);
router.post('/view', authenticate, controller.card_discount_view);
router.get('/list', authenticate, controller.card_discount_list);

export default router;

/**
 * @swagger
 * tags:
 *   name: card_discount
 *   description: card_discount management
 */

/**
 * @swagger
 * /card_discount/add:
 *   post:
 *     summary: card_discount
 *     description: card_discount_add
 *     tags: [card_discount]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               bank:
 *                 type: number
 *                 description: bank
 *                 example: "1"
 *               cardType:
 *                 type: number
 *                 description: card type
 *                 example: "1"
 *               discountType:
 *                 type: number
 *                 description: discount type
 *                 example: "1"
 *               amount:
 *                 type: number
 *                 description: amount
 *                 example: "1"
 *               validDateStart:
 *                 type: string
 *                 description: valid date start
 *                 example: "example text"
 *               validDateEnd:
 *                 type: string
 *                 description: valid date end
 *                 example: "example text"
 *     responses:
 *       '200':
 *         description: Success
 */

/**
 * @swagger
 * /card_discount/edit:
 *   post:
 *     summary: card_discount
 *     description: card_discount_edit
 *     tags: [card_discount]
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
 *               bank:
 *                 type: number
 *                 description: bank
 *                 example: "1"
 *               cardType:
 *                 type: number
 *                 description: card type
 *                 example: "1"
 *               discountType:
 *                 type: number
 *                 description: discount type
 *                 example: "1"
 *               amount:
 *                 type: number
 *                 description: amount
 *                 example: "1"
 *               validDateStart:
 *                 type: string
 *                 description: valid date start
 *                 example: "example text"
 *               validDateEnd:
 *                 type: string
 *                 description: valid date end
 *                 example: "example text"
 *     responses:
 *       '200':
 *         description: Success
 */

/**
 * @swagger
 * /card_discount/view:
 *   post:
 *     summary: card_discount
 *     description: card_discount_view
 *     tags: [card_discount]
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
 * /card_discount/list:
 *   get:
 *     summary: card_discount
 *     description: card_discount_list
 *     tags: [card_discount]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       '200':
 *         description: Success
 */
    