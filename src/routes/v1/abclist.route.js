const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const abclistController = require('../../controllers/abclist.controller');
const abclistValidation = require('../../validations/abclist.validation');

const router = express.Router();

router
  .route('/')
  .post(auth('manageAbclists'), validate(abclistValidation.createAbclist), abclistController.createAbclist)
  .get(auth('getAbclists'), validate(abclistValidation.getAbclists), abclistController.getAbclists);

router
  .route('/:abclistId')
  .get(auth('getAbclists'), validate(abclistValidation.getAbclist), abclistController.getAbclist)
  .patch(auth('manageAbclists'), validate(abclistValidation.updateAbclist), abclistController.updateAbclist)
  .delete(auth('manageAbclists'), validate(abclistValidation.deleteAbclist), abclistController.deleteAbclist);

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: Abclist
 *   description: Abclist management and retrieval
 */

/**
 * @swagger
 * /abclists:
 *   get:
 *     summary: Get all abclists
 *     description: Only admins can retrieve all abclists.
 *     tags: [Abclist]
 *     security:
 *       - bearerAuth: []
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
 *   post:
 *     summary: Create an abclist
 *     description: Only logged in users can post abclists.
 *     tags: [Abclist]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - topic
 *               - abclist
 *             properties:
 *               topic:
 *                 type: string
 *               abclist:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Abclist'
 *             example:
 *               topic: Tierwelt
 *               abclist: {"a": "Ameisenbär", "b": "Bullshark"}
 *     responses:
 *       "201":
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Abclist'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *
 */


/**
 * @swagger
 * /abclists/{id}:
 *   get:
 *     summary: Get an abclist
 *     description: Logged in users can fetch only their own abclists. Only admins can fetch other users abclists
 *     tags: [Abclist]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Abclist id
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Abclist'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   patch:
 *     summary: Update an abclist
 *     description: Logged in users can only update their own abclists. Only admins can update other users abclists
 *     tags: [Abclist]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Abclist id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *             schema:
 *                $ref: '#/components/schemas/Abclist'
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Abclist'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   delete:
 *     summary: Delete an abclist
 *     description: Logged in users can delete only their abclists. Only admins can delete other users abclists
 *     tags: [Abclist]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Abclist id
 *     responses:
 *       "200":
 *         description: No content
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 */
