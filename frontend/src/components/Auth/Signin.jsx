import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Heart, ShoppingCart, User } from 'lucide-react';
import Navbar from "../Navbar";
import Footer from "../Footer";
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
     <Navbar/>
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
      <Footer/>
    </div>
  );
};

export default Signin;
