import controller from '../../controllers/user.controller';
import express from 'express';
import { Router } from 'express';
import {authenticate} from '../../middlewares/authenticate';
const router: Router = express.Router();
router.post('/login', controller.user_login);

export default router;

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
    