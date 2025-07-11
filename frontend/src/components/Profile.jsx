import React, { useState } from "react";
import { Search, Heart, ShoppingCart, User } from 'lucide-react';
import Navbar from "./Navbar";
import Footer from "./Footer";
const Profile = () => {
  const [activeTab, setActiveTab] = useState("orders");

  return (

    <div >
         {/* Navbar */}
             <Navbar/>
    <div className="max-w-4xl mx-auto p-6">
        
      <div className="text-gray-500 text-sm mb-4">
        Home / Your Account / <span className="font-semibold">{activeTab}</span>
      </div>

      <h2 className="text-2xl font-semibold mb-4 capitalize">{activeTab}</h2>

      <div className="flex flex-wrap space-x-2 mb-4">
        {[
          { name: "Orders", id: "orders" },
          { name: "Messages", id: "messages" },
          { name: "Addresses", id: "addresses" },
          { name: "Wish Lists", id: "wishlist" },
          { name: "Account Settings", id: "settings" },
          { name: "Sign out", id: "signout" },
        ].map((tab) => (
          <button
            key={tab.id}
            className={`px-4 py-2 rounded-md ${
              activeTab === tab.id ? "bg-black text-white" : "bg-gray-200 text-gray-600"
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.name}
          </button>
        ))}
      </div>

      <div className="p-4 rounded-md">
        {activeTab === "orders" && <Orders />}
        {activeTab === "messages" && <Messages />}
        {activeTab === "addresses" && <Addresses />}
        {activeTab === "wishlist" && <Wishlist />}
        {activeTab === "settings" && <AccountSettings />}
      </div>
    </div>



<div className="mt-[290px]">
          {/* Footer */}
<footer className="bg-gray-900 text-white p-8 text-center flex justify-between items-end">
  
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
    </div>
  );
};

export default Profile;
