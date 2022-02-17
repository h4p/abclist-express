const express = require('express');
const abclistController = require('../../controllers/abclist.controller');

const router = express.Router();
router.get('/', abclistController.getAbclists);

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: Abclist
 *   description: Abclist management and retrieval
 */

/**
 * @swagger
 * /abclist:
 *   get:
 *     summary: Get all abclists
 *     description: Only admins can retrieve all abclists.
 *     tags: [Abclist]
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 results:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Abclist'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 */
