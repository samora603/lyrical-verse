import React from 'react';

const featuredProducts = [
  {
    id: 1,
    name: 'Classic Dickies Shirt',
    description: 'Premium Dickies shirt',
    price: 'KES 1,000',
    image: '/lovable-uploads/Dickies 1.png',
    isAvailable: true,
  },
  {
    id: 3,
    name: 'Signature Hoodie',
    description: 'Cozy hoodie',
    price: 'KES 1,500',
    image: '/lovable-uploads/Hoodie 1.png',
    isAvailable: true,
  },
  {
    id: 4,
    name: 'Very Rare Hoodie',
    description: 'Bold hoodie',
    price: 'KES 1,500',
    image: '/lovable-uploads/Hoodie 2.png',
    isAvailable: true, // example out-of-stock
  },
];

const MerchSection = () => {
  const whatsappNumber = '254712890778'; // No + or spaces

  const whatsappLink = (productName) => {
    const message = `Hi! I'm interested in your merch: ${productName}`;
    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  };

  return (
    <section className="merch-section bg-black py-12 text-white">
      <style>
        {`
          .card-hover:hover {
            box-shadow: 0 0 15px rgba(255, 215, 0, 0.5);
            transform: translateY(-5px);
          }
          .out-of-stock {
            opacity: 0.6;
          }
        `}
      </style>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-yellow-400 text-center mb-8">Featured Merch</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProducts.map((product) => (
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
              <h3 className="text-2xl font-semibold text-yellow-400 mt-4">{product.name}</h3>
              <p className="text-white mt-2">{product.description}</p>
              <p className="text-yellow-400 font-bold mt-2">{product.price}</p>
              {product.isAvailable ? (
                <a
                  href={whatsappLink(product.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block mt-4 bg-yellow-400 text-black font-semibold py-2 px-4 rounded hover:bg-yellow-500 transition-colors"
                >
                  Inquire
                </a>
              ) : (
                <button
                  disabled
                  className="block mt-4 bg-gray-500 text-black font-semibold py-2 px-4 rounded cursor-not-allowed"
                >
                  Unavailable
                </button>
              )}
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <a
            href="/merch"
            className="inline-block bg-yellow-400 text-black font-semibold py-2 px-6 rounded hover:bg-yellow-500 transition-colors"
          >
            View All Merch
          </a>
        </div>
      </div>
    </section>
  );
};

export default MerchSection;
