import React from 'react';
import { cn } from '../utils/cn';

interface GlowingButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}

export function GlowingButton({ variant = 'primary', className, children, ...props }: GlowingButtonProps) {
  return (
    <button
      className={cn(
        'relative group px-8 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 disabled:opacity-70',
        variant === 'primary' && 'text-white',
        variant === 'secondary' && 'text-white/90',
        className
      )}
      {...props}
    >
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/80 to-purple-600/80 blur-sm opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className={cn(
        'absolute inset-0 rounded-full',
        variant === 'primary' && 'bg-gradient-to-r from-blue-500 to-purple-600',
        variant === 'secondary' && 'bg-white/10'
      )} />
      <span className="relative z-10">{children}</span>
    </button>
  );
}