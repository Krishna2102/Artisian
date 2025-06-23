import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../Navbar';
import Footer from '../Footer';

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWishlist = async () => {
      const token = localStorage.getItem('token');

      if (!token) {
        setError('User not authenticated');
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError(null);

        const response = await axios.get('http://localhost:4000/api/user/like', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        // The backend returns the wishlist directly
        setWishlist(response.data || []);
      } catch (err) {
        setError('Failed to fetch wishlist');
        console.error('Error fetching wishlist:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchWishlist();
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="p-6 flex-grow">
        <h2 className="text-2xl font-bold mb-4">Wishlist</h2>

        {loading && <p>Loading wishlist...</p>}
        {error && <p className="text-red-500">{error}</p>}
        {!loading && !error && wishlist.length === 0 && (
          <p>Your wishlist is empty.</p>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {wishlist.map((product) => (
            <div
              key={product._id}
              className="bg-white shadow p-4 rounded-lg"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded mb-2"
              />
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-sm text-gray-600">{product.detail}</p>
              <p className="text-xl font-bold mt-2">
                ${parseFloat(product.price.replace(/[^0-9.]/g, "")).toFixed(2)}
              </p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Wishlist;
