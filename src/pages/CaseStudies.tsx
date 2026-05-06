import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Play, ArrowRight } from 'lucide-react';
import { useMeta } from '../hooks/useMeta';

export default function CaseStudies() {
  useMeta({
    title: 'Case studies — EVERYANGLE',
    description:
      'How global retailers used EVERYANGLE to lift conversion 30%, recover queue dropouts, and align labor with measured demand. Real numbers, real rollouts.',
  });
  const caseStudies = [
    {
      brand: "Global Luxury Beauty",
      title: "Optimizing high-value conversions on the counter floor",
      metric: "+30% Conversion Lift",
      tag: "Operational Efficiency",
      desc: "By aligning staff rosters to the peak engagement zones identified by EVERYANGLE, the brand cut counter-side queue abandonment to single digits.",
      image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=2070&auto=format&fit=crop"
    },
    {
      brand: "Apparel Retail Leader",
      title: "Eliminating queue loss in flagship stores",
      metric: "-20% Queue Dropout",
      tag: "Queue Intelligence",
      desc: "Real-time alerts to floor managers triggered dynamic till opening, recovering five-figure daily revenue per location.",
      image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=2071&auto=format&fit=crop"
    },
    {
      brand: "Global Coffee Leader",
      title: "Rostering against actual footfall, not historical guesses",
      metric: "15% Labor Efficiency",
      tag: "Store Operations",
      desc: "Barista staffing now aligns with measured arrival patterns and live queue friction — without inflating overall headcount.",
      image: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  return (
    <div className="pt-20 bg-brand-navy">
      {/* Featured Case Study Video */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(0,229,200,0.05),transparent_60%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-[10px] font-bold uppercase tracking-[0.3em] mb-10">
              <Play size={12} className="fill-current" />
              Featured Story: Prime Retail
            </div>
            <h1 className="font-display text-6xl md:text-8xl font-bold mb-10 tracking-tight leading-[0.9] italic text-white">
              Results in <br />
              <span className="text-brand-primary">Real-Time.</span>
            </h1>
            <p className="text-xl text-slate-400 mb-12 leading-relaxed font-medium">
              See how global retailers use EVERYANGLE to reduce abandoned carts and optimize labor through real-time store signal.
            </p>
            <div className="grid grid-cols-2 gap-8 border-t border-white/5 pt-12">
               <div>
                  <p className="text-3xl font-display font-bold text-white mb-1">26x ROI</p>
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Master Metric</p>
               </div>
               <div>
                  <p className="text-3xl font-display font-bold text-brand-primary mb-1">&lt; 14 Days</p>
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Activation Time</p>
               </div>
            </div>
          </motion.div>

          <div className="relative aspect-video rounded-[40px] overflow-hidden border border-white/10 shadow-2xl">
            <iframe 
               className="w-full h-full"
               src="https://www.youtube.com/embed/YM8VvbejXbA" 
               title="Case Study" 
               frameBorder="0" 
               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
               allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* Case Study Grid */}
      <section className="py-32 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((cs, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/[0.02] border border-white/5 rounded-[40px] overflow-hidden hover:bg-white/[0.04] transition-all duration-500 group"
              >
                <div className="aspect-[16/10] relative overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                  <img src={cs.image} alt={cs.title} className="w-full h-full object-cover brightness-50 group-hover:brightness-75 transition-all" />
                  <div className="absolute top-6 left-6">
                    <span className="px-4 py-2 bg-brand-navy/90 backdrop-blur-md rounded-full text-[9px] font-bold text-brand-primary uppercase tracking-widest border border-white/10 shadow-lg">
                      {cs.tag}
                    </span>
                  </div>
                </div>
                <div className="p-10">
                  <p className="text-4xl font-display font-bold text-white mb-6 group-hover:text-brand-primary transition-colors italic">{cs.metric}</p>
                  <h3 className="text-xl font-bold text-white mb-4">{cs.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-8">{cs.desc}</p>
                  <Link to="/contact" className="flex items-center gap-2 text-[10px] font-bold text-white uppercase tracking-widest hover:gap-4 transition-all">
                    View full report <ArrowRight size={14} className="text-brand-primary" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
