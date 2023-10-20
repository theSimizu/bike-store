import { Router } from "express"
import { registerBike, getBike } from "../controllers/bikesController.js"

const router = Router()

router.get('/:id', getBike)
router.post('/register', registerBike)

export default router