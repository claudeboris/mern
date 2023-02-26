import espress from 'express'
import { login, register } from '../controllers/auth.js'

const router = espress.Router()

router.post('/register', register)
router.post('/login', login)

export default router