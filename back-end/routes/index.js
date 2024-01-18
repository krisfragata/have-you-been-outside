const express = require("express");
//import userController
const authController = require("../controllers/authController");

//initialize router for authentication
const router = express.Router();

router.post("/api/login", authController.login, (req, res) => {
  res.status(200).json(res.locals.authResponse);
});

//listen for a post request and initialize authController
router.post("/api/signup", authController.createUser, (req, res) => {
  res.status(200).json(res.locals.signupResponse);
});

//export router
module.exports = router;
