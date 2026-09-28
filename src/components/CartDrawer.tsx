import React, { useState } from 'react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (id: string, newQty: number) => void;
  onRemoveItem: (id: string) => void;
  onAddRecommendedMist: () => void;
  onProceedToCheckout: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onAddRecommendedMist,
  onProceedToCheckout
}) => {
  const [giftPackagingActive, setGiftPackagingActive] = useState(true);
  const [promoCode, setPromoCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);
  const [promoError, setPromoError] = useState('');
  const [promoSuccess, setPromoSuccess] = useState('');

  const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const rawSubtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const discountAmount = Math.round(rawSubtotal * (discountPercent / 100));
  const finalSubtotal = rawSubtotal - discountAmount;

  // Complimentary Express Delivery goal is $610
  const expressThreshold = 610;
  const progressPercent = Math.min(100, Math.round((rawSubtotal / expressThreshold) * 100));
  const amountRemaining = Math.max(0, expressThreshold - rawSubtotal);

  const handleApplyPromo = () => {
    setPromoError('');
    setPromoSuccess('');
    const code = promoCode.trim().toUpperCase();
    if (!code) return;
    if (code === 'NOVA10') {
      setDiscountPercent(10);
      setPromoSuccess('10% Atelier privilege discount applied!');
    } else if (code === 'VIP20') {
      setDiscountPercent(20);
      setPromoSuccess('20% Collector discount applied!');
    } else {
      setPromoError('Invalid promo code. Try NOVA10');
    }
  };

  const hasMistInCart = cartItems.some(item => item.productId === 'signature-scented-linen-mist');

  return (
    <>
      {/* Backdrop */}
      <div
        aria-hidden="true"
        onClick={onClose}
        className={`fixed inset-0 bg-black/40 backdrop-blur-xs z-[100] transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      />

      {/* Slide-over Drawer */}
      <aside
        aria-label="Shopping Bag"
        className={`fixed top-0 right-0 h-full w-full max-w-[430px] bg-white shadow-2xl flex flex-col z-[101] transform transition-transform duration-300 ease-out text-[#1a1c1c] ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="p-4 border-b border-[#eeeeed] bg-[#f9f9f8] shrink-0">
          <div className="flex items-center justify-between pb-3">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[20px] text-black">shopping_bag</span>
              <h2 className="font-headline-sm text-[18px] text-black font-medium tracking-tight">
                Your Shopping Bag
              </h2>
              <span className="px-2 py-0.5 rounded-full bg-[#eeeeed] text-[#1a1c1c] font-label-caps text-[11px] font-semibold">
                ({totalQuantity})
              </span>
            </div>

            <button
              type="button"
              aria-label="Close cart drawer"
              onClick={onClose}
              className="p-1 rounded-full text-[#47464b] hover:text-black hover:bg-[#eeeeed] transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-[22px]">close</span>
            </button>
          </div>

          {/* Express Delivery Progress Bar */}
          <div className="mt-1 p-2.5 rounded-lg bg-[#f3f4f3] border border-[#eeeeed] flex flex-col gap-1.5">
            <div className="flex items-center justify-between text-xs">
              <span className="font-label-caps text-[11px] uppercase tracking-wider text-black font-medium flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[16px] text-[#9d431f]">local_shipping</span>
                Complimentary Express Delivery
              </span>
              <span className="font-label-sm text-[11px] font-semibold text-[#9d431f]">
                {progressPercent}%
              </span>
            </div>

            <div className="w-full h-1.5 bg-[#e8e8e7] rounded-full overflow-hidden">
              <div
                className="h-full bg-[#9d431f] rounded-full transition-all duration-500"
                style={{ width: `${progressPercent}%` }}
              />
            </div>

            <p className="font-body-sm text-[12px] text-[#47464b] leading-tight">
              {amountRemaining > 0 ? (
                <>
                  You're <span className="font-semibold text-black">${amountRemaining}</span> away from Complimentary Express Delivery!
                </>
              ) : (
                <span className="font-semibold text-[#9d431f]">
                  You have unlocked Complimentary Express Delivery!
                </span>
              )}
            </p>
          </div>
        </div>

        {/* Scrollable Items Container */}
        <div className="flex-1 overflow-y-auto px-4 py-3 divide-y divide-[#eeeeed] space-y-3">
          {cartItems.length === 0 ? (
            <div className="py-16 text-center flex flex-col items-center gap-3">
              <div className="w-14 h-14 rounded-full bg-[#f3f4f3] flex items-center justify-center text-[#77767b]">
                <span className="material-symbols-outlined text-[28px]">shopping_bag</span>
              </div>
              <h3 className="font-headline-sm text-[17px] text-[#1a1c1c]">Your bag is currently empty</h3>
              <p className="font-body-sm text-[13px] text-[#47464b] max-w-xs">
                Explore our seasonal tailoring, organic knitwear, and quiet luxury essentials.
              </p>
              <button
                type="button"
                onClick={onClose}
                className="mt-2 px-6 py-2.5 rounded-full bg-black text-white font-label-caps text-[11px] uppercase tracking-wider hover:bg-[#9d431f] transition-colors cursor-pointer"
              >
                Start Exploring
              </button>
            </div>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="pt-3 first:pt-0 flex gap-3 group">
                <div className="w-20 h-24 rounded-lg bg-[#f3f4f3] overflow-hidden shrink-0 border border-[#eeeeed]">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex-1 min-w-0 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="font-label-md text-[13px] font-medium text-black leading-tight truncate">
                        {item.name}
                      </h4>
                      <button
                        type="button"
                        aria-label="Remove item"
                        onClick={() => onRemoveItem(item.id)}
                        className="text-[#77767b] hover:text-[#ba1a1a] transition-colors p-0.5 cursor-pointer"
                      >
                        <span className="material-symbols-outlined text-[16px]">close</span>
                      </button>
                    </div>
                    <p className="font-body-sm text-[12px] text-[#47464b] mt-0.5">
                      {item.size ? `Size ${item.size}` : ''} {item.color ? `/ ${item.color}` : ''}
                    </p>
                  </div>

                  <div className="flex items-center justify-between mt-2 pt-1">
                    {/* Stepper */}
                    <div className="inline-flex items-center border border-[#c8c5cb] rounded-md bg-white">
                      <button
                        type="button"
                        aria-label="Decrease quantity"
                        onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                        className="px-2 py-0.5 text-[#47464b] hover:text-black transition-colors text-sm cursor-pointer"
                      >
                        -
                      </button>
                      <span className="px-2 text-xs font-semibold text-black">
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        aria-label="Increase quantity"
                        onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                        className="px-2 py-0.5 text-[#47464b] hover:text-black transition-colors text-sm cursor-pointer"
                      >
                        +
                      </button>
                    </div>

                    <span className="font-label-md text-[13px] font-semibold text-black">
                      ${item.price * item.quantity}
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}

          {/* Upsell / Complimentary Packaging Box */}
          <div className="pt-4 !border-t-0 flex flex-col gap-2.5">
            <div className="p-3 rounded-xl bg-[#f3f4f3] border border-[#eeeeed] flex items-center justify-between gap-3">
              <div className="flex items-center gap-2.5 min-w-0">
                <div className="w-9 h-9 rounded-lg bg-[#e8e8e7] flex items-center justify-center text-[#9d431f] shrink-0">
                  <span className="material-symbols-outlined text-[18px]">redeem</span>
                </div>
                <div className="min-w-0">
                  <p className="font-label-caps text-[10px] uppercase tracking-wider text-[#9d431f] font-semibold">
                    Atelier Privilege
                  </p>
                  <p className="font-body-sm text-[12px] text-[#1a1c1c] truncate">
                    Complimentary Gift Packaging included
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setGiftPackagingActive(!giftPackagingActive)}
                className={`px-2.5 py-1 rounded font-label-caps text-[10px] uppercase font-semibold border transition-colors cursor-pointer ${
                  giftPackagingActive
                    ? 'bg-white text-black border-[#c8c5cb]'
                    : 'bg-[#eeeeed] text-[#77767b] border-transparent'
                }`}
              >
                {giftPackagingActive ? 'Active' : 'Inactive'}
              </button>
            </div>

            {/* Recommended Add-on Box */}
            {!hasMistInCart && (
              <div className="p-2.5 rounded-xl border border-dashed border-[#c8c5cb] bg-white/60 flex items-center justify-between gap-2">
                <div className="min-w-0">
                  <span className="font-label-caps text-[10px] uppercase text-[#77767b] tracking-wider block">
                    Recommended Add-on
                  </span>
                  <span className="font-label-sm text-[12px] text-black truncate block font-medium">
                    Signature Scented Linen Mist
                  </span>
                  <span className="font-body-sm text-[11px] text-[#9d431f] font-semibold">
                    $35
                  </span>
                </div>
                <button
                  type="button"
                  onClick={onAddRecommendedMist}
                  className="px-3 py-1.5 rounded-md bg-black text-white text-[11px] font-label-caps uppercase tracking-wider hover:bg-[#9d431f] transition-colors shrink-0 cursor-pointer font-semibold"
                >
                  + Add
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Footer Area */}
        <div className="p-4 border-t border-[#eeeeed] bg-[#f9f9f8] shrink-0 flex flex-col gap-3">
          {/* Promo code accordion */}
          <details className="group cursor-pointer">
            <summary className="flex items-center justify-between text-xs text-[#47464b] hover:text-black transition-colors select-none font-label-caps uppercase tracking-wider">
              <span className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[16px]">sell</span>
                Add Promo Code or Order Note
              </span>
              <span className="material-symbols-outlined text-[16px] group-open:rotate-180 transition-transform">
                expand_more
              </span>
            </summary>
            <div className="pt-2 flex flex-col gap-1.5">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  placeholder="Enter promo code (e.g. NOVA10)"
                  className="flex-1 px-3 py-1.5 rounded-md border border-[#c8c5cb] text-xs bg-white focus:outline-none focus:border-black uppercase"
                />
                <button
                  type="button"
                  onClick={handleApplyPromo}
                  className="px-3 py-1.5 rounded-md bg-[#eeeeed] text-black font-label-caps text-[11px] uppercase hover:bg-black hover:text-white transition-colors cursor-pointer"
                >
                  Apply
                </button>
              </div>
              {promoSuccess && (
                <p className="text-[11px] text-[#9d431f] font-medium">{promoSuccess}</p>
              )}
              {promoError && (
                <p className="text-[11px] text-[#ba1a1a] font-medium">{promoError}</p>
              )}
            </div>
          </details>

          {/* Pricing Breakdown */}
          <div className="flex flex-col gap-1 text-sm pt-1 border-t border-[#eeeeed]">
            <div className="flex justify-between items-center text-[#47464b] font-body-sm text-[13px]">
              <span>Subtotal</span>
              <span className="font-semibold text-black">${rawSubtotal}</span>
            </div>
            {discountAmount > 0 && (
              <div className="flex justify-between items-center text-[#9d431f] font-body-sm text-[13px]">
                <span>Privilege Discount ({discountPercent}%)</span>
                <span>-${discountAmount}</span>
              </div>
            )}
            <div className="flex justify-between items-center text-[#47464b] font-body-sm text-[13px]">
              <span>Shipping</span>
              <span className="text-[#9d431f] font-medium">Complimentary</span>
            </div>
            <div className="flex justify-between items-center text-[#77767b] text-[11px]">
              <span>Taxes</span>
              <span>Calculated at checkout</span>
            </div>
          </div>

          {/* Proceed to Checkout CTA */}
          <button
            type="button"
            disabled={cartItems.length === 0}
            onClick={onProceedToCheckout}
            className="w-full py-3.5 rounded-full bg-[#9d431f] hover:bg-[#fe8c62] hover:text-[#742502] text-white font-label-caps text-[12px] uppercase tracking-wider text-center shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed font-semibold"
          >
            <span>Proceed to Checkout</span>
            <span>•</span>
            <span>${finalSubtotal}</span>
          </button>

          {/* Sub actions */}
          <div className="flex items-center justify-between text-xs text-[#47464b] pt-0.5">
            <button
              type="button"
              onClick={onClose}
              className="font-label-caps text-[11px] uppercase tracking-wider hover:text-black underline underline-offset-4 decoration-[#c8c5cb] cursor-pointer"
            >
              Continue Shopping
            </button>
            <button
              type="button"
              onClick={onProceedToCheckout}
              className="font-label-caps text-[11px] uppercase tracking-wider hover:text-black transition-colors cursor-pointer"
            >
              View Full Bag
            </button>
          </div>

          {/* Trust badges in drawer */}
          <div className="flex items-center justify-center gap-4 pt-2 border-t border-[#eeeeed] text-[#77767b] text-[11px]">
            <span className="flex items-center gap-1">
              <span className="material-symbols-outlined text-[13px]">lock</span> 256-bit encrypted
            </span>
            <span className="flex items-center gap-1">
              <span className="material-symbols-outlined text-[13px]">published_with_changes</span> 30-day returns
            </span>
          </div>
        </div>
      </aside>
    </>
  );
};
