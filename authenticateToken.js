// middlewares/authenticateToken.js
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

const authenticateToken = async (req, res, next) => {
  const token = req.header('Authorization')?.split(' ')[1];
  if (!token) return res.sendStatus(401);

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id);
    if (!user) return res.sendStatus(404);

    req.user = user;
    next();
  } catch (error) {
    res.sendStatus(403);
  }
};

module.exports = authenticateToken;
