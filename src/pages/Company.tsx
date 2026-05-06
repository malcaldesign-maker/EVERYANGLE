import { motion } from 'motion/react';
import {
  Target,
  Zap,
  CheckCircle2,
  TrendingUp,
  Eye,
  MessageSquare,
  ArrowRight,
  Handshake,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useMeta } from '../hooks/useMeta';

export default function Company() {
  useMeta({
    title: 'Company — EVERYANGLE',
    description:
      'EVERYANGLE is a Vision AI company headquartered in Dublin, helping retailers make their physical stores measurable, observable, and improvable.',
  });
  const heroChips = [
    "Retail Vision AI",
    "Store Intelligence",
    "Cisco & Meraki Ready",
    "Real-Time Operations",
    "Customer Success Led",
    "Built for Enterprise Retail"
  ];

  const values = [
    { 
      title: "Clarity Over Noise", 
      desc: "Retail teams already have enough dashboards, reports, and opinions. We focus on making store performance easier to understand, helping customers see what matters and act with confidence.", 
      icon: <Eye size={24} /> 
    },
    { 
      title: "Intelligence That Drives Action", 
      desc: "Data only matters when it changes decisions. We build insight that helps teams improve queues, conversion, service, staffing, engagement, and store execution — not just observe them.", 
      icon: <Zap size={24} /> 
    },
    { 
      title: "Built for Real Stores", 
      desc: "Every store is different. We build with that complexity in mind, so our technology works in the real world, from varying layouts to lighting and operating models.", 
      icon: <Target size={24} /> 
    },
    { 
      title: "Customer Success Is the Product", 
      desc: "The value of EVERYANGLE does not stop at installation. Training, adoption, and continuous improvement are central to how customers experience the platform.", 
      icon: <CheckCircle2 size={24} /> 
    },
    { 
      title: "Partner-Led Scale", 
      desc: "Strong technology ecosystems drive future retail. Our work with partners like Cisco and Meraki helps customers unlock value from trusted infrastructure.", 
      icon: <Handshake size={24} /> 
    },
    { 
      title: "Momentum With Purpose", 
      desc: "We move quickly but not randomly. Whether supporting a pilot or building a feature, we focus on progress that creates measurable value.", 
      icon: <TrendingUp size={24} /> 
    }
  ];

  // NOTE: replace these placeholder Unsplash URLs with real headshots
  // hosted in /public/team/ (e.g. /team/david.jpg) before publishing.
  const team = [
    {
      name: "David Owens",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop",
      bio: "David leads the overall vision, strategy, and commercial direction of EVERYANGLE. With a background in scaling high-growth technology companies, he created the platform from a belief that the physical store has been underserved by technology for too long, focusing on closing the 'instrumentation gap' between digital and physical retail."
    },
    {
      name: "Brian Martin",
      role: "VP Product",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop",
      bio: "Brian leads product strategy and technical direction at EVERYANGLE. He is responsible for translating the complex needs of enterprise retailers into a scalable Vision AI platform, ensuring that every insight generated — from traffic to conversion — is decision-grade and actionable for store operations teams."
    },
    {
      name: "Malachy Callan",
      role: "Commercial Strategy & Growth",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1973&auto=format&fit=crop",
      bio: "Malachy leads EVERYANGLE's commercial expansion and strategic partnerships. He works closely with global retailers and technology partners like Cisco and Meraki to help them unlock the hidden value in their existing camera infrastructure, driving measurable ROI across their entire store estate."
    }
  ];

  return (
    <div className="pt-20 bg-brand-navy selection:bg-brand-cyan/30">
      {/* 1. Hero Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-cyan/5 blur-[150px] rounded-full opacity-20 -mr-40 -mt-40" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <p className="text-brand-cyan text-[10px] font-black uppercase tracking-[0.4em] mb-10">Company & Team</p>
            <h1 className="font-display text-6xl md:text-8xl font-bold mb-10 tracking-tight leading-[0.95] italic">
              The store has been talking. <span className="text-brand-cyan">We're the people listening.</span>
            </h1>
            <p className="text-xl md:text-2xl text-white leading-relaxed font-medium mb-10 max-w-3xl">
              EVERYANGLE is the operating system for physical retail. We turn cameras retailers already own into a real-time signal layer — the same level of observability e-commerce teams have had for a decade.
            </p>
            <p className="text-lg text-slate-400 max-w-2xl leading-relaxed mb-16">
              The future of retail belongs to teams who can see what's actually happening on the floor and act on it before the day ends. We're building the tools that make that the default.
            </p>

            <div className="flex flex-wrap gap-3">
              {heroChips.map((chip, i) => (
                <div key={i} className="px-5 py-2.5 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold uppercase tracking-widest text-slate-300">
                  {chip}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Vision Section */}
      <section className="py-32 border-y border-white/5 bg-brand-card/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
             <div>
                <p className="text-brand-cyan text-[10px] font-black uppercase tracking-[0.4em] mb-8">Our Vision</p>
                <h2 className="font-display text-4xl md:text-6xl font-bold mb-10 italic">Online teams see everything. <span className="text-white">Store teams deserve the same.</span></h2>
             </div>
             <div className="space-y-6 text-lg text-slate-400 leading-relaxed font-medium">
                <p>An e-commerce manager knows, by the hour, which page killed the conversion. The store manager standing on the floor that produced 90% of the revenue has been working from a turnstile count and a Friday spreadsheet.</p>
                <p><span className="text-white">That asymmetry is what EVERYANGLE was built to end.</span></p>
                <p>We turn the cameras already mounted in every store into a continuous signal layer — measuring footfall, conversion, queues, dwell, demographic split, and labor utilisation, in real time, across every site you operate.</p>
                <p>Our vision is simple. Make every store measurable. Make every team better-informed. Make every decision sharper.</p>
             </div>
          </div>
        </div>
      </section>

      {/* 4. Values Section */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-24 max-w-2xl">
            <p className="text-brand-cyan text-[10px] font-black uppercase tracking-[0.4em] mb-8">Company Values</p>
            <h2 className="font-display text-5xl md:text-7xl font-bold mb-8 italic">The principles behind <span className="text-brand-cyan">how we build.</span></h2>
            <p className="text-lg text-slate-400 font-medium">Our values guide how we work with customers, partners, and each other. They keep us focused on building retail intelligence that is useful, trusted, measurable, and grounded in the reality of physical stores.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <div key={i} className="p-10 bg-white/[0.02] border border-white/5 rounded-[40px] hover:bg-white/[0.04] transition-all duration-500 group">
                <div className="w-14 h-14 bg-brand-cyan/10 rounded-2xl flex items-center justify-center text-brand-cyan mb-10 group-hover:scale-110 transition-transform">
                  {v.icon}
                </div>
                <h3 className="text-2xl font-display font-bold mb-6 italic">{v.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Leadership Section */}
      <section className="py-32 border-t border-white/5 bg-brand-card/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8 border-b border-white/5 pb-10">
            <div>
               <p className="text-brand-cyan text-[10px] font-black uppercase tracking-[0.4em] mb-8">Leadership</p>
               <h2 className="font-display text-5xl md:text-7xl font-bold italic">The people shaping <span className="text-brand-cyan">EVERYANGLE.</span></h2>
            </div>
            <p className="max-w-md text-slate-400 text-sm font-medium leading-relaxed">
              EVERYANGLE is built by a focused team across product, technology, operations, customer success, and go-to-market.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <div key={i} className="group">
                <div className="aspect-[3/4] bg-brand-navy rounded-[40px] mb-10 overflow-hidden relative border border-white/5 grayscale group-hover:grayscale-0 transition-all duration-700">
                   <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-transparent to-transparent z-10" />
                   <img src={member.image} alt={member.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <h3 className="text-3xl font-display font-bold mb-2 group-hover:text-brand-cyan transition-colors">{member.name}</h3>
                <p className="text-[10px] font-black text-white uppercase tracking-[0.3em] mb-6">{member.role}</p>
                <p className="text-slate-400 text-sm leading-relaxed h-[100px] overflow-hidden">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* 5. Refined About Section */}
      <section className="py-32 bg-brand-navy">
        <div className="max-w-7xl mx-auto px-6">
           <div className="grid lg:grid-cols-2 gap-24 items-center">
              <div className="order-2 lg:order-1 relative">
                 <div className="aspect-square bg-slate-900 rounded-[60px] border border-white/5 flex items-center justify-center overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1600673882311-66715f5f908b?q=80&w=2070&auto=format&fit=crop" alt="Retail Sensing" className="w-full h-full object-cover opacity-30 grayscale group-hover:grayscale-0 transition-all duration-1000" />
                    <div className="absolute inset-x-0 bottom-0 p-10 bg-gradient-to-t from-brand-navy to-transparent">
                       <p className="text-[10px] font-black text-brand-cyan uppercase tracking-widest mb-1">Infrastructure Layer</p>
                       <p className="text-xs text-white/60 font-medium">Existing CCTV Activation</p>
                    </div>
                 </div>
              </div>
              <div className="order-1 lg:order-2">
                 <p className="text-brand-cyan text-[10px] font-black uppercase tracking-[0.4em] mb-8">About EVERYANGLE</p>
                 <h2 className="font-display text-4xl md:text-6xl font-bold mb-10 italic">A signal layer for <span className="text-brand-cyan">every store you run.</span></h2>
                 <div className="space-y-6 text-slate-400 leading-relaxed font-medium">
                    <p>EVERYANGLE is a Vision AI company. We turn cameras retailers already own into a continuous, decision-grade signal layer for store performance.</p>
                    <p>Customer journeys, footfall, queues, conversion, dwell, demographic split, labor utilisation — measured live, on every site, no new sensors.</p>
                    <p>The physical store deserves the same observability digital commerce has had for fifteen years. We're closing the gap.</p>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* 6. Founder Message Section */}
      <section className="py-40 border-y border-white/5 relative overflow-hidden">
         <div className="absolute inset-0 bg-brand-cyan/5 opacity-30 pointer-events-none" />
         <div className="max-w-3xl mx-auto px-6 text-center">
            <MessageSquare size={40} className="text-brand-cyan/40 mx-auto mb-12" />
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-12 italic">A note from <span className="text-brand-cyan">our founder.</span></h2>
            <div className="space-y-8 text-xl text-slate-300 italic font-medium leading-relaxed mb-16">
               <p>"An e-commerce manager can see, in real time, exactly where a customer hesitated and why they didn't check out."</p>
               <p>"A store manager standing on the same floor that produced 90% of the revenue has, until very recently, had a turnstile count and a Friday spreadsheet."</p>
               <p>"That gap is what EVERYANGLE was built to close."</p>
            </div>
            
            <div className="pt-10 border-t border-white/10 inline-block text-center">
               <div className="font-display text-2xl font-bold text-white mb-1 italic">David Owens</div>
               <div className="text-[10px] font-black text-brand-cyan uppercase tracking-[0.4em]">Founder & CEO, EVERYANGLE</div>
            </div>
         </div>
      </section>

      {/* 7. Closing CTA */}
      <section className="py-40 bg-brand-navy relative overflow-hidden text-center">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <h2 className="font-display text-5xl md:text-8xl font-bold mb-12 tracking-tight italic leading-[0.9]">
            Your stores have <br />
            <span className="text-brand-cyan">always been talking.</span>
          </h2>
          <p className="text-xl text-slate-400 mb-16 max-w-2xl mx-auto leading-relaxed">
            Thirty minutes to see the platform. Fourteen days to set up a pilot. No new hardware. No three-quarter procurement cycle. Just the signal.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link to="/contact" className="w-full sm:w-auto bg-brand-cyan text-brand-navy font-display text-lg font-bold px-12 py-6 rounded-2xl hover:bg-white transition-all duration-500 flex items-center justify-center gap-3">
              Start a Conversation <ArrowRight size={20} />
            </Link>
            <Link to="/product" className="w-full sm:w-auto bg-white/5 border border-white/10 text-white font-display text-lg font-bold px-12 py-6 rounded-2xl hover:bg-white/10 transition-all duration-500">
              Explore Platform
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

