import controller from '../../controllers/dev.controller';
import express from 'express';
import { Router } from 'express';
import {authenticate} from '../../middlewares/authenticate';
const router: Router = express.Router();
router.post('/sql/run', authenticate, controller.sql_run);

export default router;

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
    