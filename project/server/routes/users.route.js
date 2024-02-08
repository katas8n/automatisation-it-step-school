const usersRouter = require('express').Router({ mergeParams: true });
const { getAllUsers, getUserById, newUser } = require('../controllers/users.controller');


usersRouter.get("", getAllUsers);

usersRouter.post("", newUser);

usersRouter.get("/:id", getUserById);


module.exports = {
    usersRouter
};