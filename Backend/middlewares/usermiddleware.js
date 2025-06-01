require('dotenv').config(); // Load environment variables
const express = require('express');
const jwt = require("jsonwebtoken");
const User = require("../Models/userModel");

const authenticateUser = async (req, res, next) => {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    
    if (!token) {
        return res.status(401).json({ error: 'No token provided, authorization denied' });
    }

    try {
        // Decoding token
        const decoded = jwt.verify(token, process.env.TOKEN_KEY);
        req.user = decoded; // Attach the decoded user information to the request
        
        // Optionally log decoded data (for debugging)
        console.log('Decoded token:', decoded);
        
        // Fetch the user from the database
        const user = await User.findById(req.user.user_id);
        
        if (!user) {
            console.log("User Not found");
            return res.status(401).json({ error: 'Invalid token - User not found' });
        }

        next();
    } catch (error) {
        console.error("Auth Middleware Error:", error);
        return res.status(401).json({ error: 'Unauthorized - Invalid token' });
    }
};

module.exports = authenticateUser;
