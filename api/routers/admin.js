import express from 'express'
import { AddAdmin, DeleteAdmin, GetAllAdmins, GetSingleAdmin, UpdateAdmin } from '../controllers/admin.js'

const router = express.Router()

router.post('/', AddAdmin)
router.get('/', GetAllAdmins)
router.get('/find/:id', GetSingleAdmin)
router.put('/:id', UpdateAdmin)
router.delete('/:id', DeleteAdmin)

export default router