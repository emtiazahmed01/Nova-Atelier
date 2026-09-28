import React, { useState } from 'react';

interface HeaderProps {
  cartCount: number;
  wishlistCount: number;
  onOpenCart: () => void;
  onOpenWishlist: () => void;
  onOpenSearch: () => void;
  activeNav: string;
  setActiveNav: (nav: string) => void;
  onNavigateSection: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  cartCount,
  wishlistCount,
  onOpenCart,
  onOpenWishlist,
  onOpenSearch,
  activeNav,
  setActiveNav,
  onNavigateSection
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home', section: 'hero' },
    { id: 'shop', label: 'Shop', section: 'trending' },
    { id: 'men', label: 'Men', section: 'categories' },
    { id: 'women', label: 'Women', section: 'categories' },
    { id: 'accessories', label: 'Accessories', section: 'just-in' },
    { id: 'new-arrivals', label: 'New Arrivals', section: 'just-in' }
  ];

  const handleLinkClick = (id: string, section: string) => {
    setActiveNav(id);
    setMobileMenuOpen(false);
    onNavigateSection(section);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top Announcement Bar */}
      <div className="bg-[#000000] text-[#ffffff] py-1 px-4 text-center font-label-caps text-[11px] uppercase tracking-widest flex items-center justify-center gap-2">
        <span>Free shipping on orders over $50 • Complimentary returns worldwide</span>
        <button
          onClick={() => onNavigateSection('trending')}
          className="underline underline-offset-4 decoration-[#c8c5cb] hover:decoration-white transition-colors cursor-pointer"
        >
          Shop Now
        </button>
      </div>

      {/* Main Navigation Bar */}
      <nav className="h-16 bg-[#f9f9f8]/90 backdrop-blur-md shadow-[0_1px_8px_rgba(0,0,0,0.04)] border-b border-[#eeeeed]">
        <div className="max-w-7xl mx-auto h-full px-4 lg:px-6 flex items-center justify-between gap-4">
          
          {/* Left: Mobile Toggle & Brand Logo */}
          <div className="flex items-center gap-4">
            <button
              aria-label="Open navigation menu"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-1 text-[#1a1c1c] hover:text-black transition-colors cursor-pointer"
              type="button"
            >
              <span className="material-symbols-outlined text-[24px]">
                {mobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>

            <button
              onClick={() => handleLinkClick('home', 'hero')}
              className="flex items-center gap-2 text-left cursor-pointer"
            >
              <img
                src="https://lh3.googleusercontent.com/aida/AEtjO1UgArKkMOYFmyyCmEfOaVP67GX0qfOLfQr_K_ip_Wdk6a8Qdq40vOGT6pUCIOpsab6G8KNKiZcPSsoeGdEhGKcj3XS036CBgbL13f2_BKKa0cFQ0tSmvpy__tpchdAPPVDDINWlP7iUVJ2qCdHU7KNbu-2nt4-kAjuavs2R91Td3Gajx4UfLWdj8FoOc9PNGA-6AMykaclaBIL7WI_tizuPNJCnOf92Lc7RNsdeLjnJ-kBqM_EZKoffPufM"
                alt="NOVA Wordmark Logo"
                className="h-8 w-auto object-contain"
              />
              <span className="font-label-caps text-[12px] uppercase tracking-widest text-[#000000] font-semibold">
                NOVA
              </span>
            </button>
          </div>

          {/* Center: Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => {
              const isActive = activeNav === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id, link.section)}
                  className={`font-label-md text-[13px] tracking-wide py-1 transition-all cursor-pointer ${
                    isActive
                      ? 'text-[#000000] border-b-2 border-black font-semibold'
                      : 'text-[#47464b] hover:text-[#1a1c1c]'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </div>

          {/* Right: Actions (Search, Wishlist, Cart Bag, Account) */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Search */}
            <button
              aria-label="Search catalog"
              onClick={onOpenSearch}
              className="p-1.5 text-[#47464b] hover:text-[#1a1c1c] transition-colors flex items-center justify-center cursor-pointer rounded-full hover:bg-[#eeeeed]"
              type="button"
            >
              <span className="material-symbols-outlined text-[20px]">search</span>
            </button>

            {/* Wishlist */}
            <button
              aria-label="Saved Wishlist"
              onClick={onOpenWishlist}
              className="relative p-1.5 text-[#47464b] hover:text-[#1a1c1c] transition-colors flex items-center justify-center cursor-pointer rounded-full hover:bg-[#eeeeed]"
              type="button"
            >
              <span className="material-symbols-outlined text-[20px]">favorite</span>
              {wishlistCount > 0 && (
                <span className="absolute -top-1 -right-1 min-w-[18px] h-[18px] px-1 bg-[#1a1c1c] text-white rounded-full font-label-caps text-[9px] leading-[18px] text-center font-bold flex items-center justify-center">
                  {wishlistCount}
                </span>
              )}
            </button>

            {/* Shopping Cart Button */}
            <button
              aria-label="Shopping Cart"
              onClick={onOpenCart}
              className="relative p-1.5 text-[#47464b] hover:text-[#1a1c1c] transition-colors flex items-center justify-center cursor-pointer rounded-full hover:bg-[#eeeeed]"
              type="button"
            >
              <span className="material-symbols-outlined text-[20px]">shopping_bag</span>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 min-w-[18px] h-[18px] px-1 bg-[#9d431f] text-white rounded-full font-label-caps text-[9px] leading-[18px] text-center font-bold flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Customer Account Avatar */}
            <div className="p-1">
              <div
                className="w-8 h-8 rounded-full bg-[#000000] flex items-center justify-center text-white cursor-pointer hover:opacity-90 transition-opacity"
                title="Atelier Member Account"
              >
                <span className="material-symbols-outlined text-white text-[18px]">person</span>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu Slide-down */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#f9f9f8] border-b border-[#eeeeed] px-6 py-4 flex flex-col gap-3 shadow-lg animate-fadeIn">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id, link.section)}
                className={`text-left py-2 text-sm font-label-md transition-colors ${
                  activeNav === link.id
                    ? 'text-black font-semibold pl-2 border-l-2 border-black'
                    : 'text-[#47464b]'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};
