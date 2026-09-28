import React from 'react';
import { Product } from '../types';

interface WishlistDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  wishlistProducts: Product[];
  onRemoveFromWishlist: (productId: string) => void;
  onMoveToBag: (product: Product) => void;
}

export const WishlistDrawer: React.FC<WishlistDrawerProps> = ({
  isOpen,
  onClose,
  wishlistProducts,
  onRemoveFromWishlist,
  onMoveToBag
}) => {
  return (
    <>
      <div
        aria-hidden="true"
        onClick={onClose}
        className={`fixed inset-0 bg-black/40 backdrop-blur-xs z-[100] transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      />

      <aside
        aria-label="Wishlist Drawer"
        className={`fixed top-0 right-0 h-full w-full max-w-[400px] bg-white shadow-2xl flex flex-col z-[101] transform transition-transform duration-300 ease-out text-[#1a1c1c] ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-4 border-b border-[#eeeeed] bg-[#f9f9f8] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[20px] text-[#9d431f] material-symbols-filled">
              favorite
            </span>
            <h2 className="font-headline-sm text-[18px] text-black font-medium">
              Saved Pieces
            </h2>
            <span className="px-2 py-0.5 rounded-full bg-[#eeeeed] text-[#1a1c1c] font-label-caps text-[11px] font-semibold">
              ({wishlistProducts.length})
            </span>
          </div>

          <button
            type="button"
            aria-label="Close wishlist"
            onClick={onClose}
            className="p-1 rounded-full text-[#47464b] hover:text-black hover:bg-[#eeeeed] transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[22px]">close</span>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-4 py-3 divide-y divide-[#eeeeed] space-y-3">
          {wishlistProducts.length === 0 ? (
            <div className="py-20 text-center flex flex-col items-center gap-3">
              <div className="w-14 h-14 rounded-full bg-[#f3f4f3] flex items-center justify-center text-[#77767b]">
                <span className="material-symbols-outlined text-[28px]">favorite</span>
              </div>
              <h3 className="font-headline-sm text-[17px] text-[#1a1c1c]">No saved pieces yet</h3>
              <p className="font-body-sm text-[13px] text-[#47464b] max-w-xs">
                Tap the heart icon on any garment to curate your personal atelier wishlist.
              </p>
            </div>
          ) : (
            wishlistProducts.map((product) => (
              <div key={product.id} className="pt-3 first:pt-0 flex gap-3">
                <div className="w-20 h-24 rounded-lg bg-[#f3f4f3] overflow-hidden shrink-0 border border-[#eeeeed]">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex-1 min-w-0 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-1">
                      <h4 className="font-label-md text-[13px] font-medium text-black truncate">
                        {product.name}
                      </h4>
                      <button
                        type="button"
                        onClick={() => onRemoveFromWishlist(product.id)}
                        className="text-[#77767b] hover:text-red-600 transition-colors p-0.5 cursor-pointer"
                        title="Remove from wishlist"
                      >
                        <span className="material-symbols-outlined text-[16px]">close</span>
                      </button>
                    </div>
                    <p className="font-body-sm text-[12px] text-[#47464b] mt-0.5">
                      {product.categoryLabel}
                    </p>
                    <p className="font-label-md text-[13px] font-semibold text-black mt-1">
                      ${product.price}
                    </p>
                  </div>

                  <div className="mt-2">
                    <button
                      type="button"
                      onClick={() => onMoveToBag(product)}
                      className="w-full py-1.5 rounded-md bg-black text-white hover:bg-[#9d431f] text-[11px] font-label-caps uppercase tracking-wider transition-colors cursor-pointer font-semibold"
                    >
                      Move to Bag
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </aside>
    </>
  );
};
