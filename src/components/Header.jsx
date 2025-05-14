import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-800">
          <Link to="/" className="hover:text-blue-600">TB Construction</Link>
          <span className="ml-2 text-sm text-gray-600">Floor Sanding & Restoration Experts in London</span>
        </div>
        
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            <li><Link to="/" className="text-gray-700 hover:text-blue-600 transition">Home</Link></li>
            <li><Link to="/about" className="text-gray-700 hover:text-blue-600 transition">About Us</Link></li>
            <li><Link to="/services" className="text-gray-700 hover:text-blue-600 transition">Services</Link></li>
            <li><Link to="/contact" className="text-gray-700 hover:text-blue-600 transition">Contact Us</Link></li>
          </ul>
        </nav>
        
        <div className="hidden md:block">
          <a href="tel:+440123456789" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
            +44 01234 56789
          </a>
        </div>
        
        {/* Mobile menu button */}
        <button className="md:hidden text-gray-700">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;