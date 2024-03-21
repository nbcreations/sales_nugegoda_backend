"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var delete_data_controller_1 = __importDefault(require("../../controllers/delete_data.controller"));
var express_1 = __importDefault(require("express"));
var authenticate_1 = require("../../middlewares/authenticate");
var router = express_1.default.Router();
router.post('/', authenticate_1.authenticate, delete_data_controller_1.default.delete_data);
exports.default = router;
/**
 * @swagger
 * tags:
 *   name: delete_data
 *   description: delete_data management
 */
/**
 * @swagger
 * /delete-data/:
 *   post:
 *     summary: delete_data
 *     description: delete_data
 *     tags: [delete_data]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               tableId:
 *                 type: number
 *                 description: table id
 *                 example: "1"
 *               resultId:
 *                 type: number
 *                 description: result id
 *                 example: "1"
 *     responses:
 *       '200':
 *         description: Success
 */
//# sourceMappingURL=delete_data.route.js.map