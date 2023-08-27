import { Router } from "express";
import { getAllDevs, createNewDev, getSpecificDev, updateSpecificDev, deleteDev } from '../controllers/devController.js'
import { devBodyValidation, devParamsValidation } from '../middleware/validationMiddelware.js'

const router = Router()

router.get('/', getAllDevs)
router.post('/', devBodyValidation, createNewDev)
router.get('/:id', devParamsValidation, getSpecificDev)
router.patch('/:id', devBodyValidation, devParamsValidation, updateSpecificDev)
router.delete('/:id', devParamsValidation, deleteDev)

export default router