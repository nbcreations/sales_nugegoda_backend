"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dev_controller_1 = __importDefault(require("../../controllers/dev.controller"));
var express_1 = __importDefault(require("express"));
var authenticate_1 = require("../../middlewares/authenticate");
var router = express_1.default.Router();
router.post('/sql/run', authenticate_1.authenticate, dev_controller_1.default.sql_run);
exports.default = router;
/**
 * @swagger
 * tags:
 *   name: dev
 *   description: dev management
 */
/**
 * @swagger
 * /dev/sql/run:
 *   post:
 *     summary: dev
 *     description: sql_run
 *     tags: [dev]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               query:
 *                 type: string
 *                 description: query
 *                 example: "example text"
 *     responses:
 *       '200':
 *         description: Success
 */
//# sourceMappingURL=dev.route.js.map