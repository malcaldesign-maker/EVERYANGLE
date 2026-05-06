import { motion } from 'motion/react';
import type { CSSProperties } from 'react';

/**
 * CustomerMarquee — infinite-scrolling brand strip.
 *
 * Brands are rendered as styled text wordmarks rather than image logos for two reasons:
 *   1. Visual unity — a marquee of mixed-color real logos always looks cluttered.
 *   2. Legal flexibility — text wordmarks avoid trademark issues with non-permissioned use.
 *
 * To swap a text wordmark for a real logo file later: drop a white PNG/SVG into
 * /public/logos/<slug>.svg and add `image: '/logos/<slug>.svg'` to the brand entry.
 *
 * IMPORTANT: only display brands here that you have written permission to display
 * as customers. Until then, this strip is framed as "deployed across formats" rather
 * than an explicit endorsement claim.
 */

type Brand = {
  name: string;
  /** Optional override class to capture brand-faithful typography. */
  className?: string;
  /** Inline style override. */
  style?: CSSProperties;
  /** If provided, render this image instead of the styled text. */
  image?: string;
};

const BRANDS: Brand[] = [
  // Victoria's Secret-inspired — elegant serif caps, wide letter spacing
  {
    name: "VICTORIA'S SECRET",
    className: 'text-2xl md:text-3xl font-bold tracking-[0.18em]',
    style: { fontFamily: 'Cormorant Garamond, Times New Roman, serif', letterSpacing: '0.18em' },
  },
  // Starbucks — bold sans caps
  {
    name: 'STARBUCKS',
    className: 'text-2xl md:text-3xl font-black tracking-[0.05em]',
    style: { fontFamily: 'Sora, sans-serif' },
  },
  // Sleep Number — lowercase, light
  {
    name: 'sleep number',
    className: 'text-2xl md:text-3xl font-light tracking-tight italic',
    style: { fontFamily: 'DM Sans, sans-serif' },
  },
  // Ulta Beauty — bold italic
  {
    name: 'ULTA BEAUTY',
    className: 'text-2xl md:text-3xl font-black italic tracking-tight',
    style: { fontFamily: 'Sora, sans-serif' },
  },
  // H&M — heavy serif
  {
    name: 'H&M',
    className: 'text-3xl md:text-4xl font-black italic',
    style: { fontFamily: 'Sora, sans-serif', fontStretch: 'condensed' },
  },
  // Foot Locker — bold sans
  {
    name: 'Foot Locker',
    className: 'text-2xl md:text-3xl font-black italic tracking-tight',
    style: { fontFamily: 'Sora, sans-serif' },
  },
  // Tommy Hilfiger — preppy serif
  {
    name: 'TOMMY HILFIGER',
    className: 'text-xl md:text-2xl font-bold tracking-[0.2em]',
    style: { fontFamily: 'Sora, sans-serif' },
  },
  // Levi's — heavy stencil
  {
    name: "LEVI'S",
    className: 'text-2xl md:text-3xl font-black tracking-[0.15em]',
    style: { fontFamily: 'Sora, sans-serif' },
  },
  // Samsøe Samsøe — elegant lowercase
  {
    name: 'Samsøe Samsøe',
    className: 'text-2xl md:text-3xl font-light tracking-tight',
    style: { fontFamily: 'Cormorant Garamond, Times New Roman, serif' },
  },
];

export default function CustomerMarquee() {
  // Duplicate the list so the loop reads as infinite without a gap.
  const marquee = [...BRANDS, ...BRANDS];

  return (
    <section className="bg-brand-card/30 py-20 border-y border-white/5 backdrop-blur-sm overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-10">
        <p className="text-center text-[10px] font-black text-slate-500 uppercase tracking-[0.5em]">
          Deployed across global retail formats
        </p>
      </div>
      <div className="relative">
        {/* Edge fades so logos don't pop in/out abruptly */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-brand-navy to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-brand-navy to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex items-center gap-16 whitespace-nowrap"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 50, ease: 'linear', repeat: Infinity }}
        >
          {marquee.map((brand, i) =>
            brand.image ? (
              <img
                key={`${brand.name}-${i}`}
                src={brand.image}
                alt={brand.name}
                className="h-8 md:h-10 w-auto flex-shrink-0 opacity-60 hover:opacity-100 transition-opacity duration-500"
                style={{ filter: 'brightness(0) invert(1)' }}
              />
            ) : (
              <span
                key={`${brand.name}-${i}`}
                className={`text-white/45 hover:text-white transition-colors duration-500 flex-shrink-0 ${brand.className ?? ''}`}
                style={brand.style}
              >
                {brand.name}
              </span>
            ),
          )}
        </motion.div>
      </div>
    </section>
  );
}
