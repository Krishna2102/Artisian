import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
const Home = () => {
    const categories = [
        { name: "PILLOWS AND THROWS", image: "https://artisansconnect.org/product_images/uploaded_images/bedding.jpg" },
        { name: "FASHION", image: "https://artisansconnect.org/product_images/uploaded_images/fashion2.jpg" },
        { name: "JEWELLERY BOXES", image: "https://artisansconnect.org/product_images/uploaded_images/jewelryboxes.jpg" },
        { name: "HOME DECOR", image: "https://artisansconnect.org/product_images/uploaded_images/homedecor.jpg" },
        { name: "GAMES AND PUZZLES", image: "https://artisansconnect.org/product_images/uploaded_images/games.jpg" }
      ];
  return (
    <div className="font-sans">
      {/* Navbar */}
      <Navbar/>

      {/* Hero Section */}
      <header className="relative flex flex-col items-center justify-center md:items-start p-12 bg-gray-100 h-[500px]">
  {/* Background Image */}
  <img
    src="https://cdn11.bigcommerce.com/s-7z80p2cmk8/images/stencil/original/carousel/3/home-banner-1.jpg?c=1"
    alt="Artisan Woman"
    className="absolute top-0 left-0 w-full h-full object-cover"
  />

  {/* Overlay to Improve Text Readability */}
  <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40"></div>

  {/* Content */}
  <div className="relative z-10 text-center md:text-left text-white max-w-2xl">
    <h1 className="text-4xl font-bold">Welcome to our new artisan marketplace!</h1>
    <div className='py-7'>
      <a href="/products" className='mt-4 px-6 py-3 bg-green-600 text-white rounded-full'>Explore the Silk Road</a>
    </div>
  </div>
</header>


      {/* Mission Section */}
      <section className="p-12 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 ">
          <img src="https://economictimes.indiatimes.com/thumb/msid-102761886,width-1600,height-900,resizemode-4,imgsize-194468/artisans-istock.jpg?from=mdr" alt="Artisan Crafting" className="rounded-lg h-[400px] w-[800px]" />
        </div>
        <div className="md:w-1/2 text-center md:text-left p-6">
          <h2 className="text-3xl font-bold">Empower artisans and preserve culture</h2>
          <p className="mt-4 text-gray-600">Every purchase at Artisans Connect empowers artisans and preserves culture. When you purchase from our artisan marketplace, you receive a unique handmade creation, an artisan is paid fairly for his or her work, ancient crafts live to see another day, and artisan communities have a chance to survive and thrive. Thank you for making a positive difference in the world!</p>
          <button className="mt-4 px-6 py-3 bg-green-600 text-white rounded-full">Learn More</button>
        </div>
      </section>

      {/* our products */}
      <section className="text-center py-12">
      <h2 className="text-3xl font-semibold">Shop the Collection</h2>
      <div className="w-16 h-1 bg-blue-500 mx-auto mt-2"></div>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mt-8 px-4 md:px-16">
        {categories.map((item, index) => (
          <div key={index} className="text-center">
            <img
              src={item.image}
              alt={item.name}
              className="w-48 h-48 object-cover mx-auto rounded-lg transition-transform duration-300 hover:scale-105"
            />
            <p className="mt-4 font-medium">{item.name}</p>
            <div className="w-16 h-1 bg-pink-500 mx-auto mt-1"></div>
          </div>
        ))}
      </div>
    </section>

    {/* Our Mission */}
    <header className="relative flex flex-col items-center justify-center md:items-start p-12 bg-gray-100 h-[500px]">
  {/* Background Image */}
  <img
    src="https://miradorlife.com/wp-content/uploads/2021/08/header-6.png"
    alt="Artisan Woman"
    className="absolute top-0 left-0 w-[1450px] h-full object-cover"
  />

  {/* Overlay to Improve Text Readability */}
  <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>

  {/* Content */}
  <div className="relative z-10 text-center md:text-left ml-[700px] text-white max-w-2xl">
    <h1 className="text-4xl font-bold">Preserving culture and heritage</h1>
    <h2 className='text-lg'>We welcome you to join us on this transformative cultural journey by discovering master artisans who keep traditional arts alive….</h2>
    <div className='py-6'>
      <a href="/aboutus" className='mt-4 px-6 py-3 bg-green-600 text-white rounded-full'>
        Learn More
      </a>
    </div>
  </div>
</header>

{/* Our Blogs Section */}
<section className="bg-gray-50 py-12 px-4 md:px-20">
  <h2 className="text-3xl font-semibold text-center">Our Blogs</h2>
  <div className="w-16 h-1 bg-blue-500 mx-auto mt-2 mb-10"></div>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
    {/* Blog 1 */}
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src="https://tribesindia.com/public/uploads/all/1fgRJGPwox43f33TckwarmWq8DYOP754o00QISAm.webp"
        alt="Bhil Art"
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-1">Bhil Art – Pithora Art</h3>
        <p className="text-gray-500 text-sm mb-2">September 23, 2021 /// No Comments</p>
        <p className="text-gray-700 text-sm mb-3">Ritualistic paintings of Bhil tribes in Madhya Pradesh and Gujarat symbolizing culture and identity...</p>
        <a href="/blogs/pithora-art" className="text-blue-600 font-semibold hover:underline">Read More »</a>
      </div>
    </div>

    {/* Blog 2 */}
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src="https://tribesindia.com/public/uploads/all/1fgRJGPwox43f33TckwarmWq8DYOP754o00QISAm.webp"
        alt="Warli Art"
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-1">Warli Tribal Art</h3>
        <p className="text-gray-500 text-sm mb-2">October 14, 2021 /// 2 Comments</p>
        <p className="text-gray-700 text-sm mb-3">Warli art from Maharashtra uses simple geometric forms to depict everyday life and nature worship...</p>
        <a href="/blogs/warli-art" className="text-blue-600 font-semibold hover:underline">Read More »</a>
      </div>
    </div>

    {/* Blog 3 */}
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src="https://tribesindia.com/public/uploads/all/1fgRJGPwox43f33TckwarmWq8DYOP754o00QISAm.webp"
        alt="Madhubani Painting"
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-1">Madhubani Paintings</h3>
        <p className="text-gray-500 text-sm mb-2">November 5, 2021 /// No Comments</p>
        <p className="text-gray-700 text-sm mb-3">A folk art tradition from Bihar, Madhubani paintings are known for intricate patterns and vibrant colors...</p>
        <a href="/blogs/madhubani" className="text-blue-600 font-semibold hover:underline">Read More »</a>
      </div>
    </div>

    {/* Blog 4 */}
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src="https://tribesindia.com/public/uploads/all/1fgRJGPwox43f33TckwarmWq8DYOP754o00QISAm.webp"
        alt="Kalamkari"
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-1">Kalamkari – Storytelling on Cloth</h3>
        <p className="text-gray-500 text-sm mb-2">December 1, 2021 /// 1 Comment</p>
        <p className="text-gray-700 text-sm mb-3">Kalamkari is a hand-painted or block-printed cotton textile, historically rooted in Andhra Pradesh...</p>
        <a href="/blogs/kalamkari" className="text-blue-600 font-semibold hover:underline">Read More »</a>
      </div>
    </div>
  </div>
</section>



      {/* Footer */}
<Footer/>

    </div>
  );
};

export default Home;
