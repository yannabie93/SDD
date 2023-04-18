import User from '../model/User.js'


import csv from 'csvtojson'

export const importUser = async (req, res) => {
    try {
        const userData = [];
        const response = await csv().fromFile(req.file.path);

        for (let x = 0; x < response.length; x++) {
            const existingUser = await User.findOne({ email: response[x].email });

            if (!existingUser) {
                userData.push({
                    firstName: response[x].FirstName,
                    middleName: response[x].MiddleName,
                    lastName: response[x].LastName,
                    suffix: response[x].Suffix,
                    password: 'ChangeMe!23',
                    type: response[x].Type,
                    email: response[x].Email,
                    affiliation: response[x].Affiliation

                });
            }
        }

        await User.insertMany(userData);

        res.send({ status: 200, success: true, msg: 'CSV Imported' });
    } catch (error) {
        res.send({ status: 400, success: false, msg: error.message });
    }
};


