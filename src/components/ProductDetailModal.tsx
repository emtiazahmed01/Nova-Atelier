import React, { useState } from 'react';
import { Product } from '../types';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, size: string) => void;
  onToggleWishlist: (product: Product) => void;
  isWishlisted: boolean;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onAddToCart,
  onToggleWishlist,
  isWishlisted
}) => {
  if (!product) return null;

  const [selectedSize, setSelectedSize] = useState<string>(
    product.defaultSize || product.sizes[0] || 'M'
  );

  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden z-10 border border-[#eeeeed] my-auto">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-white/90 backdrop-blur-md text-[#1a1c1c] hover:bg-black hover:text-white flex items-center justify-center transition-colors cursor-pointer shadow-sm"
        >
          <span className="material-symbols-outlined text-[20px]">close</span>
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 min-h-[520px]">
          {/* Left Column: Product Photography */}
          <div className="md:col-span-6 bg-[#f3f4f3] relative overflow-hidden flex items-center justify-center min-h-[360px] md:min-h-full">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover object-center max-h-[620px]"
            />
            {product.badge && (
              <span className="absolute top-4 left-4 px-3 py-1 rounded bg-black/85 backdrop-blur-md text-white font-label-caps text-[11px] uppercase tracking-wider font-semibold">
                {product.badge}
              </span>
            )}
          </div>

          {/* Right Column: Product Specs & Purchase Options */}
          <div className="md:col-span-6 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto max-h-[85vh]">
            <div>
              {/* Category & Rating */}
              <div className="flex items-center justify-between text-[#47464b] mb-2 font-label-sm text-[12px]">
                <span className="uppercase tracking-wider font-semibold text-[#9d431f]">
                  {product.categoryLabel}
                </span>
                <div className="flex items-center gap-1 text-[#D97706]">
                  <span className="material-symbols-outlined text-[16px] material-symbols-filled">star</span>
                  <span className="text-[#1a1c1c] font-medium">
                    {product.rating} {product.reviewsCount ? `(${product.reviewsCount} reviews)` : ''}
                  </span>
                </div>
              </div>

              {/* Title */}
              <h2 className="font-headline-lg text-[26px] sm:text-[30px] text-[#000000] leading-snug tracking-tight">
                {product.name}
              </h2>

              {/* Price */}
              <div className="flex items-center gap-3 mt-2">
                <span className="font-headline-md text-[24px] font-semibold text-[#000000]">
                  ${product.price}
                </span>
                {product.originalPrice && (
                  <span className="font-body-md text-[16px] line-through text-[#77767b]">
                    ${product.originalPrice}
                  </span>
                )}
                {product.color && (
                  <span className="text-xs text-[#47464b] ml-auto font-body-sm">
                    Tone: <strong className="text-black">{product.color}</strong>
                  </span>
                )}
              </div>

              {/* Description */}
              <p className="font-body-md text-[14px] text-[#47464b] mt-4 leading-relaxed">
                {product.description}
              </p>

              {/* Provenance Details */}
              {product.details && product.details.length > 0 && (
                <div className="mt-4 pt-4 border-t border-[#eeeeed]">
                  <h4 className="font-label-caps text-[11px] uppercase tracking-wider text-black font-semibold mb-2">
                    Craftsmanship & Materials
                  </h4>
                  <ul className="space-y-1.5 text-[13px] text-[#47464b]">
                    {product.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#9d431f] mt-1.5 shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Size Selection */}
              <div className="mt-5">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-label-caps text-[11px] uppercase tracking-wider text-black font-semibold">
                    Select Size
                  </span>
                  <span className="text-xs text-[#77767b] underline cursor-pointer">
                    View Size Guide
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      type="button"
                      onClick={() => setSelectedSize(size)}
                      className={`min-w-[44px] h-10 px-3 rounded-lg text-xs font-medium transition-all cursor-pointer flex items-center justify-center ${
                        selectedSize === size
                          ? 'bg-black text-white font-semibold shadow-xs'
                          : 'bg-[#eeeeed] text-[#1a1c1c] hover:bg-[#e8e8e7]'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-6 mt-6 border-t border-[#eeeeed] flex flex-col gap-3">
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => {
                    onAddToCart(product, selectedSize);
                    onClose();
                  }}
                  className="flex-1 py-3.5 rounded-full bg-[#9d431f] hover:bg-[#fe8c62] hover:text-[#742502] text-white font-label-caps text-[12px] uppercase tracking-wider text-center shadow-md transition-all font-semibold cursor-pointer"
                >
                  Add to Bag • ${product.price}
                </button>

                <button
                  type="button"
                  aria-label="Wishlist toggle"
                  onClick={() => onToggleWishlist(product)}
                  className={`w-12 h-12 rounded-full border border-[#c8c5cb] flex items-center justify-center transition-colors cursor-pointer ${
                    isWishlisted ? 'text-[#9d431f] bg-[#ffdbcf]' : 'text-black hover:bg-[#eeeeed]'
                  }`}
                >
                  <span className={`material-symbols-outlined text-[20px] ${isWishlisted ? 'material-symbols-filled' : ''}`}>
                    favorite
                  </span>
                </button>
              </div>

              {/* Guarantees */}
              <div className="flex items-center justify-between text-[11px] text-[#77767b] pt-1">
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">local_shipping</span>
                  Complimentary Express Shipping
                </span>
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">published_with_changes</span>
                  30-Day Effortless Returns
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
