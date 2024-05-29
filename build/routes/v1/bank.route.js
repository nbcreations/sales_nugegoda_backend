"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var bank_controller_1 = __importDefault(require("../../controllers/bank.controller"));
var express_1 = __importDefault(require("express"));
var authenticate_1 = require("../../middlewares/authenticate");
var router = express_1.default.Router();
router.post('/add', authenticate_1.authenticate, bank_controller_1.default.bank_add);
router.post('/edit', authenticate_1.authenticate, bank_controller_1.default.bank_edit);
router.post('/view', authenticate_1.authenticate, bank_controller_1.default.bank_view);
router.get('/list', authenticate_1.authenticate, bank_controller_1.default.bank_list);
router.get('/active/list', bank_controller_1.default.bank_active_list);
exports.default = router;
/**
 * @swagger
 * tags:
 *   name: bank
 *   description: bank management
 */
/**
 * @swagger
 * /bank/add:
 *   post:
 *     summary: bank
 *     description: bank_add
 *     tags: [bank]
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
 *     responses:
 *       '200':
 *         description: Success
 */
/**
 * @swagger
 * /bank/edit:
 *   post:
 *     summary: bank
 *     description: bank_edit
 *     tags: [bank]
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
 *     responses:
 *       '200':
 *         description: Success
 */
/**
 * @swagger
 * /bank/view:
 *   post:
 *     summary: bank
 *     description: bank_view
 *     tags: [bank]
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
 * /bank/list:
 *   get:
 *     summary: bank
 *     description: bank_list
 *     tags: [bank]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       '200':
 *         description: Success
 */
/**
 * @swagger
 * /bank/active/list:
 *   get:
 *     summary: bank
 *     description: bank_active_list
 *     tags: [bank]
 *     responses:
 *       '200':
 *         description: Success
 */
//# sourceMappingURL=bank.route.js.map