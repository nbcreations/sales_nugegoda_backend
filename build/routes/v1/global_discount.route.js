"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var global_discount_controller_1 = __importDefault(require("../../controllers/global_discount.controller"));
var express_1 = __importDefault(require("express"));
var authenticate_1 = require("../../middlewares/authenticate");
var router = express_1.default.Router();
router.post('/edit', authenticate_1.authenticate, global_discount_controller_1.default.global_discount_update);
router.get('/view', authenticate_1.authenticate, global_discount_controller_1.default.global_discount_view);
exports.default = router;
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
//# sourceMappingURL=global_discount.route.js.map