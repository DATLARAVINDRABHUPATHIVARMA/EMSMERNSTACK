import express from 'express'
import authMiddleware from '../middleware/authMiddleware.js'
import  {addEmployee, upload} from '../controllers/EmployeeController.js'

const router = express.Router()

router.post ('/add', authMiddleware, upload.single('image'), addEmployee)
// router.get ('/', authMiddleware, getDepartments)
// router.get ('/:id', authMiddleware, editDepartment)
// router.put ('/:id', authMiddleware, updateDepartment)
// router.delete ('/:id', authMiddleware, deleteDepartment)

export default router