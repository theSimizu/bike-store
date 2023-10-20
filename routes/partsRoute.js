import { Router } from "express"
import { registerPart, getPart } from "../controllers/partsController.js"

const router = Router()

router.get('/:id', getPart)
router.post('/register', registerPart)

export default router