"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var product_controller_1 = __importDefault(require("../../controllers/product.controller"));
var express_1 = __importDefault(require("express"));
var authenticate_1 = require("../../middlewares/authenticate");
var router = express_1.default.Router();
router.post('/category/list', authenticate_1.authenticate, product_controller_1.default.product_category_list);
router.post('/type/list', authenticate_1.authenticate, product_controller_1.default.product_type_list);
router.post('/add', authenticate_1.authenticate, product_controller_1.default.product_add);
router.post('/edit', authenticate_1.authenticate, product_controller_1.default.product_edit);
router.post('/list', authenticate_1.authenticate, product_controller_1.default.product_list);
router.post('/view', authenticate_1.authenticate, product_controller_1.default.product_view);
router.post('/sales-list', authenticate_1.authenticate, product_controller_1.default.product_sales_list);
exports.default = router;
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
//# sourceMappingURL=product.route.js.map