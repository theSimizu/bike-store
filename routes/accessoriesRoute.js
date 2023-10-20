import { Router } from "express"
import { registerAccessory, getAccessory } from "../controllers/accessoriesController.js"

const router = Router()

router.get('/:id', getAccessory)
router.post('/register', registerAccessory)

export default router