const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
const cors = require('cors')

// components
const { tasksRouter } = require('./routes/tasks.route');
const { usersRouter } = require('./routes/users.route');
const { authRouter } = require('./routes/auth.router');

const app = express();

mongoose.connect("mongodb+srv://zohman:2323@cluster0.nhedlre.mongodb.net/tasks-app");

app.use(cors());
app.use(bodyParser.json());

app.use("/users", usersRouter);

app.use("/tasks", tasksRouter);

app.use("/auth", authRouter);

app.use("/", (req,res) => {
    return res.send({
        msg: "There is a start page of a server!"
    });
});


module.exports = {
    app
};