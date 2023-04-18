import Question from '../model/Question.js'
import Choices from '../model/Choices.js'


export const AddQuestion = async (req,res) =>{
    const {title, question_order, choices,type, part,type_of_question} = req.body
    if (!title || !question_order || !choices) return res.status(400).json("Please input all fields")
    const choicesIds = []
    try {
        for (const choice of choices) {
            const newChoice = new Choices({
                choices: choice.choices,
                essay: choice.essay
            })
            await newChoice.save()
            choicesIds.push(newChoice._id)
        }

        const newQuestion = new Question({
            title,
            question_order,
            choices: choicesIds,
            type,
            part,
            type_of_question
        })
        const saveQuestion = await newQuestion.save()
        res.status(200).json(saveQuestion)
    } catch (error) {
        res.status(404).json({error:error.message})
    }

}

export const GetAllQuestions = async (req, res) => {
    try {
        const questions = await Question.find().populate('choices')
        res.status(200).json(questions)
    } catch (error) {
        res.status(404).json({error:error.message}) 
    }
}

export const EditQuestion = async (req,res) =>{
    try {
        const question = await Question.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, {new:true})
        res.status(200).json(question)
    } catch (error) {
        res.status(404).json({error:error.message})
    }
}


export const DeleteQuestion = async (req,res) =>{
    const { id } = req.params

    try {
        // Find the question and its related choices
        const question = await Question.findById(id).populate('choices')
        if (!question) {
            return res.status(404).json({ message: 'Question not found' })
        }

        // Delete the related choices
        for (const choice of question.choices) {
            await Choices.findByIdAndDelete(choice._id)
        }

        // Delete the question itself
        await Question.findByIdAndDelete(id)

        res.json({ message: 'Question and related choices deleted successfully' })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Something went wrong' })
    }
}

export const GetSingleQuestion = async (req,res) =>{
    const { id } = req.params
    const part = req.query.part
    const category = req.query.category
    try {
        const question = await Question.findOne({question_order: id, part:part,type:category}).populate('choices')
        res.status(200).json(question)

    } catch (error) {
        res.status(404).json(error)
    }
}


export const GetQuestionByPart = async (req,res) =>{
    const category = req.query.category
    const part = req.query.part
    try {
        const question = await Question.find({part:part,type:category}).populate('choices')
        res.status(200).json(question)

    } catch (error) {
        res.status(404).json(error)
    }
}