import React from 'react';
import { siteConfig } from '../../content/site';
import { Phone, Mail, Menu, X, Facebook, Instagram, Waves, MapPin, Clock } from 'lucide-react';
import { Button } from '../ui/Button';

export const PromoBar = () => {
  const [isVisible, setIsVisible] = React.useState(true);
  if (!isVisible) return null;

  return (
    <div className="bg-[#f97316] text-white py-2.5 px-4 text-center font-bold text-[10px] sm:text-xs uppercase tracking-[0.15em] relative z-[70] shadow-md">
      <div className="max-w-7xl mx-auto flex justify-center items-center gap-4">
        <span>{siteConfig.promoText}</span>
        <button onClick={() => setIsVisible(false)} className="hover:scale-110 transition-transform p-1">
          <X size={14} strokeWidth={3} />
        </button>
      </div>
    </div>
  );
};

export const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isVisible, setIsVisible] = React.useState(true);
  const [lastScrollY, setLastScrollY] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 50);

      // Hide header on scroll down, show on scroll up
      if (currentScrollY > lastScrollY && currentScrollY > 150) {
        setIsVisible(false);
        setIsOpen(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Locations', href: '#locations' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ease-in-out ${
      isVisible ? 'translate-y-0' : '-translate-y-full'
    } ${
      isScrolled ? 'bg-white/95 backdrop-blur-md py-2 shadow-xl border-b border-slate-100' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <a href="#" className="flex items-center gap-3 group">
              <div className={`transition-all duration-300 bg-[#1e40af] rounded-2xl flex items-center justify-center text-white shadow-blue-500/10 shadow-lg group-hover:scale-105 ${isScrolled ? 'w-10 h-10' : 'w-12 h-12'}`}>
                <Waves size={isScrolled ? 24 : 28} strokeWidth={2.5} />
              </div>
              <div className="flex flex-col leading-none">
                <span className={`font-black tracking-tighter text-[#1e40af] uppercase transition-all duration-300 ${isScrolled ? 'text-lg' : 'text-xl'}`}>Best Cleaners</span>
                {!isScrolled && (
                  <span className="text-[10px] font-bold text-[#f97316] tracking-[0.2em] uppercase mt-1">
                    & Laundry
                  </span>
                )}
              </div>
            </a>
          </div>
          
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="px-4 py-2 text-sm font-bold text-slate-500 hover:text-[#1e40af] transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="ml-4 pl-4 border-l border-slate-100 flex items-center gap-4">
               <a href={`tel:${siteConfig.phoneDigits}`} className="text-[#1e40af] font-bold text-sm flex items-center gap-2">
                 <Phone size={16} /> {siteConfig.phone}
               </a>
               <Button href={siteConfig.scheduleUrl} size="sm" variant="orange">Schedule Pickup</Button>
            </div>
          </div>

          <div className="lg:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="w-10 h-10 flex items-center justify-center rounded-xl bg-slate-100 text-[#1e40af]"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      <div className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out bg-white ${isOpen ? 'max-h-screen opacity-100 py-10 border-b border-slate-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-6 space-y-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-2xl font-black text-slate-900 hover:text-[#1e40af]"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-6 grid gap-4">
            <Button href={siteConfig.scheduleUrl} size="lg" variant="orange" className="w-full">
              Schedule Online
            </Button>
            <Button href={`tel:${siteConfig.phoneDigits}`} variant="outline" size="lg" className="w-full gap-3">
              <Phone size={20} /> Call Now
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export const Footer = () => (
  <footer className="bg-[#1e293b] text-slate-400 pt-20 pb-24 md:pb-10">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
        <div className="space-y-6">
          <div className="flex items-center gap-3">
             <div className="w-10 h-10 bg-[#1e40af] rounded-xl flex items-center justify-center text-white"><Waves size={24} /></div>
             <span className="text-white font-black uppercase tracking-tighter text-xl leading-none">Best Cleaners</span>
          </div>
          <p className="text-sm leading-relaxed max-w-xs text-slate-400">
            Professional laundry and dry cleaning services in Spring Hill, FL. Quality care for your garments since 1989.
          </p>
          <div className="flex space-x-3">
            <a href="#" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white hover:bg-[#1e40af] transition-all"><Facebook size={18} /></a>
            <a href="#" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white hover:bg-[#1e40af] transition-all"><Instagram size={18} /></a>
          </div>
        </div>
        
        <div>
          <h3 className="text-white font-bold text-xs uppercase tracking-widest mb-8">Business Hours</h3>
          <div className="flex items-center gap-3 text-sm font-medium">
             <Clock size={16} className="text-[#f97316]" />
             <span>{siteConfig.hours}</span>
          </div>
        </div>

        <div>
          <h3 className="text-white font-bold text-xs uppercase tracking-widest mb-8">Our Services</h3>
          <ul className="space-y-4 text-sm font-medium">
            <li><a href="#services" className="hover:text-white transition-colors">Dry Cleaning</a></li>
            <li><a href="#services" className="hover:text-white transition-colors">Wash & Fold</a></li>
            <li><a href="#services" className="hover:text-white transition-colors">Pickup & Delivery</a></li>
            <li><a href="#services" className="hover:text-white transition-colors">Laundromats</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-bold text-xs uppercase tracking-widest mb-8">Get In Touch</h3>
          <div className="space-y-4">
            <a href={`tel:${siteConfig.phoneDigits}`} className="flex items-center gap-3 text-white font-bold hover:text-[#1e40af] transition-colors">
              <Phone size={18} className="text-[#f97316]" /> {siteConfig.phone}
            </a>
            <div className="flex items-start gap-3">
              <MapPin size={18} className="text-[#f97316] shrink-0 mt-1" />
              <span className="text-sm font-medium">{siteConfig.location}</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-slate-500">
        <p>&copy; {new Date().getFullYear()} Best Cleaners & Laundry. All rights reserved.</p>
        <div className="flex gap-6">
           <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
           <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </div>
    
    {/* Mobile Sticky Bar */}
    <div className="fixed bottom-0 left-0 w-full bg-white lg:hidden z-[100] grid grid-cols-2 h-16 shadow-[0_-10px_30px_rgba(0,0,0,0.1)]">
       <a href={`tel:${siteConfig.phoneDigits}`} className="flex items-center justify-center gap-2 text-[#1e40af] font-black uppercase text-xs border-r border-slate-100">
          <Phone size={18} /> Call Us
       </a>
       <a href={siteConfig.scheduleUrl} className="flex items-center justify-center gap-2 text-[#f97316] font-black uppercase text-xs">
          <Waves size={18} /> Schedule
       </a>
    </div>
  </footer>
);