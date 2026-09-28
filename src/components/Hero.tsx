import React from 'react';
import { HERO_PRODUCT } from '../data/products';
import { Product } from '../types';

interface HeroProps {
  onQuickAdd: (product: Product, size?: string) => void;
  onOpenProductDetail: (product: Product) => void;
  onNavigateSection: (sectionId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({
  onQuickAdd,
  onOpenProductDetail,
  onNavigateSection
}) => {
  return (
    <section id="hero" className="relative w-full overflow-hidden px-4 lg:px-6 py-6 lg:py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
        
        {/* Left Column: Editorial Copy */}
        <div className="lg:col-span-6 flex flex-col items-start gap-4 lg:pr-6">
          
          {/* Season pill */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#eeeeed] text-[#47464b] font-label-caps text-[11px] tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#9d431f]"></span>
            <span>New Season • SS26</span>
          </div>

          {/* Heading */}
          <h1 className="font-display-xl tracking-tight text-[#000000] leading-[1.08]">
            Style That Moves With You
          </h1>

          {/* Subtitle */}
          <p className="font-body-lg text-[16px] lg:text-[17px] text-[#47464b] max-w-xl leading-relaxed">
            Thoughtfully engineered wardrobe staples and quiet luxury essentials crafted from certified organic textiles and precision Italian wools.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto">
            <button
              onClick={() => onNavigateSection('trending')}
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-[#9d431f] text-white font-label-caps text-[12px] uppercase tracking-wider shadow-sm hover:opacity-95 transition-all cursor-pointer"
            >
              Shop Collection
            </button>
            <button
              onClick={() => onNavigateSection('just-in')}
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-[#f3f4f3] text-[#1a1c1c] font-label-caps text-[12px] uppercase tracking-wider hover:bg-[#e8e8e7] transition-all cursor-pointer"
            >
              Explore New Arrivals
            </button>
          </div>

          {/* Social Proof Star Rating */}
          <div className="flex items-center gap-2 pt-2 text-[#47464b]">
            <div className="flex text-[#D97706]">
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  className="material-symbols-outlined text-[18px] material-symbols-filled text-[#D97706]"
                >
                  star
                </span>
              ))}
            </div>
            <span className="font-label-md text-[13px]">
              <strong className="text-[#1a1c1c] font-semibold">4.9/5</strong> from over 12,000 discerning collectors
            </span>
          </div>
        </div>

        {/* Right Column: Editorial Hero Media + Interactive Overlay */}
        <div className="lg:col-span-6 relative flex justify-center lg:justify-end">
          <div className="relative w-full max-w-lg aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl bg-[#e8e8e7] group">
            <img
              src={HERO_PRODUCT.image}
              alt="Editorial Campaign: Sculpted Camel Wool Overcoat in architectural gallery"
              className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105 cursor-pointer"
              onClick={() => onOpenProductDetail(HERO_PRODUCT)}
            />

            {/* Gradient Scrim */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none"></div>

            {/* Floating Product Card Overlay */}
            <div className="absolute bottom-6 left-6 right-6 p-3 bg-white/95 backdrop-blur-md rounded-xl shadow-lg border border-[#eeeeed] flex items-center justify-between gap-3">
              <div
                className="flex items-center gap-3 min-w-0 cursor-pointer"
                onClick={() => onOpenProductDetail(HERO_PRODUCT)}
              >
                <div className="w-12 h-14 rounded-lg bg-[#e8e8e7] overflow-hidden shrink-0 border border-[#eeeeed]">
                  <img
                    src={HERO_PRODUCT.image}
                    alt="Wool Overcoat thumbnail"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-1 text-[11px] text-[#D97706] mb-0.5">
                    <span className="material-symbols-outlined text-[13px] material-symbols-filled">star</span>
                    <span className="font-label-sm font-semibold text-[#1a1c1c]">4.9</span>
                  </div>
                  <h4 className="font-label-md text-[13px] font-medium text-[#1a1c1c] truncate">
                    {HERO_PRODUCT.name}
                  </h4>
                  <p className="font-body-sm text-[13px] text-[#9d431f] font-semibold">
                    ${HERO_PRODUCT.price}
                  </p>
                </div>
              </div>

              <button
                aria-label="Quick add coat"
                onClick={() => onQuickAdd(HERO_PRODUCT, 'M')}
                className="shrink-0 p-3 rounded-full bg-[#000000] text-white hover:bg-[#9d431f] transition-colors cursor-pointer flex items-center justify-center shadow"
                title="Quick Add to Bag"
              >
                <span className="material-symbols-outlined text-[20px]">shopping_bag</span>
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
