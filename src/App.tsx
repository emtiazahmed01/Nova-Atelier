import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Categories } from './components/Categories';
import { TrendingNow } from './components/TrendingNow';
import { CoreEditBanner } from './components/CoreEditBanner';
import { JustIn } from './components/JustIn';
import { BrandValues } from './components/BrandValues';
import { Newsletter } from './components/Newsletter';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { WishlistDrawer } from './components/WishlistDrawer';
import { ProductDetailModal } from './components/ProductDetailModal';
import { SearchModal } from './components/SearchModal';
import { CheckoutModal } from './components/CheckoutModal';
import { TrackingLookupModal } from './components/TrackingLookupModal';
import { InfoModal } from './components/InfoModal';
import { Toast } from './components/Toast';
import { ADDON_PRODUCT, ALL_PRODUCTS } from './data/products';
import { Product, CartItem } from './types';

export default function App() {
  // Initial Cart preloaded with the two items shown in Image 4
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 'cart-1',
      productId: 'cashmere-crewneck',
      name: 'Structured Cashmere Crewneck',
      price: 240,
      size: 'M',
      color: 'Oatmeal',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCwSaGs-ouqFYIXdl3NZhp7banIDHjHsGXeUv6eLThVKAj_kw6P7lz1NiNYXqErZK1kX97EGUQut71HTGrciG4aqRpCGwcT6gN2d1DecLUhb3V2j17okS7lXsk0wq0ST5_DRSKI_I1SPTCjwicyrgJ0537G7fEOz4h5vLuPiSa_hkO-mNn0ltyt0RBpzzS-jASTaUySTIPASQxWPIXr_9KMNZVD6lq5d1QQsCxvI4Freau7laD1Y8cAMQ',
      quantity: 1
    },
    {
      id: 'cart-2',
      productId: 'structured-leather-crossbody',
      name: 'Structured Leather Crossbody',
      price: 360,
      size: 'One Size',
      color: 'Tan',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAF4JUMqqysl03Co6vaScxijd8LYQZZP3PdVNueWPKzgdducyJ9YC1EWv1bq4KL3dASyeqS7D4CpO1JbqKV_Su-iaUnnv3x18zaX0UrRprJ3RCgTNU8UfjtJpOH0Vlbezmq-rWHcpR4acNx7ZmEi71B94-zj_TPXmBm-ZJiNNimQ-rCG5QiuZDsO6nPbcjNxHBziJVSlkZPeF8r_3U3pzeEJsYY6GhbsYv33mF2eQfoYd6xgianshxkXw',
      quantity: 1
    }
  ]);

  // Wishlist state
  const [wishlistIds, setWishlistIds] = useState<string[]>([]);

  // UI state
  const [activeNav, setActiveNav] = useState('home');
  const [currentFilter, setCurrentFilter] = useState('all');
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isTrackingModalOpen, setIsTrackingModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Info modal state
  const [infoModal, setInfoModal] = useState<{ isOpen: boolean; title: string; content: string }>({
    isOpen: false,
    title: '',
    content: ''
  });

  // Toast feedback state
  const [toast, setToast] = useState<{ visible: boolean; message: string; subMessage?: string }>({
    visible: false,
    message: '',
    subMessage: ''
  });

  const showToast = (message: string, subMessage?: string) => {
    setToast({ visible: true, message, subMessage });
    setTimeout(() => {
      setToast((prev) => ({ ...prev, visible: false }));
    }, 3200);
  };

  // Cart operations
  const handleAddToCart = (product: Product, size?: string, openDrawer = true) => {
    const chosenSize = size || product.defaultSize || product.sizes[0] || 'Standard';
    setCartItems((prev) => {
      const existingIndex = prev.findIndex(
        (item) => item.productId === product.id && item.size === chosenSize
      );
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + 1
        };
        return updated;
      } else {
        const newItem: CartItem = {
          id: `cart-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`,
          productId: product.id,
          name: product.name,
          price: product.price,
          size: chosenSize,
          color: product.color || 'Standard',
          image: product.image,
          quantity: 1
        };
        return [newItem, ...prev];
      }
    });

    showToast('Added to bag', `${product.name} (${chosenSize}) • $${product.price}`);
    if (openDrawer) {
      setIsCartOpen(true);
    }
  };

  const handleUpdateQuantity = (id: string, newQty: number) => {
    if (newQty <= 0) {
      handleRemoveItem(id);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity: newQty } : item))
    );
  };

  const handleRemoveItem = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleAddRecommendedMist = () => {
    handleAddToCart(ADDON_PRODUCT, '100ml', false);
  };

  // Wishlist operations
  const handleToggleWishlist = (product: Product) => {
    setWishlistIds((prev) => {
      const exists = prev.includes(product.id);
      if (exists) {
        showToast('Removed from wishlist', product.name);
        return prev.filter((id) => id !== product.id);
      } else {
        showToast('Added to wishlist', product.name);
        return [...prev, product.id];
      }
    });
  };

  const isWishlisted = (productId: string) => wishlistIds.includes(productId);

  const wishlistProducts = ALL_PRODUCTS.filter((p) => wishlistIds.includes(p.id));

  const handleMoveToBag = (product: Product) => {
    handleAddToCart(product, product.defaultSize || product.sizes[0], true);
    setWishlistIds((prev) => prev.filter((id) => id !== product.id));
  };

  // Smooth scroll
  const handleNavigateSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectCategory = (categoryId: string) => {
    if (categoryId === 'shoes') {
      setCurrentFilter('footwear');
    } else if (categoryId === 'women') {
      setCurrentFilter('outerwear');
    } else if (categoryId === 'men') {
      setCurrentFilter('knitwear');
    } else {
      setCurrentFilter('all');
    }
    handleNavigateSection('trending');
  };

  const handleOrderSuccess = () => {
    setCartItems([]);
  };

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#f9f9f8] text-[#1a1c1c] flex flex-col font-sans">
      {/* Fixed Header & Navigation */}
      <Header
        cartCount={totalCartCount}
        wishlistCount={wishlistIds.length}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenWishlist={() => setIsWishlistOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
        activeNav={activeNav}
        setActiveNav={setActiveNav}
        onNavigateSection={handleNavigateSection}
      />

      {/* Main Content Sections (with pt-20 for fixed header) */}
      <main className="w-full pt-20 flex-1">
        {/* Hero Section */}
        <Hero
          onQuickAdd={(p, s) => handleAddToCart(p, s, true)}
          onOpenProductDetail={(p) => setSelectedProduct(p)}
          onNavigateSection={handleNavigateSection}
        />

        {/* Shop by Category */}
        <Categories onSelectCategory={handleSelectCategory} />

        {/* Trending Now (Seasonal Highlights) */}
        <TrendingNow
          onQuickAdd={(p, s) => handleAddToCart(p, s, true)}
          onToggleWishlist={handleToggleWishlist}
          isWishlisted={isWishlisted}
          onOpenProductDetail={(p) => setSelectedProduct(p)}
          currentFilter={currentFilter}
          onFilterChange={setCurrentFilter}
        />

        {/* Core Edit Campaign Banner */}
        <CoreEditBanner onShopCollection={() => handleNavigateSection('trending')} />

        {/* Just In (Recent Drops) */}
        <JustIn
          onQuickAdd={(p, s) => handleAddToCart(p, s, true)}
          onToggleWishlist={handleToggleWishlist}
          isWishlisted={isWishlisted}
          onOpenProductDetail={(p) => setSelectedProduct(p)}
        />

        {/* Brand Values */}
        <BrandValues />

        {/* The Dispatch Newsletter */}
        <Newsletter />
      </main>

      {/* Footer */}
      <Footer
        onNavigateSection={handleNavigateSection}
        onOpenInfoModal={(title, content) => setInfoModal({ isOpen: true, title, content })}
        onOpenOrderTracking={() => setIsTrackingModalOpen(true)}
      />

      {/* Shopping Bag Drawer (Image 4 Flyout) */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onAddRecommendedMist={handleAddRecommendedMist}
        onProceedToCheckout={() => {
          setIsCartOpen(false);
          setIsCheckoutOpen(true);
        }}
      />

      {/* Saved Wishlist Drawer */}
      <WishlistDrawer
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        wishlistProducts={wishlistProducts}
        onRemoveFromWishlist={(id) => setWishlistIds((prev) => prev.filter((i) => i !== id))}
        onMoveToBag={handleMoveToBag}
      />

      {/* Product Quick View / Detail Modal */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={(p, s) => handleAddToCart(p, s, true)}
        onToggleWishlist={handleToggleWishlist}
        isWishlisted={selectedProduct ? isWishlisted(selectedProduct.id) : false}
      />

      {/* Catalog Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectProduct={(p) => setSelectedProduct(p)}
      />

      {/* Checkout Modal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        cartItems={cartItems}
        onOrderSuccess={handleOrderSuccess}
      />

      {/* Standalone Order Tracking Modal */}
      <TrackingLookupModal
        isOpen={isTrackingModalOpen}
        onClose={() => setIsTrackingModalOpen(false)}
      />

      {/* Informational Modal (Footer Links) */}
      <InfoModal
        isOpen={infoModal.isOpen}
        onClose={() => setInfoModal((prev) => ({ ...prev, isOpen: false }))}
        title={infoModal.title}
        content={infoModal.content}
      />

      {/* Interactive Toast Notification */}
      <Toast
        visible={toast.visible}
        message={toast.message}
        subMessage={toast.subMessage}
        onClose={() => setToast((prev) => ({ ...prev, visible: false }))}
      />
    </div>
  );
}
