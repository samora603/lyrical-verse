import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-black/90 backdrop-blur-sm text-white px-4 py-4 flex justify-between items-center z-50 border-b border-yellow-500/20">
      <Link to="/" className="text-white font-bold text-2xl font-montserrat bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent hover:shadow-lg hover:shadow-yellow-500/25 transition-all duration-300">
        Odhil3
      </Link>
      <div className="flex space-x-8">
        <Link 
          to="/" 
          className={`text-white text-base transition-all duration-300 font-montserrat ${
            isActive('/') 
              ? 'text-yellow-400 border-b-2 border-yellow-400' 
              : 'hover:text-yellow-400 hover:shadow-sm hover:shadow-yellow-500/25'
          }`}
        >
          Home
        </Link>
        <Link 
          to="/music" 
          className={`text-white text-base transition-all duration-300 font-montserrat ${
            isActive('/music') 
              ? 'text-yellow-400 border-b-2 border-yellow-400' 
              : 'hover:text-yellow-400 hover:shadow-sm hover:shadow-yellow-500/25'
          }`}
        >
          Music
        </Link>
        <Link 
          to="/videos" 
          className={`text-white text-base transition-all duration-300 font-montserrat ${
            isActive('/videos') 
              ? 'text-yellow-400 border-b-2 border-yellow-400' 
              : 'hover:text-yellow-400 hover:shadow-sm hover:shadow-yellow-500/25'
          }`}
        >
          Videos
        </Link>
        <Link 
          to="/merch" 
          className={`text-white text-base transition-all duration-300 font-montserrat ${
            isActive('/merch') 
              ? 'text-yellow-400 border-b-2 border-yellow-400' 
              : 'hover:text-yellow-400 hover:shadow-sm hover:shadow-yellow-500/25'
          }`}
        >
          Merch
        </Link>
        <Link 
          to="/contact" 
          className={`text-white text-base transition-all duration-300 font-montserrat ${
            isActive('/contact') 
              ? 'text-yellow-400 border-b-2 border-yellow-400' 
              : 'hover:text-yellow-400 hover:shadow-sm hover:shadow-yellow-500/25'
          }`}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
