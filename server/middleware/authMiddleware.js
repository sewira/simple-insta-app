const User = require("../database/model/userModel");
const jwt = require("jsonwebtoken");

exports.userAuth = async (req, res, next) => {
  try {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];

    if(token === null || token === undefined) return res.sendStatus(401);

    await jwt.verify(
      token,
      process.env.SECRET_KEY,
      async (err, data) => {
        if (err) {
          if (
            err.name === "JsonWebTokenError" ||
            err.name === "TokenExpiredError" ||
            err.name === "NotBeforeError"
          ) {
            return res.sendStatus(401);
          }
        }
        const userData = await User.findOne({ _id: data.id});
        console.log(userData);

        req.user = userData;
        next();
      }
    )
    // next();
  } catch (error) {
    return res.sendStatus(500);
  }
}