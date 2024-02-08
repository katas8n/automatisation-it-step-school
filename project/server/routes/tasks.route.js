const tasksRouter = require('express').Router();
const { getAllTasks,getTask } = require('../controllers/tasks.controller');

tasksRouter.get("", getAllTasks);
tasksRouter.get("/:id", getTask);

module.exports = {
    tasksRouter
}