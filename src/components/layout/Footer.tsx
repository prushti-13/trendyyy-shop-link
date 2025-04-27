
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-trendyyy-black text-white pt-12 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Trend<span className="text-trendyyy-accent">yyy</span></h3>
            <p className="text-gray-300 mb-4">
              Discover the latest trends in fashion, electronics, beauty, and more.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-3 text-lg">Shop</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/categories/fashion" className="text-gray-300 hover:text-white transition-colors">
                  Fashion
                </Link>
              </li>
              <li>
                <Link to="/categories/electronics" className="text-gray-300 hover:text-white transition-colors">
                  Electronics
                </Link>
              </li>
              <li>
                <Link to="/categories/beauty" className="text-gray-300 hover:text-white transition-colors">
                  Beauty
                </Link>
              </li>
              <li>
                <Link to="/categories/home-decor" className="text-gray-300 hover:text-white transition-colors">
                  Home Decor
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-3 text-lg">About</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-300 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-gray-300 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-3 text-lg">Join Our Newsletter</h4>
            <p className="text-gray-300 mb-3">
              Stay updated with the latest trends and promotions.
            </p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="px-3 py-2 text-black flex-grow rounded-l-md focus:outline-none" 
              />
              <button 
                type="submit"
                className="bg-trendyyy-accent px-4 py-2 rounded-r-md hover:opacity-90 transition-opacity"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Trendyyy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
