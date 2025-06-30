import express from 'express'
import authMiddleware from '../middleware/authMiddleware.js'
import { addSalary, getSalary } from '../controllers/salaryController.js'


const router = express.Router()

// router.get ('/', authMiddleware, getClients)
router.post ('/add', authMiddleware, addSalary)
router.get ('/:id', authMiddleware, getSalary)
// router.put ('/:id', authMiddleware, updateClient)
// router.delete ('/:id', authMiddleware, deleteClient)


export default router