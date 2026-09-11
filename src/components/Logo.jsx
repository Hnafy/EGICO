import React from 'react';

export default function Logo({ className = "h-12", showSubtext = true, onClick }) {
  return (
    <div 
      onClick={onClick}
      className={`inline-flex items-center gap-2 cursor-pointer select-none ${className}`}
      dir="ltr"
    >
      <div className="flex flex-col">
        {/* Main Logo Graphic Header */}
        <div className="flex items-center gap-2">
          {/* T E G Graphic */}
          <div className="flex items-center">
            {/* Red T */}
            <div className="flex flex-col items-center">
              <div className="w-9 h-2.5 bg-[#81001c] rounded-xs"></div>
              <div className="w-3.5 h-7 bg-[#81001c]"></div>
              {/* Barcode lines under T */}
              <div className="flex items-center gap-0.5 mt-0.5">
                <span className="w-0.5 h-3 bg-[#81001c]"></span>
                <span className="w-1 h-3 bg-[#81001c]"></span>
                <span className="w-0.5 h-3 bg-[#81001c]"></span>
                <span className="w-1.5 h-3 bg-[#81001c]"></span>
                <span className="w-0.5 h-3 bg-[#81001c]"></span>
                <span className="w-1 h-3 bg-[#5d5e60]"></span>
                <span className="w-0.5 h-3 bg-[#5d5e60]"></span>
                <span className="w-1.5 h-3 bg-[#5d5e60]"></span>
              </div>
            </div>

            {/* E Middle Grey Bar */}
            <div className="flex flex-col justify-center -ml-1 mr-1">
              <div className="w-7 h-2 bg-[#5d5e60] rounded-sm mb-1.5"></div>
              <div className="w-5 h-2 bg-[#5d5e60] rounded-sm"></div>
            </div>

            {/* Big Red G */}
            <div className="relative">
              <span className="text-3xl font-black text-[#81001c] leading-none tracking-tighter" style={{ fontFamily: 'sans-serif' }}>
                G
              </span>
            </div>
          </div>

          {/* CO with Gear Box */}
          <div className="flex flex-col items-start pl-1">
            {/* Arabic إيجيكو */}
            <span className="text-[#81001c] font-black text-lg tracking-wider -mb-1" style={{ fontFamily: 'Tajawal, sans-serif' }}>
              إيجيكو
            </span>
            
            {/* Grey Gear Box */}
            <div className="bg-[#5d5e60] text-white px-2 py-0.5 rounded-xs flex items-center gap-1">
              <span className="text-xs font-bold font-mono">CO</span>
              <svg className="w-4 h-4 text-white animate-[spin_12s_linear_infinite]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 15.5A3.5 3.5 0 0 1 8.5 12A3.5 3.5 0 0 1 12 8.5a3.5 3.5 0 0 1 3.5 3.5a3.5 3.5 0 0 1-3.5 3.5m7.43-2.53c.04-.32.07-.64.07-.97c0-.33-.03-.66-.07-1l2.11-1.63c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.31-.61-.22l-2.49 1c-.52-.39-1.06-.73-1.69-.98l-.37-2.65A.506.506 0 0 0 13.5 2h-4c-.25 0-.46.18-.5.42l-.37 2.65c-.63.25-1.17.59-1.69.98l-2.49-1c-.22-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64L4.57 11c-.04.34-.07.67-.07 1c0 .33.03.65.07.97l-2.11 1.66c-.19.15-.25.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1.01c.52.4 1.06.74 1.69.99l.37 2.65c.04.24.25.42.5.42h4c.25 0 .46-.18.5-.42l.37-2.65c.63-.26 1.17-.59 1.69-.99l2.49 1.01c.22.08.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.66Z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Text Subtitle */}
        {showSubtext && (
          <div className="flex flex-col mt-0.5">
            <span className="text-[11px] font-bold text-[#3c3e3e] tracking-tight leading-none">
              Integrated Engineering Group
            </span>
            <div className="bg-gradient-to-r from-[#5d5e60] via-[#81001c] to-[#5d5e60] text-white text-[8px] font-bold tracking-widest px-1.5 py-0.5 mt-0.5 rounded-2xs uppercase text-center">
              CODING with Hnafy
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
