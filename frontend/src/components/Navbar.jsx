import React from 'react'

const NavFoot = () => {
  return (
    <div>
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
          <a href="/profile"><Heart className="text-gray-600 h-6 w-6 cursor-pointer" /></a>
          <a href="/profile"><ShoppingCart className="text-gray-600 h-6 w-6 cursor-pointer" /></a>
          <a href="/profile"><User className="text-gray-600 h-6 w-6 cursor-pointer" /></a>
        </div>
      </nav>

    </div>
  )
}

export default Navbar
