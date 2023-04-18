import express from 'express'
import { AddQuestion, DeleteQuestion, EditQuestion, GetAllQuestions,GetSingleQuestion,GetQuestionByPart } from '../controllers/question.js'

const router = express.Router()

router.post('/', AddQuestion)
router.delete('/:id', DeleteQuestion)
router.put('/:id', EditQuestion)
router.get('/', GetAllQuestions)
router.get('/find/:id', GetSingleQuestion)
router.get('/getQuestion', GetQuestionByPart)
export default router