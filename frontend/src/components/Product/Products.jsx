import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Heart } from "lucide-react";
import Navbar from "../Navbar";
import Footer from "../Footer";

const Products = () => {
  const [wishlist, setWishlist] = useState([]);
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);

  const token = localStorage.getItem("token");

  // Fetch all products
  useEffect(() => {
    const fetchData = async () => {
      try {
        const productsRes = await axios.get('http://localhost:4000/api/user/product');
        setProducts(productsRes.data);

        if (token) {
          const wishlistRes = await axios.get('http://localhost:4000/api/user/like', {
            headers: { Authorization: `Bearer ${token}` }
          });
          setWishlist(wishlistRes.data || []);

          const cartRes = await axios.get('http://localhost:4000/api/user/cart', {
            headers: { Authorization: `Bearer ${token}` }
          });
          setCart(cartRes.data || []);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [token]);

  const isInWishlist = (id) => wishlist.some((item) => item._id === id);
  const isInCart = (id) => cart.some((item) => item._id === id);

  // Toggle wishlist status
  const toggleWishlist = async (product) => {
    if (!token) return alert("Please log in to manage your wishlist.");

    const url = `http://localhost:4000/api/user/like/${product._id}`;
    const method = isInWishlist(product._id) ? "DELETE" : "POST";

    try {
      const res = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (!res.ok) throw new Error("Failed to update wishlist");

      setWishlist((prev) =>
        isInWishlist(product._id)
          ? prev.filter((item) => item._id !== product._id)
          : [...prev, product]
      );
    } catch (error) {
      console.error("Wishlist update failed:", error);
    }
  };

  // Add product to cart
  const addToCart = async (product) => {
    if (!token) return alert("Please log in to add to cart.");
    if (isInCart(product._id)) return;

    try {
      const res = await fetch(`http://localhost:4000/api/user/cart/${product._id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (!res.ok) throw new Error("Failed to add to cart");

      setCart((prevCart) => [...prevCart, product]);
    } catch (error) {
      console.error("Add to cart failed:", error);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="p-6 flex-grow">
        <h2 className="text-2xl font-bold mb-4">Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product._id} className="bg-white shadow p-4 rounded-lg">
              <Link to={`/product/${product._id}`}>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover rounded-md cursor-pointer"
                />
                <h3 className="mt-4 text-lg font-semibold hover:underline">
                  {product.name}
                </h3>
              </Link>
              <p className="text-gray-600 text-sm">{product.detail}</p>
              <p className="mt-2 text-xl font-bold">
                ${parseFloat(product.price.replace(/[^0-9.]/g, "")).toFixed(2)}
              </p>

              <div className="flex justify-between mt-4">
                <button
                  className={`p-2 rounded ${
                    isInWishlist(product._id)
                      ? "bg-red-500 text-white"
                      : "bg-gray-200"
                  }`}
                  onClick={() => toggleWishlist(product)}
                >
                  <Heart className="h-5 w-5" />
                </button>

                <button
                  className={`${
                    isInCart(product._id)
                      ? "bg-gray-400"
                      : "bg-green-500 hover:bg-green-600"
                  } text-white px-4 py-2 rounded`}
                  onClick={() => addToCart(product)}
                  disabled={isInCart(product._id)}
                >
                  {isInCart(product._id) ? "In Cart" : "Add to Cart"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Products;
