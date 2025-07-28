
import React from 'react';

const ImageGallery = () => {
  const images = [
    {
      src: '/lovable-uploads/image 1.png',
      alt: 'Odhil3 urban shot'
    },
    {
      src: '/lovable-uploads/image 2.png',
      alt: 'Odhil3 studio session'
    },
    {
      src: '/lovable-uploads/image 3.png',
      alt: 'Odhil3 night shot'
    },
    {
      src: '/lovable-uploads/image 4.png',
      alt: 'Odhil3 in car'
    }
  ];

  return (
    <section className="py-16 px-4 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-montserrat bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent">
          Gallery
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div 
              key={index} 
              className="aspect-square bg-gray-800 rounded-lg overflow-hidden border-2 border-yellow-500/20 hover:border-yellow-400/60 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/20 group"
            >
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageGallery;
