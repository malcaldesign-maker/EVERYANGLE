import { motion } from 'motion/react';
import { 
  Signal, 
  Users, 
  TrendingUp, 
  BarChart3, 
  Target, 
  Zap, 
  CheckCircle2,
  Menu
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { ReactNode, useState, useEffect } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const { pathname } = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const navItems = [
    { name: 'Product', path: '/product' },
    { name: 'Intelligence', path: '/intelligence' },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'Blog', path: '/blog' },
    { name: 'Company', path: '/company' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-brand-primary selection:text-white overflow-x-hidden">
      {/* Header */}
      <header 
        className={`fixed top-0 z-[100] w-full transition-all duration-300 ${
          isScrolled ? 'bg-brand-navy/90 backdrop-blur-xl border-b border-white/5 py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <motion.div 
              animate={{ rotate: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <Signal className="text-brand-primary fill-brand-primary group-hover:scale-110 transition-transform" size={24} />
            </motion.div>
            <span className="font-display text-xl font-bold tracking-tight text-white">EVERYANGLE</span>
          </Link>
          
          <nav className="hidden lg:flex items-center gap-10">
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
            <Link to="/contact" className="bg-brand-primary text-white font-display text-xs font-bold uppercase tracking-widest px-6 py-3 rounded-lg hover:bg-white hover:text-brand-navy shadow-lg shadow-brand-primary/20 transition-all duration-300">
              Start a Pilot
            </Link>
            <button className="lg:hidden text-white">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-brand-navy border-t border-white/5 pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-16 mb-24">
            {/* Brand Column */}
            <div className="lg:col-span-2">
              <Link to="/" className="flex items-center gap-2 mb-10 group">
                <Signal className="text-brand-primary fill-brand-primary" size={24} />
                <span className="font-display text-2xl font-bold tracking-tight text-white">EVERYANGLE</span>
              </Link>
              <p className="text-lg text-slate-400 font-medium mb-12 max-w-sm">
                Turning existing camera infrastructure into a real-time intelligence layer for store performance.
              </p>
              
              <div className="space-y-4">
                <h4 className="text-[10px] font-black text-brand-primary uppercase tracking-[0.4em] mb-6">Stay Informed</h4>
                <div className="flex bg-white/5 border border-white/10 rounded-2xl p-1.5 focus-within:border-brand-primary transition-all max-w-md">
                   <input type="email" placeholder="Work Email" className="bg-transparent border-none outline-none px-4 flex-grow text-sm text-white" />
                   <button className="bg-brand-primary text-white text-xs font-bold uppercase tracking-widest px-6 py-3 rounded-xl hover:bg-white hover:text-brand-navy transition-colors">
                      Subscribe
                   </button>
                </div>
              </div>
            </div>

            {/* Links Columns */}
            <div>
              <h4 className="text-[10px] font-black text-white uppercase tracking-[0.5em] mb-10">Platform</h4>
              <ul className="space-y-5 text-xs font-bold text-slate-500 uppercase tracking-[0.2em]">
                <li><Link to="/product" className="hover:text-brand-primary transition-colors">Presence</Link></li>
                <li><Link to="/intelligence" className="hover:text-brand-primary transition-colors">Queue Risk</Link></li>
                <li><Link to="/intelligence" className="hover:text-brand-primary transition-colors">Labor Sync</Link></li>
                <li><Link to="/intelligence" className="hover:text-brand-primary transition-colors">Vision AI</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-[10px] font-black text-white uppercase tracking-[0.5em] mb-10">Resources</h4>
              <ul className="space-y-5 text-xs font-bold text-slate-500 uppercase tracking-[0.2em]">
                <li><Link to="/case-studies" className="hover:text-brand-primary transition-colors">Case Studies</Link></li>
                <li><Link to="/blog" className="hover:text-brand-primary transition-colors">Field Notes</Link></li>
                <li><Link to="/intelligence" className="hover:text-brand-primary transition-colors">Whitepapers</Link></li>
                <li><Link to="/intelligence" className="hover:text-brand-primary transition-colors">Webinars</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-[10px] font-black text-white uppercase tracking-[0.5em] mb-10">Company</h4>
              <ul className="space-y-5 text-xs font-bold text-slate-500 uppercase tracking-[0.2em]">
                <li><Link to="/company" className="hover:text-brand-primary transition-colors">About Us</Link></li>
                <li><Link to="/company" className="hover:text-brand-primary transition-colors">Leadership</Link></li>
                <li><Link to="/contact" className="hover:text-brand-primary transition-colors">Contact</Link></li>
                <li><a href="#" className="hover:text-brand-primary transition-colors">Careers</a></li>
              </ul>
            </div>
          </div>

          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
               <span className="text-[10px] font-bold text-slate-600 uppercase tracking-widest leading-none">© 2024 EVERYANGLE</span>
               <a href="#" className="text-[10px] font-bold text-slate-600 uppercase tracking-widest hover:text-white transition-colors">Privacy Policy</a>
               <a href="#" className="text-[10px] font-bold text-slate-600 uppercase tracking-widest hover:text-white transition-colors">Security</a>
               <a href="#" className="text-[10px] font-bold text-slate-600 uppercase tracking-widest hover:text-white transition-colors">GDPR</a>
            </div>
            
            <div className="flex items-center gap-6">
               <p className="text-[10px] font-bold text-slate-600 uppercase tracking-widest mr-4">Dublin / London / New York</p>
               <div className="flex gap-4">
                  <a href="#" className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-brand-cyan hover:border-brand-cyan transition-all">
                     <span className="font-bold text-lg leading-none italic">In</span>
                  </a>
               </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
