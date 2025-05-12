import express from 'express';
import { login, verify } from '../controllers/authController.js';


const router = express.Router();

router.post('/login', login)
router.post('/verify', authM, verify)

export default router;