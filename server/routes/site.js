import express from 'express'
import authMiddleware from '../middleware/authMiddleware.js'
import { addSite } from '../controllers/siteController.js'

const router = express.Router()

router.post ('/add', authMiddleware, addSite)

export default router