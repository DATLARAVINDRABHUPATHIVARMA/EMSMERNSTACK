import express from 'express'
import authMiddleware from '../middleware/authMiddleware.js'
import { changePassword } from '../controllers/settingController.js'

const router = express.Router()

// router.get ('/', authMiddleware, getClients) 
router.put ('/change-password', authMiddleware, changePassword)
// router.get ('/:id', authMiddleware, getSalary)
// router.put ('/:id', authMiddleware, updateClient)
// router.delete ('/:id', authMiddleware, deleteClient)


export default router