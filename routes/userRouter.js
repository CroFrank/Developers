import { Router } from "express";
import { createNewUser, loginUser, logout } from '../controllers/userController.js';
import { registerBodyValidation, loginBodyValidation } from '../middleware/validationMiddelware.js';
const router = Router();
router.post('/login', loginBodyValidation, loginUser);
router.post('/register', registerBodyValidation, createNewUser);
router.get('/logout', logout);
export default router;
