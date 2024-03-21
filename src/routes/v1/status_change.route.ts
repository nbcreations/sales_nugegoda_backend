import controller from '../../controllers/status_change.controller';
import express from 'express';
import { Router } from 'express';
import {authenticate} from '../../middlewares/authenticate';
const router: Router = express.Router();
router.post('/', authenticate, controller.status_change);

export default router;

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
    