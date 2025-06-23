import React from 'react'
import { Search, Heart, ShoppingCart, User } from 'lucide-react';
import logo from '../assets/logo.png'; // Ensure correct path
const Navbar = () => {
  return (
    <div>
        <nav className="flex justify-between items-center p-6 bg-white shadow-md">
        {/* Logo */}
        <a href="/">
        <img src={logo} alt="Logo" className="h-20 w-auto" />
        </a>
        {/* Navigation Links */}
        <div className="flex space-x-6">
          <a href="/products" className="text-gray-600">Products</a>
           <a href="/blog" className="text-gray-600">Blogs</a>
          <a href="#" className="text-gray-600">Mission</a>
          <a href="/contact" className="text-gray-600">Contact</a>

        </div>

        {/* Search Bar */}
        <div className="flex items-center bg-gray-100 px-4 py-2 rounded-full">
          <input type="text" placeholder="Search products..." className="bg-transparent outline-none" />
          <Search className="text-gray-600 h-5 w-5 ml-2 cursor-pointer" />
        </div>

        {/* Icons: Wishlist, Cart, Profile */}
        <div className="flex space-x-4">
          <a href="/wishlist"><Heart className="text-gray-600 h-6 w-6 cursor-pointer" /></a>
          <a href="/cart"><ShoppingCart className="text-gray-600 h-6 w-6 cursor-pointer" /></a>
          <a href="/profile"><User className="text-gray-600 h-6 w-6 cursor-pointer" /></a>
        </div>
      </nav>

    </div>
  )
}

export default Navbar
