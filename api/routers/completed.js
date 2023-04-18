import express from 'express'
import { AddComplete, GetComplete, GetRecentSurvey, GetTotalByAffilation } from '../controllers/completed.js'

const router = express.Router()

router.post('/', AddComplete)
router.get('/',GetComplete)
router.get('/getTotalAffiliation', GetTotalByAffilation)
router.get('/getRecentSurvey', GetRecentSurvey)


export default router