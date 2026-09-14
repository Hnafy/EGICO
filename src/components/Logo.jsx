import React from 'react';

export default function Logo({ className = "h-16", showSubtext = true, onClick }) {
  return (
    <div 
      onClick={onClick}
      className={`inline-flex items-center cursor-pointer select-none ${className}`}
      dir="ltr"
    >
      <img src="/logo.png" alt="IEG Logo" className="h-full w-auto object-contain" />
    </div>
  );
}
