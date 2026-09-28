import React from 'react';

interface FooterProps {
  onNavigateSection: (sectionId: string) => void;
  onOpenInfoModal: (title: string, content: string) => void;
  onOpenOrderTracking: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigateSection,
  onOpenInfoModal,
  onOpenOrderTracking
}) => {
  return (
    <footer className="w-full bg-[#f3f4f3] border-t border-[#eeeeed]">
      <div className="max-w-7xl mx-auto px-4 lg:px-6 pt-12 lg:pt-16 pb-10">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-[#e2e2e2]">
          
          {/* Brand Info (4 cols) */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <img
                src="https://lh3.googleusercontent.com/aida/AEtjO1UgArKkMOYFmyyCmEfOaVP67GX0qfOLfQr_K_ip_Wdk6a8Qdq40vOGT6pUCIOpsab6G8KNKiZcPSsoeGdEhGKcj3XS036CBgbL13f2_BKKa0cFQ0tSmvpy__tpchdAPPVDDINWlP7iUVJ2qCdHU7KNbu-2nt4-kAjuavs2R91Td3Gajx4UfLWdj8FoOc9PNGA-6AMykaclaBIL7WI_tizuPNJCnOf92Lc7RNsdeLjnJ-kBqM_EZKoffPufM"
                alt="NOVA Wordmark Logo"
                className="h-8 w-auto object-contain"
              />
              <span className="font-label-caps text-[12px] uppercase tracking-widest text-[#000000] font-semibold">
                NOVA
              </span>
            </div>
            
            <p className="font-body-sm text-[13px] text-[#47464b] max-w-sm leading-relaxed">
              Everyday pieces cut with architectural precision and quiet luxury.
            </p>

            <div className="flex items-center gap-4 pt-1 text-[#47464b]">
              <button
                type="button"
                aria-label="Photo Gallery"
                onClick={() => onOpenInfoModal('Lookbook Gallery', 'Explore our archive of seasonal campaigns shot in contemporary architectural landmarks around the globe.')}
                className="hover:text-black transition-colors cursor-pointer"
              >
                <span className="material-symbols-outlined text-[20px]">photo_camera</span>
              </button>
              <button
                type="button"
                aria-label="Collections Feed"
                onClick={() => onNavigateSection('categories')}
                className="hover:text-black transition-colors cursor-pointer"
              >
                <span className="material-symbols-outlined text-[20px]">grid_view</span>
              </button>
              <button
                type="button"
                aria-label="Social Broadcasts"
                onClick={() => onOpenInfoModal('Atelier Journal', 'Curated dispatches on brutalist architecture, organic textile innovation, and bespoke garment preservation.')}
                className="hover:text-black transition-colors cursor-pointer"
              >
                <span className="material-symbols-outlined text-[20px]">tag</span>
              </button>
              <button
                type="button"
                aria-label="Video Shorts"
                onClick={() => onOpenInfoModal('Craftsmanship Films', 'Short 4K film studies documenting master wool spinners and leather artisans in Biella and Tuscany.')}
                className="hover:text-black transition-colors cursor-pointer"
              >
                <span className="material-symbols-outlined text-[20px]">play_circle</span>
              </button>
            </div>
          </div>

          {/* Shop Links (2 cols) */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            <h3 className="font-label-caps text-[11px] uppercase text-[#000000] tracking-wider font-semibold">
              Shop
            </h3>
            <ul className="flex flex-col gap-1.5 text-[#47464b] font-body-sm text-[13px]">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigateSection('categories')}
                  className="hover:text-black transition-colors cursor-pointer"
                >
                  Men
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigateSection('categories')}
                  className="hover:text-black transition-colors cursor-pointer"
                >
                  Women
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigateSection('trending')}
                  className="hover:text-black transition-colors cursor-pointer"
                >
                  Footwear
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigateSection('just-in')}
                  className="hover:text-black transition-colors cursor-pointer"
                >
                  Accessories
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigateSection('just-in')}
                  className="hover:text-black transition-colors cursor-pointer"
                >
                  New Arrivals
                </button>
              </li>
            </ul>
          </div>

          {/* Customer Care (3 cols) */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <h3 className="font-label-caps text-[11px] uppercase text-[#000000] tracking-wider font-semibold">
              Customer Care
            </h3>
            <ul className="flex flex-col gap-1.5 text-[#47464b] font-body-sm text-[13px]">
              <li>
                <button
                  type="button"
                  onClick={onOpenOrderTracking}
                  className="hover:text-black transition-colors cursor-pointer"
                >
                  Order Tracking
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onOpenInfoModal('Shipping & Returns', 'Complimentary worldwide carbon-neutral express delivery on all orders over $50. All orders include a prepaid return shipping pouch valid for 30 days.')}
                  className="hover:text-black transition-colors cursor-pointer"
                >
                  Shipping & Returns
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onOpenInfoModal('Size Guide', 'Our garments follow contemporary European sartorial standards. Coat and blazer tailoring features comfortable architectural drape. Consult our personal styling concierge for bespoke measurements.')}
                  className="hover:text-black transition-colors cursor-pointer"
                >
                  Size Guide
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onOpenInfoModal('Contact Concierge', 'Client advisory specialists are available 24/7 via private concierge dispatch at clientcare@nova-atelier.com or +1 (800) 555-NOVA.')}
                  className="hover:text-black transition-colors cursor-pointer"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Company (3 cols) */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <h3 className="font-label-caps text-[11px] uppercase text-[#000000] tracking-wider font-semibold">
              Company
            </h3>
            <ul className="flex flex-col gap-1.5 text-[#47464b] font-body-sm text-[13px]">
              <li>
                <button
                  type="button"
                  onClick={() => onOpenInfoModal('Our Story', 'Founded in New York in 2018, NOVA is built on architectural restraint and quiet luxury. We reject seasonal churn in favor of enduring silhouettes crafted from traceable natural materials.')}
                  className="hover:text-black transition-colors cursor-pointer"
                >
                  Our Story
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onOpenInfoModal('Sustainability Mandate', '100% of our virgin wools and cashmeres are certified cruelty-free and organic. Packaging is 100% FSC recycled with zero plastics.')}
                  className="hover:text-black transition-colors cursor-pointer"
                >
                  Sustainability
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onOpenInfoModal('Careers at NOVA', 'We are continuously seeking pattern makers, textile researchers, and design visionaries across our New York and Milan ateliers.')}
                  className="hover:text-black transition-colors cursor-pointer"
                >
                  Careers
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onOpenInfoModal('Press Inquiries', 'For editorial loan requests, runway archives, and high-resolution imagery, please contact press@nova-atelier.com.')}
                  className="hover:text-black transition-colors cursor-pointer"
                >
                  Press
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 text-[#47464b] font-body-sm text-[12px]">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-1.5 bg-[#eeeeed] px-3 py-1 rounded-md">
              <span className="material-symbols-outlined text-[16px]">language</span>
              <span className="font-label-sm text-[11px] uppercase text-[#1a1c1c] font-semibold">
                USD ($)
              </span>
            </div>

            <div className="flex items-center gap-1.5">
              <span className="px-2 py-0.5 bg-[#eeeeed] rounded font-label-caps text-[10px] text-[#1a1c1c]">VISA</span>
              <span className="px-2 py-0.5 bg-[#eeeeed] rounded font-label-caps text-[10px] text-[#1a1c1c]">MC</span>
              <span className="px-2 py-0.5 bg-[#eeeeed] rounded font-label-caps text-[10px] text-[#1a1c1c]">AMEX</span>
              <span className="px-2 py-0.5 bg-[#eeeeed] rounded font-label-caps text-[10px] text-[#1a1c1c]">APPLE PAY</span>
              <span className="px-2 py-0.5 bg-[#eeeeed] rounded font-label-caps text-[10px] text-[#1a1c1c]">PAYPAL</span>
            </div>
          </div>

          <div className="font-label-sm text-[11px] text-[#47464b] text-center md:text-right">
            © 2025 NOVA Atelier Ltd. All rights reserved.
          </div>
        </div>

      </div>
    </footer>
  );
};
