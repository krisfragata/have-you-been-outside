//import instance of User schema
const User = require('../models/User');

authController = {};

//access req body's inputs and create a new user 
authController.createUser = async (req, res, next) =>{
  try{
    const { username, password, email } = req.body;
    console.log(req.body);
    const newUser = await User.create({username, password, email});
    // await newUser.save();


    res.locals.newUser = {user: newUser};
    console.log(newUser);

    return next();
  }catch(error){
    return next({
      log: 'authController: ERROR: 400',
        message: {
          err: 'must have unique email'
        },
        status: (500),
    })
  }
}

module.exports = authController;