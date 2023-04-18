import mongoose from "mongoose";
const {Schema} = mongoose;

const ResultsSchema = new Schema({
    email:{
        type:String
    },
    choice: {
        type: [String],
    },
    //Employee, faculty, students
    category:{
        type:String,
    },
    //part
    part:{
        type: String,
    },
    essay: {
        type: String,
    },
    question_order: {
        type: String,
    },
    affiliation:{
        type: String,
    },
    status:{
        type: Boolean,
        default: false,
    }
    
},   { timestamps: true },
)


const Results = mongoose.model('Results', ResultsSchema);

export default Results