import Results from '../model/Result.js'

export const AddResult = async (req,res) =>{
    const {choice, category, part, essay, affiliation,email, question_order} = req.body

    try {
        const newResult = new Results({
            choice,
            category,
            part,
            essay,  
            affiliation,
            email,
            question_order
        })
        const savedResult = await newResult.save()
        res.status(200).json(savedResult)
    } catch (error) {
        res.status(400).json(error);
 
    }
}

export const GetResults = async (req,res) =>{
    try {
        const results = await Results.find()
        res.status(200).json(results)
    } catch (error) {
        res.status(400).json(error);
    }
}

export const CompletedResults = async (req,res) =>{
    const email = req.query.email

    try {
        const results = await Results.updateMany({email: email}, {$set: {status: true}})
        res.status(200).json(results)
    } catch (error) {
        res.status(400).json(error)
    }
}

//Charts

export const ResultQuestionChart = async (req,res) =>{
    const question_order = req.query.question_order
    const affiliate = req.query.affiliate
    const part = req.query.part

    try {
        const results = await Results.aggregate([
            // Match documents that meet the specified criteria
            {$match: {question_order: question_order, affiliation: affiliate, part: part, status: true}},
            // Unwind the choices array to create a new document for each choice
            {$unwind: "$choice"},
            // Group the documents by choice and count the number of documents in each group
            {$group: {_id: "$choice", count: {$sum: 1}}},
            // Rename the _id field to "name"
            {$project: {name: "$_id", count: 1, _id: 0}},
        ])

        res.status(200).json(results)
    } catch (error) {
        res.status(400).json(error)
    }
}

export const ResultQuestionChartSuperAdmin = async (req,res) =>{
    const question_order = req.query.question_order
    const category = req.query.category
    const part = req.query.part

    try {
        const results = await Results.aggregate([
            // Match documents that meet the specified criteria
            {$match: {question_order: question_order, category: category, part: part, status: true}},
            // Unwind the choices array to create a new document for each choice
            {$unwind: "$choice"},
            // Group the documents by choice and count the number of documents in each group
            {$group: {_id: "$choice", count: {$sum: 1}}},
            // Rename the _id field to "name"
            {$project: {name: "$_id", count: 1, _id: 0}},
        ])

        res.status(200).json(results)
    } catch (error) {
        res.status(400).json(error)
    }

    
}

export const ResultQuestionChartEssay = async (req,res) =>{
    const question_order = req.query.question_order
    const affiliate = req.query.affiliate
    const part = req.query.part
    try {
        
        const result = await Results.find({ essay: { $ne: "" }, question_order: question_order, affiliation: affiliate, part: part, status: true}, { essay: 1, _id: 0 },  );
        res.status(200).json(result);
    } catch (error) {
        console.log(error);
    }
}

export const ResultQuestionSuperAdmin = async (req,res) =>{
    const question_order = req.query.question_order
    const category = req.query.category
    const part = req.query.part
    try {
        
        const result = await Results.find({ essay: { $ne: "" }, question_order: question_order, category: category, part: part, status: true}, { essay: 1, _id: 0 },  );
        res.status(200).json(result);
    } catch (error) {
        console.log(error);
    }
}



//GET TOTAL RESPONDENTS
