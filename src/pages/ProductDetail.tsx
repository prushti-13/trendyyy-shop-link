
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { ExternalLink, ArrowLeft } from 'lucide-react';
import { products } from '@/data/mockData';
import { Product } from '@/types/product';
import FeaturedProducts from '@/components/products/FeaturedProducts';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  
  useEffect(() => {
    // Find the product that matches the ID
    const foundProduct = products.find(p => p.id === id);
    setProduct(foundProduct || null);
    
    // Find related products (same category, excluding current product)
    if (foundProduct) {
      const related = products
        .filter(p => p.category === foundProduct.category && p.id !== foundProduct.id)
        .slice(0, 4);
      setRelatedProducts(related);
    }
  }, [id]);
  
  if (!product) {
    return (
      <Layout>
        <div className="container-custom py-12">
          <h1 className="text-3xl font-bold mb-6">Product Not Found</h1>
          <p>Sorry, the product you're looking for doesn't exist.</p>
          <Link to="/products" className="text-trendyyy-accent hover:underline inline-flex items-center mt-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to all products
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="py-8 md:py-12">
        <div className="container-custom">
          <Link to="/products" className="text-trendyyy-accent hover:underline inline-flex items-center mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to all products
          </Link>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="aspect-square relative">
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="animate-fade-up">
              <div className="mb-2">
                <Link to={`/categories/${product.category.toLowerCase()}`} className="text-sm text-trendyyy-accent">
                  {product.category}
                </Link>
              </div>
              <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
              <div className="text-2xl font-bold mb-6 text-trendyyy-accent">
                ${product.price.toFixed(2)}
              </div>
              
              <div className="mb-8">
                <h3 className="text-lg font-medium mb-2">Description</h3>
                <p className="text-gray-600">{product.description}</p>
              </div>
              
              <a 
                href={product.purchaseLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-primary inline-flex items-center"
              >
                Buy Now <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
          
          {relatedProducts.length > 0 && (
            <div className="mt-16">
              <h2 className="section-title">Related Products</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {relatedProducts.map(product => (
                  <div key={product.id} className="product-card">
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
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetail;
