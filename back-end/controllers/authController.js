//import instance of User schema
const User = require("../models/User");

authController = {};

authController.login = async (req, res, next) => {
  const { username, password } = req.body;
  //create a response object for front-end to interprate
  const authResponse = {
    userExists: false,
    username: "",
  };
  res.locals.authResponse = authResponse;
  return User.findOne({ username: username, password: password }).then(
    (user) => {
      if (user) {
        authResponse.username = user.username;
        authResponse.userExists = true;
      }
      return next();
    }
  );
};

//access req body's inputs and create a new user
authController.createUser = async (req, res, next) => {
  const signupResponse = {
    validEmail: false,
    validUsername: false,
    validPassword: false,
    message: "",
  }
  res.locals.signupResponse = signupResponse;
  const { username, password, email } = req.body;
    User.findOne( {$or: [{ username: username }, {email: email}]}).then(
      (existingUser) => {
        if (existingUser) {
          console.log(existingUser);
          signupResponse.message = 'username or email already exist. Try again!';
          return next();
        } else{
          signupResponse.message = "you made a new user!";
          User.create({username, password, email}).then(user => {
            if (user) {
              signupResponse.validEmail = true;
              signupResponse.validUsername = true;
              signupResponse.validPassword = true;
              return next();
            }
            else{
              signupResponse.message = "error creating user. Try reloading the page"
            }
          })
        }
      }
    )
    .catch (error => {
    signupResponse.message = 'something went wrong. Error 500';
    return next({
      log: "authController: ERROR: 400",
      message: {
        err: "must have unique email",
      },
      status: 500,
    });
  })
}

module.exports = authController;
