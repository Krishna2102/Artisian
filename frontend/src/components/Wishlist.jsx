import React, { useState, useEffect } from "react";

const Wishlist = () => {
    const [wishlist, setWishlist] = useState([]);

    useEffect(() => {
      fetch(`http://localhost:4000/api/wishlist/USER_ID_HERE`)
        .then((res) => res.json())
        .then((data) => setWishlist(data.products))
        .catch((error) => console.error(error));
    }, []);
    

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">My Wishlist</h1>
      {wishlist.length === 0 ? (
        <p>No items in wishlist.</p>
      ) : (
        <div className="grid grid-cols-3 gap-6">
          {wishlist.map((product) => (
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

export default Wishlist;
