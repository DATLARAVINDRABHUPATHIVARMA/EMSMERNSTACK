import express from 'express'
import authMiddleware from '../middleware/authMiddleware.js'
import { addClient, getClients } from '../controllers/clientController.js'

const router = express.Router()

router.get ('/', authMiddleware, getClients)
router.post ('/add', authMiddleware, addClient)

export default router