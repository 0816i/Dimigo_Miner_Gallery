const jwt = require("jsonwebtoken");
const user = require("../controller/user");

module.exports = (req, res, next) => {
  try {
    const token = req.cookies.token;
    res.locals.user = null;
    if (!token) {
      return next();
    }
    req.jwt = jwt.verify(token, "53cr37K3Y");
    res.locals.user = req.jwt;
    next();
  } catch (error) {
    res.clearCookie("token");
    return next();
  }
};
