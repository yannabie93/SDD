import User from "../model/User.js";


export const AddUser = async (req,res) =>{
    const {firstName, lastName, middleName, suffix, email, type, password,affiliation } = req.body;

    if(!firstName || !lastName || !email || !type || !affiliation ) 
    return res.status(400).json("Please add all fields")

    try {
        const newUser = new User({
            firstName,
            lastName,
            middleName,
            suffix,
            email,
            type,
            password,
            affiliation
        })
        const savedUser = await newUser.save()
        res.status(200).json(savedUser)
    } catch (error) {
        res.status(500).json({error:error.message});

    }
}

export const GetAllUsers = async (req,res) =>{
    try {
        const users = await User.find()
        res.status(200).json(users)
    } catch (error) {
        res.status(500).json({error:error.message});
    }
}

export const GetSingleUser = async (req,res) =>{
    try {
        const user = await User.findById(req.params.id).exec()
        res.status(200).json(user)

    } catch (error) {
        res.status(400).json({error:error.message});
    }
}

export const UpdateUser = async (req,res) =>{
    try {
        const updateAdmin = await User.findByIdAndUpdate(req.params.id,{
            $set: req.body
        }, {new:true})
        res.status(200).json(updateAdmin)
    } catch (error) {
        res.status(500).json(error)
    }
}

export const DeleteUser = async (req,res) => {
    try {
        await User.findByIdAndDelete(req.params.id)
        res.status(200).json("Admin Deleted!")
    } catch (error) {
        res.status(500).json(error)        
    }
}