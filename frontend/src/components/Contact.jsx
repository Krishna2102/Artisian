import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Contact = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow p-6 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
        <form className="space-y-4">
          <div>
            <label className="block mb-1 font-semibold" htmlFor="name">Name</label>
            <input 
              type="text" 
              id="name" 
              className="w-full border rounded p-2" 
              placeholder="Your name" 
              required 
            />
          </div>
          <div>
            <label className="block mb-1 font-semibold" htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              className="w-full border rounded p-2" 
              placeholder="Your email" 
              required 
            />
          </div>
          <div>
            <label className="block mb-1 font-semibold" htmlFor="message">Message</label>
            <textarea 
              id="message" 
              className="w-full border rounded p-2" 
              placeholder="Your message" 
              rows="5" 
              required 
            />
          </div>
          <button 
            type="submit" 
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            Send Message
          </button>
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
