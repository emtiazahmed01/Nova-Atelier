import React from 'react';

export const BrandValues: React.FC = () => {
  const values = [
    {
      icon: 'local_shipping',
      title: 'Free Worldwide Shipping',
      desc: 'Complimentary climate-neutral carbon delivery on all international orders over $50.'
    },
    {
      icon: 'lock',
      title: 'Secure Encrypted Checkout',
      desc: 'Bank-grade 256-bit encryption with seamless Apple Pay, Google Pay, and major card support.'
    },
    {
      icon: 'published_with_changes',
      title: '30-Day Effortless Returns',
      desc: 'Prepaid return shipping label enclosed in every delivery. Instant refunds upon scan.'
    },
    {
      icon: 'support_agent',
      title: '24/7 Concierge Support',
      desc: 'Dedicated personal styling advisors and client care specialists available at any hour.'
    }
  ];

  return (
    <section className="w-full px-4 lg:px-6 py-12 lg:py-16 bg-[#f3f4f3]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {values.map((v, index) => (
            <div
              key={index}
              className="flex flex-col gap-2 p-6 rounded-xl bg-white shadow-xs border border-[#eeeeed]"
            >
              <div className="w-10 h-10 rounded-full bg-[#eeeeed] flex items-center justify-center text-[#9d431f] mb-1">
                <span className="material-symbols-outlined text-[22px]">{v.icon}</span>
              </div>
              <h4 className="font-headline-sm text-[16px] text-[#1a1c1c] font-medium">
                {v.title}
              </h4>
              <p className="font-body-sm text-[13px] text-[#47464b] leading-relaxed">
                {v.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
