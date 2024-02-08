const mongoose = require('mongoose');

const MyModel = mongoose.model('Users',{name :String , surname: String, email: String, password: String, id: String});

async function addNewUser(req, res) {
    try {   
        const foundData = await MyModel.find({}).exec();

        if(req.body.email.length < 5) return res.status(200).json({ msg: "Are you kidding me?" })
    
        await MyModel.create({
            "name": "John",
            "surname": "Doe",
            "email": req.body.email,
            "password": req.body.password,
            "id": foundData.length
        });

        const newData = await MyModel.find({}).exec();

        // return res.json(data)
        return res.json(newData);
    
    } catch(e) {
        console.log('[e.message]', e.message);
    }
}

function authentication() {

}


module.exports = {
    addNewUser
}