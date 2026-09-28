import React, { useState } from 'react';
import { CartItem } from '../types';
import { OrderTrackingStatus } from './OrderTrackingStatus';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onOrderSuccess: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  cartItems,
  onOrderSuccess
}) => {
  const [formData, setFormData] = useState({
    name: 'Alexandra Sterling',
    email: 'alexandra.sterling@atelier.com',
    address: '740 Park Avenue, Apt 11B',
    city: 'New York',
    state: 'NY',
    zip: '10021',
    paymentMethod: 'apple-pay'
  });

  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const [orderNumber, setOrderNumber] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [activeTab, setActiveTab] = useState<'tracking' | 'receipt'>('tracking');

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      const generatedOrderNum = `NOV-${Math.floor(10000 + Math.random() * 90000)}`;
      setOrderNumber(generatedOrderNum);
      setOrderConfirmed(true);
      onOrderSuccess();
    }, 1000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[140] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={orderConfirmed ? onClose : undefined}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden z-10 border border-[#eeeeed] my-auto">
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-[#eeeeed] bg-[#f9f9f8] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[20px] text-[#9d431f]">
              {orderConfirmed ? 'local_shipping' : 'lock'}
            </span>
            <h2 className="font-headline-sm text-[18px] text-black font-medium">
              {orderConfirmed ? 'Order Confirmed & Tracking' : 'Encrypted Atelier Checkout'}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1 rounded-full text-[#47464b] hover:bg-[#eeeeed] transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {orderConfirmed ? (
          /* Order Confirmation & Tracking View */
          <div className="p-6 sm:p-8 flex flex-col items-center gap-6 max-h-[85vh] overflow-y-auto">
            {/* Top Confirmation Pill */}
            <div className="flex flex-col items-center text-center gap-2">
              <div className="w-14 h-14 rounded-full bg-[#ffdbcf] text-[#9d431f] flex items-center justify-center shadow-xs">
                <span className="material-symbols-outlined text-[28px]">check</span>
              </div>
              <span className="font-label-caps text-[11px] uppercase tracking-widest text-[#9d431f] font-semibold">
                Thank You for Your Order
              </span>
              <h3 className="font-headline-lg text-[24px] sm:text-[28px] text-black tracking-tight">
                Order {orderNumber}
              </h3>
              <p className="font-body-sm text-[13px] text-[#47464b] max-w-md">
                Confirmation dossier sent to <strong className="text-black font-medium">{formData.email}</strong>.
              </p>
            </div>

            {/* Toggle View Tabs (Live Tracking vs Order Receipt) */}
            <div className="inline-flex p-1 bg-[#eeeeed] rounded-xl self-center">
              <button
                type="button"
                onClick={() => setActiveTab('tracking')}
                className={`px-4 py-1.5 rounded-lg font-label-caps text-[11px] uppercase tracking-wider transition-all cursor-pointer ${
                  activeTab === 'tracking'
                    ? 'bg-white text-black shadow-xs font-semibold'
                    : 'text-[#47464b] hover:text-black'
                }`}
              >
                Live Tracking Status
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('receipt')}
                className={`px-4 py-1.5 rounded-lg font-label-caps text-[11px] uppercase tracking-wider transition-all cursor-pointer ${
                  activeTab === 'receipt'
                    ? 'bg-white text-black shadow-xs font-semibold'
                    : 'text-[#47464b] hover:text-black'
                }`}
              >
                Order Receipt
              </button>
            </div>

            {/* Tab 1: Order Tracking Status Component */}
            {activeTab === 'tracking' ? (
              <OrderTrackingStatus
                orderNumber={orderNumber}
                customerEmail={formData.email}
                shippingAddress={`${formData.address}, ${formData.city}, ${formData.state} ${formData.zip}`}
                carrierName="DHL Express Carbon Neutral"
              />
            ) : (
              /* Tab 2: Itemized Receipt Summary */
              <div className="w-full p-4 rounded-xl bg-[#f3f4f3] border border-[#eeeeed] text-left text-xs space-y-2.5">
                <div className="flex justify-between text-[#47464b]">
                  <span>Customer Name</span>
                  <span className="text-black font-medium">{formData.name}</span>
                </div>
                <div className="flex justify-between text-[#47464b]">
                  <span>Shipping Address</span>
                  <span className="text-black font-medium">{formData.address}, {formData.city}, {formData.state} {formData.zip}</span>
                </div>
                <div className="flex justify-between text-[#47464b]">
                  <span>Delivery Carrier</span>
                  <span className="text-[#9d431f] font-medium">Complimentary Climate-Neutral Express</span>
                </div>
                <div className="flex justify-between text-[#47464b]">
                  <span>Payment Method</span>
                  <span className="text-black font-medium uppercase font-mono">{formData.paymentMethod}</span>
                </div>
                <div className="flex justify-between text-[#47464b] border-t border-[#e2e2e2] pt-2">
                  <span className="font-semibold text-black">Total Paid</span>
                  <span className="text-black font-semibold text-sm">${subtotal}</span>
                </div>
              </div>
            )}

            {/* Bottom Dismiss Button */}
            <div className="w-full flex items-center justify-center gap-3 pt-2">
              <button
                type="button"
                onClick={onClose}
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-black text-white font-label-caps text-[12px] uppercase tracking-wider hover:bg-[#9d431f] transition-all font-semibold cursor-pointer shadow-sm"
              >
                Continue Exploring Collection
              </button>
            </div>
          </div>
        ) : (
          /* Checkout Form View */
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6 max-h-[80vh] overflow-y-auto">
            {/* Order Items Preview */}
            <div className="p-3.5 rounded-xl bg-[#f3f4f3] border border-[#eeeeed]">
              <div className="flex items-center justify-between text-xs font-label-caps uppercase text-[#77767b] mb-2">
                <span>Items in Order ({cartItems.length})</span>
                <span className="text-black font-semibold">Subtotal: ${subtotal}</span>
              </div>
              <div className="flex items-center gap-2 overflow-x-auto pb-1">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-center gap-2 shrink-0 bg-white p-1.5 rounded-lg border border-[#eeeeed]">
                    <img src={item.image} alt={item.name} className="w-9 h-11 object-cover rounded" />
                    <div className="text-[11px] leading-tight">
                      <p className="font-medium text-black max-w-[120px] truncate">{item.name}</p>
                      <p className="text-[#77767b]">Qty: {item.quantity} • ${item.price * item.quantity}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Shipping Details */}
            <div>
              <h4 className="font-label-caps text-[11px] uppercase tracking-wider text-black font-semibold mb-3">
                1. Shipping Address
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                <div>
                  <label className="block text-xs text-[#47464b] mb-1">Full Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-[#c8c5cb] focus:outline-none focus:border-black text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs text-[#47464b] mb-1">Email for Delivery Updates</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-[#c8c5cb] focus:outline-none focus:border-black text-sm"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-xs text-[#47464b] mb-1">Street Address</label>
                  <input
                    type="text"
                    required
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-[#c8c5cb] focus:outline-none focus:border-black text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs text-[#47464b] mb-1">City</label>
                  <input
                    type="text"
                    required
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-[#c8c5cb] focus:outline-none focus:border-black text-sm"
                  />
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-xs text-[#47464b] mb-1">State</label>
                    <input
                      type="text"
                      required
                      value={formData.state}
                      onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg border border-[#c8c5cb] focus:outline-none focus:border-black text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-[#47464b] mb-1">Postal Code</label>
                    <input
                      type="text"
                      required
                      value={formData.zip}
                      onChange={(e) => setFormData({ ...formData, zip: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg border border-[#c8c5cb] focus:outline-none focus:border-black text-sm"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Method */}
            <div>
              <h4 className="font-label-caps text-[11px] uppercase tracking-wider text-black font-semibold mb-3">
                2. Payment Method
              </h4>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'apple-pay', label: 'Apple Pay', icon: 'payments' },
                  { id: 'credit-card', label: 'Credit Card', icon: 'credit_card' },
                  { id: 'google-pay', label: 'Google Pay', icon: 'account_balance_wallet' }
                ].map((method) => (
                  <button
                    key={method.id}
                    type="button"
                    onClick={() => setFormData({ ...formData, paymentMethod: method.id })}
                    className={`p-3 rounded-xl border text-xs flex flex-col items-center gap-1.5 transition-all cursor-pointer ${
                      formData.paymentMethod === method.id
                        ? 'border-black bg-black text-white font-medium shadow-xs'
                        : 'border-[#c8c5cb] bg-white text-[#1a1c1c] hover:bg-[#f3f4f3]'
                    }`}
                  >
                    <span className="material-symbols-outlined text-[20px]">{method.icon}</span>
                    <span>{method.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Submit CTA */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isProcessing}
                className="w-full py-4 rounded-full bg-[#9d431f] hover:bg-[#fe8c62] hover:text-[#742502] text-white font-label-caps text-[12px] uppercase tracking-wider text-center shadow-lg transition-all font-semibold cursor-pointer disabled:opacity-50"
              >
                {isProcessing ? 'Securing Transaction...' : `Confirm & Pay • $${subtotal}`}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
