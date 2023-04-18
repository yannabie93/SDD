import express from 'express'
import { getAllChoices, getUpdateChoices } from '../controllers/choices.js'

const router = express.Router()

router.get('/', getAllChoices)

router.put('/:id', getUpdateChoices)

export default router