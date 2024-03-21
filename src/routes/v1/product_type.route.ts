import controller from '../../controllers/product_type.controller';
import express from 'express';
import { Router } from 'express';
import {authenticate} from '../../middlewares/authenticate';
const router: Router = express.Router();
router.post('/list', authenticate, controller.product_type_list);

export default router;

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
    