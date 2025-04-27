
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';
import { Product } from '@/types/product';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`}>
        <div className="relative aspect-square overflow-hidden bg-gray-100">
          <img 
            src={product.image} 
            alt={product.title}
            className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="p-4">
          <h3 className="font-medium text-base mb-1 line-clamp-1">{product.title}</h3>
          <div className="flex items-center justify-between">
            <span className="text-trendyyy-accent font-semibold">${product.price.toFixed(2)}</span>
            <span className="text-xs text-gray-500">{product.category}</span>
          </div>
        </div>
      </Link>
      <div className="px-4 pb-4">
        <a 
          href={product.purchaseLink} 
          target="_blank" 
          rel="noopener noreferrer"
          className="btn-primary w-full flex items-center justify-center gap-2"
        >
          Buy Now
          <ExternalLink size={16} />
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
