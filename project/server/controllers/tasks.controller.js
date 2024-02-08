const mongoose = require('mongoose');

const MyModel = mongoose.model('tasks', new mongoose.Schema({ title: String, description: String}));

async function getAllTasks(req, res) {
    try {
    
        const data = await MyModel.find({}).exec();
    
        return res.json(data)
    
    } catch(e) {
        console.log('[e.message]', e.message);
    }
}

async function getTask(req, res) {
    try {   
        const startStr = req.url.indexOf("/");

        const id = req.url.slice(startStr+1);
    
        const data = await MyModel.findOne({id: id}).exec();
    
        return res.json(data)
    
    } catch(e) {
        console.log('[e.message]', e.message);
    }
}


module.exports = {
    getAllTasks,
    getTask
}