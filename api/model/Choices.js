import mongoose from "mongoose";
const {Schema} = mongoose;

const ChoicesSchema = new Schema({
    choices: {
        type: String,
        required: true
    },
    essay: {
        type: Boolean,
        default: false
    } 
})

const Choices = mongoose.model('Choices', ChoicesSchema);

export default Choices

//   "choices": ["Tagalog","Ilokano","Kapampangan","Bikolano","Aeta", "Igorot", "Ivatan", "Mangyan", "Cebuano","Waray","Ilonggo", "Ati","Salundon","Badjao", "Yakan","B'laan","T'boli","Tausug","Bagobo","Maranao",{"choices": "Others, specify", "others": true}, {"choices": "Foreign, specify", "others": true}]