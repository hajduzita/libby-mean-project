const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, 'secret-word-jrgjfreágjhiohcbdewufd4d783ru92ut6749r3e2');
    req.userData = { email: decodedToken.email, userId: decodedToken.id }
    next();
  }
  catch (error) {
    console.log(error)
    res.status(401).json({
        message: 'Authentication failed in check-auth!'
      });
  }
}
