import mongoose from "mongoose";
const {Schema} = mongoose;

const CompletedSchema = new Schema({
    email : {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    category:{
        type:String,
    },
    affiliation:{
        type: String,
    },
},   { timestamps: true },
)

const Completed= mongoose.model('Complete', CompletedSchema)

export default  Completed