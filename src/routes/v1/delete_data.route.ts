import controller from '../../controllers/delete_data.controller';
import express from 'express';
import { Router } from 'express';
import {authenticate} from '../../middlewares/authenticate';
const router: Router = express.Router();
router.post('/', authenticate, controller.delete_data);

export default router;

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
    