
import React from 'react';

interface ButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'orange' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  children, 
  ...props 
}) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-xl font-bold transition-all active:scale-[0.98] duration-300 select-none';
  
  const variants = {
    primary: 'bg-[#1e40af] text-white hover:bg-[#1e3a8a] shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40',
    secondary: 'bg-white text-[#1e40af] hover:bg-slate-50 border border-slate-200',
    orange: 'bg-[#f97316] text-white hover:bg-[#ea580c] shadow-lg shadow-orange-500/20',
    outline: 'bg-transparent text-[#1e40af] border-2 border-[#1e40af] hover:bg-[#1e40af] hover:text-white',
    ghost: 'bg-transparent text-slate-500 hover:text-[#1e40af] hover:bg-blue-50'
  };

  const sizes = {
    sm: 'px-4 py-2 text-xs uppercase tracking-widest',
    md: 'px-6 py-3 text-sm md:text-base',
    lg: 'px-10 py-4 text-base md:text-lg'
  };

  return (
    <a 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </a>
  );
};
