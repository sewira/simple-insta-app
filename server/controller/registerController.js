const User = require('../database/model/userModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { v4: uuidv4 } = require('uuid');

exports.register = async (req, res) => {
  try {
    const findUser = await User.findOne({ username: req.body.username })
    if(findUser){
      res.status(400).json({
        statusText: "Bad Request",
        message: "User already Registered"
      });
    } else {
      const user = await new User({
        email: req.body.email,
        username: req.body.username,
        password: bcrypt.hashSync(req.body.password, 10),
      });
      user.save(user);

      res.status(201).json({
        statusText: "Created",
        message: "Register Success",
        data: user
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
      data: error.message
    });
  }
}

exports.login = async (req, res) => {
  try {
    const findUser = await User.findOne({ username: req.body.username }).exec();
    if(!findUser){
      res.status(401).json({
        statusText: "Unauthorized",
        message: "Incorrect Username or Password"
      });
    } else {
      const checkPassword = await bcrypt.compare(req.body.password, findUser.password);

      if(checkPassword) {
        const session_id = uuidv4();

        findUser.session_id = session_id;
        findUser.save();

        const generateToken = await jwt.sign(
          { id: findUser._id, session_id },
          process.env.SECRET_KEY
        );

        res.status(200).json({
          statusText: "OK",
          message: "Login Success",
          data: {
            userId: findUser._id  
          },
          token: generateToken,
        });
      }
    }
  } catch (error) {
    res.status(500).json({
      statusText: "Internal Server Error",
      message: error.message
    });
  }
}

exports.logout = async (req, res) => {
  try {
    const deleteSessionId = await User.findOneAndUpdate(
      { _id: req.params.user_id },
      { session_id: null }
    );

    res.status(200).json({
      statusText: "OK",
      message: "Logout Success",
    });
  } catch (error) {
    res.status(500).json({
      statusText: "Internal Server Error",
      message: error.message
    });
  }
}