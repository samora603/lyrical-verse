
import React from 'react';
import { Link } from 'react-router-dom';

const ContactSection = () => {
  return (
    <section className="bg-black text-white py-16 px-4 border-t border-yellow-500/20">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 font-montserrat bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent">
          Let's Work Together
        </h2>
        <p className="text-gray-300 text-lg mb-8">
          For bookings and collaborations, get in touch.
        </p>
        
        <Link 
          to="/contact"
          className="bg-gradient-to-r from-yellow-400 to-amber-500 text-black px-8 py-3 rounded-full text-lg font-bold hover:shadow-lg hover:shadow-yellow-500/25 transition-all duration-300 hover:scale-105"
        >
          Get in Touch
        </Link>
      </div>
    </section>
  );
};

export default ContactSection;
