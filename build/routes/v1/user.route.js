"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var user_controller_1 = __importDefault(require("../../controllers/user.controller"));
var express_1 = __importDefault(require("express"));
var router = express_1.default.Router();
router.post('/login', user_controller_1.default.user_login);
exports.default = router;
/**
 * @swagger
 * tags:
 *   name: user
 *   description: user management
 */
/**
 * @swagger
 * /user/login:
 *   post:
 *     summary: user
 *     description: user_login
 *     tags: [user]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 description: email
 *                 example: "admin@gmail.com"
 *               password:
 *                 type: string
 *                 description: password
 *                 example: "example text"
 *     responses:
 *       '200':
 *         description: Success
 */
//# sourceMappingURL=user.route.js.map