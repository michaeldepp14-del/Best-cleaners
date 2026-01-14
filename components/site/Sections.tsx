
import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export const Section = ({ id, title, subtitle, children, dark = false, className = '' }: any) => {
  return (
    <section id={id} className={`py-24 md:py-32 relative overflow-hidden ${dark ? 'bg-[#f0f4f8]' : 'bg-[#f8f8f8]'} ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {(title || subtitle) && (
          <div className="text-center max-w-3xl mx-auto mb-20">
            {title && <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 text-[#1e40af] leading-tight">{title}</h2>}
            {subtitle && <p className="text-lg md:text-xl font-medium text-slate-500 leading-relaxed">{subtitle}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

export const Bullets = ({ items, color = 'blue' }: { items: string[], color?: 'blue' | 'orange' }) => {
  const colorMap = {
    blue: 'text-[#1e40af]',
    orange: 'text-[#f97316]'
  };

  return (
    <ul className="space-y-4">
      {items.map((item, idx) => (
        <li key={idx} className="flex items-start gap-3 group">
          <div className={`mt-1 flex-shrink-0 ${colorMap[color]}`}>
            <CheckCircle2 size={18} strokeWidth={3} />
          </div>
          <span className="text-base font-bold text-slate-700 leading-tight group-hover:text-[#1e40af] transition-colors">{item}</span>
        </li>
      ))}
    </ul>
  );
};
