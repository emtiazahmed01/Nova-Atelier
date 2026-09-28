import React from 'react';

interface CoreEditBannerProps {
  onShopCollection: () => void;
}

export const CoreEditBanner: React.FC<CoreEditBannerProps> = ({ onShopCollection }) => {
  return (
    <section className="w-full px-4 lg:px-6 py-8">
      <div className="max-w-7xl mx-auto relative rounded-3xl overflow-hidden shadow-2xl min-h-[500px] lg:min-h-[540px] flex items-center">
        {/* Full Bleed Image Asset */}
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAyNzbbko-6xN5dpR3hEEKgm8bVQcB0gMShvYyoyxMwcLnnexHVn8RIe6Uwkoec4ZZT_RNq311f0Ua9mYhfOhF7BesYbYIoTntHS7snfddT0ru5WD0aeLYcjWyzSLcsqYR3iiVjkK_cmZHHEaOg_9kKJovfVVv66Cnid3yK-BRPoWKsf3z_YSDMCIwVzvrc6eg4rmPkZfgzisM0HCodNOFKvIt0J6XytfmwEAgS43oAmd27W763PDXEnw"
          alt="Couple walking in serene architectural courtyard dressed in NOVA SS26 collection garments"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Gradient Scrim Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-transparent"></div>

        {/* Content Box */}
        <div className="relative z-10 p-6 sm:p-10 lg:p-14 max-w-xl flex flex-col items-start gap-4 text-white">
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-[#f9f9f8] font-label-caps text-[11px] uppercase tracking-widest">
            The Core Edit
          </span>

          <h2 className="font-headline-lg text-[32px] lg:text-[40px] text-white tracking-tight leading-tight">
            Elevate Your Everyday
          </h2>

          <p className="font-body-lg text-[15px] lg:text-[17px] text-[#e2e2e2] font-light leading-relaxed">
            Discover timeless essentials designed for modern living. Pieces cut with architectural restraint and uncompromising comfort.
          </p>

          <div className="pt-2">
            <button
              onClick={onShopCollection}
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-[#9d431f] text-white font-label-caps text-[12px] uppercase tracking-wider shadow-lg hover:bg-[#fe8c62] hover:text-[#742502] transition-all cursor-pointer font-semibold"
            >
              Shop the Collection
            </button>
          </div>

          {/* Key Provenance Specs */}
          <div className="grid grid-cols-3 gap-4 pt-6 w-full text-[#e2e2e2] border-t border-white/20 mt-2">
            <div className="flex flex-col gap-1">
              <span className="font-label-caps text-[11px] uppercase tracking-wider text-white font-semibold">
                100% Traceable
              </span>
              <span className="font-body-sm text-[12px] text-[#dadad9]">
                Certified organic fibres
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-label-caps text-[11px] uppercase tracking-wider text-white font-semibold">
                Zero Plastic
              </span>
              <span className="font-body-sm text-[12px] text-[#dadad9]">
                FSC recycled packaging
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-label-caps text-[11px] uppercase tracking-wider text-white font-semibold">
                Lifetime Care
              </span>
              <span className="font-body-sm text-[12px] text-[#dadad9]">
                Complimentary repairs
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
