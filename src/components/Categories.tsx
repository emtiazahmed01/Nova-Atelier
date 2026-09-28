import React from 'react';
import { CATEGORIES_DATA } from '../data/products';

interface CategoriesProps {
  onSelectCategory: (categoryId: string) => void;
}

export const Categories: React.FC<CategoriesProps> = ({ onSelectCategory }) => {
  return (
    <section id="categories" className="w-full px-4 lg:px-6 py-12 lg:py-16 bg-[#f3f4f3]">
      <div className="max-w-7xl mx-auto flex flex-col gap-6 lg:gap-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-2">
          <div>
            <span className="font-label-caps text-[11px] uppercase text-[#9d431f] tracking-widest font-semibold">
              Collections
            </span>
            <h2 className="font-headline-lg text-[#1a1c1c] tracking-tight mt-1">
              Shop by Category
            </h2>
          </div>
          <p className="font-body-md text-[14px] text-[#47464b] max-w-md">
            Architectural tailoring, versatile silhouettes, and refined accessories.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {CATEGORIES_DATA.map((cat) => (
            <div
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className="group relative rounded-xl overflow-hidden aspect-[4/5] bg-[#e8e8e7] shadow-sm hover:shadow-md transition-all cursor-pointer"
            >
              <img
                src={cat.image}
                alt={cat.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent"></div>
              
              <div className="absolute bottom-0 inset-x-0 p-5 flex flex-col justify-end text-white">
                <h3 className="font-headline-md text-[24px] font-light text-white tracking-wide">
                  {cat.title}
                </h3>
                <span className="inline-flex items-center gap-1 font-label-caps text-[11px] tracking-wider uppercase text-[#ffdbcf] mt-1 group-hover:translate-x-1 transition-transform">
                  Explore Collection
                  <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
