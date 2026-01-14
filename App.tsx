
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
  MapPin,
  Scissors,
  CheckCircle2,
  Heart,
  ExternalLink,
  ChevronDown,
  Info
} from 'lucide-react';

const IconMap: Record<string, React.ReactNode> = {
  Shirt: <Shirt size={32} strokeWidth={1.5} />,
  Wind: <Wind size={32} strokeWidth={1.5} />,
  Truck: <Truck size={32} strokeWidth={1.5} />,
  Heart: <Heart size={32} strokeWidth={1.5} />,
  Waves: <Waves size={32} strokeWidth={1.5} />,
  Scissors: <Scissors size={32} strokeWidth={1.5} />
};

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.scroll-reveal').forEach(el => observer.observe(el));

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <div className="flex flex-col min-h-screen bg-white selection:bg-emerald-100 selection:text-emerald-900 overflow-x-hidden">
      {/* Premium Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-1000 ${
        isScrolled ? 'bg-white/95 backdrop-blur-xl py-4 shadow-sm' : 'bg-transparent py-8'
      }`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-11 h-11 bg-[#0f172a] rounded-full flex items-center justify-center text-white transition-transform duration-700 group-hover:rotate-[360deg]">
              <Waves size={24} strokeWidth={2.5} />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-2xl font-black text-[#0f172a] tracking-tighter uppercase">Best Cleaners</span>
              <span className="text-[10px] font-bold text-[#059669] uppercase tracking-[0.3em]">& Laundry</span>
            </div>
          </a>

          <div className="hidden lg:flex items-center gap-12">
            <div className="flex gap-10 text-[11px] font-bold uppercase tracking-[0.25em] text-slate-500">
              <a href="#services" className="hover:text-[#0f172a] transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1px] after:bg-[#0f172a] hover:after:w-full after:transition-all">Services</a>
              <a href="#delivery" className="hover:text-[#0f172a] transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1px] after:bg-[#0f172a] hover:after:w-full after:transition-all">Delivery</a>
              <a href="#why-us" className="hover:text-[#0f172a] transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1px] after:bg-[#0f172a] hover:after:w-full after:transition-all">Why Us</a>
              <a href="#locations" className="hover:text-[#0f172a] transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1px] after:bg-[#0f172a] hover:after:w-full after:transition-all">Locations</a>
              <a href="#contact" className="hover:text-[#0f172a] transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1px] after:bg-[#0f172a] hover:after:w-full after:transition-all">Contact</a>
            </div>
            <a href={`tel:${siteConfig.phoneDigits}`} className="bg-[#0f172a] text-white px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-[#1e293b] hover:shadow-xl hover:shadow-slate-200 transition-all flex items-center gap-3 active:scale-95">
              <Phone size={14} /> {siteConfig.phone}
            </a>
          </div>

          <button className="lg:hidden text-[#0f172a] p-2" onClick={() => setMobileMenuOpen(true)}>
            <Menu size={32} strokeWidth={1.5} />
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[100vh] flex items-center pt-24 overflow-hidden bg-[#ffffff]">
        {/* Cinematic Background Elements */}
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#059669]/5 blur-[120px] rounded-full bg-drift-slow opacity-60"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#0f172a]/5 blur-[120px] rounded-full bg-drift-slow opacity-60" style={{ animationDelay: '-10s' }}></div>
        <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] bg-emerald-50 blur-[100px] rounded-full opacity-30"></div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative">
          <div className="lg:col-span-6 space-y-12 relative z-10">
            <div className="animate-vision-title">
              <div className="inline-flex items-center gap-3 text-[#059669] font-bold text-[10px] uppercase tracking-[0.5em] bg-[#059669]/5 border border-[#059669]/10 px-6 py-3 rounded-full">
                <span className="w-2 h-2 rounded-full bg-[#059669] animate-pulse"></span>
                Est. 1989 • Spring Hill, FL
              </div>
            </div>
            
            <div className="space-y-4">
              <h1 className="text-8xl md:text-[12rem] font-medium text-[#0f172a] leading-[0.8] tracking-tighter animate-vision-title">
                Pristine
              </h1>
              <div className="animate-vision-subtitle flex items-center gap-8">
                <span className="serif italic font-normal text-slate-300 text-7xl md:text-[10rem] lowercase">wardrobes.</span>
                <div className="h-px bg-slate-100 flex-grow mt-10 opacity-50"></div>
              </div>
            </div>
            
            <p className="text-2xl text-slate-400 font-medium max-w-lg leading-relaxed animate-vision-text">
              Elevated garment care for those who value detail. Family-owned, on-site expertise, and uncompromising quality for over 30 years.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-10 pt-8 animate-vision-cta">
              <a href="#delivery" className="group relative bg-[#0f172a] text-white px-14 py-7 rounded-full font-bold text-xs uppercase tracking-[0.25em] hover:bg-[#1e293b] hover:-translate-y-2 transition-all duration-500 shadow-2xl shadow-slate-900/30 overflow-hidden">
                <span className="relative z-10 flex items-center gap-4">
                  Schedule Pickup <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform duration-500" />
                </span>
                <div className="absolute inset-0 bg-emerald-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
              </a>
              <div className="flex items-center gap-6">
                 <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-[#059669] shadow-sm">
                   <ShieldCheck size={28} />
                 </div>
                 <div className="flex flex-col">
                   <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-300">Sustainability</span>
                   <span className="text-sm font-bold text-[#0f172a]">Eco-Safe Systems</span>
                 </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-6 relative vision-image-entrance">
            <div className="vision-float">
              <div className="relative aspect-[4/5] rounded-[100px] overflow-hidden shadow-[0_100px_140px_-40px_rgba(0,0,0,0.15)] border-[16px] border-white">
                <img 
                  src="./input_file_1.png" 
                  alt="Best Cleaners Main Plant" 
                  className="w-full h-full object-cover vision-image-pan"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1545173168-9f1947eebb7f?auto=format&fit=crop&q=80&w=1200";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/80 via-transparent to-transparent opacity-70"></div>
                <div className="absolute bottom-16 left-16 text-white max-w-xs">
                  <div className="w-12 h-px bg-emerald-400 mb-6"></div>
                  <p className="text-[10px] uppercase font-black tracking-[0.5em] mb-4 text-emerald-300">Flagship Plant</p>
                  <h3 className="text-5xl font-medium tracking-tight serif italic leading-tight">Master Craftsmanship</h3>
                </div>
              </div>
            </div>
            {/* Floating Decorative Blobs */}
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl animate-pulse"></div>
            <div className="absolute -bottom-20 -left-10 w-48 h-48 bg-blue-500/5 rounded-full blur-3xl" style={{ animationDelay: '-4s' }}></div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 animate-vision-cta">
           <div className="h-16 w-px bg-gradient-to-b from-[#0f172a]/20 to-transparent"></div>
           <ChevronDown size={14} className="text-[#0f172a]/30 animate-bounce" />
        </div>
      </section>

      {/* Same Day Service Promo Bar */}
      <div className="bg-[#059669] text-white py-10 overflow-hidden relative z-20">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-center gap-10 md:gap-24 text-center">
          <div className="flex items-center gap-6">
            <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center">
              <Clock size={28} className="text-emerald-200" />
            </div>
            <div className="flex flex-col items-start">
              <span className="text-lg font-black uppercase tracking-widest leading-none">In by 9 — Out by 5</span>
              <span className="text-[10px] font-bold opacity-60 uppercase tracking-[0.2em] mt-1">Daily Same Day Service</span>
            </div>
          </div>
          <div className="h-10 w-px bg-white/20 hidden md:block"></div>
          <p className="text-lg font-medium italic opacity-90 max-w-sm text-center md:text-left">
            "Professional care for every piece, delivered on the same day you need it."
          </p>
        </div>
      </div>

      {/* Services Section */}
      <section id="services" className="py-52 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-32 scroll-reveal">
            <div className="space-y-8">
              <p className="text-[#059669] font-black text-[11px] uppercase tracking-[0.6em]">Professional Care Menu</p>
              <h2 className="text-6xl md:text-[8rem] font-medium text-[#0f172a] leading-[0.85] tracking-tighter">On-site <br /><span className="serif italic font-normal text-slate-300">expertise.</span></h2>
            </div>
            <p className="text-slate-400 text-2xl max-w-md font-medium leading-relaxed italic">
              Unmatched quality control. Your garments never leave our care.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {siteConfig.services.map((service, idx) => (
              <div key={idx} className="bg-[#fcfcfc] p-14 rounded-[80px] border border-transparent hover:border-emerald-100 hover:bg-white hover:translate-y-[-15px] hover:shadow-[0_50px_80px_-20px_rgba(0,0,0,0.06)] transition-all duration-700 group flex flex-col scroll-reveal" style={{ transitionDelay: `${idx * 150}ms` }}>
                <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center text-[#059669] mb-12 shadow-sm group-hover:bg-[#059669] group-hover:text-white transition-all duration-500">
                  {IconMap[service.icon as string] || <Shirt size={36} />}
                </div>
                <h4 className="text-3xl font-bold text-[#0f172a] mb-6 tracking-tight group-hover:text-[#059669] transition-colors">{service.title}</h4>
                <p className="text-xl text-slate-500 leading-relaxed font-medium mb-10 flex-grow">{service.description}</p>
                <div className="space-y-4 pt-8 border-t border-slate-50">
                  {service.details?.map((detail, i) => (
                    <div key={i} className="flex items-center gap-4 text-xs font-bold text-slate-400 uppercase tracking-widest">
                      <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full group-hover:scale-150 transition-transform"></div> {detail}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why-us" className="py-52 bg-[#0f172a] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-emerald-500/5 blur-[180px] rounded-full"></div>
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
          <div className="space-y-16 relative z-10 scroll-reveal">
            <div className="space-y-8">
              <p className="text-emerald-400 font-black text-[11px] uppercase tracking-[0.6em]">The Best Cleaners Standard</p>
              <h2 className="text-7xl md:text-[9rem] font-medium text-white leading-[0.8] tracking-tighter">
                Sublime <br /><span className="serif italic font-normal text-slate-500 text-6xl md:text-[8rem]">perfection.</span>
              </h2>
            </div>
            <p className="text-2xl text-slate-400 leading-relaxed font-medium max-w-lg">
              30 years of family legacy. Our plant is equipped with the world's most advanced garment care technology, managed by master cleaners who treat your clothes like heirlooms.
            </p>
            <div className="grid grid-cols-1 gap-10">
              {siteConfig.whyUs.map((item, i) => (
                <div key={i} className="flex items-center gap-8 group">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-400 group-hover:text-[#0f172a] transition-all duration-500">
                    <CheckCircle2 size={24} />
                  </div>
                  <span className="text-xl font-bold text-white tracking-tight group-hover:translate-x-2 transition-transform">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative group scroll-reveal" style={{ transitionDelay: '0.4s' }}>
            <div className="rounded-[100px] overflow-hidden border-[25px] border-white/5 shadow-2xl bg-slate-800">
               <img 
                 src="./input_file_2.png" 
                 alt="Inside our Plant" 
                 className="w-full h-auto opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-[3s]"
               />
            </div>
            <div className="absolute -bottom-16 -left-16 bg-white p-14 rounded-[60px] shadow-2xl hidden xl:block max-w-sm border border-slate-50">
               <div className="flex gap-2 mb-6">
                 {[1,2,3,4,5].map(s => <Star key={s} size={24} fill="#059669" className="text-[#059669]" />)}
               </div>
               <p className="text-[#0f172a] font-bold text-2xl leading-tight tracking-tight">"They handled my wedding dress preservation with such grace. Truly the best in Florida."</p>
               <div className="flex items-center gap-4 mt-8">
                 <div className="w-10 h-px bg-slate-200"></div>
                 <p className="text-[11px] font-black uppercase tracking-[0.4em] text-slate-400">Sarah M., Spring Hill</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Delivery Details */}
      <section id="delivery" className="py-52 bg-[#fcfcfc] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
          <div className="relative group scroll-reveal order-2 lg:order-1">
            <div className="relative rounded-[100px] overflow-hidden shadow-[0_80px_120px_-30px_rgba(0,0,0,0.12)] transition-all duration-1000 group-hover:-translate-y-6">
              <img 
                src="./input_file_0.png" 
                alt="Free Delivery Valet" 
                className="w-full h-auto group-hover:scale-110 transition-transform duration-[5s]"
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&q=80&w=1200";
                }}
              />
              <div className="absolute inset-0 bg-emerald-900/10 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            </div>
          </div>
          <div className="space-y-16 scroll-reveal order-1 lg:order-2" style={{ transitionDelay: '0.4s' }}>
            <div className="space-y-8">
              <p className="text-[#059669] font-black text-[11px] uppercase tracking-[0.6em]">Luxury Convenience</p>
              <h2 className="text-7xl md:text-[9rem] font-medium text-[#0f172a] leading-[0.8] tracking-tighter">
                At your <br /><span className="serif italic font-normal text-slate-300 text-6xl md:text-[8rem]">doorstep.</span>
              </h2>
            </div>
            <p className="text-2xl text-slate-400 leading-relaxed font-medium">
              Elegance is time saved. Our twice-weekly valet service ensures your wardrobe stays pristine without you ever leaving your residence or office.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div className="flex items-center gap-5 text-[#0f172a]">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-[#059669]">
                    <MapPin size={22} />
                  </div>
                  <h5 className="font-black uppercase tracking-[0.3em] text-[10px]">Service Zones</h5>
                </div>
                <div className="flex flex-wrap gap-2">
                  {siteConfig.serviceAreas.map((area, i) => (
                    <span key={i} className="px-4 py-2 bg-white border border-slate-100 rounded-full text-xs font-bold text-slate-500 uppercase tracking-widest">{area}</span>
                  ))}
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-center gap-5 text-[#0f172a]">
                   <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-[#059669]">
                    <Calendar size={22} />
                  </div>
                  <h5 className="font-black uppercase tracking-[0.3em] text-[10px]">Frequency</h5>
                </div>
                <p className="text-slate-500 text-sm font-medium leading-relaxed">
                  Automatic pickups every Tuesday & Friday, or Monday & Thursday depending on your neighborhood.
                </p>
              </div>
            </div>
            <a href={`tel:${siteConfig.phoneDigits}`} className="inline-flex items-center gap-10 group pt-10">
               <div className="w-24 h-24 bg-[#0f172a] rounded-full flex items-center justify-center text-white group-hover:bg-[#059669] transition-all duration-700 group-hover:scale-110 shadow-xl shadow-slate-200">
                 <Phone size={36} />
               </div>
               <div className="flex flex-col">
                 <p className="text-[11px] font-black text-slate-300 uppercase tracking-[0.5em] mb-2">Request On-Call</p>
                 <p className="text-5xl font-black text-[#0f172a] tracking-tighter transition-colors group-hover:text-[#059669]">{siteConfig.phone}</p>
               </div>
            </a>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section id="locations" className="py-52 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-16 mb-32 scroll-reveal">
            <div className="space-y-8">
              <p className="text-[#059669] font-black text-[11px] uppercase tracking-[0.6em]">Two Main Destinations</p>
              <h2 className="text-7xl md:text-[9rem] font-medium text-[#0f172a] leading-[0.8] tracking-tighter">Visit our <br /><span className="serif italic font-normal text-slate-300 text-6xl md:text-[8rem]">showrooms.</span></h2>
            </div>
            <p className="text-slate-400 text-xl max-w-sm font-medium italic leading-relaxed">
              Professional centers designed for effortless garment drop-off and pickup.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {siteConfig.locations.map((loc, idx) => (
              <div key={idx} className="bg-white p-20 rounded-[100px] border border-slate-100 shadow-sm hover:shadow-[0_60px_100px_-30px_rgba(0,0,0,0.08)] transition-all duration-700 group flex flex-col justify-between scroll-reveal" style={{ transitionDelay: `${idx * 250}ms` }}>
                <div className="space-y-12">
                  <div className="flex items-start justify-between">
                    <div className="w-20 h-20 bg-slate-50 rounded-3xl flex items-center justify-center text-[#0f172a] group-hover:bg-[#059669] group-hover:text-white transition-all duration-500">
                      <MapPin size={36} />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#059669] bg-emerald-50 px-6 py-3 rounded-full">{loc.type}</span>
                  </div>
                  <div>
                    <h4 className="text-5xl font-bold text-[#0f172a] mb-6 tracking-tight group-hover:text-[#059669] transition-colors">{loc.name}</h4>
                    <p className="text-2xl text-slate-500 font-medium leading-relaxed mb-8">{loc.address}</p>
                    <p className="text-lg text-slate-400 font-medium leading-relaxed max-w-sm">{loc.description}</p>
                  </div>
                </div>
                <div className="mt-20 pt-12 border-t border-slate-50 flex flex-col sm:flex-row sm:items-center justify-between gap-10">
                  <a href={`tel:${loc.phone.replace(/\D/g,'')}`} className="text-4xl font-black text-[#0f172a] hover:text-[#059669] transition-colors tracking-tighter">{loc.phone}</a>
                  <a href={loc.mapUrl} target="_blank" className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.4em] text-[#059669] hover:text-emerald-700 transition-colors px-10 py-5 bg-emerald-50 rounded-full group-hover:translate-x-3 transition-transform">
                    Navigate <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer id="contact" className="bg-[#0f172a] text-white pt-60 pb-24 relative z-20">
        {/* Background Drift */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-drift-slow opacity-[0.03] scale-150">
             <Waves className="w-full h-full" />
           </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-24 mb-48">
            <div className="lg:col-span-5 space-y-16">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-[#0f172a]">
                  <Waves size={28} strokeWidth={2.5} />
                </div>
                <div className="flex flex-col leading-none">
                  <span className="text-3xl font-black tracking-tighter uppercase">Best Cleaners</span>
                  <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-[0.4em] mt-1">& Laundry</span>
                </div>
              </div>
              <h4 className="text-6xl serif italic leading-tight text-slate-300">
                Purity, expertise, and <br />legacy in every fiber.
              </h4>
              <div className="flex gap-10">
                <a href="#" className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-[#0f172a] transition-all duration-500 hover:scale-110">
                  <Star size={24} />
                </a>
                <a href={`mailto:${siteConfig.email}`} className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-[#0f172a] transition-all duration-500 hover:scale-110">
                  <ArrowRight size={24} className="-rotate-45" />
                </a>
              </div>
            </div>
            
            <div className="lg:col-span-3 space-y-10">
              <p className="text-[11px] font-black uppercase tracking-[0.6em] text-emerald-400">Operating Hours</p>
              <div className="space-y-8">
                <div className="flex items-center gap-6">
                  <Clock size={24} className="text-slate-500" />
                  <span className="text-xl font-medium tracking-tight text-slate-200">{siteConfig.hours}</span>
                </div>
                <div className="flex items-center gap-6">
                  <Calendar size={24} className="text-slate-500" />
                  <span className="text-xl font-medium tracking-tight text-slate-200">Open 6 Days Weekly</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 space-y-10">
              <p className="text-[11px] font-black uppercase tracking-[0.6em] text-emerald-400">Headquarters</p>
              <div className="space-y-10">
                <div className="flex items-start gap-6">
                  <MapPin size={24} className="text-slate-500 mt-1" />
                  <div>
                    <p className="text-2xl font-bold tracking-tight mb-3">11075 Spring Hill Dr.</p>
                    <p className="text-slate-400 text-lg font-medium tracking-tight">Spring Hill, FL 34608</p>
                  </div>
                </div>
                <a href={`tel:${siteConfig.phoneDigits}`} className="block text-6xl font-black hover:text-emerald-400 transition-colors tracking-tighter">
                  {siteConfig.phone}
                </a>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-10 pt-20 border-t border-white/5 text-[10px] font-bold uppercase tracking-[0.4em] text-slate-500">
            <p>© {new Date().getFullYear()} Best Cleaners & Laundry. A family legacy since 1989.</p>
            <div className="flex gap-16">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-white z-[200] p-12 flex flex-col animate-in fade-in slide-in-from-right duration-700">
          <div className="flex justify-between items-center mb-24">
             <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#0f172a] rounded-full flex items-center justify-center text-white">
                <Waves size={26} />
              </div>
              <span className="text-2xl font-black text-[#0f172a] tracking-tighter uppercase">Best Cleaners</span>
            </div>
            <button onClick={closeMenu} className="text-slate-300 hover:text-[#0f172a] transition-colors p-3">
              <X size={54} strokeWidth={1} />
            </button>
          </div>
          
          <nav className="flex flex-col gap-8 text-7xl font-medium text-[#0f172a] mb-24 tracking-tighter">
            <a href="#services" onClick={closeMenu} className="serif italic hover:pl-6 transition-all duration-500">Services</a>
            <a href="#delivery" onClick={closeMenu} className="serif italic hover:pl-6 transition-all duration-500">Delivery</a>
            <a href="#why-us" onClick={closeMenu} className="serif italic hover:pl-6 transition-all duration-500">Why Us</a>
            <a href="#locations" onClick={closeMenu} className="serif italic hover:pl-6 transition-all duration-500">Locations</a>
            <a href="#contact" onClick={closeMenu} className="serif italic hover:pl-6 transition-all duration-500">Contact</a>
          </nav>
          
          <div className="mt-auto space-y-10">
            <div className="flex items-center gap-6 text-emerald-600">
              <Info size={24} />
              <p className="text-[11px] font-black uppercase tracking-[0.5em]">Same-day service in by 9am</p>
            </div>
            <a href={`tel:${siteConfig.phoneDigits}`} className="w-full bg-[#0f172a] text-white py-10 rounded-[45px] text-center text-3xl font-bold flex items-center justify-center gap-6 active:scale-95 transition-transform shadow-2xl shadow-slate-200">
              <Phone size={32} /> {siteConfig.phone}
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
