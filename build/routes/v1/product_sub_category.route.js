"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var product_sub_category_controller_1 = __importDefault(require("../../controllers/product_sub_category.controller"));
var express_1 = __importDefault(require("express"));
var authenticate_1 = require("../../middlewares/authenticate");
var router = express_1.default.Router();
router.post('/add', authenticate_1.authenticate, product_sub_category_controller_1.default.product_sub_category_add);
router.post('/list', authenticate_1.authenticate, product_sub_category_controller_1.default.product_sub_category_list);
router.post('/edit', authenticate_1.authenticate, product_sub_category_controller_1.default.product_sub_category_edit);
router.post('/view', authenticate_1.authenticate, product_sub_category_controller_1.default.product_sub_category_view);
router.post('/category-list', authenticate_1.authenticate, product_sub_category_controller_1.default.product_sub_category_select);
router.post('/sales-list', authenticate_1.authenticate, product_sub_category_controller_1.default.product_sub_category_sales_list);
exports.default = router;
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
//# sourceMappingURL=product_sub_category.route.js.map