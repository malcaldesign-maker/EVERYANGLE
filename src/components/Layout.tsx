import { motion, AnimatePresence } from 'motion/react';
import { Signal, Menu, X, Check } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { ReactNode, useState, useEffect, FormEvent } from 'react';
import ScrollProgress from './ScrollProgress';
import CookieBanner from './CookieBanner';
import { submitToHubspot } from '../lib/hubspot';

interface LayoutProps {
  children: ReactNode;
}

const navItems = [
  { name: 'Product', path: '/product' },
  { name: 'Intelligence', path: '/intelligence' },
  { name: 'Case Studies', path: '/case-studies' },
  { name: 'Blog', path: '/blog' },
  { name: 'Company', path: '/company' },
  { name: 'Contact', path: '/contact' },
];

export default function Layout({ children }: LayoutProps) {
  const { pathname } = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [subscribeState, setSubscribeState] = useState<'idle' | 'submitted'>('idle');
  const [subscribeEmail, setSubscribeEmail] = useState('');

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top + close mobile menu on route change
  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMobileOpen(false);
  }, [pathname]);

  // Lock body scroll while mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileOpen]);

  const handleSubscribe = async (e: FormEvent) => {
    e.preventDefault();
    if (!subscribeEmail) return;
    // Best-effort post to HubSpot; show success either way so the UX never stalls.
    await submitToHubspot('newsletter', [
      { name: 'email', value: subscribeEmail },
      { name: 'lead_source', value: 'footer-subscribe' },
    ]).catch(() => {});
    setSubscribeState('submitted');
  };

  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-brand-primary selection:text-white overflow-x-hidden">
      <ScrollProgress />
      <a
        href="#main"
        className="sr-only focus:not-sr-only fixed top-2 left-2 z-[200] bg-brand-primary text-white text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-lg"
      >
        Skip to content
      </a>
      {/* Header */}
      <header
        className={`fixed top-0 z-[100] w-full transition-all duration-300 ${
          isScrolled ? 'bg-brand-navy/90 backdrop-blur-xl border-b border-white/5 py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group" aria-label="EVERYANGLE home">
            <motion.div
              animate={{ rotate: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <Signal className="text-brand-primary fill-brand-primary group-hover:scale-110 transition-transform" size={24} />
            </motion.div>
            <span className="font-display text-xl font-bold tracking-tight text-white">EVERYANGLE</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-10" aria-label="Primary">
            {navItems.map(item => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-xs font-bold uppercase tracking-[0.2em] transition-colors ${
                  pathname === item.path ? 'text-brand-primary' : 'text-slate-400 hover:text-white'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Link to="/contact" className="hidden sm:block border border-white/10 text-white hover:bg-white/5 font-display text-xs font-bold uppercase tracking-widest px-6 py-3 rounded-lg transition-all duration-300">
              Book a Demo
            </Link>
            <Link to="/contact" className="hidden sm:block bg-brand-primary text-white font-display text-xs font-bold uppercase tracking-widest px-6 py-3 rounded-lg hover:bg-white hover:text-brand-navy shadow-lg shadow-brand-primary/20 transition-all duration-300">
              Start a Pilot
            </Link>
            <button
              type="button"
              className="lg:hidden text-white p-2 -mr-2"
              onClick={() => setIsMobileOpen(true)}
              aria-label="Open menu"
              aria-expanded={isMobileOpen}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-[110] bg-brand-navy/80 backdrop-blur-md lg:hidden"
              onClick={() => setIsMobileOpen(false)}
              aria-hidden="true"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 280 }}
              className="fixed top-0 right-0 bottom-0 z-[120] w-[85%] max-w-sm bg-brand-card border-l border-white/10 shadow-2xl flex flex-col lg:hidden"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
            >
              <div className="flex items-center justify-between px-6 py-6 border-b border-white/5">
                <div className="flex items-center gap-2">
                  <Signal className="text-brand-primary fill-brand-primary" size={20} />
                  <span className="font-display text-lg font-bold tracking-tight text-white">EVERYANGLE</span>
                </div>
                <button
                  type="button"
                  className="text-slate-400 hover:text-white transition-colors p-2 -mr-2"
                  onClick={() => setIsMobileOpen(false)}
                  aria-label="Close menu"
                >
                  <X size={24} />
                </button>
              </div>

              <nav className="flex-grow px-6 py-10 space-y-1" aria-label="Mobile">
                {navItems.map((item, i) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * 0.04 }}
                  >
                    <Link
                      to={item.path}
                      className={`block py-4 text-lg font-display font-bold tracking-tight border-b border-white/5 ${
                        pathname === item.path ? 'text-brand-primary' : 'text-white hover:text-brand-primary'
                      } transition-colors`}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <div className="p-6 border-t border-white/5 space-y-3">
                <Link
                  to="/contact"
                  className="block text-center bg-brand-primary text-white font-display text-sm font-bold uppercase tracking-widest px-6 py-4 rounded-xl hover:bg-white hover:text-brand-navy transition-colors"
                >
                  Start a Pilot
                </Link>
                <Link
                  to="/contact"
                  className="block text-center border border-white/10 text-white hover:bg-white/5 font-display text-sm font-bold uppercase tracking-widest px-6 py-4 rounded-xl transition-colors"
                >
                  Book a Demo
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <main id="main" className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-brand-navy border-t border-white/5 pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-16 mb-24">
            {/* Brand Column */}
            <div className="lg:col-span-2">
              <Link to="/" className="flex items-center gap-2 mb-10 group" aria-label="EVERYANGLE home">
                <Signal className="text-brand-primary fill-brand-primary" size={24} />
                <span className="font-display text-2xl font-bold tracking-tight text-white">EVERYANGLE</span>
              </Link>
              <p className="text-lg text-slate-400 font-medium mb-12 max-w-sm">
                Turning existing camera infrastructure into a real-time intelligence layer for store performance.
              </p>

              <div className="space-y-4">
                <h4 className="text-[10px] font-black text-brand-primary uppercase tracking-[0.4em] mb-6">Stay Informed</h4>
                {subscribeState === 'idle' ? (
                  <form onSubmit={handleSubscribe} className="flex bg-white/5 border border-white/10 rounded-2xl p-1.5 focus-within:border-brand-primary transition-all max-w-md">
                    <label htmlFor="subscribe-email" className="sr-only">Work email</label>
                    <input
                      id="subscribe-email"
                      type="email"
                      required
                      value={subscribeEmail}
                      onChange={(e) => setSubscribeEmail(e.target.value)}
                      placeholder="Work Email"
                      className="bg-transparent border-none outline-none px-4 flex-grow text-sm text-white placeholder:text-slate-500"
                    />
                    <button
                      type="submit"
                      className="bg-brand-primary text-white text-xs font-bold uppercase tracking-widest px-6 py-3 rounded-xl hover:bg-white hover:text-brand-navy transition-colors"
                    >
                      Subscribe
                    </button>
                  </form>
                ) : (
                  <div className="flex items-center gap-3 bg-brand-accent/10 border border-brand-accent/30 rounded-2xl px-5 py-4 max-w-md">
                    <Check size={18} className="text-brand-accent flex-shrink-0" />
                    <p className="text-sm text-white font-medium">You're on the list. We'll be in touch.</p>
                  </div>
                )}
              </div>
            </div>

            {/* Links Columns */}
            <div>
              <h4 className="text-[10px] font-black text-white uppercase tracking-[0.5em] mb-10">Platform</h4>
              <ul className="space-y-5 text-xs font-bold text-slate-500 uppercase tracking-[0.2em]">
                <li><Link to="/product" className="hover:text-brand-primary transition-colors">Product Tour</Link></li>
                <li><Link to="/intelligence" className="hover:text-brand-primary transition-colors">Intelligence Layer</Link></li>
                <li><Link to="/product" className="hover:text-brand-primary transition-colors">Integrations</Link></li>
                <li><Link to="/contact" className="hover:text-brand-primary transition-colors">Pricing & Pilots</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-[10px] font-black text-white uppercase tracking-[0.5em] mb-10">Resources</h4>
              <ul className="space-y-5 text-xs font-bold text-slate-500 uppercase tracking-[0.2em]">
                <li><Link to="/case-studies" className="hover:text-brand-primary transition-colors">Case Studies</Link></li>
                <li><Link to="/blog" className="hover:text-brand-primary transition-colors">Field Notes</Link></li>
                <li><Link to="/contact" className="hover:text-brand-primary transition-colors">Whitepapers</Link></li>
                <li><Link to="/contact" className="hover:text-brand-primary transition-colors">Webinars</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-[10px] font-black text-white uppercase tracking-[0.5em] mb-10">Company</h4>
              <ul className="space-y-5 text-xs font-bold text-slate-500 uppercase tracking-[0.2em]">
                <li><Link to="/company" className="hover:text-brand-primary transition-colors">About Us</Link></li>
                <li><Link to="/company" className="hover:text-brand-primary transition-colors">Leadership</Link></li>
                <li><Link to="/contact" className="hover:text-brand-primary transition-colors">Contact</Link></li>
                <li><Link to="/contact" className="hover:text-brand-primary transition-colors">Careers</Link></li>
              </ul>
            </div>
          </div>

          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
               <span className="text-[10px] font-bold text-slate-600 uppercase tracking-widest leading-none">© {currentYear} EVERYANGLE</span>
               <Link to="/contact" className="text-[10px] font-bold text-slate-600 uppercase tracking-widest hover:text-white transition-colors">Privacy Policy</Link>
               <Link to="/contact" className="text-[10px] font-bold text-slate-600 uppercase tracking-widest hover:text-white transition-colors">Security</Link>
               <Link to="/contact" className="text-[10px] font-bold text-slate-600 uppercase tracking-widest hover:text-white transition-colors">GDPR</Link>
            </div>

            <div className="flex items-center gap-6">
               <p className="text-[10px] font-bold text-slate-600 uppercase tracking-widest mr-4">Dublin / London / New York</p>
               <div className="flex gap-4">
                  <a
                    href="https://www.linkedin.com/company/everyangle"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="EVERYANGLE on LinkedIn"
                    className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-brand-accent hover:border-brand-accent transition-all"
                  >
                     <span className="font-bold text-lg leading-none italic">In</span>
                  </a>
               </div>
            </div>
          </div>
        </div>
      </footer>

      <CookieBanner />
    </div>
  );
}
