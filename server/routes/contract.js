import express from 'express'
import authMiddleware from '../middleware/authMiddleware.js'
import { addContract } from '../controllers/contractController.js'

const router = express.Router()

// router.get ('/', authMiddleware, getClients)
router.post ('/add', authMiddleware, addContract)
// router.get ('/:id', authMiddleware, getClient)
// router.put ('/:id', authMiddleware, updateClient)
// router.delete ('/:id', authMiddleware, deleteClient)


export default router