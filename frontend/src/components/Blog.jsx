import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Blog = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow p-6">
        <h1 className="text-3xl font-bold mb-4">Our Latest Blogs</h1>
        <p className="text-gray-600 mb-6">
          Stay updated with trends, stories, and tips from our community of artisans.
        </p>
        {/* Add your blog cards or content here */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Example blog card */}
          <div className="p-4 bg-white shadow rounded">
            <h2 className="text-xl font-semibold">Sample Blog Title</h2>
            <p className="text-sm text-gray-500 mt-2">
              A short description or intro of the blog content. Click to read more...
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
