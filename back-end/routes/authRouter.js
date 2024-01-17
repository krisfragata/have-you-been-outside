const express = require('express');
//import userController
const userController = require('../controllers/authController');

//initialize router for authentication
const authRouter = express.Router();

//listen for a post request and initialize authController
authRouter.post('/signup', userController.createUser, (req, res) => {
  res.status(200).json(res.locals.newUser);
});

//export authRouter
module.exports = authRouter;