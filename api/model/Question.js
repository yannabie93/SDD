import mongoose from "mongoose";
const {Schema} = mongoose;

const QuestionSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    question_order: {
        type: String,
    },
    type:{
        type: String,
        enum: ['faculty', 'students', 'employees'],
        required: [true, "Please input a category"],
    },
    part:{
        type: String,
        enum: ['part1','part2','part3','part4']
    },
    choices: [{
        type: Schema.Types.ObjectId,
        ref: 'Choices',
    }],
    //True Multiple or Single
    type_of_question: {
        type: Boolean,
        default: false
    },
    
    
})

const Question = mongoose.model('Question', QuestionSchema);

export default Question