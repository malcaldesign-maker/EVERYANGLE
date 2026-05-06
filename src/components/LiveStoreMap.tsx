import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Eye, Users, Activity } from 'lucide-react';

/**
 * LiveStoreMap — the homepage's signature interaction.
 *
 * A top-down store layout rendered in SVG with customer "dots" that follow
 * real path geometry (entrance → browse aisles → checkout → exit). Heat zones
 * pulse to show accumulated dwell. Live counters increment so the screen
 * never sits still. This is what visitors will remember about the site.
 *
 * Performance: uses native SVG <animateMotion> for dot paths (GPU-accelerated,
 * no JS/RAF cost) and a single setInterval for the counter updates.
 */

// Each customer dot follows one of these SVG paths. Coordinates target an
// 800x500 viewBox so the math reads cleanly.
const CUSTOMER_PATHS = [
  // Path 1: Entrance → main aisle → checkout → exit
  'M 30 250 L 200 250 L 200 150 L 500 150 L 500 350 L 700 350 L 770 250 L 800 250',
  // Path 2: Entrance → browse left → fitting room → checkout
  'M 30 250 L 180 250 L 180 380 L 350 380 L 350 280 L 500 280 L 500 350 L 700 350',
  // Path 3: Entrance → linger entrance → leave (a "walkout")
  'M 30 250 L 150 250 L 150 200 L 80 200 L 30 250',
  // Path 4: Entrance → far back → return → checkout
  'M 30 250 L 250 250 L 600 250 L 600 100 L 400 100 L 400 250 L 500 250 L 500 350 L 700 350',
  // Path 5: Entrance → centre cluster → exit
  'M 30 250 L 200 250 L 350 200 L 450 200 L 600 250 L 770 250 L 800 250',
  // Path 6: Entrance → fitting → exit (no purchase)
  'M 30 250 L 200 250 L 200 380 L 320 380 L 320 250 L 30 250',
  // Path 7: Entrance → checkout → exit (quick visit)
  'M 30 250 L 500 250 L 500 350 L 700 350 L 770 250 L 800 250',
  // Path 8: Entrance → window aisle → leave
  'M 30 250 L 250 250 L 250 100 L 600 100 L 770 250 L 800 250',
];

const HEAT_ZONES = [
  { cx: 200, cy: 250, r: 70, color: '#6366F1', label: 'Entrance', intensity: 0.6 },
  { cx: 450, cy: 200, r: 90, color: '#A855F7', label: 'Engagement', intensity: 0.8 },
  { cx: 600, cy: 350, r: 80, color: '#2DD4BF', label: 'Checkout', intensity: 0.55 },
  { cx: 320, cy: 380, r: 60, color: '#8B5CF6', label: 'Fitting', intensity: 0.5 },
];

