import AdminUser from "../model/AdminUser.js";

export const AddAdmin = async (req,res) =>{
    const {firstName, lastName, middleName, suffix, email, affiliation, password, superAdmin, techAdmin} = req.body;

    if(!firstName || !lastName || !email || !affiliation ) 
    return res.status(400).json("Please add all fields")

    try {
        const newAdmin = new AdminUser({
            firstName,
            lastName,
            middleName,
            suffix,
            email,
            affiliation,
            password,
            superAdmin,
            techAdmin
        })
        const savedAdmin = await newAdmin.save()
        res.status(200).json(savedAdmin)
    } catch (error) {
        res.status(500).json({error:error.message});

    }
}

export const GetAllAdmins = async (req,res) =>{
    try {
        const admin = await AdminUser.find().exec()
        res.status(200).json(admin)
    } catch (error) {
        res.status(500).json({error:error.message});
    }
}

export const GetSingleAdmin = async (req,res) =>{
    try {
        const admin = await AdminUser.findById(req.params.id).exec()
        res.status(200).json(admin)

    } catch (error) {
        res.status(400).json({error:error.message});
    }
}

export const UpdateAdmin = async (req,res) =>{
    try {
        const updateAdmin = await AdminUser.findByIdAndUpdate(req.params.id,{
            $set: req.body
        }, {new:true})
        res.status(200).json(updateAdmin)
    } catch (error) {
        res.status(500).json(error)
    }
}

export const DeleteAdmin = async (req,res) => {
    try {
        await AdminUser.findByIdAndDelete(req.params.id)
        res.status(200).json("Admin Deleted!")
    } catch (error) {
        res.status(500).json(error)        
    }
}