import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Search, ShoppingCart, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface NavbarProps {
  isAdmin?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isAdmin = false }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="border-b sticky top-0 bg-white z-40">
      <div className="container-custom flex items-center justify-between py-4">
        <Link to="/" className="font-bold text-2xl text-trendyyy-black flex items-center">
          Trend<span className="text-trendyyy-accent">yyy</span>
        </Link>
        
        <div className="hidden md:flex items-center space-x-6">
          <nav className="space-x-6">
            <Link to="/" className="text-gray-600 hover:text-trendyyy-accent transition-colors">Home</Link>
            <Link to="/products" className="text-gray-600 hover:text-trendyyy-accent transition-colors">Shop</Link>
            <Link to="/categories" className="text-gray-600 hover:text-trendyyy-accent transition-colors">Categories</Link>
            {isAdmin && (
              <>
                <Link to="/admin" className="text-gray-600 hover:text-trendyyy-accent transition-colors">Admin</Link>
                <Link to="/admin/analytics" className="text-gray-600 hover:text-trendyyy-accent transition-colors">Analytics</Link>
              </>
            )}
          </nav>
          
          <div className="relative">
            <input
              type="text"
              placeholder="Search products..."
              className="pl-3 pr-10 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-trendyyy-accent focus:border-trendyyy-accent"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="absolute right-3 top-2.5 h-4 w-4 text-gray-400" />
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="hidden md:flex">
            <ShoppingCart className="h-5 w-5" />
          </Button>
          
          <button 
            className="md:hidden text-gray-600"
            onClick={toggleMobileMenu}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      
      <div 
        className={cn(
          "md:hidden absolute top-16 inset-x-0 bg-white shadow-md transition-all duration-300 ease-in-out z-50",
          mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
      >
        <div className="px-4 py-3">
          <div className="relative mb-3">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full pl-3 pr-10 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-trendyyy-accent focus:border-trendyyy-accent"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="absolute right-3 top-2.5 h-4 w-4 text-gray-400" />
          </div>
          <nav className="flex flex-col space-y-3">
            <Link 
              to="/" 
              className="text-gray-600 py-2 hover:text-trendyyy-accent transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/products" 
              className="text-gray-600 py-2 hover:text-trendyyy-accent transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Shop
            </Link>
            <Link 
              to="/categories" 
              className="text-gray-600 py-2 hover:text-trendyyy-accent transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Categories
            </Link>
            {isAdmin && (
              <>
                <Link 
                  to="/admin" 
                  className="text-gray-600 py-2 hover:text-trendyyy-accent transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Admin
                </Link>
                <Link 
                  to="/admin/analytics" 
                  className="text-gray-600 py-2 hover:text-trendyyy-accent transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Analytics
                </Link>
              </>
            )}
            <div className="flex items-center py-2">
              <ShoppingCart className="h-5 w-5 mr-2 text-gray-600" />
              <span>Cart</span>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
