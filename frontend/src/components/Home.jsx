import React from 'react';
import { Search, Heart, ShoppingCart, User } from 'lucide-react';
import logo from '../assets/logo.png'; // Ensure correct path

const Home = () => {
    const categories = [
        { name: "PILLOWS AND THROWS", image: "https://artisansconnect.org/product_images/uploaded_images/bedding.jpg" },
        { name: "FASHION", image: "https://artisansconnect.org/product_images/uploaded_images/fashion2.jpg" },
        { name: "JEWELLERY BOXES", image: "https://artisansconnect.org/product_images/uploaded_images/jewelryboxes.jpg" },
        { name: "HOME DECOR", image: "https://artisansconnect.org/product_images/uploaded_images/homedecor.jpg" },
        { name: "GAMES AND PUZZLES", image: "https://artisansconnect.org/product_images/uploaded_images/games.jpg" }
      ];
  return (
    <div className="font-sans">
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
          <a href="/profile"><Heart className="text-gray-600 h-6 w-6 cursor-pointer" /></a>
          <a href="/profile"><ShoppingCart className="text-gray-600 h-6 w-6 cursor-pointer" /></a>
          <a href="/profile"><User className="text-gray-600 h-6 w-6 cursor-pointer" /></a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative flex flex-col items-center justify-center md:items-start p-12 bg-gray-100 h-[500px]">
  {/* Background Image */}
  <img
    src="https://cdn11.bigcommerce.com/s-7z80p2cmk8/images/stencil/original/carousel/3/home-banner-1.jpg?c=1"
    alt="Artisan Woman"
    className="absolute top-0 left-0 w-full h-full object-cover"
  />

  {/* Overlay to Improve Text Readability */}
  <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40"></div>

  {/* Content */}
  <div className="relative z-10 text-center md:text-left text-white max-w-2xl">
    <h1 className="text-4xl font-bold">Welcome to our new artisan marketplace!</h1>
    <button className="mt-4 px-6 py-3 bg-green-600 text-white rounded-full">Explore the Silk Road</button>
  </div>
</header>


      {/* Mission Section */}
      <section className="p-12 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 ">
          <img src="https://economictimes.indiatimes.com/thumb/msid-102761886,width-1600,height-900,resizemode-4,imgsize-194468/artisans-istock.jpg?from=mdr" alt="Artisan Crafting" className="rounded-lg h-[400px] w-[800px]" />
        </div>
        <div className="md:w-1/2 text-center md:text-left p-6">
          <h2 className="text-3xl font-bold">Empower artisans and preserve culture</h2>
          <p className="mt-4 text-gray-600">Every purchase at Artisans Connect empowers artisans and preserves culture. When you purchase from our artisan marketplace, you receive a unique handmade creation, an artisan is paid fairly for his or her work, ancient crafts live to see another day, and artisan communities have a chance to survive and thrive. Thank you for making a positive difference in the world!</p>
          <button className="mt-4 px-6 py-3 bg-green-600 text-white rounded-full">Learn More</button>
        </div>
      </section>

      {/* our products */}
      <section className="text-center py-12">
      <h2 className="text-3xl font-semibold">Shop the Collection</h2>
      <div className="w-16 h-1 bg-blue-500 mx-auto mt-2"></div>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mt-8 px-4 md:px-16">
        {categories.map((item, index) => (
          <div key={index} className="text-center">
            <img
              src={item.image}
              alt={item.name}
              className="w-48 h-48 object-cover mx-auto rounded-lg transition-transform duration-300 hover:scale-105"
            />
            <p className="mt-4 font-medium">{item.name}</p>
            <div className="w-16 h-1 bg-pink-500 mx-auto mt-1"></div>
          </div>
        ))}
      </div>
    </section>

    {/* Our Mission */}
    <header className="relative flex flex-col items-center justify-center md:items-start p-12 bg-gray-100 h-[500px]">
  {/* Background Image */}
  <img
    src="https://miradorlife.com/wp-content/uploads/2021/08/header-6.png"
    alt="Artisan Woman"
    className="absolute top-0 left-0 w-[1450px] h-full object-cover"
  />

  {/* Overlay to Improve Text Readability */}
  <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>

  {/* Content */}
  <div className="relative z-10 text-center md:text-left ml-[700px] text-white max-w-2xl">
    <h1 className="text-4xl font-bold">Preserving culture and heritage</h1>
    <h2 className='text-lg'>We welcome you to join us on this transformative cultural journey by discovering master artisans who keep traditional arts alive….</h2>
    <button className="mt-4 px-6 py-3 bg-green-600 text-white rounded-full">Learn More</button>
  </div>
</header>


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
};

export default Home;
