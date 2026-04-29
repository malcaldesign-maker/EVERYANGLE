import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';
import { useState, FormEvent } from 'react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Intersection with CRM would happen here
  };

  return (
    <div className="pt-20 bg-brand-navy min-h-screen font-sans">
      <section className="py-32 relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-brand-primary/5 blur-[120px] rounded-full opacity-30" />
        
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-24 relative z-10">
          {/* Left Side: Info */}
          <div>
            <h1 className="font-display text-6xl md:text-8xl font-bold mb-10 tracking-tight leading-tight text-white">
              Let's Talk <br />
              <span className="text-brand-primary italic">Intelligence.</span>
            </h1>
            <p className="text-xl text-slate-400 mb-16 leading-relaxed max-w-lg font-medium">
              Whether you're looking for a pilot or a global rollout, our team is ready to map your retail store journey.
            </p>

            <div className="space-y-10">
              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-brand-primary group-hover:bg-brand-primary/20 transition-colors">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Email Us</p>
                  <p className="text-lg font-medium text-white">hello@everyangle.com</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-brand-primary group-hover:bg-brand-primary/20 transition-colors">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Headquarters</p>
                  <p className="text-lg font-medium text-white">Dublin, Ireland <br /> <span className="text-slate-500 text-sm italic">Global Coverage</span></p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="relative">
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white/[0.03] backdrop-blur-3xl border border-white/10 p-10 md:p-16 rounded-[40px] shadow-2xl"
            >
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                       <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Full Name</label>
                       <input required type="text" className="w-full bg-brand-navy border border-white/10 rounded-xl px-6 py-4 text-white focus:border-brand-primary transition-all outline-none" placeholder="John Doe" />
                    </div>
                    <div className="space-y-2">
                       <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Work Email</label>
                       <input required type="email" className="w-full bg-brand-navy border border-white/10 rounded-xl px-6 py-4 text-white focus:border-brand-primary transition-all outline-none" placeholder="john@company.com" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Inquiry Type</label>
                      <select className="w-full bg-brand-navy border border-white/10 rounded-xl px-6 py-4 text-white focus:border-brand-primary transition-all outline-none appearance-none">
                        <option>Book a Platform Demo</option>
                        <option>Request Case Study Pack</option>
                        <option>Start a 4-Week Pilot</option>
                        <option>Technical Partnership</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Store Count</label>
                      <select className="w-full bg-brand-navy border border-white/10 rounded-xl px-6 py-4 text-white focus:border-brand-primary transition-all outline-none appearance-none">
                        <option>1-10 Locations</option>
                        <option>10-50 Locations</option>
                        <option>50-200 Locations</option>
                        <option>200+ Locations</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Message</label>
                    <textarea required rows={4} className="w-full bg-brand-navy border border-white/10 rounded-xl px-6 py-4 text-white focus:border-brand-primary transition-all outline-none resize-none" placeholder="How can we help?"></textarea>
                  </div>

                  <button type="submit" className="w-full bg-brand-primary text-white font-display text-lg font-bold py-5 rounded-2xl hover:bg-white hover:text-brand-navy transition-all duration-500 flex items-center justify-center gap-3 shadow-xl shadow-brand-primary/20">
                    Submit Inquiry <Send size={20} />
                  </button>
                </form>
              ) : (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-20"
                >
                  <div className="w-20 h-20 bg-brand-primary/20 rounded-full flex items-center justify-center text-brand-primary mx-auto mb-8 shadow-[0_0_20px_rgba(99,102,241,0.3)]">
                    <MessageSquare size={40} />
                  </div>
                  <h3 className="font-display text-3xl font-bold mb-4 text-white">Message Received.</h3>
                  <p className="text-slate-400 font-medium">One of our specialists will reach out shortly to discuss your retail intelligence needs.</p>
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
