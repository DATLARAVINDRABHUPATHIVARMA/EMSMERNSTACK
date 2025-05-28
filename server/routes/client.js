import express from 'express'
import authMiddleware from '../middleware/authMiddleware.js'
import  {addClient, getClients, editClient, updateClient, deleteClient} from '../controllers/clientController.js'

const router = express.Router()

router.post ('/add', authMiddleware, addClient)
router.get ('/', authMiddleware, getClients)
router.get ('/:id', authMiddleware, editClient)
router.put ('/:id', authMiddleware, updateClient)
router.delete ('/:id', authMiddleware, deleteClient)

export default router