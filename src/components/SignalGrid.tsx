import { motion } from 'motion/react';
import { Users, Clock, MapPin, UserCheck } from 'lucide-react';

/**
 * SignalGrid — a 4-tile mini-dashboard mockup that complements VisionAIFeed.
 * VisionAIFeed shows the *pipeline* (camera → engine → intelligence → action).
 * SignalGrid shows the *signals* themselves: what's actually being measured.
 */
export default function SignalGrid() {
  // Synthetic but realistic-looking footfall curve — peaks around lunchtime.
  const footfallCurve = [0.18, 0.25, 0.38, 0.55, 0.78, 0.92, 0.85, 0.7, 0.62, 0.74, 0.58, 0.32];

  return (
    <div className="w-full bg-brand-navy/50 border border-white/5 rounded-[48px] p-6 md:p-10 relative overflow-hidden shadow-2xl">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-primary/40 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-brand-accent/20 to-transparent" />

      {/* Header */}
      <div className="flex items-center justify-between mb-8 relative z-10">
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse shadow-[0_0_8px_#2DD4BF]" />
          <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.4em]">Signal Layer · Live</p>
        </div>
        <p className="text-[10px] font-mono text-slate-600 uppercase tracking-widest hidden md:block">Site 042 · Dublin Flagship</p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative z-10 items-stretch">
        {/* Tile 1: Entrance volume */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-brand-card/60 border border-white/5 rounded-3xl p-6 md:p-8 hover:border-brand-primary/30 transition-colors flex flex-col"
        >
          <div className="flex items-start justify-between mb-6">
            <div className="w-11 h-11 bg-brand-primary/10 text-brand-primary rounded-xl flex items-center justify-center">
              <Users size={20} />
            </div>
            <span className="text-[9px] font-bold text-brand-primary/70 uppercase tracking-widest bg-brand-primary/10 px-3 py-1 rounded-full">+12% vs yesterday</span>
          </div>
          <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] mb-2">Entrance Volume</p>
          <p className="font-display text-4xl font-bold text-white italic mb-5 tracking-tight">1,248<span className="text-base text-slate-500 ml-2 not-italic font-medium">today</span></p>
          {/* Sparkline-style bars */}
          <div className="flex items-end gap-1 h-12">
            {footfallCurve.map((h, i) => (
              <motion.div
                key={i}
                initial={{ height: 0 }}
                whileInView={{ height: `${h * 100}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 + i * 0.04 }}
                className={`flex-1 rounded-sm ${i === footfallCurve.length - 2 ? 'bg-brand-primary' : 'bg-brand-primary/25'}`}
              />
            ))}
          </div>
          <div className="flex justify-between mt-2 text-[9px] font-mono text-slate-600 uppercase">
            <span>09:00</span>
            <span>21:00</span>
          </div>

          {/* Footer stats — fills the empty space + adds operational signal */}
          <div className="mt-auto pt-6 grid grid-cols-3 gap-3 border-t border-white/5">
            <div>
              <p className="text-[9px] font-mono text-slate-500 uppercase tracking-widest mb-1">Peak hour</p>
              <p className="text-sm font-display font-bold text-white tabular-nums">14:00</p>
            </div>
            <div>
              <p className="text-[9px] font-mono text-slate-500 uppercase tracking-widest mb-1">Avg / hr</p>
              <p className="text-sm font-display font-bold text-white tabular-nums">104</p>
            </div>
            <div>
              <p className="text-[9px] font-mono text-slate-500 uppercase tracking-widest mb-1">Walkouts</p>
              <p className="text-sm font-display font-bold text-orange-300 tabular-nums">7%</p>
            </div>
          </div>
        </motion.div>

        {/* Tile 2: Dwell heatmap */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-brand-card/60 border border-white/5 rounded-3xl p-6 md:p-8 hover:border-brand-secondary/30 transition-colors"
        >
          <div className="flex items-start justify-between mb-6">
            <div className="w-11 h-11 bg-brand-secondary/10 text-brand-secondary rounded-xl flex items-center justify-center">
              <MapPin size={20} />
            </div>
            <span className="text-[9px] font-bold text-brand-secondary/70 uppercase tracking-widest bg-brand-secondary/10 px-3 py-1 rounded-full">Engagement by zone</span>
          </div>
          <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] mb-2">Where attention goes</p>
          <p className="font-display text-4xl font-bold text-white italic mb-5 tracking-tight">02:48<span className="text-base text-slate-500 ml-2 not-italic font-medium">avg dwell</span></p>

          {/* Mini store floor plan with merchandise zones + engagement overlay */}
          <div className="relative aspect-[16/9] bg-[#0a0f1f] rounded-xl border border-white/5 overflow-hidden">
            <svg viewBox="0 0 320 180" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid meet">
              {/* Floor outline */}
              <rect x="6" y="6" width="308" height="168" rx="4" fill="none" stroke="#1e293b" strokeWidth="1.5" />
              {/* Entrance opening on left */}
              <line x1="6" y1="80" x2="6" y2="110" stroke="#0a0f1f" strokeWidth="2.5" />
              <text x="10" y="76" fontFamily="monospace" fontSize="6" fill="#64748b" letterSpacing="1">ENTRY</text>

              {/* Merchandise zones — drawn as rectangles, each gets a heat overlay */}
              {/* Window display (front-left, high engagement) */}
              <g>
                <rect x="20" y="18" width="60" height="46" rx="3" fill="#2DD4BF" fillOpacity="0.22" stroke="#2DD4BF" strokeOpacity="0.5" strokeWidth="1" />
                <text x="50" y="44" fontFamily="DM Sans, sans-serif" fontSize="7" fontWeight="700" fill="#ffffff" textAnchor="middle">Window</text>
                <text x="50" y="54" fontFamily="DM Sans, sans-serif" fontSize="9" fontWeight="800" fill="#2DD4BF" textAnchor="middle">68%</text>
              </g>
              {/* New arrivals (front-centre, very high engagement) */}
              <g>
                <rect x="92" y="18" width="78" height="46" rx="3" fill="#2DD4BF" fillOpacity="0.32" stroke="#2DD4BF" strokeOpacity="0.7" strokeWidth="1.2">
                  <animate attributeName="fillOpacity" values="0.28;0.42;0.28" dur="3s" repeatCount="indefinite" />
                </rect>
                <text x="131" y="44" fontFamily="DM Sans, sans-serif" fontSize="7" fontWeight="700" fill="#ffffff" textAnchor="middle">New arrivals</text>
                <text x="131" y="54" fontFamily="DM Sans, sans-serif" fontSize="9" fontWeight="800" fill="#2DD4BF" textAnchor="middle">82%</text>
              </g>
              {/* Promo endcap (front-right, medium) */}
              <g>
                <rect x="182" y="18" width="58" height="46" rx="3" fill="#facc15" fillOpacity="0.18" stroke="#facc15" strokeOpacity="0.5" strokeWidth="1" />
                <text x="211" y="44" fontFamily="DM Sans, sans-serif" fontSize="7" fontWeight="700" fill="#ffffff" textAnchor="middle">Promo wall</text>
                <text x="211" y="54" fontFamily="DM Sans, sans-serif" fontSize="9" fontWeight="800" fill="#facc15" textAnchor="middle">41%</text>
              </g>
              {/* Back wall (low — cold zone) */}
              <g>
                <rect x="252" y="18" width="56" height="46" rx="3" fill="#f97316" fillOpacity="0.14" stroke="#f97316" strokeOpacity="0.4" strokeWidth="1" />
                <text x="280" y="44" fontFamily="DM Sans, sans-serif" fontSize="7" fontWeight="700" fill="#ffffff" textAnchor="middle">Back wall</text>
                <text x="280" y="54" fontFamily="DM Sans, sans-serif" fontSize="9" fontWeight="800" fill="#f97316" textAnchor="middle">12%</text>
              </g>
              {/* Centre aisle (medium-high) */}
              <g>
                <rect x="92" y="76" width="148" height="38" rx="3" fill="#2DD4BF" fillOpacity="0.18" stroke="#2DD4BF" strokeOpacity="0.4" strokeWidth="1" />
                <text x="166" y="92" fontFamily="DM Sans, sans-serif" fontSize="7" fontWeight="700" fill="#ffffff" textAnchor="middle">Main aisle</text>
                <text x="166" y="103" fontFamily="DM Sans, sans-serif" fontSize="9" fontWeight="800" fill="#2DD4BF" textAnchor="middle">57%</text>
              </g>
              {/* Fitting rooms (medium) */}
              <g>
                <rect x="20" y="76" width="60" height="48" rx="3" fill="#facc15" fillOpacity="0.16" stroke="#facc15" strokeOpacity="0.5" strokeWidth="1" />
                <text x="50" y="98" fontFamily="DM Sans, sans-serif" fontSize="7" fontWeight="700" fill="#ffffff" textAnchor="middle">Fitting</text>
                <text x="50" y="110" fontFamily="DM Sans, sans-serif" fontSize="9" fontWeight="800" fill="#facc15" textAnchor="middle">44%</text>
              </g>
              {/* Checkout (high — pulse) */}
              <g>
                <rect x="252" y="76" width="56" height="48" rx="3" fill="#2DD4BF" fillOpacity="0.30" stroke="#2DD4BF" strokeOpacity="0.7" strokeWidth="1.2">
                  <animate attributeName="fillOpacity" values="0.25;0.40;0.25" dur="2.4s" repeatCount="indefinite" />
                </rect>
                <text x="280" y="98" fontFamily="DM Sans, sans-serif" fontSize="7" fontWeight="700" fill="#ffffff" textAnchor="middle">Checkout</text>
                <text x="280" y="110" fontFamily="DM Sans, sans-serif" fontSize="9" fontWeight="800" fill="#2DD4BF" textAnchor="middle">71%</text>
              </g>
              {/* Bottom row: clearance (cold), seasonal (warm) */}
              <g>
                <rect x="20" y="134" width="148" height="34" rx="3" fill="#f97316" fillOpacity="0.14" stroke="#f97316" strokeOpacity="0.4" strokeWidth="1" />
                <text x="94" y="148" fontFamily="DM Sans, sans-serif" fontSize="7" fontWeight="700" fill="#ffffff" textAnchor="middle">Clearance</text>
                <text x="94" y="160" fontFamily="DM Sans, sans-serif" fontSize="9" fontWeight="800" fill="#f97316" textAnchor="middle">19%</text>
              </g>
              <g>
                <rect x="180" y="134" width="128" height="34" rx="3" fill="#facc15" fillOpacity="0.18" stroke="#facc15" strokeOpacity="0.5" strokeWidth="1" />
                <text x="244" y="148" fontFamily="DM Sans, sans-serif" fontSize="7" fontWeight="700" fill="#ffffff" textAnchor="middle">Seasonal</text>
                <text x="244" y="160" fontFamily="DM Sans, sans-serif" fontSize="9" fontWeight="800" fill="#facc15" textAnchor="middle">38%</text>
              </g>
            </svg>
          </div>

          <div className="flex items-center justify-between mt-3 text-[9px] font-bold text-slate-500 uppercase tracking-widest">
            <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-brand-accent" /> Hot</span>
            <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full" style={{ backgroundColor: '#facc15' }} /> Warm</span>
            <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full" style={{ backgroundColor: '#f97316' }} /> Cold</span>
          </div>
        </motion.div>

        {/* Tile 3: Queue pressure */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="bg-brand-card/60 border border-white/5 rounded-3xl p-6 md:p-8 hover:border-orange-400/30 transition-colors"
        >
          <div className="flex items-start justify-between mb-6">
            <div className="w-11 h-11 bg-orange-400/10 text-orange-400 rounded-xl flex items-center justify-center">
              <Clock size={20} />
            </div>
            <span className="text-[9px] font-bold text-orange-300 uppercase tracking-widest bg-orange-400/10 px-3 py-1 rounded-full animate-pulse">Alert</span>
          </div>
          <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] mb-2">Queue Pressure</p>
          <p className="font-display text-4xl font-bold text-white italic mb-5 tracking-tight">14<span className="text-base text-slate-500 ml-2 not-italic font-medium">in line</span></p>
          {/* Wait-time gauge */}
          <div className="space-y-2">
            <div className="flex justify-between text-[9px] font-mono text-slate-500 uppercase">
              <span>Wait</span>
              <span className="text-orange-300">04:12 · over target</span>
            </div>
            <div className="h-2 bg-white/5 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: '78%' }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.4 }}
                className="h-full rounded-full bg-gradient-to-r from-brand-accent via-yellow-400 to-orange-500"
              />
            </div>
            <p className="text-[10px] text-slate-500 font-medium pt-2">Recommend +1 till operator.</p>
          </div>
        </motion.div>

        {/* Tile 4: Customer vs staff */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-brand-card/60 border border-white/5 rounded-3xl p-6 md:p-8 hover:border-brand-accent/30 transition-colors"
        >
          <div className="flex items-start justify-between mb-6">
            <div className="w-11 h-11 bg-brand-accent/10 text-brand-accent rounded-xl flex items-center justify-center">
              <UserCheck size={20} />
            </div>
            <span className="text-[9px] font-bold text-brand-accent/80 uppercase tracking-widest bg-brand-accent/10 px-3 py-1 rounded-full">98.7% Verified</span>
          </div>
          <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] mb-2">Customer · Staff Split</p>
          <p className="font-display text-4xl font-bold text-white italic mb-5 tracking-tight">87<span className="text-base text-slate-500 ml-1 not-italic font-medium">%</span></p>
          {/* Stacked bar */}
          <div className="space-y-3">
            <div className="h-3 rounded-full overflow-hidden flex bg-white/5">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: '87%' }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.5 }}
                className="bg-brand-accent"
              />
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: '13%' }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.6 }}
                className="bg-brand-secondary/70"
              />
            </div>
            <div className="flex justify-between text-[9px] font-mono text-slate-500 uppercase">
              <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-brand-accent" /> Customers</span>
              <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-brand-secondary/70" /> Staff</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Footer caption */}
      <div className="flex items-center justify-between mt-8 pt-6 border-t border-white/5 relative z-10">
        <p className="text-[9px] font-bold text-slate-600 uppercase tracking-[0.3em]">Anonymized skeletal tracking · GDPR-Safe</p>
        <p className="text-[9px] font-mono text-slate-700 uppercase tracking-widest hidden md:block">Updated · 14:22 IST</p>
      </div>
    </div>
  );
}
