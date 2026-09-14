import React, { useState, useEffect } from "react";
import { MessageCircle, Menu, X, Phone, Globe } from "lucide-react";
import { useTranslation } from "react-i18next";
import { buildWhatsAppLink, quoteMessageFor } from "../lib/whatsapp";

function LanguageSwitcher({ compact = false }) {
  const { i18n } = useTranslation();
  const current = i18n.language?.startsWith("ar") ? "ar" : "en";
  const isArabic = current === "ar";

  const toggleLanguage = () => {
    i18n.changeLanguage(isArabic ? "en" : "ar");
  };

  return (
    <button
      onClick={toggleLanguage}
      aria-label={isArabic ? "Switch to English" : "التبديل إلى العربية"}
      title={isArabic ? "English" : "العربية"}
      className={`inline-flex items-center gap-1.5 font-bold text-xs sm:text-sm bg-white border border-[#E5E7EB] text-[#172033] hover:border-[#B5122B]/50 hover:text-[#B5122B] transition-all rounded-full cursor-pointer ${
        compact ? "px-3 py-1.5" : "px-4 py-2"
      }`}
    >
      <Globe className="w-4 h-4" />
      <span className={compact ? "hidden lg:inline" : ""}>
        {isArabic ? "English" : "العربية"}
      </span>
    </button>
  );
}

export { LanguageSwitcher };

export default function Navbar({ currentTab, setCurrentTab, settings = {} }) {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language?.startsWith("ar");
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
    { id: "home", label: t("nav.home") },
    { id: "products", label: t("nav.products") },
    { id: "about", label: t("nav.about") },
    { id: "contact", label: t("nav.contact") },
  ];

  const handleNavClick = (tabId) => {
    setCurrentTab(tabId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-[#E5E7EB] transition-all duration-300 ${
        scrolled ? "shadow-md bg-white" : "shadow-xs"
      }`}
    >
      <div
        className={`flex justify-between items-center px-4 sm:px-8 md:px-12 h-20 max-w-7xl mx-auto ${
          isArabic ? "flex-row-reverse" : "flex-row"
        }`}
      >
        <div
          className="flex items-center cursor-pointer"
          onClick={() => handleNavClick("home")}
        >
          <img src="/logo.png" alt="IEG Logo" className="h-18" />
        </div>

        <nav className={`hidden md:flex items-center gap-8`}>
          {navItems.map((item) => {
            const isActive = currentTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`transition-all font-semibold cursor-pointer text-sm lg:text-base px-2 py-1.5 relative ${
                  isActive
                    ? 'text-[#B5122B] font-bold after:content-[""] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#B5122B]'
                    : "text-[#667085] hover:text-[#B5122B]"
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        <div className="flex items-center gap-3 md:gap-4">
          <LanguageSwitcher />

          <a
            href={buildWhatsAppLink(settings.whatsapp, quoteMessageFor(null))}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25D366] text-white font-bold text-sm md:text-base px-5 md:px-6 py-2 md:py-2.5 rounded-full hover:bg-[#20bd5a] transition-all active:scale-98 shadow-sm hover:shadow-md cursor-pointer whitespace-nowrap flex items-center gap-2"
          >
            <MessageCircle className="w-4 h-4 md:w-5 md:h-5" />
            <span className="hidden sm:inline">{t("nav.getQuote")}</span>
            <span className="sm:hidden">{t("nav.quote")}</span>
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-[#172033] p-2 rounded-lg hover:bg-[#F8FAFC]"
            aria-label={t("nav.menu")}
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
        <div className="md:hidden bg-white border-b border-[#E5E7EB] px-6 py-4 shadow-lg animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-3 text-start">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`py-2.5 px-3 rounded-lg text-start font-medium text-base transition-colors ${
                  currentTab === item.id
                    ? "bg-[#FEF2F2] text-[#B5122B] font-bold"
                    : "text-[#667085] hover:bg-[#F8FAFC]"
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-3 border-t border-[#E5E7EB] flex items-center justify-between">
              <span className="text-xs text-[#667085]">{t("nav.quickInquiry")}</span>
              <a
                href="tel:01220997663"
                className="flex items-center gap-1.5 text-xs text-[#B5122B] font-bold"
              >
                <Phone className="w-3.5 h-3.5" />
                01220997663
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}