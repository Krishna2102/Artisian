import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png"; // Ensure correct path
import { Search, Heart, ShoppingCart, User } from 'lucide-react';

const Signin = () => {
  
  // register  new account
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    gender: "",
    dob: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    console.log("Sending data:", formData); // ✅ Log form data before sending

    try {
        const response = await fetch("http://localhost:4000/api/auth/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });

        const data = await response.json();
        console.log("Response from server:", data); // ✅ Log backend response

        if (response.ok) {
            alert("Registration successful! Please log in.");
            window.location.href = "/login";
        } else {
            alert(data.error || "Registration failed.");
        }
    } catch (error) {
        console.error("Error during registration:", error);
        alert("An error occurred during registration.");
    }
};

  

  return (
    <div className="font-sans">
      {/* Navbar */}
     {/* Navbar */}
     <nav className="flex justify-between items-center p-6 bg-white shadow-md">
        {/* Logo */}
        <img src={logo} alt="Logo" className="h-20 w-auto" />

        {/* Navigation Links */}
        <div className="flex space-x-6">
          <a href="#" className="text-gray-600">By Region</a>
          <a href="#" className="text-gray-600">By Category</a>
          <a href="#" className="text-gray-600">Our Mission</a>
        </div>

        {/* Search Bar */}
        <div className="flex items-center bg-gray-100 px-4 py-2 rounded-full">
          <input type="text" placeholder="Search products..." className="bg-transparent outline-none" />
          <Search className="text-gray-600 h-5 w-5 ml-2 cursor-pointer" />
        </div>

        {/* Icons: Wishlist, Cart, Profile */}
        <div className="flex space-x-4">
          <Heart className="text-gray-600 h-6 w-6 cursor-pointer" />
          <ShoppingCart className="text-gray-600 h-6 w-6 cursor-pointer" />
          <User className="text-gray-600 h-6 w-6 cursor-pointer" />
        </div>
      </nav>
      {/* Registration Section */}
      <div className="flex justify-center items-center min-h-screen bg-gray-100 ">
        <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-3xl mt-5 mb-5">
          <h2 className="text-3xl font-bold mb-6 text-center">Create an Account</h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            
                <label className="block text-gray-700">Name:</label>
                <input 
                  type="text" 
                  name="name"
                  className="w-full border border-gray-300 p-3 rounded-md" 
                  placeholder="Enter your first name" value={formData.name}
                  onChange={handleChange} required
                  />
             

            <label className="block text-gray-700">Email Address:</label>
            <input 
                  type="text"
                  name="email" 
                  className="w-full border border-gray-300 p-3 rounded-md" 
                  placeholder="Enter your first name" value={formData.email}
                  onChange={handleChange} required
                  />


                  <label className="block text-gray-700">Phone Number:</label>
            <input 
                  type="text" 
                   name="phone"
                  className="w-full border border-gray-300 p-3 rounded-md" 
                  placeholder="Enter your first name" value={formData.phone}
                  onChange={handleChange} required
                  />


              {/* <label className="block text-gray-700">DOB:</label>
            <input 
                  type="text" 
                   name="phone"
                  className="w-full border border-gray-300 p-3 rounded-md" 
                  placeholder="Enter your first name" value={formData.DOB}
                  onChange={handleChange} required
                  /> */}


            

                  <label className="block text-gray-700">Password:</label>
            <input 
                  type="text" 
                   name="password"
                  className="w-full border border-gray-300 p-3 rounded-md" 
                  placeholder="Enter your first name" value={formData.password}
                  onChange={handleChange} required
                  />



            <label className="block text-gray-700">Address:</label>
            <input 
                  type="text"
                  name="address" 
                  className="w-full border border-gray-300 p-3 rounded-md" 
                  placeholder="Enter your first name" value={formData.address}
                  onChange={handleChange} required
                  />
 
         
           
            <button 
              type="submit"
              className="w-full py-3 rounded-md text-lg font-bold text-white 
               bg-pink-600"
            >
              Create Account
            </button>
          </form>

          <p className="mt-4 text-center text-gray-500">
            Already have an account? <Link to="/login" className="text-pink-600">Log In</Link>
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white p-8 text-center">
        <p className="text-xl">Stay updated with new collections and promotions</p>
        <input type="email" placeholder="Email address" className="mt-4 p-2 rounded bg-gray-800 text-white" />
        <button className="ml-2 px-4 py-2 bg-pink-600 rounded">Subscribe</button>
        <p className="mt-4 text-gray-400">Copyright © 2025 ARTISANS CONNECT. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Signin;
