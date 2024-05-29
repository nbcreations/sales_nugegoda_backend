import controller from '../../controllers/bank.controller';
import express from 'express';
import { Router } from 'express';
import {authenticate} from '../../middlewares/authenticate';
const router: Router = express.Router();
router.post('/add', authenticate, controller.bank_add);
router.post('/edit', authenticate, controller.bank_edit);
router.post('/view', authenticate, controller.bank_view);
router.get('/list', authenticate, controller.bank_list);
router.get('/active/list', controller.bank_active_list);

export default router;

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
    