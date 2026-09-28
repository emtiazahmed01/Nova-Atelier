import React, { useState } from 'react';

export const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  return (
    <section className="w-full px-4 lg:px-6 py-12 lg:py-16">
      <div className="max-w-4xl mx-auto rounded-3xl bg-[#eeeeed] p-8 lg:p-14 text-center flex flex-col items-center gap-4 shadow-xs border border-[#e8e8e7]">
        <span className="font-label-caps text-[11px] uppercase text-[#9d431f] tracking-widest font-semibold">
          The Dispatch
        </span>

        <h2 className="font-headline-lg text-[28px] lg:text-[36px] text-[#000000] tracking-tight max-w-lg">
          Stay in the Loop
        </h2>

        <p className="font-body-md text-[14px] lg:text-[15px] text-[#47464b] max-w-md leading-relaxed">
          Get early access to private seasonal releases, exclusive archival drops, and editorial styling stories.
        </p>

        {submitted ? (
          <div className="p-4 rounded-xl bg-white border border-[#c8c5cb] text-[#9d431f] font-label-md text-[13px] flex items-center gap-2">
            <span className="material-symbols-outlined text-[18px]">check_circle</span>
            Welcome to the atelier. Check your inbox shortly.
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-md flex flex-col sm:flex-row gap-2 pt-2"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address..."
              className="flex-1 px-5 py-3.5 rounded-full bg-white text-[#1a1c1c] font-body-sm text-[13px] placeholder:text-[#77767b] border border-[#e8e8e7] focus:outline-none focus:ring-1 focus:ring-black"
            />
            <button
              type="submit"
              className="px-8 py-3.5 rounded-full bg-[#9d431f] text-white font-label-caps text-[12px] uppercase tracking-wider hover:opacity-90 transition-all shrink-0 font-semibold cursor-pointer shadow-xs"
            >
              Subscribe
            </button>
          </form>
        )}

        <p className="font-label-sm text-[11px] text-[#77767b]">
          Zero spam. Strictly curated dispatches. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
};
