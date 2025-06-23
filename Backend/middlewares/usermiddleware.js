require('dotenv').config();
const express = require('express');
const jwt = require('jsonwebtoken')
const User = require('../Models/userModel')
const { tokenBlacklist } = require('../Controllers/auth')

const authenticateUser = async (req, res, next) => {
  const authHeader = req.header('Authorization');
  const token = authHeader?.replace('Bearer ', '');

  if (!token) {
    return res.status(401).json({ error: 'No token provided, authorization denied' });
  }

  // Check if token is blacklisted
  if (tokenBlacklist.has(token)) {
    return res.status(401).json({ error: 'Token is blacklisted, please login again' });
  }

  try {
    const decoded = jwt.verify(token, process.env.TOKEN_KEY);
    req.user = decoded;

    console.log('decoded token:', decoded);

    const user = await User.findById(req.user.user_id);

    if (!user) {
      console.log("User Not found");
      return res.status(401).json({ error: 'Invalid token - User not found' });
    }

    next();

  } catch (error) {
    console.log(error);
    return res.status(401).json({ error: "Unauthorized - Invalid Token" });
  }
};

module.exports = { authenticateUser, tokenBlacklist };
