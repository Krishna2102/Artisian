import React from 'react';
import { Search, Heart, ShoppingCart, User } from 'lucide-react';
import logo from '../assets/logo.png'; // Ensure correct path

export default function AboutUs() {
    return (
        <div>
            
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

      <section className="relative">
        
        {/* Background Image */}
        <div className="relative w-full h-[500px]">
          <img
            src="https://cdn.shopify.com/s/files/1/0006/8327/8451/files/artisans-banner.jpg?v=1598513803" // Replace with actual image URL
            alt="Artisan Woman"
            className="w-full h-full object-cover"
          />
        </div>
      
        {/* Content Section */}
        <div className="bg-white p-8 md:p-16 text-center md:text-left">
          <h2 className="text-3xl font-semibold">Leading the way for artisans</h2>
          <div className="w-16 h-1 bg-blue-500 mt-2 mx-auto md:mx-0"></div>
        <div className="texl-lg">
          <p className="mt-6 text-gray-700">
            In 2022, artisan marketplace leader NOVICA and the International Trade Centre (ITC; 
            the joint agency of the United Nations and the World Trade Organization) partnered to develop an 
            Artisan Empowerment Hub in Central Asia to create opportunities for artisans in Kazakhstan, 
            Kyrgyzstan, Tajikistan, Turkmenistan, and Uzbekistan.
          </p>
  
          <p className="mt-4 text-gray-700">
            As a key aspect of this partnership, the Artisans Connect website was born! On these pages, it is our honor 
            to transport you on a virtual journey of discovery and enchantment, where you'll explore the rich cultural 
            heritage of this region and get to know talented artisans who bring ethically handcrafted gifts, jewellery, 
            fashion, and home decor offerings to life. We hope that through this unique experience you'll fall in love 
            with the beauty of Central Asia.
          </p>
          <p className="mt-4 text-gray-700">
          Central Asian handcrafts are a diverse and intricate reflection of the region's cultural heritage, combining elements from the Silk Road, Persian, Chinese, and Russian traditions. The region is particularly renowned for its exquisite textile work, ceramics, metalwork, and jewellery.
          </p>
          <p className="mt-4 text-gray-700">
          Funded by the European Union, the Ready4Trade Central Asia project is implemented by the International Trade Centre. It aims to contribute to the overall sustainable and inclusive economic development of Central Asia by boosting intra-regional and international trade in the region.
          </p>
          <p className="mt-4 text-gray-700">
          “This is a fantastic opportunity for artisans of the region who currently have limited access to international marketplaces that cater for the European and US markets. It opens up a whole new online sales channel for them and additionally enables them to benefit from NOVICA’s extensive product development and business support services,” explained Annabel Sykes, the ITC’s e-commerce and SME digital transformation expert.
          </p>
          </div>
        </div>
      </section>


{/* Footer */}
<footer className="bg-gray-900 text-white p-8 text-center flex justify-between items-start">
  
  {/* Left Section - About Us & Help */}
  <div className="flex space-x-16 text-left ">
    {/* About Us Column */}
    <div>
      <h3 className="text-2xl font-semibold">About Us</h3>
      <ul className="mt-4 space-y-2 text-gray-400">
        <li><a href="#" className="hover:text-green-500 whitespace-nowrap">About EcoArtisan Hub</a></li>
        <li><a href="#" className="hover:text-green-500 whitespace-nowrap">Privacy Policy</a></li>
        <li><a href="#" className="hover:text-green-500 whitespace-nowrap">Sitemap</a></li>
      </ul>
    </div>

    {/* Help Column */}
    <div>
      <h3 className="text-2xl font-semibold">Help</h3>
      <ul className="mt-4 space-y-2 text-gray-400">
        <li><a href="#" className="hover:text-green-500 whitespace-nowrap">Order Tracking</a></li>
        <li><a href="#" className="hover:text-green-500 whitespace-nowrap">Customer Service</a></li>
        <li><a href="#" className="hover:text-green-500 whitespace-nowrap">Contact</a></li>
      </ul>
    </div>
  </div>

  {/* Right Section - Newsletter */}
  <div className="text-left flex">
    <p className="text-2xl p-4 ml-12 ">Stay updated with new marketplace collections and promotions.</p>
   <div className='flex flex-col'>
    <div className="mt-4 flex items-center space-x-2 ">
      <input type="email" placeholder="Email address" className="p-2 rounded text-black" />
      <button className="px-4 py-2 bg-green-600 rounded hover:bg-green-700">Subscribe</button>
    </div>
    <p className="mt-4 text-gray-400">Copyright © 2025 ARTISANS CONNECT. All rights reserved.</p>
    </div>
  </div>

</footer>
      </div>
    );
  }
  