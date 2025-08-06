import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const merchItems = [
  {
    id: 1,
    name: "Odhil3 Gold Hoodie",
    price: null,
    status: "Coming Soon",
    image: "/lovable-uploads/image 1.png",
  },
  {
    id: 2,
    name: "Black & Gold Cap",
    price: null,
    status: "Out of Stock",
    image: "/lovable-uploads/image 3.png",
  },
  {
    id: 3,
    name: "Limited Edition T-Shirt",
    price: null,
    status: "Coming Soon",
    image: "/lovable-uploads/image 5.png",
  },
];

const Merch = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main className="pt-20 pb-16 px-4">
        <section className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 font-montserrat bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent">
            Official Merchandise
          </h1>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {merchItems.map((item) => (
              <div
                key={item.id}
                className="bg-gray-900 border border-yellow-500/20 rounded-lg overflow-hidden shadow-md hover:shadow-yellow-500/10 transition-shadow"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-80 object-cover"
                />
                <div className="p-5 space-y-2">
                  <h2 className="text-xl font-semibold text-yellow-400">{item.name}</h2>
                  {item.price && (
                    <p className="text-gray-400">{item.price}</p>
                  )}
                  <span className="inline-block bg-yellow-500 text-black text-xs font-semibold px-3 py-1 rounded-full">
                    {item.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Merch;
