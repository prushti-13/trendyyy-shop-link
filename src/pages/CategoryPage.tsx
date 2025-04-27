
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import ProductGrid from '@/components/products/ProductGrid';
import { products, categories } from '@/data/mockData';
import { Product } from '@/types/product';
import { Category } from '@/types/category';

const CategoryPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [category, setCategory] = useState<Category | null>(null);
  const [categoryProducts, setCategoryProducts] = useState<Product[]>([]);
  
  useEffect(() => {
    // Find the category that matches the slug
    const foundCategory = categories.find(cat => cat.slug === slug);
    setCategory(foundCategory || null);
    
    // Filter products by category name
    if (foundCategory) {
      const filteredProducts = products.filter(product => product.category === foundCategory.name);
      setCategoryProducts(filteredProducts);
    } else {
      setCategoryProducts([]);
    }
  }, [slug]);
  
  if (!category) {
    return (
      <Layout>
        <div className="container-custom py-12">
          <h1 className="text-3xl font-bold mb-6">Category Not Found</h1>
          <p>Sorry, the category you're looking for doesn't exist.</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="py-8 md:py-12">
        <div className="container-custom">
          <div className="relative mb-8">
            <div className="aspect-[3/1] md:rounded-xl overflow-hidden">
              <img 
                src={category.image} 
                alt={category.name} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex items-center">
                <div className="px-6 md:px-12">
                  <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">{category.name}</h1>
                  <p className="text-white/80">Discover our selection of {category.name.toLowerCase()} products</p>
                </div>
              </div>
            </div>
          </div>
          
          <ProductGrid products={categoryProducts} title={`${category.name} Products`} />
        </div>
      </div>
    </Layout>
  );
};

export default CategoryPage;
