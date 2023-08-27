import { Router } from "express";
import { createNewUser, loginUser } from '../controllers/userController.js';
import { registerBodyValidation, loginBodyValidation } from '../middleware/validationMiddelware.js';
const router = Router();
router.post('/login', loginBodyValidation, loginUser);
router.post('/register', registerBodyValidation, createNewUser);
export default router;
