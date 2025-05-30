import express from 'express'
import authMiddleware from '../middleware/authMiddleware.js'
import { addClient } from '../controllers/clientController.js'

const router = express.Router()

router.post ('/add', authMiddleware, addClient)

export default router