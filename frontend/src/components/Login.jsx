import React, { useState } from "react";
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { validateEmail } from '../utils/helper.js';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'; // Ensure correct path

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const navigate = useNavigate();


  const handleLogin = async (e) => {
    e.preventDefault();

    if(!validateEmail(email)){
      setError('Please enter valid email');
      return;
    }

    if(!password){
      setError('Please enter password');
      return;
    }

    setError(null);
    
    try {
      const response = await axios.post("http://localhost:4000/api/auth/login", {
       email: email,
       password: password
      });

      if(response.data && response.data.accessToken){
        localStorage.setItem("token", response.data.accessToken);
        navigate('/');
      }
      

    } catch (error) {
      if(error.response && error.response.data && error.response.data.message){
        setError(error.response.data.message);
      }
      else{
        setError("An unexpected error occurred.Please try again.")
      }
    }
  };
  return (
    <div className="font-sans">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-6 bg-white shadow-md">
        <img src={logo} alt="Logo" className="h-16 w-auto" />
        <div className="flex space-x-6">
          <Link to="/" className="text-gray-600">Home</Link>
          <Link to="/shop" className="text-gray-600">Shop</Link>
          <Link to="/about" className="text-gray-600">About</Link>
        </div>
      </nav>

      {/* Login Section */}
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="bg-white p-10 rounded-lg shadow-lg flex flex-col md:flex-row w-full max-w-4xl">
          {/* Login Form */}
          <div className="md:w-1/2 p-6">
            <h2 className="text-3xl font-bold mb-6">Log In</h2>
            <form onSubmit={handleLogin}>
              <label className="block text-gray-700 mb-2">Email Address:</label>
              <input 
                type="email" 
                name="email"
               value={email}
               onChange={({ target }) => setEmail(target.value)}
                className="w-full border border-gray-300 p-3 rounded-md mb-4" 
                placeholder="Enter your email" 
              />

              <label className="block text-gray-700 mb-2">Password:</label>
              <input 
                type="password" 
                name="password"
                value={password}
                onChange={({ target }) => setPassword(target.value)}
                className="w-full border border-gray-300 p-3 rounded-md mb-4" 
                placeholder="Enter your password" 
              />
            {error && <p className='text-red-600 text-xs pb-1'>{error}</p>}
              <button className="w-full bg-pink-600 text-white py-3 rounded-md text-lg font-bold">Log In</button>

              <p className="mt-4 text-gray-500 text-sm text-center">
                <Link to="/forgot-password" className="text-pink-600">Forgot your password?</Link>
              </p>
            </form>
          </div>

          {/* New Customer Section */}
          <div className="md:w-1/2 bg-gray-50 p-6 rounded-lg text-center md:text-left">
            <h3 className="text-2xl font-semibold">New Customer?</h3>
            <p className="text-gray-600 mt-2">Create an account with us and you'll be able to:</p>
            <ul className="list-disc text-gray-600 mt-4 space-y-2 pl-6">
              <li>Check out faster</li>
              <li>Save multiple shipping addresses</li>
              <li>Access your order history</li>
              <li>Track new orders</li>
              <li>Save items to your Wish List</li>
            </ul>
            <Link to="/register">
              <button className="mt-6 w-full bg-pink-600 text-white py-3 rounded-md text-lg font-bold">Create Account</button>
            </Link>
          </div>
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

export default Login;
