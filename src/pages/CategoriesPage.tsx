
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { categories } from '@/data/mockData';

const CategoriesPage: React.FC = () => {
  return (
    <Layout>
      <div className="py-8 md:py-12">
        <div className="container-custom">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">Shop by Category</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.map((category, index) => (
              <Link 
                key={category.id}
                to={`/categories/${category.slug}`}
                className="group relative rounded-lg overflow-hidden shadow-lg hover-scale animate-fade-up"
                style={{ animationDelay: `${0.1 + index * 0.1}s` }}
              >
                <div className="aspect-[2/1]">
                  <img 
                    src={category.image} 
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6">
                  <h2 className="text-white text-2xl md:text-3xl font-bold mb-2">{category.name}</h2>
                  <p className="text-white/80">Explore our {category.name.toLowerCase()} collection</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CategoriesPage;
