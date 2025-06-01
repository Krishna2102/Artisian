import React from 'react';

const Wishlist = () => {
  // Example wishlist item (You should replace this with real data)
  const wishlistItems = [
    {
      id: 1,
      image: 'https://example.com/backpack.jpg', // Replace with actual image URL
      name: 'Stroll Through the City',
      description: '100% Leather Backpack with Zipper Accents from Costa Rica (Costa Rica)',
      price: '$267.99',
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Breadcrumb */}
      <div className="text-gray-500 text-sm mb-4">
        Home / Your Account / <span className="font-semibold">View Wishlist</span>
      </div>

      {/* Page Title */}
      <h2 className="text-2xl font-semibold mb-6">Wish List: My Wish List</h2>

      {/* Wishlist Items */}
      <div className="grid gap-6">
        {wishlistItems.map((item) => (
          <div key={item.id} className="flex items-start space-x-4 bg-gray-100 p-4 rounded-md">
            <img src={item.image} alt={item.name} className="w-40 h-40 object-cover rounded-md" />

            <div>
              <h3 className="text-lg font-semibold">{item.name}</h3>
              <p className="text-gray-600">{item.description}</p>
              <p className="text-xl font-bold mt-2">{item.price}</p>
              
              <button className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md">
                REMOVE ITEM
              </button>
              <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded-md">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
