import React from 'react';
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home'
import Login from './components/Auth/Login'
import Signin from './components/Auth/Signin'
import Products from "./components/Product/Products"
import AboutUs from './components/AboutUs';
import Profile from './components/Profile';
import Wishlist from './components/Product/Wishlist';
import Cart from './components/Product/Cart';
import Blog from './components/Blog';
import Contact from './components/Contact';
import ProductDetail from './components/Product/productDetail';
function App() {

  return (
    <>
      <Router>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login/>} />
        <Route  path="/register" element={<Signin/>}/>
        <Route path="/products" element={<Products/>} />
        <Route path="/product/:id" element={<ProductDetail/>} />
        <Route path="/aboutus" element={<AboutUs/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/wishlist" element={<Wishlist/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/contact" element={<Contact/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
