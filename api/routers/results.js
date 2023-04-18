import express from 'express'

import { AddResult, CompletedResults, GetResults, ResultQuestionChart, ResultQuestionChartEssay, ResultQuestionChartSuperAdmin, ResultQuestionSuperAdmin } from '../controllers/results.js'




const router = express.Router()

router.post('/',AddResult )
router.get('/', GetResults)
router.post('/completed', CompletedResults)

//Charts

router.get('/resultChart', ResultQuestionChart)


//SuperAdmin

router.get('/resultChartSuperAdmin', ResultQuestionChartSuperAdmin)



//Others
router.get('/resultEssay', ResultQuestionChartEssay)

router.get('/resultEssaySuperAdmin', ResultQuestionSuperAdmin)


export default router