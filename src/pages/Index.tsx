
import React from 'react';
import Layout from '@/components/layout/Layout';
import Hero from '@/components/home/Hero';
import CategoryShowcase from '@/components/home/CategoryShowcase';
import FeaturedProducts from '@/components/products/FeaturedProducts';
import { products, categories } from '@/data/mockData';

const Index: React.FC = () => {
  // Get trending products (highest popularity)
  const trendingProducts = [...products]
    .sort((a, b) => b.popularity - a.popularity)
    .slice(0, 4);

  // Get products for a specific category (Electronics in this case)
  const electronicProducts = products
    .filter(product => product.category === 'Electronics');

  return (
    <Layout>
      <Hero />
      <CategoryShowcase categories={categories} />
      <FeaturedProducts 
        title="Trending Now" 
        products={trendingProducts}
        viewAllLink="/products"
      />
      <section className="py-12 bg-trendyyy-light">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Trendyyy?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We curate the best products from around the web so you can discover and shop with confidence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md animate-fade-up" style={{ animationDelay: '0.1s' }}>
              <div className="w-12 h-12 bg-trendyyy-accent rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Time Saving</h3>
              <p className="text-gray-600">
                We spend hours researching products so you don't have to. Save time and shop with confidence.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md animate-fade-up" style={{ animationDelay: '0.3s' }}>
              <div className="w-12 h-12 bg-trendyyy-accent rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Curated Quality</h3>
              <p className="text-gray-600">
                Every product featured on our site meets our strict standards for quality and value.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md animate-fade-up" style={{ animationDelay: '0.5s' }}>
              <div className="w-12 h-12 bg-trendyyy-accent rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Trending Items</h3>
              <p className="text-gray-600">
                Stay ahead of the curve with our constantly updated selection of trending products.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <FeaturedProducts 
        title="Latest Electronics" 
        products={electronicProducts} 
        viewAllLink="/categories/electronics"
      />
    </Layout>
  );
};

export default Index;
