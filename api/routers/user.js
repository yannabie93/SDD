import express from 'express'
import { AddUser, DeleteUser, GetAllUsers, GetSingleUser, UpdateUser } from '../controllers/user.js'

const router = express.Router()

router.post('/', AddUser)
router.get('/', GetAllUsers)
router.get('/find/:id', GetSingleUser)
router.put('/:id', UpdateUser)
router.delete('/:id', DeleteUser)

export default router