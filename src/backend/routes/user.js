/* eslint-disable no-undef */
const express = require('express');
const userRouter = express.Router();
const loginController = require('../controllers/loginController');
const registerController = require('../controllers/registerController');

userRouter.post('/login', loginController.loginUser);
userRouter.post('/register', registerController.registerUser);

module.exports = userRouter;