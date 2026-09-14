import React, { useEffect, useRef, useState } from "react";
import {
  ArrowLeft,
  CheckCircle2,
  MessageCircle,
  Zap,
  Award,
} from "lucide-react";
import { buildWhatsAppLink, quoteMessageFor } from "../lib/whatsapp";
import { useScrollReveal } from "../lib/useScrollReveal";

export default function HeroSection({
  featuredProduct,
  settings = {},
  onBrowseProducts,
}) {
  const [parallax, setParallax] = useState({ bg: 0, content: 0 });
  const scrollRaf = useRef(null);

  // Card reveals: the three feature badges + the featured product card
  const featureReveals = [
    useScrollReveal(),
    useScrollReveal(),
    useScrollReveal(),
  ];
  const productReveal = useScrollReveal();

  // Subtle scroll parallax (background opposite direction, content slightly up)
  useEffect(() => {
    if (typeof window === "undefined") return;

    let ticking = false;
    const update = () => {
      const y = Math.min(window.scrollY, 480);
      const progress = y / 480;
      setParallax({ bg: progress * 20, content: -progress * 10 });
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        scrollRaf.current = requestAnimationFrame(update);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    update();
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (scrollRaf.current) cancelAnimationFrame(scrollRaf.current);
    };
  }, []);

  return (
    <section className="relative min-h-[82vh] flex items-center justify-center overflow-hidden border-b border-[#E5E7EB] bg-[#FAFBFC]">
      {/* Background image with slow zoom + parallax */}
      <div
        className="absolute inset-0 z-0"
        style={{
          transform: `translateY(${parallax.bg}px)`,
          willChange: "transform",
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2000&auto=format&fit=crop"
          alt="IEG Barcode Printers Industrial Workspace"
          className="w-full h-full object-cover object-center hero-bg-anim"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-[#FFFFFF]/95 via-[#FFFFFF]/85 to-[#FFFFFF]/40 md:from-[#FFFFFF]/95 md:via-[#FFFFFF]/80 md:to-transparent"></div>
        <div className="absolute inset-0 bg-[#FAFBFC]/5 mix-blend-multiply"></div>
      </div>

      {/* Hero content */}
      <div
        className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-8 md:px-12 py-16 md:py-24 flex flex-col md:flex-row items-center justify-between hero-content-fade"
        style={{
          transform: `translateY(${parallax.content}px)`,
          willChange: "transform",
        }}
      >
        <div className="w-full md:w-3/5 text-right space-y-6">
          {/* 1. Badge */}
          <div
            className="inline-flex items-center gap-2 bg-white border border-[#E5E7EB] px-3.5 py-1.5 rounded-full shadow-xs hero-reveal hero-reveal-badge"
            style={{ animationDelay: "0ms" }}
          >
            <span className="w-2 h-2 rounded-full bg-[#B5122B] animate-pulse"></span>
            <span className="text-xs md:text-sm font-semibold text-[#B5122B]">
              المجموعة الهندسيه المتكاملة
            </span>
          </div>

          {/* 2. Main Heading — masked word-by-word rise */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-black text-[#111827] leading-[1.25] tracking-tight">
            <span className="word-mask">
              <span className="word-inner" style={{ animationDelay: "100ms" }}>
                حلول
              </span>
            </span>{" "}
            <span className="word-mask">
              <span className="word-inner" style={{ animationDelay: "170ms" }}>
                متكاملة
              </span>
            </span>{" "}
            <span className="word-mask">
              <span className="word-inner" style={{ animationDelay: "240ms" }}>
                لطباعة
              </span>
            </span>{" "}
            <span className="word-mask">
              <span className="word-inner" style={{ animationDelay: "310ms" }}>
                <span className="text-[#B5122B]">الباركود</span>
              </span>
            </span>{" "}
            <span className="word-mask">
              <span className="word-inner" style={{ animationDelay: "380ms" }}>
                والملصقات
              </span>
            </span>
          </h1>

          {/* 3. Description — blur rise reveal */}
          <p className="text-base sm:text-lg md:text-xl text-[#667085] leading-relaxed max-w-2xl hero-desc-in">
            أنظمة ترميز وطباعة صناعية عالية الجودة للمصانع وخطوط الإنتاج، من
            الطابعات الحرارية إلى آلات الوسم بالليزر، مع دعم فني وتركيب.
          </p>

          {/* 4. Feature cards — scroll reveal with stagger */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
            <div
              ref={featureReveals[0].ref}
              className="flex items-center gap-2 bg-white backdrop-blur-xs border border-[#E5E7EB] px-3 py-2 rounded-lg shadow-xs"
              style={{
                opacity: featureReveals[0].isVisible ? 1 : 0,
                transform: featureReveals[0].isVisible
                  ? "translateY(0)"
                  : "translateY(22px)",
                transition:
                  "opacity 0.55s cubic-bezier(0.16, 1, 0.3, 1) 0.05s, transform 0.55s cubic-bezier(0.16, 1, 0.3, 1) 0.05s",
              }}
            >
              <CheckCircle2 className="w-4 h-4 text-[#B5122B] flex-shrink-0" />
              <span className="text-xs font-bold text-[#111827]">
                ضمان معتمد 100%
              </span>
            </div>
            <div
              ref={featureReveals[1].ref}
              className="flex items-center gap-2 bg-white backdrop-blur-xs border border-[#E5E7EB] px-3 py-2 rounded-lg shadow-xs"
              style={{
                opacity: featureReveals[1].isVisible ? 1 : 0,
                transform: featureReveals[1].isVisible
                  ? "translateY(0)"
                  : "translateY(22px)",
                transition:
                  "opacity 0.55s cubic-bezier(0.16, 1, 0.3, 1) 0.15s, transform 0.55s cubic-bezier(0.16, 1, 0.3, 1) 0.15s",
              }}
            >
              <Zap className="w-4 h-4 text-[#B5122B] flex-shrink-0" />
              <span className="text-xs font-bold text-[#111827]">
                توريد فوري للمصانع
              </span>
            </div>
            <div
              ref={featureReveals[2].ref}
              className="flex items-center gap-2 bg-white backdrop-blur-xs border border-[#E5E7EB] px-3 py-2 rounded-lg shadow-xs col-span-2 sm:col-span-1"
              style={{
                opacity: featureReveals[2].isVisible ? 1 : 0,
                transform: featureReveals[2].isVisible
                  ? "translateY(0)"
                  : "translateY(22px)",
                transition:
                  "opacity 0.55s cubic-bezier(0.16, 1, 0.3, 1) 0.25s, transform 0.55s cubic-bezier(0.16, 1, 0.3, 1) 0.25s",
              }}
            >
              <Award className="w-4 h-4 text-[#B5122B] flex-shrink-0" />
              <span className="text-xs font-bold text-[#111827]">
                دعم فني وتركيب مجاني
              </span>
            </div>
          </div>

          {/* 5. Buttons */}
          <div className="flex flex-wrap items-center gap-4 justify-start pt-4">
            <a
              href={buildWhatsAppLink(
                settings.whatsapp,
                quoteMessageFor(featuredProduct),
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white px-8 py-3.5 rounded-full font-bold text-base hover:bg-[#20bd5a] cursor-pointer flex items-center gap-2 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(37,211,102,0.35)] active:scale-[0.98] hero-reveal hero-reveal-btn"
              style={{ animationDelay: "650ms" }}
            >
              <MessageCircle className="w-5 h-5" />
              <span>اطلب عرض سعر</span>
              <ArrowLeft className="w-4 h-4" />
            </a>

            <button
              onClick={onBrowseProducts}
              className="bg-white border border-[#E5E7EB] text-[#172033] px-8 py-3.5 rounded-full font-bold text-base cursor-pointer shadow-xs transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#F8FAFC] hover:border-[#B5122B]/40 active:scale-[0.98] hero-reveal hero-reveal-btn"
              style={{ animationDelay: "650ms" }}
            >
              تصفح المنتجات
            </button>
          </div>
        </div>

        {featuredProduct && (
          <div className="w-full md:w-2/5 mt-10 md:mt-0 flex justify-center md:justify-end">
            <div
              ref={productReveal.ref}
              className="relative group w-full max-w-sm"
              style={{
                opacity: productReveal.isVisible ? 1 : 0,
                transform: productReveal.isVisible
                  ? "translateX(0) scale(1)"
                  : "translateX(-35px) scale(0.96)",
                transition:
                  "opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.45s, transform 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.45s",
              }}
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-[#FEF2F2] to-[#FEE2E2]/60 rounded-2xl blur-xl opacity-70 group-hover:opacity-100 transition duration-500 hero-glow-pulse"></div>

              <div className="relative bg-white rounded-2xl p-6 border border-[#E5E7EB] shadow-xl hero-product-float">
                <div className="flex items-center justify-between border-b border-[#F8FAFC] pb-4 mb-4">
                  <div>
                    <span className="text-xs font-semibold text-[#B5122B] block">
                      {featuredProduct.category}
                    </span>
                    <h3 className="font-bold text-base text-[#111827]">
                      {featuredProduct.name}
                    </h3>
                  </div>
                  <span className="bg-[#B5122B] text-white text-xs font-bold px-2.5 py-1 rounded-full whitespace-nowrap">
                    الأكثر طلباً
                  </span>
                </div>

                <img
                  src={featuredProduct.images?.main}
                  alt={featuredProduct.name}
                  className="w-full h-44 object-contain rounded-lg bg-[#F8FAFC] p-2"
                />

                <p className="mt-4 text-xs text-[#667085] leading-relaxed line-clamp-2 text-right">
                  {featuredProduct.summary}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
