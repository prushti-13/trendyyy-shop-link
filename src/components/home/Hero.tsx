
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-trendyyy-light py-16 md:py-24">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="md:w-1/2 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-trendyyy-black mb-4">
              Discover the Latest <span className="text-trendyyy-accent">Trends</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg">
              Shop the most stylish and trendy products from top brands. All in one place.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/products">
                <Button className="bg-trendyyy-accent hover:bg-trendyyy-accent/90 text-white">
                  Shop Now
                </Button>
              </Link>
              <Link to="/categories">
                <Button variant="outline" className="border-trendyyy-accent text-trendyyy-accent hover:bg-trendyyy-accent/10">
                  Explore Categories
                </Button>
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 relative animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Trendy products" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-trendyyy-accent rounded-full -z-10"></div>
            <div className="absolute -top-6 -right-6 w-20 h-20 bg-trendyyy-black rounded-full -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
