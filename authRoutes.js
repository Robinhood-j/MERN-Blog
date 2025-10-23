import express from 'express';
import {
  register,
  login,
  getProfile,
  updateProfile
} from '../controllers/authController.js';
import { protect } from '../middleware/authMiddleware.js';
import { validateRegistration, validateLogin } from '../middleware/validationMiddleware.js';

const router = express.Router();

router.post('/register', validateRegistration, register);
router.post('/login', validateLogin, login);
router.get('/profile', protect, getProfile);
router.put('/profile', protect, updateProfile);

export default router;