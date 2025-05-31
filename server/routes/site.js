import express from 'express'
import authMiddleware from '../middleware/authMiddleware.js'
import { addSite, getSites } from '../controllers/siteController.js'

const router = express.Router()

router.get ('/', authMiddleware, getSites)
router.post ('/add', authMiddleware, addSite)

export default router