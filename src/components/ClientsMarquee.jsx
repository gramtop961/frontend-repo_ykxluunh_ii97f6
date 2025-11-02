import React from 'react';

const items = [
  'NIKE', 'ADOBE', 'ASTON MARTIN', 'NVIDIA', 'SAMSUNG', 'SPOTIFY', 'META', 'OPENAI', 'SONY', 'TESLA',
];

const ClientsMarquee = () => {
  return (
    <section className="relative w-full bg-black text-white">
      <div className="py-10 border-y border-neutral-900 bg-[radial-gradient(ellipse_at_center,rgba(255,115,0,0.08),transparent_60%)]">
        <div className="overflow-hidden">
          <div className="flex animate-[marquee_25s_linear_infinite] whitespace-nowrap">
            {items.concat(items).map((x, i) => (
              <span
                key={i}
                className="mx-8 font-mono text-sm tracking-[0.35em] text-neutral-400 hover:text-orange-400 transition-colors"
              >
                {x}
              </span>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
      `}</style>
    </section>
  );
};

export default ClientsMarquee;
