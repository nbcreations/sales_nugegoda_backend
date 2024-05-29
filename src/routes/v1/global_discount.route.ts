import controller from '../../controllers/global_discount.controller';
import express from 'express';
import { Router } from 'express';
import {authenticate} from '../../middlewares/authenticate';
const router: Router = express.Router();
router.post('/edit', authenticate, controller.global_discount_update);
router.get('/view', authenticate, controller.global_discount_view);

export default router;

/**
 * @swagger
 * tags:
 *   name: global_discount
 *   description: global_discount management
 */

/**
 * @swagger
 * /global_discount/edit:
 *   post:
 *     summary: global_discount
 *     description: global_discount_update
 *     tags: [global_discount]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               discountType:
 *                 type: number
 *                 description: discount type
 *                 example: "1"
 *               flatRate:
 *                 type: number
 *                 description: flat rate
 *                 example: "1"
 *               percentage:
 *                 type: number
 *                 description: percentage
 *                 example: "1"
 *     responses:
 *       '200':
 *         description: Success
 */

/**
 * @swagger
 * /global_discount/view:
 *   get:
 *     summary: global_discount
 *     description: global_discount_view
 *     tags: [global_discount]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       '200':
 *         description: Success
 */
    