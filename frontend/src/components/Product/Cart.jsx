import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../Navbar";
import Footer from "../Footer";

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [quantities, setQuantities] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchCart = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      setError("User not authenticated");
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      setError(null);

      const response = await axios.get("http://localhost:4000/api/user/cart", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const products = response.data || [];
      setCart(products);
      const initialQuantities = {};
      products.forEach((p) => {
        initialQuantities[p._id] = 1;
      });
      setQuantities(initialQuantities);
    } catch (err) {
      setError("Failed to load cart");
      console.error("Error fetching cart:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  const removeFromCart = async (productId) => {
    const token = localStorage.getItem("token");

    try {
      const res = await fetch("http://localhost:4000/api/user/cart/" + productId, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ productid: productId }),
      });

      if (!res.ok) throw new Error("Failed to remove product");

      setCart((prev) => prev.filter((p) => p._id !== productId));
      const newQuantities = { ...quantities };
      delete newQuantities[productId];
      setQuantities(newQuantities);
    } catch (error) {
      console.error("Error removing item:", error);
      alert("Could not remove item from cart.");
    }
  };

  const handleQuantityChange = (productId, delta) => {
    setQuantities((prev) => {
      const newQty = Math.max(1, (prev[productId] || 1) + delta);
      return { ...prev, [productId]: newQty };
    });
  };

  const totalAmount = cart.reduce((sum, product) => {
    const price = parseFloat(product.price?.toString().replace(/[^0-9.]/g, "")) || 0;
    const qty = quantities[product._id] || 1;
    return sum + price * qty;
  }, 0);

  const placeOrder = () => {
    alert(`Order placed! Total: $${totalAmount.toFixed(2)}`);
    // Add actual order logic here
  };

  if (loading) return <p className="p-6">Loading cart...</p>;
  if (error) return <p className="p-6 text-red-500">{error}</p>;

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="p-6 flex-grow">
        <h1 className="text-2xl font-bold mb-4">My Cart</h1>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {cart.map((product) => {
                const price = parseFloat(product.price?.toString().replace(/[^0-9.]/g, "")) || 0;
                const qty = quantities[product._id] || 1;

                return (
                  <div key={product._id} className="bg-white shadow p-4 rounded-lg">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-64 object-cover rounded-md"
                    />
                    <h3 className="mt-4 text-lg font-semibold">{product.name}</h3>
                    {product.detail && (
                      <p className="text-gray-600 text-sm">{product.detail}</p>
                    )}
                    <p className="mt-2 text-xl font-bold">${(price * qty).toFixed(2)}</p>

                    <div className="flex items-center gap-2 mt-2">
                      <button
                        className="px-2 bg-gray-300 rounded"
                        onClick={() => handleQuantityChange(product._id, -1)}
                      >
                        -
                      </button>
                      <span className="px-2">{qty}</span>
                      <button
                        className="px-2 bg-gray-300 rounded"
                        onClick={() => handleQuantityChange(product._id, 1)}
                      >
                        +
                      </button>
                    </div>

                    <button
                      onClick={() => removeFromCart(product._id)}
                      className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
                    >
                      Remove
                    </button>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 text-right">
              <p className="text-xl font-semibold mb-2">
                Total: ${totalAmount.toFixed(2)}
              </p>
              <button
                onClick={placeOrder}
                className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
              >
                Place Order
              </button>
            </div>
          </>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
