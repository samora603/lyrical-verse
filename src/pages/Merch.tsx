import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const products = [
  {
    id: 1,
    name: 'Classic Dickies Shirt',
    description: 'Premium black Dickies shirt',
    price: 'KES 1,000',
    image: '/lovable-uploads/Dickies 1.png',
    isAvailable: true,
  },
  {
    id: 2,
    name: 'Custom Dickies Shirt',
    description: 'Limited edition Dickies Shirt',
    price: 'KES 1,000',
    image: '/lovable-uploads/Dickies 2.png',
    isAvailable: true,
  },
  {
    id: 3,
    name: 'Signature Hoodie',
    description: 'Very Rare hoodie',
    price: 'KES 1,850',
    image: '/lovable-uploads/Hoodie 1.png',
    isAvailable: true,
  },
  {
    id: 4,
    name: 'Very Rare Hoodie',
    description: 'Bold hoodie.',
    price: 'KES 1,850',
    image: '/lovable-uploads/Hoodie 2.png',
    isAvailable: true,
  },
  {
    id: 5,
    name: 'Premium Hoodie',
    description: 'Luxury hoodie',
    price: 'KES 1,850',
    image: '/lovable-uploads/Hoodie 3.png',
    isAvailable: true,
  },
  {
    id: 6,
    name: 'Rare Hoodie',
    description: 'Classic hoodie',
    price: 'KES 1,850',
    image: '/lovable-uploads/Hoodie 4.png',
    isAvailable: true,
  }
];

const MerchPage = () => {
  const whatsappNumber = '254712890778'; // No + or spaces

  const createWhatsAppLink = (productName) => {
    const message = `Hi! I'm interested in your merch: ${productName}`;
    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="merch-page bg-black min-h-screen text-white flex flex-col">
      <style>
        {`
          .card-hover:hover {
            box-shadow: 0 0 15px rgba(255, 215, 0, 0.5);
            transform: translateY(-5px);
          }
          .out-of-stock {
            opacity: 0.6;
          }
          .out-of-stock::after {
            content: 'Inside Stock';
            position: absolute;
            top: 8px;
            right: 8px;
            background-color: #FFD700;
            color: black;
            font-weight: bold;
            padding: 4px 8px;
            border-radius: 4px;
          }
        `}
      </style>

      {/* Navbar */}
      <Navbar />

      {/* Hero Banner */}
      <div className="hero-banner bg-black py-12 text-center">
        <h1 className="text-5xl font-bold text-yellow-400"></h1>
      </div>

      {/* Product Grid */}
      <div className="container mx-auto px-4 py-8 flex-grow">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className={`product-card border-2 border-yellow-400 rounded-lg p-4 transition-all duration-300 ${
                product.isAvailable ? '' : 'out-of-stock'
              } card-hover`}
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full aspect-[4/3] object-cover max-h-64 rounded-md border border-yellow-400"
                />
                {!product.isAvailable && (
                  <span className="absolute top-2 right-2 bg-yellow-400 text-black font-bold py-1 px-3 rounded">
                    Out of Stock
                  </span>
                )}
              </div>
              <h2 className="text-2xl font-semibold text-yellow-400 mt-4">{product.name}</h2>
              <p className="text-white mt-2">{product.description}</p>
              <p className="text-yellow-400 font-bold mt-2">{product.price}</p>
              <a
                href={createWhatsAppLink(product.name)}
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-4 bg-yellow-400 text-black font-semibold py-2 px-4 rounded hover:bg-yellow-500 transition-colors"
              >
                Inquire
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default MerchPage;
