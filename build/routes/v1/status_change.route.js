"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var status_change_controller_1 = __importDefault(require("../../controllers/status_change.controller"));
var express_1 = __importDefault(require("express"));
var authenticate_1 = require("../../middlewares/authenticate");
var router = express_1.default.Router();
router.post('/', authenticate_1.authenticate, status_change_controller_1.default.status_change);
exports.default = router;
/**
 * @swagger
 * tags:
 *   name: status_change
 *   description: status_change management
 */
/**
 * @swagger
 * /status-change/:
 *   post:
 *     summary: status_change
 *     description: status_change
 *     tags: [status_change]
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
 *               status:
 *                 type: number
 *                 description: status
 *                 example: "1"
 *     responses:
 *       '200':
 *         description: Success
 */
//# sourceMappingURL=status_change.route.js.map