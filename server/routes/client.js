import express from 'express'
import authMiddleware from '../middleware/authMiddleware.js'
import { addClient, getClient, getClients, updateClient } from '../controllers/clientController.js'

const router = express.Router()

router.get ('/', authMiddleware, getClients)
router.post ('/add', authMiddleware, addClient)
router.get ('/:id', authMiddleware, getClient)
router.put ('/:id', authMiddleware, updateClient)

export default router