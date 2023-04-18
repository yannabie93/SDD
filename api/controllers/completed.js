import Completed from "../model/CompletedSurvey.js";
import User from '../model//User.js'

export const AddComplete = async (req,res) =>{
    const {email, affiliation, category} = req.body

    const user = await User.findOne({ email });

    if (!user) {
      // Handle user not found error
      return res.status(404).json({ message: "User not found" });
    }


    try {
        const newCompleted = new Completed({
            email: user._id,
            affiliation,
            category,
        })
        
        const savedNewCompleted = await newCompleted.save()
        res.status(200).json(savedNewCompleted)
    } catch (error) {
        res.status(400).json(error)
    }

}

export const GetComplete = async (req,res) =>{
    try {
        const completed = await Completed.find()
        res.status(200).json(completed)
    } catch (error) {
        res.status(400).json(error)
    }
}


export const GetTotalByAffilation = async (req,res) =>{
    const affiliate = req.query.affiliate
    const category = req.query.category

    try {
        let results
        if(affiliate){
             results = await Completed.find({affiliation: affiliate}).count()
        } else if(category){
             results = await Completed.find({category: category}).count()
        }
        res.status(200).json(results)
    } catch (error) {
        res.status(error).json(error)
    }
}


export const GetRecentSurvey = async (req,res) =>{
    const affiliate = req.query.affiliate

    try {
        let results
        if(affiliate){
             results = await Completed.find({affiliation: affiliate})
                        .populate({path: "email", select: "firstName  lastName email"})
                        .sort({createdAt: 'desc'})

        } else{
             results = await Completed.find().populate({path: "email", select: "firstName  lastName email"})
             .sort({createdAt: 'desc'})
        }
        res.status(200).json(results)
    } catch (error) {
        res.status(error).json(error)
    }
}


// export const GetRecentSurvey = async (req, res) => {
//     const affiliate = req.query.affiliate;
//     const startDate = req.query.startDate ? new Date(req.query.startDate) : null;
//     const endDate = req.query.endDate ? new Date(req.query.endDate) : null;
    
//     if (!startDate || isNaN(startDate.getTime())) {
//         return res.status(400).json({ message: "Invalid start date" });
//     }
    
//     if (!endDate || isNaN(endDate.getTime())) {
//         return res.status(400).json({ message: "Invalid end date" });
//     }
    
//     try {
//       let results;
//       if (affiliate) {
//         results = await Completed.find({
//           affiliation: affiliate,
//           createdAt: { $gte: startDate, $lte: endDate }, // Filter by date range
//         })
//           .populate({ path: "email", select: "firstName  lastName email" })
//           .sort({ createdAt: "desc" });
//       } else {
//         results = await Completed.find({
//           createdAt: { $gte: startDate, $lte: endDate }, // Filter by date range
//         });
//       }
//       res.status(200).json(results);
//     } catch (error) {
//       res.status(error).json(error);
//     }
//   };