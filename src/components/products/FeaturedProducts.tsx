
import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';
import { Product } from '@/types/product';
import { ArrowRight } from 'lucide-react';

interface FeaturedProductsProps {
  products: Product[];
  title: string;
  viewAllLink: string;
}

const FeaturedProducts: React.FC<FeaturedProductsProps> = ({ products, title, viewAllLink }) => {
  return (
    <section className="py-12">
      <div className="container-custom">
        <div className="flex justify-between items-center mb-6">
          <h2 className="section-title !mb-0">{title}</h2>
          <Link to={viewAllLink} className="text-trendyyy-accent flex items-center hover:underline">
            View All <ArrowRight className="h-4 w-4 ml-1" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.slice(0, 4).map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
