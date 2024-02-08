const authRouter = require('express').Router();
const { addNewUser } = require('../controllers/auth.controller');

authRouter.post("", addNewUser);

module.exports = {
    authRouter
}