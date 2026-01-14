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
  Info,
  Send
} from 'lucide-react';

const IconMap: Record<string, React.ReactNode> = {
  Shirt: <Shirt size={32} strokeWidth={1} />,
  Wind: <Wind size={32} strokeWidth={1} />,
  Truck: <Truck size={32} strokeWidth={1} />,
  Heart: <Heart size={32} strokeWidth={1} />,
  Waves: <Waves size={32} strokeWidth={1} />,
  Scissors: <Scissors size={32} strokeWidth={1} />
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
    <div className="flex flex-col min-h-screen bg-white selection:bg-slate-900 selection:text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-1000 ${
        isScrolled ? 'bg-white/95 backdrop-blur-xl py-4 shadow-sm' : 'bg-transparent py-8'
      }`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-[#0f172a] rounded-full flex items-center justify-center text-white transition-all duration-700 group-hover:scale-110">
              <Waves size={20} strokeWidth={2.5} />
            </div>
            <span className="text-xl font-black text-[#0f172a] tracking-tighter uppercase">Best Cleaners</span>
          </a>

          <div className="hidden lg:flex items-center gap-12">
            <div className="flex gap-10 text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400">
              {['Services', 'Delivery', 'Why Us', 'Locations', 'Contact'].map((item) => (
                <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="hover:text-[#0f172a] transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#0f172a] hover:after:w-full after:transition-all">{item}</a>
              ))}
            </div>
            <a href={`tel:${siteConfig.phoneDigits}`} className="bg-[#0f172a] text-white px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-[#1e293b] hover:-translate-y-1 transition-all flex items-center gap-3 active:scale-95 shadow-xl shadow-slate-200">
              <Phone size={12} /> {siteConfig.phone}
            </a>
          </div>

          <button className="lg:hidden text-[#0f172a] p-2" onClick={() => setMobileMenuOpen(true)}>
            <Menu size={32} strokeWidth={1} />
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative min-h-[100vh] flex items-center pt-24 overflow-hidden bg-white">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-slate-50 blur-[120px] rounded-full bg-drift-slow opacity-60"></div>
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative">
          <div className="lg:col-span-7 space-y-12 relative z-10">
            <div className="animate-vision-title">
              <div className="inline-flex items-center gap-3 text-slate-400 font-bold text-[10px] uppercase tracking-[0.5em] border border-slate-100 px-6 py-3 rounded-full">
                Est. 1989 • Spring Hill
              </div>
            </div>
            <div className="space-y-4">
              <h1 className="text-7xl md:text-[11rem] font-medium text-[#0f172a] leading-[0.8] tracking-tighter animate-vision-title">
                Pristine
              </h1>
              <div className="animate-vision-subtitle flex items-center gap-6">
                <span className="serif italic font-normal text-slate-300 text-6xl md:text-[9rem] lowercase">wardrobes.</span>
                <div className="h-px bg-slate-100 flex-grow mt-10"></div>
              </div>
            </div>
            <p className="text-2xl text-slate-400 font-medium max-w-xl leading-relaxed animate-vision-text">
              Master garment care. We process every item on-site with family pride, ensuring your finest pieces remain impeccable.
            </p>
            <div className="flex flex-col sm:flex-row gap-8 pt-8 animate-vision-cta">
              <a href="#delivery" className="group bg-[#0f172a] text-white px-14 py-7 rounded-full font-bold text-xs uppercase tracking-[0.3em] hover:bg-slate-800 hover:-translate-y-2 transition-all duration-500 shadow-2xl shadow-slate-900/10 flex items-center justify-center gap-4">
                Schedule Pickup <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
              </a>
            </div>
          </div>
          <div className="lg:col-span-5 relative vision-image-entrance hidden lg:block">
            <div className="vision-float">
              <div className="relative aspect-[4/5] rounded-[100px] overflow-hidden shadow-2xl border-[1px] border-slate-100">
                <img 
                  src="./input_file_1.png" 
                  alt="Best Cleaners Plant" 
                  className="w-full h-full object-cover vision-image-pan opacity-90"
                  onError={(e) => e.currentTarget.src = "https://images.unsplash.com/photo-1545173168-9f1947eebb7f?auto=format&fit=crop&q=80&w=1200"}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-40 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-24 scroll-reveal">
            <p className="text-slate-400 font-black text-[10px] uppercase tracking-[0.6em] mb-4">The Selection</p>
            <h2 className="text-6xl md:text-8xl font-medium text-[#0f172a] tracking-tighter serif italic">Expert Services</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {siteConfig.services.map((service, idx) => (
              <div key={idx} className="group p-10 bg-slate-50 rounded-[40px] hover:bg-[#0f172a] hover:text-white transition-all duration-700 scroll-reveal" style={{ transitionDelay: `${idx * 100}ms` }}>
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-slate-400 mb-8 group-hover:bg-slate-800 transition-colors">
                  {IconMap[service.icon as string] || <Shirt size={32} />}
                </div>
                <h4 className="text-2xl font-bold mb-4 tracking-tight">{service.title}</h4>
                <p className="text-slate-500 group-hover:text-slate-300 leading-relaxed font-medium transition-colors">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Section */}
      <section id="delivery" className="py-40 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col items-center text-center mb-32 scroll-reveal">
            <p className="text-slate-400 font-black text-[10px] uppercase tracking-[0.6em] mb-4">Effortless Valet</p>
            <h2 className="text-7xl md:text-9xl font-medium text-[#0f172a] tracking-tighter leading-none serif italic mb-8">Laundry Day, Done.</h2>
            <div className="h-1 w-24 bg-[#0f172a] mt-4"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            <div className="absolute top-1/2 left-0 w-full h-px bg-slate-200 hidden md:block -z-10"></div>
            {siteConfig.deliverySteps.map((step, idx) => (
              <div key={idx} className="bg-white p-12 rounded-[50px] shadow-sm hover:shadow-xl transition-all duration-700 scroll-reveal" style={{ transitionDelay: `${idx * 150}ms` }}>
                <span className="text-[10px] font-black text-slate-300 tracking-[0.5em] block mb-8 uppercase">Step {step.step}</span>
                <h5 className="text-2xl font-bold mb-4 tracking-tight text-[#0f172a]">{step.title}</h5>
                <p className="text-slate-400 font-medium leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section id="why-us" className="py-52 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="space-y-32">
            {siteConfig.whyUsBenefits.map((benefit, idx) => (
              <div key={idx} className={`flex items-center gap-20 scroll-reveal ${idx % 2 === 1 ? 'flex-row-reverse' : ''}`}>
                <div className="flex-1">
                  <span className="text-[10px] font-black text-slate-300 tracking-[0.6em] uppercase mb-6 block">Legacy Standard 0{idx + 1}</span>
                  <h3 className="text-6xl md:text-[8rem] font-medium text-[#0f172a] tracking-tighter leading-[0.85] serif italic">
                    {benefit}
                  </h3>
                </div>
                <div className="hidden lg:block flex-1 h-px bg-slate-100"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section id="locations" className="py-40 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="scroll-reveal">
            <p className="text-slate-400 font-black text-[10px] uppercase tracking-[0.6em] mb-4">Our Presence</p>
            <h2 className="text-7xl md:text-9xl font-medium text-[#0f172a] tracking-tighter serif italic mb-12 leading-none">Visit Us in <br />Spring Hill</h2>
            <div className="space-y-10">
              <div className="flex items-start gap-8">
                <MapPin size={32} className="text-[#0f172a] mt-1" />
                <div>
                  <h5 className="text-xl font-bold text-[#0f172a] mb-2">Primary Facility</h5>
                  <p className="text-2xl text-slate-500 font-medium">11075 Spring Hill Dr, <br />Spring Hill, FL 34608</p>
                </div>
              </div>
              <div className="flex items-start gap-8">
                <Clock size={32} className="text-[#0f172a] mt-1" />
                <div>
                  <h5 className="text-xl font-bold text-[#0f172a] mb-2">Business Hours</h5>
                  <p className="text-2xl text-slate-500 font-medium">Mon-Fri 7am - 7pm <br />Sat 8am - 5pm</p>
                </div>
              </div>
            </div>
          </div>
          <div className="scroll-reveal" style={{ transitionDelay: '0.3s' }}>
            <div className="aspect-square bg-slate-200 rounded-[100px] flex items-center justify-center relative overflow-hidden group">
               <div className="absolute inset-0 bg-slate-300 animate-pulse"></div>
               <div className="relative z-10 text-slate-400 flex flex-col items-center">
                 <MapPin size={48} className="mb-4" />
                 <span className="text-[10px] font-black uppercase tracking-[0.4em]">Interactive Map Placeholder</span>
               </div>
               <iframe 
                 className="absolute inset-0 w-full h-full grayscale opacity-70 group-hover:opacity-100 transition-opacity duration-1000" 
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3493.535071110461!2d-82.52737602356557!3d28.471465291501174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e83f0624d77609%3A0xc3f60f89831d6836!2s11075%20Spring%20Hill%20Dr%2C%20Spring%20Hill%2C%20FL%2034608!5e0!3m2!1sen!2sus!4v1705273155000!5m2!1sen!2sus" 
                 loading="lazy"
               ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-52 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-24">
          <div className="lg:col-span-5 scroll-reveal">
            <p className="text-slate-400 font-black text-[10px] uppercase tracking-[0.6em] mb-4">Concierge</p>
            <h2 className="text-7xl md:text-9xl font-medium text-[#0f172a] tracking-tighter serif italic leading-tight mb-12">Get in <br />Touch.</h2>
            <div className="space-y-6 pt-12 border-t border-slate-100 max-w-sm">
              <a href={`tel:${siteConfig.phoneDigits}`} className="block text-4xl font-black text-[#0f172a] hover:text-slate-500 transition-colors tracking-tighter">{siteConfig.phone}</a>
              <p className="text-xl text-slate-400 font-medium">info@bestcleaners.com</p>
            </div>
          </div>
          <div className="lg:col-span-7 scroll-reveal" style={{ transitionDelay: '0.3s' }}>
            <form className="grid grid-cols-1 sm:grid-cols-2 gap-8" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 px-2">Name</label>
                <input type="text" placeholder="Your full name" className="w-full bg-slate-50 border-none rounded-3xl px-8 py-6 text-slate-900 placeholder:text-slate-300 focus:ring-2 focus:ring-[#0f172a] transition-all outline-none" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 px-2">Email</label>
                <input type="email" placeholder="hello@example.com" className="w-full bg-slate-50 border-none rounded-3xl px-8 py-6 text-slate-900 placeholder:text-slate-300 focus:ring-2 focus:ring-[#0f172a] transition-all outline-none" />
              </div>
              <div className="sm:col-span-2 space-y-2">
                <label className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 px-2">Message</label>
                <textarea rows={6} placeholder="How can we help your wardrobe?" className="w-full bg-slate-50 border-none rounded-3xl px-8 py-8 text-slate-900 placeholder:text-slate-300 focus:ring-2 focus:ring-[#0f172a] transition-all outline-none resize-none"></textarea>
              </div>
              <div className="sm:col-span-2">
                <button type="submit" className="group w-full bg-[#0f172a] text-white py-8 rounded-[40px] text-lg font-bold uppercase tracking-[0.4em] flex items-center justify-center gap-4 hover:bg-slate-800 transition-all shadow-xl shadow-slate-200 active:scale-[0.98]">
                  Send Message <Send size={20} className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex items-center gap-3">
             <Waves size={24} className="text-[#0f172a]" />
             <span className="text-sm font-black uppercase tracking-[0.4em]">Best Cleaners</span>
          </div>
          <p className="text-[10px] font-bold text-slate-300 uppercase tracking-[0.3em]">
            © {new Date().getFullYear()} Best Cleaners & Laundry. A Family Legacy Since 1989.
          </p>
          <div className="flex gap-10 text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">
            <a href="#" className="hover:text-[#0f172a] transition-colors">Instagram</a>
            <a href="#" className="hover:text-[#0f172a] transition-colors">Facebook</a>
          </div>
        </div>
      </footer>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-white z-[200] p-12 flex flex-col animate-in fade-in slide-in-from-right duration-700">
          <div className="flex justify-between items-center mb-24">
            <span className="text-xl font-black text-[#0f172a] tracking-tighter uppercase">Best Cleaners</span>
            <button onClick={closeMenu} className="text-slate-300 hover:text-[#0f172a] transition-colors p-3">
              <X size={54} strokeWidth={1} />
            </button>
          </div>
          <nav className="flex flex-col gap-8 text-6xl font-medium text-[#0f172a] mb-24 tracking-tighter">
            {['Services', 'Delivery', 'Why Us', 'Locations', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} onClick={closeMenu} className="serif italic hover:pl-6 transition-all duration-500">{item}</a>
            ))}
          </nav>
          <div className="mt-auto">
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