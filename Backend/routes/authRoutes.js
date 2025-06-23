const express=require('express');
const router=express.Router();
const {userRegistration, globalLogin, logout} = require('../Controllers/auth');
const authenticateUser = require('../middlewares/usermiddleware');
//user registration route
router.post('/register',userRegistration);
//user login
router.post('/login',globalLogin);
//logout
router.post('/logout',logout);

module.exports = router;
