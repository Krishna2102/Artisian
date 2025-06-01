import React from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home'
import Login from './components/Login'
import Signin from './components/signin'
import Products from "./components/Products"
import AboutUs from './components/AboutUs';
import Profile from './components/Profile';
import Wishlist from './components/Wishlist';
import Cart from './components/Cart';
function App() {

  return (
    <>
      <Router>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login/>} />
        <Route  path="/register" element={<Signin/>}/>
        <Route path="/products" element={<Products/>} />
        <Route path="/aboutus" element={<AboutUs/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/wishlist" element={<Wishlist/>} />
        <Route path="/cart" element={<Cart/>} />

        </Routes>
      </Router>
    </>
  )
}

export default App
