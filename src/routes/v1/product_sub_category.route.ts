import controller from '../../controllers/product_sub_category.controller';
import express from 'express';
import { Router } from 'express';
import {authenticate} from '../../middlewares/authenticate';
const router: Router = express.Router();
router.post('/add', authenticate, controller.product_sub_category_add);
router.post('/list', authenticate, controller.product_sub_category_list);
router.post('/edit', authenticate, controller.product_sub_category_edit);
router.post('/view', authenticate, controller.product_sub_category_view);
router.post('/category-list', authenticate, controller.product_sub_category_select);
router.post('/sales-list', authenticate, controller.product_sub_category_sales_list);

export default router;

/**
 * @swagger
 * tags:
 *   name: product_sub_category
 *   description: product_sub_category management
 */

/**
 * @swagger
 * /product_sub_category/add:
 *   post:
 *     summary: product_sub_category
 *     description: product_sub_category_add
 *     tags: [product_sub_category]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: name
 *                 example: "example text"
 *               imgUrl:
 *                 type: string
 *                 description: img url
 *                 example: "example text"
 *               category:
 *                 type: number
 *                 description: category
 *                 example: "1"
 *     responses:
 *       '200':
 *         description: Success
 */

/**
 * @swagger
 * /product_sub_category/list:
 *   post:
 *     summary: product_sub_category
 *     description: product_sub_category_list
 *     tags: [product_sub_category]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       '200':
 *         description: Success
 */

/**
 * @swagger
 * /product_sub_category/edit:
 *   post:
 *     summary: product_sub_category
 *     description: product_sub_category_edit
 *     tags: [product_sub_category]
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
 *               name:
 *                 type: string
 *                 description: name
 *                 example: "example text"
 *               imgUrl:
 *                 type: string
 *                 description: img url
 *                 example: "example text"
 *               category:
 *                 type: number
 *                 description: category
 *                 example: "1"
 *     responses:
 *       '200':
 *         description: Success
 */

/**
 * @swagger
 * /product_sub_category/view:
 *   post:
 *     summary: product_sub_category
 *     description: product_sub_category_view
 *     tags: [product_sub_category]
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
 * /product_sub_category/category-list:
 *   post:
 *     summary: product_sub_category
 *     description: product_sub_category_select
 *     tags: [product_sub_category]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               category_Id:
 *                 type: number
 *                 description: category_Id
 *                 example: "1"
 *     responses:
 *       '200':
 *         description: Success
 */

/**
 * @swagger
 * /product_sub_category/sales-list:
 *   post:
 *     summary: product_sub_category
 *     description: product_sub_category_sales_list
 *     tags: [product_sub_category]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               category:
 *                 type: number
 *                 description: category
 *                 example: "1"
 *     responses:
 *       '200':
 *         description: Success
 */

/**
 * @swagger
 * /product_sub_category/sales-list:
 *   post:
 *     summary: product_sub_category
 *     description: product_sub_category_sales_list
 *     tags: [product_sub_category]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               category:
 *                 type: number
 *                 description: category
 *                 example: "1"
 *     responses:
 *       '200':
 *         description: Success
 */
    