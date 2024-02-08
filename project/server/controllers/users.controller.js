const mongoose = require('mongoose');

const MyModel = mongoose.model('users', new mongoose.Schema({ name: String, surname: String, email: String, password: String}));

async function getAllUsers(req, res) {
    try {
    
        const users = await MyModel.find({}).exec();
       
        return res.json(users);
    } catch(e) {
        res.json({ msg:  e.message })
    }
}

async function newUser(req, res) {
    console.log('[req.params]', req.query);

    const newObj = await MyModel.create({
        name: req.query.name,
        email: req.query.email,
        password: req.query.password,
        surname: req.query.surname,
    });

    await newObj.save()

    return res.json({createdObject: newObj})
}

async function getUserById (req, res) {
    const userNumber = req.url.slice(1);

    try {
        const MyModel = mongoose.model('users');
    
        const user = await MyModel.findOne({
            id: userNumber
        }).exec();
       
        return res.json(user);
    } catch(e) {
        return e.message;
    }
}

module.exports = {
    getAllUsers,
    getUserById,
    newUser
}