// it is authenticate controller
const express = require('express');
// it is a validator  to validate email format
const validator = require('validator');
// importing hasing annd salting libraries for hashing password
const bcrypt = require('bcrypt');
// importing jwt token 
const jwt = require('jsonwebtoken');
const moment = require('moment');

//importing models
const User = require('../Models/userModel');
const Product = require('../Models/productModel');
const Wishlist = require("../Models/wishlistModel"); // Ensure correct import
// mongoose
const mongoose = require('mongoose');

// Create User
const userRegistration = async (req, res) => {
    const { name, email, phone, address, gender, dob, password } = req.body;
        console.log(req.body);

    try {
        // for all inputs
        if (!(name && address  && phone && email && password)) {
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

        // Hash the password 
        const hashedPassword = async (password) => {
            const salt = await bcrypt.genSalt(10);
            return await bcrypt.hash(password, salt);
        };
        //changing dob into yyyy-mm--dd


        // Create new user
        const newUser = new User({
            name,
            email,
            phoneNumber: phone, // Ensure correct field name
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

        // Prepare response
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
        res.status(500).json({ error: "Internal server error" });
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



const addProduct = async (req, res) => {
  try {
    const { name, image, price, owner } = req.body;

    // Validate required fields
    if (!name || !image || !price || !owner) {
      return res.status(400).json({ message: "All fields are required." });
    }

    // Create a new product instance
    const newProduct = new Product({
      name,
      image,
      price,
      owner,
    });

    // Save product to the database
    await newProduct.save();

    res.status(201).json({ message: "Product added successfully", product: newProduct });
  } catch (error) {
    console.error("Error adding product:", error);
    res.status(500).json({ message: "Server Error", error });
  }
};

// delete products
const deleteProduct = async (req, res) => {
    try {
        const { userId, productId } = req.body;
    
        // Find and delete the product if the user is the owner
        const deletedProduct = await Product.findOneAndDelete({ _id: productId, owner: userId });
    
        if (!deletedProduct) {
          return res.status(404).json({ message: "Product not found or you don't have permission to delete it" });
        }
    
        res.status(200).json({ message: "Your product has been deleted", product: deletedProduct });
      } catch (error) {
        console.error("Error deleting product:", error);
        res.status(500).json({ message: "Server Error", error });
      }
  };

  //  update products
const updateProduct = async (req, res) => {
    try {
        const { productId } = req.params;
        const { name, image, price } = req.body;
    
        // Debugging: Log req.params to check if productId exists
        console.log("Params:", req.params);
    
        if (!productId) {
          return res.status(400).json({ message: "Product ID is required" });
        }
    
        if (!productId.match(/^[0-9a-fA-F]{24}$/)) {
          return res.status(400).json({ message: "Invalid product ID format" });
        }
    
        const updatedProduct = await Product.findByIdAndUpdate(
          productId,
          { name, image, price },
          { new: true, runValidators: true }
        );
    
        if (!updatedProduct) {
          return res.status(404).json({ message: "Product not found" });
        }
    
        res.status(200).json({ message: "Product updated", updatedProduct });
      } catch (error) {
        console.error("Error updating product:", error);
        res.status(500).json({ message: "Server Error", error: error.message });
      }
    };
    

const getAllProducts = async (req, res) => {
    try {
      const products = await Product.find(); // Fetch all products
      res.status(200).json(products);
    } catch (error) {
      console.error("Error fetching products:", error);
      res.status(500).json({ message: "Server Error", error });
    }
  };
  



// liked a image to add in wishlist
const liked = async (req, res) => {
    const { userId, product } = req.body; // Ensure userId and product are sent in request
  
    if (!userId || !product) {
      return res.status(400).json({ message: "User ID and product details are required." });
    }
  
    try {
      let wishlist = await Wishlist.findOne({ userId });
  
      if (!wishlist) {
        // Create a new wishlist if none exists for the user
        wishlist = new Wishlist({ userId, products: [product] });
      } else {
        // Check if the product already exists in the wishlist
        const productExists = wishlist.products.some(
          (item) => item.productId === product.productId
        );
  
        if (!productExists) {
          wishlist.products.push(product);
        }
      }
  
      await wishlist.save();
      res.status(200).json({ message: "Product added to wishlist", wishlist });
    } catch (error) {
      console.error("Error adding to wishlist:", error);
      res.status(500).json({ message: "Server Error", error });
    }
  };
  
  //get  all liked products
  const getall = async (req, res) => {
      try {
          const wishlist = await Wishlist.findOne({ userId: req.params.userId });
          if (!wishlist) return res.status(404).json({ message: "Wishlist not found" });
      
          res.status(200).json(wishlist);
        } catch (error) {
          res.status(500).json({ message: "Server Error", error });
        }
  }
  
  
  // Remove from wishlist
  const removeFromWishlist = async (req, res) => {
      try {
        const { userId, productId } = req.body;
    
        const wishlist = await Wishlist.findOne({ userId });
    
        if (!wishlist) {
          return res.status(404).json({ message: "Wishlist not found" });
        }
    
        // Remove the product from the wishlist
        wishlist.products = wishlist.products.filter((item) => item.productId !== productId);
    
        await wishlist.save();
        res.status(200).json({ message: "Product removed from wishlist", wishlist });
      } catch (error) {
        console.error("Error removing product from wishlist:", error);
        res.status(500).json({ message: "Server Error", error });
      }
    };
    
// Add to cart
const addToCart = async (req, res) => {
        try {
          const { userId, product } = req.body;
      
          let cart = await Cart.findOne({ userId });
      
          if (!cart) {
            cart = new Cart({ userId, products: [product] });
          } else {
            // Check if the product is already in the cart
            const productExists = cart.products.some((item) => item.productId === product.productId);
            if (!productExists) {
              cart.products.push(product);
            } else {
              return res.status(400).json({ message: "Product is already in the cart" });
            }
          }
      
          await cart.save();
          res.status(200).json({ message: "Product added to cart", cart });
        } catch (error) {
          console.error("Error adding product to cart:", error);
          res.status(500).json({ message: "Server Error", error });
        }
  };


//   Remove from cart
const removeFromCart = async (req, res) => {
    try {
      const { userId, productId } = req.body;
  
      let cart = await Cart.findOne({ userId });
  
      if (!cart) {
        return res.status(404).json({ message: "Cart not found" });
      }
  
      // Remove the product from the cart
      cart.products = cart.products.filter((item) => item.productId !== productId);
  
      await cart.save();
      res.status(200).json({ message: "Product removed from cart", cart });
    } catch (error) {
      console.error("Error removing product from cart:", error);
      res.status(500).json({ message: "Server Error", error });
    }
  };
  
      
     



module.exports = {
    userRegistration,
    globalLogin,
    liked,
    getall,
    addProduct,
    deleteProduct,
    updateProduct,
    removeFromWishlist,
    addToCart,
    removeFromCart,
    getAllProducts
}