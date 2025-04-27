
import React, { useState } from 'react';
import ProductCard from './ProductCard';
import { Product } from '@/types/product';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { FilterIcon, SortAsc } from 'lucide-react';

interface ProductGridProps {
  products: Product[];
  title?: string;
  categories?: string[];
}

const ProductGrid: React.FC<ProductGridProps> = ({ products, title, categories = [] }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortOrder, setSortOrder] = useState<string>('default');
  
  const filteredProducts = products
    .filter(product => selectedCategory === 'all' ? true : product.category === selectedCategory)
    .sort((a, b) => {
      switch (sortOrder) {
        case 'price-low-high':
          return a.price - b.price;
        case 'price-high-low':
          return b.price - a.price;
        case 'popularity':
          return b.popularity - a.popularity;
        default:
          return 0;
      }
    });

  return (
    <div>
      {title && <h2 className="section-title">{title}</h2>}
      
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div className="flex items-center gap-2">
          <FilterIcon className="h-4 w-4 text-gray-500" />
          <span className="text-sm font-medium">Filter:</span>
          <Select onValueChange={value => setSelectedCategory(value)} defaultValue="all">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              {categories.map(category => (
                <SelectItem key={category} value={category}>{category}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        <div className="flex items-center gap-2">
          <SortAsc className="h-4 w-4 text-gray-500" />
          <span className="text-sm font-medium">Sort by:</span>
          <Select onValueChange={value => setSortOrder(value)} defaultValue="default">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="default">Default</SelectItem>
              <SelectItem value="price-low-high">Price: Low to High</SelectItem>
              <SelectItem value="price-high-low">Price: High to Low</SelectItem>
              <SelectItem value="popularity">Popularity</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      
      {filteredProducts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No products found.</p>
        </div>
      )}
    </div>
  );
};

export default ProductGrid;
