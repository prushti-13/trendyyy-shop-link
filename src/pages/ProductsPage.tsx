
import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import ProductGrid from '@/components/products/ProductGrid';
import { products, categories } from '@/data/mockData';

const ProductsPage: React.FC = () => {
  // Get unique category names from products
  const categoryNames = Array.from(new Set(products.map(product => product.category)));

  return (
    <Layout>
      <div className="py-8 md:py-12">
        <div className="container-custom">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">All Products</h1>
          <ProductGrid products={products} categories={categoryNames} />
        </div>
      </div>
    </Layout>
  );
};

export default ProductsPage;
