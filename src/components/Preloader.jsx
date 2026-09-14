import React, { useEffect, useState } from "react";

export default function Preloader({ startFade, onDone }) {
  const [done, setDone] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!startFade || done) return;
    const timer = setTimeout(() => {
      setDone(true);
      onDone();
    }, 600);
    return () => clearTimeout(timer);
  }, [startFade, done, onDone]);

  if (done) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white transition-opacity duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        startFade ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      aria-hidden="true"
    >
      <div className="preloader-logo px-8">
        <img
          src="/logo.png"
          alt="IEG"
          className="h-14 sm:h-16 w-auto object-contain"
        />
      </div>

      <div className="mt-6 w-40 h-[3px] rounded-full bg-[#F1F5F9] overflow-hidden">
        <div className="preloader-bar w-full h-full rounded-full bg-[#B5122B]"></div>
      </div>

      <p className="preloader-text mt-4 text-[11px] font-bold tracking-[0.25em] uppercase text-[#667085]">
        Integrated Engineering Group
      </p>
    </div>
  );
}
