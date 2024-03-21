import controller from '../../controllers/product.controller';
import express from 'express';
import { Router } from 'express';
import {authenticate} from '../../middlewares/authenticate';
const router: Router = express.Router();
router.post('/category/list', authenticate, controller.product_category_list);
router.post('/type/list', authenticate, controller.product_type_list);
router.post('/add', authenticate, controller.product_add);
router.post('/edit', authenticate, controller.product_edit);
router.post('/list', authenticate, controller.product_list);
router.post('/view', authenticate, controller.product_view);
router.post('/sales-list', authenticate, controller.product_sales_list);

export default router;

/**
 * @swagger
 * tags:
 *   name: product
 *   description: product management
 */

/**
 * @swagger
 * /product/add:
 *   post:
 *     summary: product
 *     description: product_add
 *     tags: [product]
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
 *               stock:
 *                 type: number
 *                 description: stock
 *                 example: "1"
 *               price:
 *                 type: number
 *                 description: price
 *                 example: "1"
 *               type:
 *                 type: number
 *                 description: type
 *                 example: "1"
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
 * /product/edit:
 *   post:
 *     summary: product
 *     description: product_edit
 *     tags: [product]
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
 *               stock:
 *                 type: number
 *                 description: stock
 *                 example: "1"
 *               price:
 *                 type: number
 *                 description: price
 *                 example: "1"
 *               type:
 *                 type: number
 *                 description: type
 *                 example: "1"
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
 * /product/list:
 *   post:
 *     summary: product
 *     description: product_list
 *     tags: [product]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       '200':
 *         description: Success
 */

/**
 * @swagger
 * /product/view:
 *   post:
 *     summary: product
 *     description: product_view
 *     tags: [product]
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
 * /product/category/list:
 *   post:
 *     summary: product
 *     description: product_category_list
 *     tags: [product]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       '200':
 *         description: Success
 */

/**
 * @swagger
 * /product/type/list:
 *   post:
 *     summary: product
 *     description: product_type_list
 *     tags: [product]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       '200':
 *         description: Success
 */

/**
 * @swagger
 * /product/add:
 *   post:
 *     summary: product
 *     description: product_add
 *     tags: [product]
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
 *               stock:
 *                 type: number
 *                 description: stock
 *                 example: "1"
 *               price:
 *                 type: number
 *                 description: price
 *                 example: "1"
 *               type:
 *                 type: number
 *                 description: type
 *                 example: "1"
 *               category:
 *                 type: number
 *                 description: category
 *                 example: "1"
 *               subCategory:
 *                 type: number
 *                 description: sub category
 *                 example: "1"
 *     responses:
 *       '200':
 *         description: Success
 */

/**
 * @swagger
 * /product/edit:
 *   post:
 *     summary: product
 *     description: product_edit
 *     tags: [product]
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
 *               stock:
 *                 type: number
 *                 description: stock
 *                 example: "1"
 *               price:
 *                 type: number
 *                 description: price
 *                 example: "1"
 *               type:
 *                 type: number
 *                 description: type
 *                 example: "1"
 *               category:
 *                 type: number
 *                 description: category
 *                 example: "1"
 *               subCategory:
 *                 type: number
 *                 description: sub category
 *                 example: "1"
 *     responses:
 *       '200':
 *         description: Success
 */

/**
 * @swagger
 * /product/list:
 *   post:
 *     summary: product
 *     description: product_list
 *     tags: [product]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       '200':
 *         description: Success
 */

/**
 * @swagger
 * /product/view:
 *   post:
 *     summary: product
 *     description: product_view
 *     tags: [product]
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
 * /product/add:
 *   post:
 *     summary: product
 *     description: product_add
 *     tags: [product]
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
 *               stock:
 *                 type: number
 *                 description: stock
 *                 example: "1"
 *               price:
 *                 type: number
 *                 description: price
 *                 example: "1"
 *               productId:
 *                 type: string
 *                 description: product id
 *                 example: "example text"
 *               type:
 *                 type: number
 *                 description: type
 *                 example: "1"
 *               category:
 *                 type: number
 *                 description: category
 *                 example: "1"
 *               subCategory:
 *                 type: number
 *                 description: sub category
 *                 example: "1"
 *     responses:
 *       '200':
 *         description: Success
 */

/**
 * @swagger
 * /product/edit:
 *   post:
 *     summary: product
 *     description: product_edit
 *     tags: [product]
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
 *               stock:
 *                 type: number
 *                 description: stock
 *                 example: "1"
 *               price:
 *                 type: number
 *                 description: price
 *                 example: "1"
 *               productId:
 *                 type: string
 *                 description: product id
 *                 example: "example text"
 *               type:
 *                 type: number
 *                 description: type
 *                 example: "1"
 *               category:
 *                 type: number
 *                 description: category
 *                 example: "1"
 *               subCategory:
 *                 type: number
 *                 description: sub category
 *                 example: "1"
 *     responses:
 *       '200':
 *         description: Success
 */

/**
 * @swagger
 * /product/list:
 *   post:
 *     summary: product
 *     description: product_list
 *     tags: [product]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       '200':
 *         description: Success
 */

/**
 * @swagger
 * /product/view:
 *   post:
 *     summary: product
 *     description: product_view
 *     tags: [product]
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
 * /product/sales-list:
 *   post:
 *     summary: product
 *     description: product_sales_list
 *     tags: [product]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               sub_category:
 *                 type: number
 *                 description: sub_category
 *                 example: "1"
 *     responses:
 *       '200':
 *         description: Success
 */
    