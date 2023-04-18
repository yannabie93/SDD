import express from 'express'
import { LoginAdmin, LoginSuperAdmin, LoginTechAdmin, LoginUser } from '../controllers/auth.js'

const router = express.Router()

router.post('/', LoginAdmin)
router.post('/user', LoginUser)
router.post('/loginTech', LoginTechAdmin)
router.post('/loginSuperAdmin',LoginSuperAdmin)

export default router