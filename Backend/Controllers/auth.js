const  express = require('express');
const validator = require('validator');
const bcrypt = require('bcrypt');

const jwt = require('jsonwebtoken');
const moment = require('moment');

const User = require('../Models/userModel');
const Product = require('../Models/productModel')

const mongoose = require('mongoose');
const tokenBlacklist = new Set();

const userRegistration = async (req,res) => {
const { name, email, phoneNumber, address, gender, dob, password } = req.body;
    console.log(req.body);

    try{
         
        if (!(name && address && phoneNumber && email && password)) {
           return res.status(400).json({ error: "All inputs required" });
        }
      
        // not valid email
        if (!validator.isEmail(email)) {
            return res.status(400).json({ error: "Invalid email format." });
        }

        // if user exist already
        const user = await User.findOne({ email });
        if (user) {
            return res.status(422).json({ error: "User already exists" });
        }

        const hashedPassword = async (password) => {
            const salt = await bcrypt.genSalt(10);
            return await bcrypt.hash(password, salt);
        };
        //changing dob into yyyy-mm--dd


        // Create new user
        const newUser = new User({
            name,
            email,
            phoneNumber: phoneNumber, // Ensure correct field name
            address,
            dob,
            gender,
            password: await hashedPassword(password)
        });

        const newUserCreated = await newUser.save(); // Corrected .save() usage
        console.log(newUserCreated);

        // Generate Token
        const expiresInDays = 30 * 24;
        const token = jwt.sign({ user_id: newUserCreated._id, email }, 
                                process.env.TOKEN_KEY, 
                                { expiresIn: `${expiresInDays}h` });

        newUserCreated.token = token;
         const userResponse = {
            name: newUserCreated.name,
            email: newUserCreated.email,
            phoneNumber: newUserCreated.phoneNumber,
            address: newUserCreated.address,
            dob: newUserCreated.dob,
            gender: newUserCreated.gender,
            token: newUserCreated.token,
        };

        res.status(200).json(userResponse);

    } catch (error) {
        console.error("Registration Error: ", error);
        res.status(500).json({ error: "Internal server error" })
    }
};

// global login
const globalLogin = async (req, res) => {
    const { email, password } = req.body;
      if(!email || !password) {
        return res.status(400).json({ message: 'Email and Password are required.' });
    }

    const user = await User.findOne({email});
    if(!user){
        return res.status(400).json({error: true, message: 'User not Found'});
    }

    const isPassword = await bcrypt.compare(password,user.password);
    if(!isPassword) {
        return res.status(400).json({ message: 'Wrong Password'});
    }

    const accessToken = jwt.sign(
        {user_id: user._id},
        process.env.TOKEN_KEY,
        {
            expiresIn: "72h",
        }
    );

    return res.json({
        error: false,
        message: "Login Successful",
        user: { fullName: user.fullName , email: user.email, id: user._id },
        accessToken,
    });

};

// logout
const logout = async (req, res) => {
  try {
    const authHeader = req.header('Authorization');
    if (!authHeader) {
      return res.status(401).json({ error: 'No token provided' });
    }

    const token = authHeader.replace('Bearer ', '');
    if (!token) {
      return res.status(401).json({ error: 'Malformed token' });
    }

    tokenBlacklist.add(token);

    res.status(200).json({ message: 'Logged out successfully' });
  } catch (error) {
    console.error("Logout error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};


const getAll = async (req,res) => {
    try {
    const products = await Product.find(); // get all products from DB
    res.status(200).json(products); // send products as JSON response
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// heini
const getProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findOne({ productid: id });
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ error: 'Server error', message: error.message });
  }
};

// add product
const addProduct = async (req,res) => {
    try{
        const { productid, name, image, detail, price} = req.body;

        const newProduct = new Product({
            productid,
            name,
            image,
            detail,
            price,
            owner: req.user.user_id, // Ensure req.user.id is set by authentication middleware
        });

        const savedProduct = await newProduct.save();
        res.status(201).json(savedProduct);
    } catch(error){
        console.error(error);
        res.status(500).json({ message: 'Failed to add product'})
    }
}

// delete product
const deleteProduct = async (req,res) => {
    try{
        const { id } = req.params;
        const product = await Product.findById(id);

        if(!product) return res.status(500).json({ message: 'Invalid Product'})
    
            await Product.findByIdAndDelete(id);
            res.status(200).json({ message: 'Product deleted' });
    } catch(error){
        console.error(err);
        res.status(500).json({ message: 'Failed to delete product' });
    }
    
}

// edit product
const editProduct = async (req,res) => {
    try {
        const { id } = req.params;
        const updates = req.body;

        const product = await Product.findById(id);
        if (!product) return res.status(404).json({ message: 'Product not found' });

        if (product.owner.toString() !== req.user.user_id) {
            return res.status(403).json({ message: 'Unauthorized' });
        }

        const updatedProduct = await Product.findByIdAndUpdate(id, updates, { new: true });
        res.status(200).json(updatedProduct);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to update product' });
  }
}

//adha achi 
const allLiked = async (req, res) => {
  try {
    const user = await User.findById(req.user.user_id).populate("wishlist");
    res.status(200).json(user.wishlist); // returns array of products
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch liked products', error: err.message });
  }
};



// like a product
const likedProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    const userId = req.user.user_id;

    const product = await Product.findById(productId);
    if (!product) return res.status(404).json({ message: 'Product not found' });

    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: 'User not found' });

    // Add product to user's wishlist if not already added
    if (!user.wishlist.includes(productId)) {
      user.wishlist.push(productId);
      await user.save();
    }

    res.status(200).json({ message: 'Product liked successfully', wishlist: user.wishlist });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};


// remove from like
const removefromLike = async (req, res) => {
  try {
    const productId = req.params.id;
    const user = await User.findById(req.user.user_id);

    if (!user) return res.status(404).json({ message: 'User not found' });

    user.wishlist = user.wishlist.filter((id) => id.toString() !== productId);
    await user.save();

    res.status(200).json({ message: 'Product removed from wishlist', wishlist: user.wishlist });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};



const allCart = async (req, res) => {
  try {
    const user = await User.findById(req.user.user_id).populate("cart");
    res.status(200).json(user.cart);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch cart', error: err.message });
  }
};


// add to cart
const addtoCart = async (req, res) => {
  try {
    const productId = req.params.id;
    const user = await User.findById(req.user.user_id);
    const product = await Product.findById(productId);

    if (!product) return res.status(404).json({ message: 'Product not found' });

    if (!user.cart.includes(productId)) {
      user.cart.push(productId);
      await user.save();
    }

    res.status(200).json({ message: 'Product added to cart', cart: user.cart });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};



// remove from cart 
const removefromCart = async (req, res) => {
  try {
    const productId = req.params.id;
    const user = await User.findById(req.user.user_id);

    if (!user) return res.status(404).json({ message: 'User not found' });

    user.cart = user.cart.filter((id) => id.toString() !== productId);
    await user.save();

    res.status(200).json({ message: 'Product removed from cart', cart: user.cart });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};



module.exports = {
    globalLogin,
    userRegistration,
    logout,
    tokenBlacklist,
    getAll,
    getProduct,
    addProduct,
    deleteProduct,
    editProduct,
    allLiked,
    likedProduct,
    removefromLike,
    allCart,
    addtoCart,
    removefromCart
}