export default function LiveStoreMap() {
  const [visitors, setVisitors] = useState(1248);
  const [conversion, setConversion] = useState(18.4);
  const [queue, setQueue] = useState(11);
  const [dwell, setDwell] = useState(168); // seconds
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReduceMotion(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    if (reduceMotion) return;
    const tick = setInterval(() => {
      setVisitors((v) => v + Math.floor(Math.random() * 3));
      setConversion((c) => +(c + (Math.random() - 0.5) * 0.05).toFixed(1));
      setQueue((q) => Math.max(2, Math.min(18, q + Math.floor(Math.random() * 3) - 1)));
      setDwell((d) => Math.max(120, Math.min(220, d + Math.floor(Math.random() * 5) - 2)));
    }, 1800);
    return () => clearInterval(tick);
  }, [reduceMotion]);

  const queueOver = queue > 12;

  return (
    <div className="w-full bg-brand-navy/60 border border-white/5 rounded-[48px] p-4 md:p-6 relative overflow-hidden shadow-2xl backdrop-blur-sm">
      {/* Top stat bar */}
      <div className="flex items-center justify-between flex-wrap gap-3 mb-5 px-3 md:px-4">
        <div className="flex items-center gap-3">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-accent opacity-60" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-accent" />
          </span>
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em]">Live · Site 042 · Dublin</p>
        </div>
        <div className="flex items-center gap-6 text-[10px] font-mono text-slate-500 uppercase tracking-widest">
          <div className="flex items-center gap-2">
            <Eye size={11} className="text-brand-primary" />
            <span>Vision Engine v4</span>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <Activity size={11} className="text-brand-accent" />
            <span>32 streams</span>
          </div>
        </div>
      </div>

      {/* The map */}
      <div className="relative aspect-[8/5] w-full bg-[#070b1a] rounded-[36px] overflow-hidden border border-white/5">
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(#6366F1 1px, transparent 1px), linear-gradient(to right, #6366F1 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />

        <svg viewBox="0 0 800 500" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid meet">
          <defs>
            {HEAT_ZONES.map((z, i) => (
              <radialGradient id={`heat-${i}`} key={i}>
                <stop offset="0%" stopColor={z.color} stopOpacity={z.intensity} />
                <stop offset="100%" stopColor={z.color} stopOpacity="0" />
              </radialGradient>
            ))}
            <filter id="dotGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Heat zones */}
          {HEAT_ZONES.map((z, i) => (
            <g key={i}>
              <circle cx={z.cx} cy={z.cy} r={z.r} fill={`url(#heat-${i})`}>
                {!reduceMotion && (
                  <animate attributeName="r" values={`${z.r};${z.r * 1.08};${z.r}`} dur="4s" repeatCount="indefinite" />
                )}
              </circle>
            </g>
          ))}

          {/* Floor plan walls (light strokes) */}
          <g stroke="#1e293b" strokeWidth="2" fill="none">
            {/* Outer */}
            <rect x="20" y="60" width="760" height="380" rx="12" />
            {/* Entrance opening on left wall */}
            <line x1="20" y1="220" x2="20" y2="280" stroke="#070b1a" strokeWidth="3" />
            {/* Inner aisles */}
            <line x1="180" y1="60" x2="180" y2="200" />
            <line x1="180" y1="300" x2="180" y2="440" />
            <line x1="380" y1="60" x2="380" y2="160" />
            <line x1="380" y1="300" x2="380" y2="440" />
            <line x1="580" y1="60" x2="580" y2="200" />
            <line x1="580" y1="300" x2="580" y2="440" />
            {/* Checkout counter */}
            <rect x="540" y="320" width="180" height="40" rx="6" fill="#0f172a" />
          </g>

          {/* Zone labels */}
          <g fontFamily="monospace" fontSize="10" fontWeight="700" fill="#475569" letterSpacing="2">
            <text x="40" y="100">ENTRANCE</text>
            <text x="220" y="100">AISLE A</text>
            <text x="400" y="100">CENTRE</text>
            <text x="610" y="100">AISLE B</text>
            <text x="540" y="380" fill="#94a3b8">CHECKOUT</text>
            <text x="220" y="430">FITTING ROOMS</text>
          </g>

          {/* Customer dots — each follows its own path */}
          {CUSTOMER_PATHS.map((path, i) => {
            const color = i === 2 || i === 5 ? '#f97316' : '#6366F1'; // walkouts in orange
            const duration = 16 + (i % 4) * 3; // staggered durations
            const delay = -(i * 2.1); // stagger so they're not all at the door at once
            return (
              <g key={i}>
                <circle r="4" fill={color} filter="url(#dotGlow)">
                  {!reduceMotion ? (
                    <animateMotion dur={`${duration}s`} repeatCount="indefinite" begin={`${delay}s`} path={path} />
                  ) : (
                    <set attributeName="cx" to="200" />
                  )}
                </circle>
                <circle r="9" fill={color} opacity="0.15">
                  {!reduceMotion && (
                    <animateMotion dur={`${duration}s`} repeatCount="indefinite" begin={`${delay}s`} path={path} />
                  )}
                </circle>
              </g>
            );
          })}

          {/* Door indicator */}
          <g>
            <rect x="14" y="220" width="12" height="60" rx="2" fill="#2DD4BF" opacity="0.6">
              {!reduceMotion && <animate attributeName="opacity" values="0.4;0.9;0.4" dur="2s" repeatCount="indefinite" />}
            </rect>
            <text x="32" y="216" fontFamily="monospace" fontSize="9" fontWeight="700" fill="#2DD4BF" letterSpacing="1.5">
              ENTRY
            </text>
          </g>
        </svg>

        {/* HUD overlays */}
        <div className="absolute top-4 left-4 md:top-6 md:left-6 flex flex-col gap-2 z-10 pointer-events-none">
          <div className="bg-brand-navy/80 backdrop-blur-md border border-white/10 rounded-2xl px-4 py-3 shadow-xl">
            <div className="flex items-center gap-3 mb-1">
              <Users size={12} className="text-brand-primary" />
              <span className="text-[9px] font-black text-slate-500 uppercase tracking-[0.3em]">Visitors today</span>
            </div>
            <p className="font-display text-2xl md:text-3xl font-bold text-white tabular-nums">
              {visitors.toLocaleString()}
            </p>
          </div>
        </div>

        <div className="absolute top-4 right-4 md:top-6 md:right-6 flex flex-col gap-2 z-10 pointer-events-none">
          <div className="bg-brand-navy/80 backdrop-blur-md border border-white/10 rounded-2xl px-4 py-3 shadow-xl text-right">
            <span className="text-[9px] font-black text-slate-500 uppercase tracking-[0.3em] block mb-1">Conversion</span>
            <p className="font-display text-2xl md:text-3xl font-bold text-brand-accent tabular-nums italic">{conversion}%</p>
          </div>
        </div>

        <motion.div
          animate={queueOver ? { scale: [1, 1.03, 1] } : { scale: 1 }}
          transition={{ duration: 1.2, repeat: queueOver ? Infinity : 0 }}
          className={`absolute bottom-4 right-4 md:bottom-6 md:right-6 backdrop-blur-md rounded-2xl px-4 py-3 shadow-xl z-10 pointer-events-none border ${
            queueOver ? 'bg-orange-500/15 border-orange-400/40' : 'bg-brand-navy/80 border-white/10'
          }`}
        >
          <span className="text-[9px] font-black uppercase tracking-[0.3em] block mb-1 text-slate-400">
            Queue {queueOver && <span className="text-orange-300">· over target</span>}
          </span>
          <p className={`font-display text-2xl md:text-3xl font-bold tabular-nums italic ${queueOver ? 'text-orange-300' : 'text-white'}`}>
            {queue} <span className="text-base text-slate-500 not-italic font-medium">in line</span>
          </p>
        </motion.div>

        <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 z-10 pointer-events-none">
          <div className="bg-brand-navy/80 backdrop-blur-md border border-white/10 rounded-2xl px-4 py-3 shadow-xl">
            <span className="text-[9px] font-black text-slate-500 uppercase tracking-[0.3em] block mb-1">Avg dwell</span>
            <p className="font-display text-2xl md:text-3xl font-bold text-white tabular-nums italic">
              {Math.floor(dwell / 60)}:{String(dwell % 60).padStart(2, '0')}
            </p>
          </div>
        </div>
      </div>

      {/* Caption strip */}
      <div className="flex items-center justify-between mt-4 px-3 md:px-4 flex-wrap gap-2">
        <div className="flex items-center gap-4 text-[9px] font-bold text-slate-500 uppercase tracking-[0.3em]">
          <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-brand-primary" /> Customer</span>
          <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-orange-400" /> Walkout</span>
          <span className="hidden md:flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-brand-accent" /> Heat</span>
        </div>
        <p className="text-[9px] font-mono text-slate-600 uppercase tracking-widest">
          Anonymized skeletal tracking · GDPR-safe
        </p>
      </div>
    </div>
  );
}
