import express from 'express'
import authMiddleware from '../middleware/authMiddleware.js'
import { addSite, getSites, getSite, updateSite, deleteSite } from '../controllers/siteController.js'

const router = express.Router()

router.get ('/', authMiddleware, getSites)
router.post ('/add', authMiddleware, addSite)
router.get ('/:id', authMiddleware, getSite)
router.put ('/:id', authMiddleware, updateSite)
router.delete ('/:id', authMiddleware, deleteSite)

export default router