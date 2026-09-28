import React, { useState } from 'react';

export interface TrackingStep {
  id: string;
  title: string;
  description: string;
  timestamp: string;
  icon: string;
}

interface OrderTrackingStatusProps {
  orderNumber: string;
  customerEmail: string;
  shippingAddress: string;
  carrierName?: string;
  trackingNumber?: string;
  estimatedDelivery?: string;
}

export const OrderTrackingStatus: React.FC<OrderTrackingStatusProps> = ({
  orderNumber,
  customerEmail,
  shippingAddress,
  carrierName = 'DHL Express Carbon Neutral',
  trackingNumber = `DHL-${Math.floor(1000000 + Math.random() * 9000000)}`,
  estimatedDelivery = 'Wed, Oct 1 – Fri, Oct 3'
}) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(1);
  const [copied, setCopied] = useState(false);
  const [notifySms, setNotifySms] = useState(true);

  const steps: TrackingStep[] = [
    {
      id: 'placed',
      title: 'Order Confirmed',
      description: 'Payment authorized & order logged at New York atelier.',
      timestamp: 'Today, 11:42 PM',
      icon: 'receipt_long'
    },
    {
      id: 'inspection',
      title: 'Atelier Inspection & Hand-Finishing',
      description: 'Garments undergoing hand-stitched hem and fabric review.',
      timestamp: 'In progress',
      icon: 'verified'
    },
    {
      id: 'packaging',
      title: 'FSC Climate Packaging',
      description: 'Sealed in biodegradable dust covers with cedar mist sachet.',
      timestamp: 'Estimated Tomorrow',
      icon: 'inventory_2'
    },
    {
      id: 'in_transit',
      title: 'Courier Handover',
      description: 'Air dispatch via climate-neutral aviation fleet.',
      timestamp: 'Pending dispatch',
      icon: 'local_shipping'
    },
    {
      id: 'delivered',
      title: 'Signature Delivery',
      description: 'Direct courier handover at your residential threshold.',
      timestamp: estimatedDelivery,
      icon: 'door_front'
    }
  ];

  const handleCopyTracking = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(trackingNumber);
      setCopied(true);
      setTimeout(() => setCopied(false), 2400);
    }
  };

  const handleAdvanceStep = () => {
    setCurrentStepIndex((prev) => (prev < steps.length - 1 ? prev + 1 : 0));
  };

  return (
    <div className="w-full bg-[#f3f4f3] rounded-2xl border border-[#eeeeed] p-5 sm:p-6 text-left flex flex-col gap-5">
      {/* Top Meta Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[#e2e2e2]">
        <div>
          <span className="font-label-caps text-[10px] uppercase text-[#9d431f] tracking-widest font-semibold block">
            Real-Time Atelier Tracking
          </span>
          <div className="flex items-center gap-2 mt-0.5">
            <h4 className="font-headline-sm text-[18px] text-black font-semibold">
              {orderNumber}
            </h4>
            <span className="px-2 py-0.5 rounded-full bg-[#ffdbcf] text-[#380d00] font-label-caps text-[10px] uppercase font-semibold">
              {steps[currentStepIndex].title}
            </span>
          </div>
        </div>

        {/* Tracking ID & Copy */}
        <div className="flex items-center gap-2">
          <div className="text-right sm:text-right">
            <span className="text-[10px] font-label-caps text-[#77767b] uppercase block">
              {carrierName}
            </span>
            <span className="font-mono text-xs font-semibold text-black tracking-tight">
              {trackingNumber}
            </span>
          </div>
          <button
            type="button"
            onClick={handleCopyTracking}
            className="p-1.5 rounded-lg bg-white border border-[#c8c5cb] hover:bg-[#eeeeed] transition-colors text-[#1a1c1c] text-xs flex items-center justify-center cursor-pointer shadow-2xs"
            title="Copy tracking code"
          >
            <span className="material-symbols-outlined text-[16px]">
              {copied ? 'check' : 'content_copy'}
            </span>
          </button>
        </div>
      </div>

      {/* Estimated Delivery Highlight Box */}
      <div className="p-3.5 rounded-xl bg-white border border-[#eeeeed] flex items-center justify-between gap-3 shadow-2xs">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#f9f9f8] border border-[#eeeeed] flex items-center justify-center text-[#9d431f] shrink-0">
            <span className="material-symbols-outlined text-[20px]">schedule</span>
          </div>
          <div>
            <p className="font-label-caps text-[10px] uppercase text-[#77767b] tracking-wider">
              Estimated Delivery
            </p>
            <p className="font-headline-sm text-[15px] font-semibold text-black">
              {estimatedDelivery}
            </p>
          </div>
        </div>

        <div className="text-right">
          <span className="font-label-caps text-[10px] uppercase text-[#9d431f] tracking-wider block font-semibold">
            Carrier
          </span>
          <span className="text-xs text-[#47464b] font-medium">
            Express Air
          </span>
        </div>
      </div>

      {/* Progress Timeline Tracker */}
      <div className="relative flex flex-col gap-5 pt-2 pl-2">
        {steps.map((step, index) => {
          const isCompleted = index < currentStepIndex;
          const isCurrent = index === currentStepIndex;
          const isUpcoming = index > currentStepIndex;

          return (
            <div key={step.id} className="relative flex items-start gap-4 group">
              {/* Connecting line */}
              {index < steps.length - 1 && (
                <div
                  className={`absolute left-[15px] top-[30px] bottom-[-16px] w-[2px] transition-colors duration-300 ${
                    index < currentStepIndex ? 'bg-[#9d431f]' : 'bg-[#e2e2e2]'
                  }`}
                />
              )}

              {/* Status Icon Orb */}
              <div
                className={`relative z-10 w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all ${
                  isCurrent
                    ? 'bg-[#9d431f] text-white ring-4 ring-[#ffdbcf]'
                    : isCompleted
                    ? 'bg-black text-white'
                    : 'bg-[#eeeeed] text-[#77767b] border border-[#c8c5cb]'
                }`}
              >
                <span className="material-symbols-outlined text-[16px]">
                  {isCompleted ? 'check' : step.icon}
                </span>
              </div>

              {/* Step Info */}
              <div className="flex-1 min-w-0 pt-0.5">
                <div className="flex items-baseline justify-between gap-2">
                  <h5
                    className={`font-label-md text-[13px] tracking-tight ${
                      isCurrent
                        ? 'text-black font-semibold'
                        : isCompleted
                        ? 'text-black font-medium'
                        : 'text-[#77767b]'
                    }`}
                  >
                    {step.title}
                  </h5>
                  <span
                    className={`font-body-sm text-[11px] shrink-0 ${
                      isCurrent
                        ? 'text-[#9d431f] font-semibold'
                        : isCompleted
                        ? 'text-[#47464b]'
                        : 'text-[#77767b]'
                    }`}
                  >
                    {step.timestamp}
                  </span>
                </div>
                <p className="font-body-sm text-[12px] text-[#47464b] mt-0.5 leading-snug">
                  {step.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Destination & Interactive Simulation Controls */}
      <div className="pt-4 border-t border-[#e2e2e2] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-[#47464b]">
        <div className="flex items-center gap-1.5">
          <span className="material-symbols-outlined text-[16px] text-[#77767b]">pin_drop</span>
          <span className="truncate max-w-[280px]">
            Delivering to: <strong className="text-black font-medium">{shippingAddress}</strong>
          </span>
        </div>

        <div className="flex items-center gap-2">
          {/* Simulation button to test stages */}
          <button
            type="button"
            onClick={handleAdvanceStep}
            className="px-3 py-1.5 rounded-lg bg-white border border-[#c8c5cb] hover:bg-black hover:text-white hover:border-black transition-colors font-label-caps text-[10px] uppercase font-semibold text-black cursor-pointer shadow-2xs"
            title="Simulate advancing to next courier milestone"
          >
            Advance Milestone ({currentStepIndex + 1}/{steps.length})
          </button>

          {/* SMS / Email notifications switch */}
          <button
            type="button"
            onClick={() => setNotifySms(!notifySms)}
            className={`px-3 py-1.5 rounded-lg border font-label-caps text-[10px] uppercase font-semibold transition-colors cursor-pointer ${
              notifySms
                ? 'bg-[#ffdbcf] text-[#380d00] border-[#ffb59b]'
                : 'bg-white text-[#77767b] border-[#c8c5cb]'
            }`}
          >
            {notifySms ? 'Updates Active' : 'Mute Updates'}
          </button>
        </div>
      </div>
    </div>
  );
};
