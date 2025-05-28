import express from 'express'
import authMiddleware from '../middleware/authMiddleware.js'
import  { getSites} from '../controllers/siteController.js'

const router = express.Router()

router.get ('/', authMiddleware, getSites)