import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/music', label: 'Music' },
    { path: '/videos', label: 'Videos' },
    { path: '/merch', label: 'Merch' },
    { path: '/contact', label: 'Contact' },
    { path: '/53', label: '53' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-black/90 backdrop-blur-sm text-white px-4 py-4 flex justify-between items-center z-50 border-b border-yellow-500/20">
      <Link
        to="/"
        className="text-white font-bold text-2xl font-montserrat bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent hover:shadow-lg hover:shadow-yellow-500/25 transition-all duration-300"
      >
        Odhil3
      </Link>

      {/* Desktop Nav */}
      <div className="hidden md:flex space-x-8">
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={`text-white text-base transition-all duration-300 font-montserrat ${
              isActive(link.path)
                ? 'text-yellow-400 border-b-2 border-yellow-400'
                : 'hover:text-yellow-400 hover:shadow-sm hover:shadow-yellow-500/25'
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>

      {/* Mobile Menu Icon */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-yellow-400 focus:outline-none">
          {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-black border-t border-yellow-500/10 flex flex-col items-start px-4 py-4 md:hidden z-40">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`w-full py-2 text-white text-lg font-montserrat border-b border-yellow-500/10 ${
                isActive(link.path)
                  ? 'text-yellow-400 font-semibold'
                  : 'hover:text-yellow-400'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
