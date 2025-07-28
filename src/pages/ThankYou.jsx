import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ThankYou = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Navbar />
      <main className="flex-grow flex items-center justify-center px-4">
        <div className="text-center max-w-xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-montserrat bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent">
            Thank You!
          </h1>
          <p className="text-lg md:text-xl font-montserrat">
            We’ve received your message. We’ll get back to you as soon as possible.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ThankYou;
