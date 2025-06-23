import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../Navbar';
import Footer from '../Footer';

const ProductDetail = () => {
  const { id } = useParams(); // This is productid from the URL
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`http://localhost:4000/api/user/product/${id}`);
        setProduct(res.data);
      } catch (err) {
        console.error(err);
        setError('Product not found');
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <p className="p-6">Loading...</p>;
  if (error) return <p className="p-6 text-red-500">{error}</p>;

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow p-6 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-auto object-cover rounded-lg shadow"
            />
          </div>
          <div>
            <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
            <p className="text-gray-600 mb-4">{product.detail}</p>
            <p className="text-2xl font-bold text-green-600 mb-6">
              ${parseFloat(product.price.replace(/[^0-9.]/g, '')).toFixed(2)}
            </p>

            {/* Add to Cart button (optional) */}
            <button
              onClick={() => alert('Add to cart logic can go here')}
              className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;
