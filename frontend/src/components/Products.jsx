import React, { useState, useEffect } from "react";
import { Search, Heart, ShoppingCart, User } from "lucide-react";
import logo from "../assets/logo.png"; 

const Products = () => {
  const userId = "USER_ID_HERE"; // Replace with actual logged-in user ID
  const [wishlist, setWishlist] = useState([]);
  const [cart, setCart] = useState([]);

  // Fetch Wishlist & Cart Data from Backend on Load
  useEffect(() => {
    const fetchData = async () => {
      try {
        const wishlistRes = await fetch(`http://localhost:4000/api/wishlist/${userId}`);
        const cartRes = await fetch(`http://localhost:4000/api/cart/${userId}`);

        if (wishlistRes.ok) {
          const wishlistData = await wishlistRes.json();
          setWishlist(wishlistData.products);
        }
        
        if (cartRes.ok) {
          const cartData = await cartRes.json();
          setCart(cartData.items);
        }
      } catch (error) {
        console.error("Error fetching wishlist/cart:", error);
      }
    };

    fetchData();
  }, []);

  // Add or Remove from Wishlist
  const toggleWishlist = async (product) => {
    try {
      const inWishlist = wishlist.some((item) => item.id === product.id);
      const url = inWishlist
        ? `http://localhost:4000/api/wishlist/remove`
        : `http://localhost:4000/api/wishlist/add`;

      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId, product }),
      });

      if (!response.ok) throw new Error("Failed to update wishlist");

      // Update state
      setWishlist((prevWishlist) =>
        inWishlist
          ? prevWishlist.filter((item) => item.id !== product.id)
          : [...prevWishlist, product]
      );
    } catch (error) {
      console.error(error);
    }
  };

  // Add to Cart
  const addToCart = async (product) => {
    try {
      const response = await fetch("http://localhost:4000/api/cart/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId, product }),
      });

      if (!response.ok) throw new Error("Failed to add to cart");

      setCart((prevCart) => [...prevCart, product]);
    } catch (error) {
      console.error(error);
    }
  };

  const products = [
    {
      id: 1,
      name: "Christmas Star",
      description: "Artisan Crafted Ceramic Christmas Ornaments (Set of 6) (Guatemala)",
      price: 41.95,
      image: "/images/christmas-star.jpg",
    },
    {
      id: 2,
      name: "Strawberry Poison-Dart Frog",
      description: "Modern Multicolored Stretched Frog-Themed Sublimation Print (Costa Rica)",
      price: 219.99,
      image: "/images/poison-dart-frog.jpg",
    },
    {
      id: 3,
      name: "Crimson Eve",
      description: "Set of Three Hand-Painted Crimson Dried Gourd Ornaments (Uzbekistan)",
      price: 34.99,
      image: "/images/crimson-eve.jpg",
    },
  ];

  return (
    <div>
      {/* Navbar */}
      <nav className="flex justify-between items-center p-6 bg-white shadow-md">
        <img src={logo} alt="Logo" className="h-20 w-auto" />
        <div className="flex space-x-6">
          <a href="#" className="text-gray-600">By Region</a>
          <a href="#" className="text-gray-600">By Category</a>
          <a href="#" className="text-gray-600">Our Mission</a>
        </div>
        <div className="flex items-center bg-gray-100 px-4 py-2 rounded-full">
          <input type="text" placeholder="Search products..." className="bg-transparent outline-none" />
          <Search className="text-gray-600 h-5 w-5 ml-2 cursor-pointer" />
        </div>
        <div className="flex space-x-4">
          <a href="/wishlist">
            <Heart className="text-gray-600 h-6 w-6 cursor-pointer" />
          </a>
          <a href="/cart">
            <ShoppingCart className="text-gray-600 h-6 w-6 cursor-pointer" />
          </a>
          <User className="text-gray-600 h-6 w-6 cursor-pointer" />
        </div>
      </nav>

      {/* Product Listing */}
      <main className="p-6">
        <div className="grid grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white shadow p-4 rounded-lg">
              <img src={product.image} alt={product.name} className="w-full h-64 object-cover rounded-md" />
              <h3 className="mt-4 text-lg font-semibold">{product.name}</h3>
              <p className="text-gray-600 text-sm">{product.description}</p>
              <p className="mt-2 text-xl font-bold">${product.price.toFixed(2)}</p>

              <div className="flex justify-between mt-4">
                {/* Wishlist Button */}
                <button
                  className={`p-2 rounded ${
                    wishlist.some((item) => item.id === product.id) ? "bg-red-500 text-white" : "bg-gray-200"
                  }`}
                  onClick={() => toggleWishlist(product)}
                >
                  <Heart className="h-5 w-5" />
                </button>

                {/* Add to Cart Button */}
                <button
                  className="bg-green-500 text-white px-4 py-2 rounded"
                  onClick={() => addToCart(product)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Products;
