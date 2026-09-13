import React, { useState, useEffect } from "react";
import { MessageCircle, Menu, X, Phone } from "lucide-react";
import { buildWhatsAppLink, quoteMessageFor } from "../lib/whatsapp";

export default function Navbar({ currentTab, setCurrentTab, settings = {} }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home", label: "الرئيسية" },
    { id: "products", label: "المنتجات" },
    { id: "about", label: "من نحن" },
    { id: "contact", label: "اتصل بنا" },
  ];

  const handleNavClick = (tabId) => {
    setCurrentTab(tabId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 w-full z-50 bg-[#fff8f8]/95 backdrop-blur-md border-b border-[#e1bebe]/60 transition-all duration-300 ${
        scrolled ? "shadow-md bg-white" : "shadow-xs"
      }`}
    >
      <div className="flex flex-row-reverse justify-between items-center px-4 sm:px-8 md:px-12 h-20 max-w-7xl mx-auto">
        <div
          className="flex items-center cursor-pointer"
          onClick={() => handleNavClick("home")}
        >
          <img src="/logo.png" alt="IEG Logo" className="h-14" />
        </div>

        <nav className="hidden md:flex items-center gap-8 dir-rtl">
          {navItems.map((item) => {
            const isActive = currentTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`transition-all font-semibold cursor-pointer text-sm lg:text-base px-2 py-1.5 relative ${
                  isActive
                    ? 'text-[#81001c] font-bold after:content-[""] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#81001c]'
                    : "text-[#594040] hover:text-[#81001c]"
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        <div className="flex items-center gap-3 md:gap-4">
          <a
            href={buildWhatsAppLink(settings.whatsapp, quoteMessageFor(null))}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25D366] text-white font-bold text-sm md:text-base px-5 md:px-6 py-2 md:py-2.5 rounded-full hover:bg-[#20bd5a] transition-all active:scale-98 shadow-sm hover:shadow-md cursor-pointer whitespace-nowrap flex items-center gap-2"
          >
            <MessageCircle className="w-4 h-4 md:w-5 md:h-5" />
            <span className="hidden sm:inline">طلب عرض سعر</span>
            <span className="sm:hidden">عرض سعر</span>
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-[#1e1b1c] p-2 rounded-lg hover:bg-[#f5eced]"
            aria-label="القائمة"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-[#e1bebe] px-6 py-4 shadow-lg animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-3 text-right">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`py-2.5 px-3 rounded-lg text-right font-medium text-base transition-colors ${
                  currentTab === item.id
                    ? "bg-[#fbf1f2] text-[#81001c] font-bold"
                    : "text-[#594040] hover:bg-[#f5eced]"
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-3 border-t border-[#e9e0e1] flex items-center justify-between">
              <span className="text-xs text-[#5d5e60]">للاستفسار السريع:</span>
              <a
                href="tel:01034451738"
                className="flex items-center gap-1.5 text-xs text-[#81001c] font-bold"
              >
                <Phone className="w-3.5 h-3.5" />
                01034451738
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
