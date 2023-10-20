import { Router } from "express"
import { registerClient, getClient } from "../controllers/clientsController.js"

const router = Router()

router.get('/:id', getClient)
router.post('/register', registerClient)

export default router