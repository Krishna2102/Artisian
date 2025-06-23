require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const connectDb = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const helmet = require('helmet');
const userRoutes = require('./routes/userRoutes'); // Make sure the path is correct
const bodyParser = require('express').json;
const productRoutes = require('./routes/productRoutes');
const jwt = require("jsonwebtoken")

console.log('authRoutes is:', typeof authRoutes);
// Initialize express app
const app = express();
console.log("hello")
console.log("hello")
connectDb();
// createAdmin(); // Call the function to ensure admin user is created
//using the cors
const corsOptions = {
    origin: 'http://localhost:5173',
    credentials: true,
};
app.use(cors(corsOptions));
app.use(bodyParser()); // Ensure request body is parsed

// Middleware
app.use(express.json()); // Parse JSON request body

// Routes
app.use('/api/auth', authRoutes); // Prefix routes with /api/auth
app.use('/api/user', userRoutes);
app.use('/api/user',productRoutes);


// Start the server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});