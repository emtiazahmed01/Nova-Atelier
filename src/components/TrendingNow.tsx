import React, { useState } from 'react';
import { TRENDING_PRODUCTS } from '../data/products';
import { Product } from '../types';

interface TrendingNowProps {
  onQuickAdd: (product: Product, size: string) => void;
  onToggleWishlist: (product: Product) => void;
  isWishlisted: (productId: string) => boolean;
  onOpenProductDetail: (product: Product) => void;
  currentFilter: string;
  onFilterChange: (filter: string) => void;
}

export const TrendingNow: React.FC<TrendingNowProps> = ({
  onQuickAdd,
  onToggleWishlist,
  isWishlisted,
  onOpenProductDetail,
  currentFilter,
  onFilterChange
}) => {
  // Store chosen size per product
  const [selectedSizes, setSelectedSizes] = useState<Record<string, string>>({
    'cashmere-crewneck': 'S',
    'pleated-wide-leg-trouser': '30',
    'architectural-trench': 'XS',
    'calfskin-minimalist-loafer': '41'
  });

  const filterTabs = [
    { id: 'all', label: 'All' },
    { id: 'outerwear', label: 'Outerwear' },
    { id: 'knitwear', label: 'Knitwear' },
    { id: 'footwear', label: 'Footwear' },
    { id: 'tailoring', label: 'Tailoring' }
  ];

  const filteredProducts = currentFilter === 'all'
    ? TRENDING_PRODUCTS
    : TRENDING_PRODUCTS.filter((p) => p.category === currentFilter);

  const handleSelectSize = (productId: string, size: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedSizes((prev) => ({ ...prev, [productId]: size }));
  };

  return (
    <section id="trending" className="w-full px-4 lg:px-6 py-12 lg:py-16">
      <div className="max-w-7xl mx-auto flex flex-col gap-6 lg:gap-8">
        
        {/* Header & Filter Tabs */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
          <div>
            <span className="font-label-caps text-[11px] uppercase text-[#9d431f] tracking-widest font-semibold">
              Seasonal Highlights
            </span>
            <h2 className="font-headline-lg text-[#000000] tracking-tight mt-1">
              Trending Now
            </h2>
            <p className="font-body-md text-[14px] text-[#47464b] mt-1">
              Curated pieces our customers are loving.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {filterTabs.map((tab) => {
              const active = currentFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => onFilterChange(tab.id)}
                  className={`px-4 py-2 rounded-full font-label-caps text-[11px] uppercase tracking-wider transition-all cursor-pointer ${
                    active
                      ? 'bg-[#000000] text-white shadow-sm font-semibold'
                      : 'bg-[#eeeeed] text-[#47464b] hover:text-[#1a1c1c]'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* 4-Column Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {filteredProducts.map((product) => {
            const currentSize = selectedSizes[product.id] || product.sizes[0];
            const wishlisted = isWishlisted(product.id);

            return (
              <div
                key={product.id}
                className="group flex flex-col bg-white rounded-xl p-3 shadow-sm hover:shadow-md transition-all border border-[#eeeeed]"
              >
                {/* Image Container with Badge & Wishlist button */}
                <div
                  className="relative w-full aspect-[3/4] rounded-lg overflow-hidden bg-[#f3f4f3] mb-3 cursor-pointer"
                  onClick={() => onOpenProductDetail(product)}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Badge */}
                  {product.badge && (
                    <span
                      className={`absolute top-3 left-3 px-2.5 py-1 rounded font-label-caps text-[10px] uppercase font-semibold shadow-xs ${
                        product.badge === 'Sale'
                          ? 'bg-[#9d431f] text-white'
                          : 'bg-white/90 backdrop-blur-md text-black'
                      }`}
                    >
                      {product.badge}
                    </span>
                  )}

                  {/* Wishlist Button */}
                  <button
                    aria-label="Add to wishlist"
                    onClick={(e) => {
                      e.stopPropagation();
                      onToggleWishlist(product);
                    }}
                    className={`absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center transition-colors cursor-pointer shadow-xs ${
                      wishlisted ? 'text-[#9d431f]' : 'text-[#1a1c1c] hover:text-[#9d431f]'
                    }`}
                  >
                    <span
                      className={`material-symbols-outlined text-[18px] ${
                        wishlisted ? 'material-symbols-filled' : ''
                      }`}
                    >
                      favorite
                    </span>
                  </button>
                </div>

                {/* Meta info */}
                <div className="flex items-center justify-between text-[#47464b] mb-1 font-label-sm text-[11px]">
                  <span>{product.categoryLabel}</span>
                  <span className="flex items-center gap-1 text-[#D97706]">
                    <span className="material-symbols-outlined text-[14px] material-symbols-filled">star</span>
                    <span className="text-[#1a1c1c] font-medium">
                      {product.rating} {product.reviewsCount ? `(${product.reviewsCount})` : ''}
                    </span>
                  </span>
                </div>

                {/* Product Name */}
                <h3
                  onClick={() => onOpenProductDetail(product)}
                  className="font-headline-sm text-[16px] text-[#000000] font-normal truncate cursor-pointer hover:underline"
                >
                  {product.name}
                </h3>

                {/* Price Display */}
                <div className="flex items-center gap-2 mt-1">
                  <p className={`font-body-md text-[15px] font-semibold ${product.originalPrice ? 'text-[#9d431f]' : 'text-[#000000]'}`}>
                    ${product.price}
                  </p>
                  {product.originalPrice && (
                    <p className="font-body-sm text-[13px] line-through text-[#77767b]">
                      ${product.originalPrice}
                    </p>
                  )}
                </div>

                {/* Size Selector Pills */}
                <div className="flex items-center gap-1.5 mt-2.5 mb-3">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      type="button"
                      onClick={(e) => handleSelectSize(product.id, size, e)}
                      className={`w-7 h-7 rounded text-xs font-medium flex items-center justify-center transition-colors cursor-pointer ${
                        currentSize === size
                          ? 'bg-[#000000] text-white font-semibold'
                          : 'bg-[#eeeeed] text-[#1a1c1c] hover:bg-[#e8e8e7]'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>

                {/* Add to Bag Button */}
                <button
                  type="button"
                  onClick={() => onQuickAdd(product, currentSize)}
                  className="w-full mt-auto py-2.5 rounded-lg bg-[#eeeeed] hover:bg-[#000000] hover:text-white text-[#1a1c1c] font-label-caps text-[11px] uppercase tracking-wider transition-all cursor-pointer"
                >
                  Add to Bag
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
