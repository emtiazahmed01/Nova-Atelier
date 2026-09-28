import React, { useState } from 'react';
import { OrderTrackingStatus } from './OrderTrackingStatus';

interface TrackingLookupModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialOrderNumber?: string;
}

export const TrackingLookupModal: React.FC<TrackingLookupModalProps> = ({
  isOpen,
  onClose,
  initialOrderNumber = 'NOV-84291'
}) => {
  const [orderQuery, setOrderQuery] = useState(initialOrderNumber);
  const [searchedOrder, setSearchedOrder] = useState<string | null>(initialOrderNumber);

  if (!isOpen) return null;

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (orderQuery.trim()) {
      setSearchedOrder(orderQuery.trim().toUpperCase());
    }
  };

  return (
    <div className="fixed inset-0 z-[145] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden z-10 border border-[#eeeeed] my-auto">
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-[#eeeeed] bg-[#f9f9f8] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[20px] text-[#9d431f]">
              local_shipping
            </span>
            <h2 className="font-headline-sm text-[18px] text-black font-medium">
              Atelier Order Tracking
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

        {/* Content */}
        <div className="p-6 sm:p-8 flex flex-col gap-6 max-h-[85vh] overflow-y-auto">
          {/* Order lookup input */}
          <form onSubmit={handleSearch} className="flex gap-2">
            <div className="relative flex-1">
              <span className="absolute left-3.5 top-1/2 -translate-y-1/2 material-symbols-outlined text-[#77767b] text-[18px]">
                tag
              </span>
              <input
                type="text"
                value={orderQuery}
                onChange={(e) => setOrderQuery(e.target.value)}
                placeholder="Enter order reference (e.g. NOV-84291)"
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#c8c5cb] text-sm bg-white focus:outline-none focus:border-black uppercase font-mono"
              />
            </div>
            <button
              type="submit"
              className="px-6 py-2.5 rounded-xl bg-black text-white font-label-caps text-[11px] uppercase tracking-wider hover:bg-[#9d431f] transition-colors cursor-pointer font-semibold shadow-xs"
            >
              Track Order
            </button>
          </form>

          {/* Render Tracking Status */}
          {searchedOrder && (
            <OrderTrackingStatus
              orderNumber={searchedOrder}
              customerEmail="alexandra.sterling@atelier.com"
              shippingAddress="740 Park Avenue, Apt 11B, New York, NY 10021"
              carrierName="DHL Express Carbon Neutral"
            />
          )}
        </div>
      </div>
    </div>
  );
};
