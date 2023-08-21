import { Router } from "express";
import { getAllDevs, createNewDev, getSpecificDev, updateSpecificDev, deleteDev } from '../controllers/devController.js';
const router = Router();
router.get('/', getAllDevs);
router.post('/', createNewDev);
router.get('/:id', getSpecificDev);
router.patch('/:id', updateSpecificDev);
router.delete('/:id', deleteDev);
export default router;
