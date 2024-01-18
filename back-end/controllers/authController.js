//import instance of User schema
const User = require("../models/User");

authController = {};

authController.login = async (req, res, next) => {
  console.log(req.body);
  return next();
  // User.find({}, (err, users) => {
  //   // if a database error occurs, call next with the error message passed in
  //   // for the express global error handler to catch
  //   if (err) return next('Error in userController.getAllUsers: ' + JSON.stringify(err));
  //   // store retrieved users into res.locals and move on to next middleware
  //   res.locals.users = users;
  //   return next();
  // });
};

//access req body's inputs and create a new user
authController.createUser = async (req, res, next) => {
  try {
    const { username, password, email } = req.body;
    console.log(req.body);
    const newUser = await User.create({ username, password, email });
    // await newUser.save();

    res.locals.newUser = { user: newUser };
    console.log(newUser);

    return next();
  } catch (error) {
    return next({
      log: "authController: ERROR: 400",
      message: {
        err: "must have unique email",
      },
      status: 500,
    });
  }
};

module.exports = authController;
