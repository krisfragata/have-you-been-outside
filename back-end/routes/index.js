const express = require("express");
//import userController
const userController = require("../controllers/authController");

//initialize router for authentication
const router = express.Router();

router.post("/api/login", userController.login, (req, res) => {
  res.status(200).send(res.locals.loggedIn);
});

//listen for a post request and initialize authController
router.post("/api/signup", userController.createUser, (req, res) => {
  res.status(200).json(res.locals.newUser);
});

//export router
module.exports = router;
