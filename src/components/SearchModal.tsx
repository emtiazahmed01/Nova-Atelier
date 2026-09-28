import React, { useState, useMemo } from 'react';
import { ALL_PRODUCTS } from '../data/products';
import { Product } from '../types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProduct: (product: Product) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectProduct
}) => {
  const [query, setQuery] = useState('');

  const searchResults = useMemo(() => {
    const trimmed = query.trim().toLowerCase();
    if (!trimmed) return ALL_PRODUCTS.slice(0, 4);
    return ALL_PRODUCTS.filter((product) => {
      return (
        product.name.toLowerCase().includes(trimmed) ||
        product.category.toLowerCase().includes(trimmed) ||
        product.categoryLabel.toLowerCase().includes(trimmed) ||
        (product.color && product.color.toLowerCase().includes(trimmed)) ||
        product.description.toLowerCase().includes(trimmed)
      );
    });
  }, [query]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[130] flex items-start justify-center p-4 sm:p-6 pt-16 sm:pt-24">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Search Container */}
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden z-10 border border-[#eeeeed]">
        {/* Search Input Bar */}
        <div className="p-4 sm:p-5 border-b border-[#eeeeed] flex items-center gap-3">
          <span className="material-symbols-outlined text-[22px] text-[#77767b]">search</span>
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search coat, cashmere, trousers, leather, shoes..."
            className="flex-1 bg-transparent text-[#1a1c1c] text-base placeholder:text-[#77767b] focus:outline-none"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery('')}
              className="text-xs text-[#77767b] hover:text-black uppercase font-label-caps"
            >
              Clear
            </button>
          )}
          <button
            type="button"
            onClick={onClose}
            className="p-1 rounded-full text-[#47464b] hover:bg-[#eeeeed] transition-colors"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-[60vh] overflow-y-auto p-4 sm:p-5">
          <div className="text-xs font-label-caps uppercase text-[#77767b] tracking-wider mb-3">
            {query.trim() ? `Search Results (${searchResults.length})` : 'Popular Searches'}
          </div>

          {searchResults.length === 0 ? (
            <div className="py-12 text-center text-sm text-[#47464b]">
              No pieces found matching "{query}". Try "cashmere", "trench", or "leather".
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {searchResults.map((product) => (
                <div
                  key={product.id}
                  onClick={() => {
                    onSelectProduct(product);
                    onClose();
                  }}
                  className="flex items-center gap-3 p-2 rounded-xl hover:bg-[#f3f4f3] transition-colors cursor-pointer border border-transparent hover:border-[#eeeeed]"
                >
                  <div className="w-14 h-16 rounded-lg bg-[#f3f4f3] overflow-hidden shrink-0">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="min-w-0">
                    <p className="font-label-caps text-[10px] uppercase text-[#9d431f] tracking-wider">
                      {product.categoryLabel}
                    </p>
                    <h4 className="font-label-md text-[13px] font-medium text-black truncate">
                      {product.name}
                    </h4>
                    <p className="font-body-sm text-[12px] text-black font-semibold mt-0.5">
                      ${product.price}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
