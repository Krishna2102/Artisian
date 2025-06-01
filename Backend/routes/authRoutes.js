const express=require('express');
const router=express.Router();
const {userRegistration, globalLogin} = require('../Controllers/auth');
const authenticateUser = require('../middlewares/usermiddleware');

//user registration route
router.post('/register',userRegistration);

//user login
router.post('/login',globalLogin);

//change password
// router.post('/change-password',authenticateUser,changePassword);

//logout
// router.post('/logout',userLogout);


// router.get('/check-followers',authenticateUser,hospitalList);
//confirming blood reception

// router.get('/check-followings',authenticateUser,getReceivingHistory);

module.exports=router;