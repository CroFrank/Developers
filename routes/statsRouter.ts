import { Router } from 'express'
import { registerBodyValidation } from '../middleware/validationMiddelware.js'
import { authorizePermissions } from '../middleware/authMiddelware.js'
const router = Router()

import {
    getCurrentUser,
    getApplicationStats,
    updateUser
} from '../controllers/statsController.js'

router.get('/current-user', getCurrentUser)
router.get('/admin/app-stats', authorizePermissions('admin'), getApplicationStats)
router.patch('/update-user', registerBodyValidation, updateUser)
export default router