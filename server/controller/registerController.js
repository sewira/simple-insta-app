const User = require('../database/model/userModel');

exports.register = async (req, res) => {
  try {
    const findUser = await User.findOne({ email: req.body.email })
    if(findUser){
      res.status(404).json({
        statusText: "Not Found",
        message: "User already Registered"
      });
    } else {
      const user = await new User({
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
      });
      user.save(user);

      res.status(200).json({
        message: "OK",
        data: user
      });
    }
  } catch (error) {
    console.log("🦄 ~ file: userController.js ~ line 7 ~ exports.register= ~ error", error)
    res.status(400).json({
      message: 'Something went wrong while processing your request',
      data: error.message
    });
  }
}

exports.login = async (req, res) => {
  try {
    const findUser = await User.findOne({ email: req.body.email })
    if(!findUser){
      res.status(404).json({
        statusText: "Not Found",
        message: "User not found"
      });
    } else {
      res.status(200).json({
        message: "OK",
        data: findUser
      });
    }
  } catch (error) {
    console.log("🦄 ~ file: userController.js ~ line 7 ~ exports.register= ~ error", error)
    res.status(400).json({
      message: 'Something went wrong while processing your request',
      data: error.message
    });
  }
}