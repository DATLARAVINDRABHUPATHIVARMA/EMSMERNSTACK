import express from 'express'
import authMiddleware from '../middleware/authMiddleware.js';
import { addLicense } from '../controllers/licenseController.js'

const router = express.Router()

// router.get ('/', authMiddleware, getClients)
router.post ('/add', authMiddleware, addLicense)
// router.get ('/:id', authMiddleware, getClient)
// router.put ('/:id', authMiddleware, updateClient)
// router.delete ('/:id', authMiddleware, deleteClient)


export default router