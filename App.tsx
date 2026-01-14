
import React, { useState, useEffect } from 'react';
import { siteConfig } from './content/site';
import { 
  Shirt, 
  Wind, 
  Truck, 
  ArrowRight, 
  Phone, 
  Clock, 
  Star, 
  Menu, 
  X,
  ShieldCheck,
  Calendar,
  Waves,
  MapPin
} from 'lucide-react';

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white selection:bg-emerald-100 selection:text-emerald-900">
      {/* Premium Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-700 ${
        isScrolled ? 'bg-white/90 backdrop-blur-xl py-4 shadow-sm' : 'bg-transparent py-8'
      }`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-11 h-11 bg-[#0f172a] rounded-full flex items-center justify-center text-white transition-transform duration-500 group-hover:rotate-[360deg]">
              <Waves size={24} strokeWidth={2.5} />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-2xl font-black text-[#0f172a] tracking-tighter uppercase">Best Cleaners</span>
              <span className="text-[10px] font-bold text-[#059669] uppercase tracking-[0.3em]">& Laundry</span>
            </div>
          </a>

          <div className="hidden md:flex items-center gap-12">
            <div className="flex gap-10 text-[11px] font-bold uppercase tracking-[0.25em] text-slate-500">
              <a href="#services" className="hover:text-[#0f172a] transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1px] after:bg-[#0f172a] hover:after:w-full after:transition-all">Services</a>
              <a href="#delivery" className="hover:text-[#0f172a] transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1px] after:bg-[#0f172a] hover:after:w-full after:transition-all">Delivery</a>
              <a href="#contact" className="hover:text-[#0f172a] transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1px] after:bg-[#0f172a] hover:after:w-full after:transition-all">Contact</a>
            </div>
            <a href={`tel:${siteConfig.phoneDigits}`} className="bg-[#0f172a] text-white px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-[#1e293b] hover:shadow-xl hover:shadow-slate-200 transition-all flex items-center gap-3 active:scale-95">
              <Phone size={14} /> {siteConfig.phone}
            </a>
          </div>

          <button className="md:hidden text-[#0f172a] p-2" onClick={() => setMobileMenuOpen(true)}>
            <Menu size={32} strokeWidth={1.5} />
          </button>
        </div>
      </nav>

      {/* Hero Section - The Storefront Focus */}
      <section className="relative min-h-[90vh] flex items-center pt-24 overflow-hidden bg-[#fdfdfd]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-6 space-y-12 relative z-10">
            <div className="inline-flex items-center gap-3 text-[#059669] font-bold text-[10px] uppercase tracking-[0.4em] bg-emerald-50/50 border border-emerald-100 px-5 py-2.5 rounded-full">
              <span className="w-2 h-2 rounded-full bg-[#059669] animate-pulse"></span>
              Spring Hill's Finest Since 1989
            </div>
            <h1 className="text-7xl md:text-9xl font-medium text-[#0f172a] leading-[0.85] tracking-tight">
              Garment <br />
              <span className="serif italic font-normal text-slate-400">excellence.</span>
            </h1>
            <p className="text-xl text-slate-500 font-medium max-w-lg leading-relaxed">
              Experience a higher standard of cleaning. We combine decades of family expertise with a modern boutique approach to garment care.
            </p>
            <div className="flex flex-col sm:flex-row gap-8 pt-6">
              <a href="#contact" className="bg-[#0f172a] text-white px-12 py-6 rounded-full font-bold text-xs uppercase tracking-[0.2em] hover:bg-[#1e293b] hover:-translate-y-1 transition-all shadow-2xl shadow-slate-900/20 flex items-center justify-center gap-4 group">
                Request Pickup <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <div className="flex items-center gap-5 text-slate-400 font-bold text-[10px] uppercase tracking-[0.2em]">
                <ShieldCheck size={24} className="text-[#059669]" />
                Eco-Friendly On-Site Cleaning
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-6 relative group">
            <div className="absolute -inset-1 bg-gradient-to-tr from-[#059669]/20 to-transparent blur-3xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
            <div className="relative aspect-[4/5] rounded-[80px] overflow-hidden shadow-[0_80px_100px_-30px_rgba(0,0,0,0.12)] border-[12px] border-white">
              <img 
                src="./input_file_1.png" 
                alt="Best Cleaners Storefront" 
                className="w-full h-full object-cover transform transition-transform duration-[3s] group-hover:scale-110"
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1545173168-9f1947eebb7f?auto=format&fit=crop&q=80&w=1200";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/60 via-transparent to-transparent opacity-60"></div>
              <div className="absolute bottom-12 left-12 text-white">
                <p className="text-[10px] uppercase font-black tracking-[0.5em] mb-3 opacity-90">Flagship Location</p>
                <h3 className="text-4xl font-medium tracking-tight serif italic">Spring Hill, FL</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Clean & Geometric */}
      <section id="services" className="py-40 bg-[#0f172a] relative overflow-hidden">
        {/* Decorative background element */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#1e293b]/50 -skew-x-12 translate-x-1/4"></div>
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-end mb-24">
            <div className="lg:col-span-7 space-y-6">
              <p className="text-emerald-400 font-black text-[10px] uppercase tracking-[0.5em]">The Best Way to Clean</p>
              <h2 className="text-5xl md:text-7xl font-medium text-white tracking-tight leading-none">
                Curated care for <br /><span className="serif italic text-slate-400 font-normal">every lifestyle.</span>
              </h2>
            </div>
            <div className="lg:col-span-5 pb-2">
              <p className="text-slate-400 text-lg leading-relaxed max-w-sm">
                We've spent 30 years perfecting our process. From luxury silk to family laundry, your items are in expert hands.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {siteConfig.services.map((service, idx) => (
              <div key={idx} className="bg-white/5 backdrop-blur-sm p-12 rounded-[50px] border border-white/10 hover:bg-white hover:border-white transition-all duration-700 group">
                <div className="w-16 h-16 bg-white/10 rounded-3xl flex items-center justify-center text-emerald-400 mb-10 group-hover:bg-[#0f172a] group-hover:text-white transition-all duration-500">
                  {service.icon === 'Shirt' && <Shirt size={32} strokeWidth={1.5} />}
                  {service.icon === 'Wind' && <Wind size={32} strokeWidth={1.5} />}
                  {service.icon === 'Truck' && <Truck size={32} strokeWidth={1.5} />}
                </div>
                <h4 className="text-2xl font-bold text-white group-hover:text-[#0f172a] mb-5 tracking-tight transition-colors">{service.title}</h4>
                <p className="text-slate-400 group-hover:text-slate-600 leading-relaxed font-medium mb-10 transition-colors">{service.description}</p>
                <div className="h-[1px] w-full bg-white/10 group-hover:bg-slate-100 transition-colors"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pickup & Delivery - Featuring The Van */}
      <section id="delivery" className="py-40 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="relative group">
              <div className="relative rounded-[80px] overflow-hidden shadow-[0_60px_100px_-20px_rgba(0,0,0,0.1)] transition-transform duration-700 group-hover:-translate-y-4">
                <img 
                  src="./input_file_0.png" 
                  alt="Delivery Valet Service" 
                  className="w-full h-auto"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&q=80&w=1200";
                  }}
                />
              </div>
              {/* Review Badge */}
              <div className="absolute -bottom-10 -right-6 md:right-0 bg-white p-10 rounded-[45px] shadow-2xl border border-slate-50 max-w-xs hidden md:block">
                <div className="flex gap-1 mb-5 text-emerald-500">
                  {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="text-[#0f172a] font-medium serif italic text-lg leading-relaxed mb-4">
                  "The most reliable delivery in Spring Hill. They treat my wardrobe like their own."
                </p>
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">— Sarah M., Spring Hill</p>
              </div>
            </div>

            <div className="space-y-12">
              <div className="space-y-6">
                <p className="text-[#059669] font-black text-[10px] uppercase tracking-[0.5em]">Complimentary Service</p>
                <h2 className="text-6xl md:text-8xl font-medium text-[#0f172a] leading-[0.9] tracking-tighter">
                  Valet pickup <br /><span className="serif italic font-normal text-slate-400">at your door.</span>
                </h2>
              </div>
              <p className="text-xl text-slate-500 leading-relaxed font-medium">
                We've revolutionized the dry cleaning run. No more detours on your commute—our professional valet service picks up and returns your items fresh and pristine.
              </p>
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center text-[#059669]">
                    <ShieldCheck size={24} />
                  </div>
                  <span className="font-bold text-[#0f172a] tracking-tight">Fully Insured & Contactless</span>
                </div>
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center text-[#059669]">
                    <Calendar size={24} />
                  </div>
                  <span className="font-bold text-[#0f172a] tracking-tight">Flexible Scheduled Routes</span>
                </div>
              </div>
              <a href={`tel:${siteConfig.phoneDigits}`} className="inline-flex items-center gap-8 group pt-4">
                <div className="w-20 h-20 bg-[#0f172a] rounded-full flex items-center justify-center text-white group-hover:bg-[#059669] transition-all duration-500 group-hover:scale-110">
                  <Phone size={32} />
                </div>
                <div>
                  <p className="text-[11px] font-black text-slate-400 uppercase tracking-[0.4em] mb-1">Direct Line</p>
                  <p className="text-4xl font-black text-[#0f172a] tracking-tighter transition-colors group-hover:text-[#059669]">{siteConfig.phone}</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Facility Section - Featuring Window Decals */}
      <section className="py-40 bg-[#f8fafc] overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-12">
            <h2 className="text-6xl md:text-8xl font-medium text-[#0f172a] leading-[0.9] tracking-tighter">
              A modern <br /><span className="serif italic font-normal text-slate-400">clean house.</span>
            </h2>
            <p className="text-xl text-slate-500 leading-relaxed font-medium max-w-lg">
              Our Spring Hill plant is equipped with high-capacity, gentle-cycle technology. Whether you drop off or we pick up, your laundry gets the professional treatment.
            </p>
            <div className="grid grid-cols-2 gap-12 pt-4">
              <div className="space-y-2">
                <h4 className="text-5xl font-black text-[#0f172a] tracking-tighter">45+</h4>
                <p className="text-[10px] font-black text-emerald-600 uppercase tracking-[0.4em]">Expert Machines</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-5xl font-black text-[#0f172a] tracking-tighter">24h</h4>
                <p className="text-[10px] font-black text-emerald-600 uppercase tracking-[0.4em]">Turnaround Goal</p>
              </div>
            </div>
          </div>
          
          <div className="relative group">
            <div className="relative rounded-[80px] overflow-hidden border-[20px] border-white shadow-2xl">
              <img 
                src="./input_file_2.png" 
                alt="Facility Detail" 
                className="w-full h-auto transform transition-transform duration-[5s] group-hover:scale-110"
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1521656693064-15921adba3b7?auto=format&fit=crop&q=80&w=1200";
                }}
              />
              <div className="absolute inset-0 bg-[#0f172a]/10 group-hover:bg-transparent transition-colors"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Footer */}
      <footer id="contact" className="bg-[#0f172a] text-white pt-40 pb-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-20 mb-32">
            <div className="lg:col-span-5 space-y-12">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#0f172a]">
                  <Waves size={22} strokeWidth={2.5} />
                </div>
                <span className="text-2xl font-black tracking-tighter uppercase">Best Cleaners</span>
              </div>
              <h4 className="text-4xl serif italic leading-tight text-slate-300">
                Crafting the standard <br />of clean in Spring Hill.
              </h4>
              <div className="flex gap-8">
                <a href="#" className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-[#0f172a] transition-all">
                  <Star size={20} />
                </a>
                <a href={`mailto:${siteConfig.email}`} className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-[#0f172a] transition-all">
                  <ArrowRight size={20} className="-rotate-45" />
                </a>
              </div>
            </div>
            
            <div className="lg:col-span-3 space-y-8">
              <p className="text-[11px] font-black uppercase tracking-[0.5em] text-emerald-400">Business Hours</p>
              <div className="space-y-6">
                <div className="flex items-center gap-4 group">
                  <Clock size={20} className="text-slate-500" />
                  <span className="text-lg font-medium group-hover:text-emerald-400 transition-colors">{siteConfig.hours}</span>
                </div>
                <div className="flex items-center gap-4">
                  <Calendar size={20} className="text-slate-500" />
                  <span className="text-lg font-medium">Open 7 Days a Week</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 space-y-8">
              <p className="text-[11px] font-black uppercase tracking-[0.5em] text-emerald-400">Visit Us</p>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <MapPin size={20} className="text-slate-500 mt-1" />
                  <div>
                    <p className="text-xl font-bold tracking-tight mb-2">{siteConfig.location}</p>
                    <p className="text-slate-400 font-medium">Flagship Plant & Storefront</p>
                  </div>
                </div>
                <a href={`tel:${siteConfig.phoneDigits}`} className="block text-3xl font-black hover:text-emerald-400 transition-colors tracking-tighter">
                  {siteConfig.phone}
                </a>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-10 pt-16 border-t border-white/5 text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500">
            <p>© {new Date().getFullYear()} Best Cleaners & Laundry. Professional Service Excellence.</p>
            <div className="flex gap-12">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Minimalist Mobile Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-white z-[200] p-10 flex flex-col animate-in fade-in duration-500">
          <div className="flex justify-between items-center mb-20">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#0f172a] rounded-full flex items-center justify-center text-white">
                <Waves size={22} />
              </div>
              <span className="text-xl font-black text-[#0f172a] tracking-tighter uppercase">Best Cleaners</span>
            </div>
            <button onClick={() => setMobileMenuOpen(false)} className="text-slate-300 hover:text-[#0f172a] transition-colors p-2">
              <X size={44} strokeWidth={1} />
            </button>
          </div>
          
          <nav className="flex flex-col gap-10 text-6xl font-medium text-[#0f172a] mb-24 tracking-tighter">
            <a href="#services" onClick={() => setMobileMenuOpen(false)} className="serif italic hover:pl-4 transition-all">Services</a>
            <a href="#delivery" onClick={() => setMobileMenuOpen(false)} className="serif italic hover:pl-4 transition-all">Delivery</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="serif italic hover:pl-4 transition-all">Contact</a>
          </nav>
          
          <div className="mt-auto space-y-6">
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.5em]">Direct Contact</p>
            <a href={`tel:${siteConfig.phoneDigits}`} className="w-full bg-[#0f172a] text-white py-8 rounded-[35px] text-center text-2xl font-bold flex items-center justify-center gap-4 active:scale-95 transition-transform shadow-xl shadow-slate-200">
              <Phone size={28} /> {siteConfig.phone}
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
