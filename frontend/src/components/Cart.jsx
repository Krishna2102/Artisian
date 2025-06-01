import React, { useState, useEffect } from "react";

const Cart = () => {
  const [cart, setCart] = useState([]);

useEffect(() => {
  fetch(`http://localhost:4000/api/cart/USER_ID_HERE`)
    .then((res) => res.json())
    .then((data) => setCart(data.items))
    .catch((error) => console.error(error));
}, []);


  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">My Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="grid grid-cols-3 gap-6">
          {cart.map((product) => (
            <div key={product.id} className="bg-white shadow p-4 rounded-lg">
              <img src={product.image} alt={product.name} className="w-full h-64 object-cover rounded-md" />
              <h3 className="mt-4 text-lg font-semibold">{product.name}</h3>
              <p className="text-gray-600 text-sm">{product.description}</p>
              <p className="mt-2 text-xl font-bold">${product.price.toFixed(2)}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
