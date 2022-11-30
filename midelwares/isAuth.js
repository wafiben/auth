const jwt = require("jsonwebtoken");
const User = require("../modelsOfProject/User");
const isAuth = async (req, res, next) => {
  try {
    const token = req.header("token");
    const verifyToken = jwt.verify(token, "shhhhh");
   if (!verifyToken) {
      res.status(400).json({ msg: "you are not authorized " });
    }
    if (verifyToken) {
      next();
    } 
  } catch (error) {
    res.status(500).json({ msg: "error server " });
  }
};
module.exports = isAuth;