import React from 'react';
import { JUST_IN_PRODUCTS } from '../data/products';
import { Product } from '../types';

interface JustInProps {
  onQuickAdd: (product: Product, size?: string) => void;
  onToggleWishlist: (product: Product) => void;
  isWishlisted: (productId: string) => boolean;
  onOpenProductDetail: (product: Product) => void;
}

export const JustIn: React.FC<JustInProps> = ({
  onQuickAdd,
  onToggleWishlist,
  isWishlisted,
  onOpenProductDetail
}) => {
  return (
    <section id="just-in" className="w-full px-4 lg:px-6 py-12 lg:py-16">
      <div className="max-w-7xl mx-auto flex flex-col gap-6 lg:gap-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
          <div>
            <span className="font-label-caps text-[11px] uppercase text-[#9d431f] tracking-widest font-semibold">
              Recent Drops
            </span>
            <h2 className="font-headline-lg text-[#000000] tracking-tight mt-1">
              Just In
            </h2>
            <p className="font-body-md text-[14px] text-[#47464b] mt-1">
              Fresh silhouettes and seasonal textures just landed in the atelier.
            </p>
          </div>

          <button
            onClick={() => {
              const el = document.getElementById('trending');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-1 font-label-caps text-[11px] uppercase tracking-wider text-[#9d431f] hover:text-[#000000] transition-colors cursor-pointer font-semibold"
          >
            View All (28) <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {JUST_IN_PRODUCTS.map((product) => {
            const wishlisted = isWishlisted(product.id);
            return (
              <div
                key={product.id}
                className="group flex flex-col bg-white rounded-xl p-3 shadow-sm hover:shadow-md transition-all border border-[#eeeeed]"
              >
                {/* Image */}
                <div
                  className="relative w-full aspect-[3/4] rounded-lg overflow-hidden bg-[#f3f4f3] mb-3 cursor-pointer"
                  onClick={() => onOpenProductDetail(product)}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
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

                {/* Meta */}
                <div className="flex items-center justify-between text-[#47464b] mb-1 font-label-sm text-[11px]">
                  <span>{product.categoryLabel}</span>
                  <span className="flex items-center gap-1 text-[#D97706]">
                    <span className="material-symbols-outlined text-[14px] material-symbols-filled">star</span>
                    <span className="text-[#1a1c1c] font-medium">{product.rating}</span>
                  </span>
                </div>

                {/* Title */}
                <h3
                  onClick={() => onOpenProductDetail(product)}
                  className="font-headline-sm text-[16px] text-[#000000] font-normal truncate cursor-pointer hover:underline"
                >
                  {product.name}
                </h3>

                {/* Price */}
                <p className="font-body-md text-[15px] font-semibold text-[#000000] mt-1 mb-3">
                  ${product.price}
                </p>

                {/* Add to Bag */}
                <button
                  type="button"
                  onClick={() => onQuickAdd(product, product.defaultSize || product.sizes[0])}
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
