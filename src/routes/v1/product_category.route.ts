import controller from '../../controllers/product_category.controller';
import express from 'express';
import { Router } from 'express';
import {authenticate} from '../../middlewares/authenticate';
const router: Router = express.Router();
router.post('/list', authenticate, controller.product_category_list);

export default router;

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
    