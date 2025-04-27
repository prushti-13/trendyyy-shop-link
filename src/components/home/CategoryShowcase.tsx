
import React from 'react';
import { Link } from 'react-router-dom';
import { Category } from '@/types/category';

interface CategoryShowcaseProps {
  categories: Category[];
}

const CategoryShowcase: React.FC<CategoryShowcaseProps> = ({ categories }) => {
  return (
    <section className="py-12 bg-white">
      <div className="container-custom">
        <h2 className="section-title text-center">Shop by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Link 
              key={category.id} 
              to={`/categories/${category.slug}`}
              className="group relative overflow-hidden rounded-lg hover-scale shadow-md animate-fade-up"
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              <div className="aspect-square w-full">
                <img 
                  src={category.image} 
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                <h3 className="text-white font-bold text-xl">{category.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryShowcase;
