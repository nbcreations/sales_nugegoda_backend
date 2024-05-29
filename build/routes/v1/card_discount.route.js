"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var card_discount_controller_1 = __importDefault(require("../../controllers/card_discount.controller"));
var express_1 = __importDefault(require("express"));
var authenticate_1 = require("../../middlewares/authenticate");
var router = express_1.default.Router();
router.post('/add', authenticate_1.authenticate, card_discount_controller_1.default.card_discount_add);
router.post('/edit', authenticate_1.authenticate, card_discount_controller_1.default.card_discount_edit);
router.post('/view', authenticate_1.authenticate, card_discount_controller_1.default.card_discount_view);
router.get('/list', authenticate_1.authenticate, card_discount_controller_1.default.card_discount_list);
exports.default = router;
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
//# sourceMappingURL=card_discount.route.js.map