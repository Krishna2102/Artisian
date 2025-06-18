import React from 'react'

const Footer = () => {
  return (
    <div>
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
  )
}

export default Footer
