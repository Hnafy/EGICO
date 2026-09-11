import React from 'react';
import { ArrowLeft, CheckCircle2, MessageCircle, Zap, Award } from 'lucide-react';

export default function HeroSection({ featuredProduct, onRequestQuote, onBrowseProducts }) {
  return (
    <section className="relative min-h-[82vh] flex items-center justify-center overflow-hidden border-b border-[#e1bebe]/40">

      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2000&auto=format&fit=crop"
          alt="IEG Barcode Printers Industrial Workspace"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-[#fff8f8]/95 via-[#fff8f8]/85 to-[#fff8f8]/40 md:from-[#fff8f8]/95 md:via-[#fff8f8]/80 md:to-transparent"></div>
        <div className="absolute inset-0 bg-[#81001c]/5 mix-blend-multiply"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-8 md:px-12 py-16 md:py-24 flex flex-col md:flex-row items-center justify-between">

        <div className="w-full md:w-3/5 text-right space-y-6">
          <div className="inline-flex items-center gap-2 bg-[#fbf1f2] border border-[#e1bebe] px-3.5 py-1.5 rounded-full shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#81001c] animate-pulse"></span>
            <span className="text-xs md:text-sm font-semibold text-[#81001c]">
              الموزع والوكيل الهندسي المعتمد في مصر
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-black text-[#1e1b1c] leading-[1.25] tracking-tight">
            حلول متكاملة لطباعة <span className="text-[#81001c] relative inline-block">الباركود</span> والملصقات
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-[#594040] leading-relaxed max-w-2xl">
            أنظمة ترميز وطباعة صناعية عالية الجودة للمصانع وخطوط الإنتاج، من الطابعات الحرارية
            إلى آلات الوسم بالليزر، مع دعم فني وتركيب.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
            <div className="flex items-center gap-2 bg-white/75 backdrop-blur-xs border border-[#e1bebe]/80 px-3 py-2 rounded-lg">
              <CheckCircle2 className="w-4 h-4 text-[#81001c] flex-shrink-0" />
              <span className="text-xs font-bold text-[#1e1b1c]">ضمان معتمد 100%</span>
            </div>
            <div className="flex items-center gap-2 bg-white/75 backdrop-blur-xs border border-[#e1bebe]/80 px-3 py-2 rounded-lg">
              <Zap className="w-4 h-4 text-[#81001c] flex-shrink-0" />
              <span className="text-xs font-bold text-[#1e1b1c]">توريد فوري للمصانع</span>
            </div>
            <div className="flex items-center gap-2 bg-white/75 backdrop-blur-xs border border-[#e1bebe]/80 px-3 py-2 rounded-lg col-span-2 sm:col-span-1">
              <Award className="w-4 h-4 text-[#81001c] flex-shrink-0" />
              <span className="text-xs font-bold text-[#1e1b1c]">دعم فني وتركيب مجاني</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 justify-start pt-4">
            <button
              onClick={onRequestQuote}
              className="bg-[#25D366] text-white px-8 py-3.5 rounded-full font-bold text-base hover:bg-[#20bd5a] transition-all shadow-md hover:shadow-lg active:scale-98 cursor-pointer flex items-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              <span>اطلب عرض سعر</span>
              <ArrowLeft className="w-4 h-4" />
            </button>

            <button
              onClick={onBrowseProducts}
              className="bg-white/90 backdrop-blur-xs border border-[#5d5e60] text-[#1e1b1c] px-8 py-3.5 rounded-full font-bold text-base hover:bg-[#efe6e7] transition-all cursor-pointer shadow-xs"
            >
              تصفح المنتجات
            </button>
          </div>
        </div>

        {featuredProduct && (
          <div className="w-full md:w-2/5 mt-10 md:mt-0 flex justify-center md:justify-end">
            <div className="relative group w-full max-w-sm">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#ffdad9] to-[#ffb3b3]/30 rounded-2xl blur-xl opacity-70 group-hover:opacity-100 transition duration-500"></div>

              <div className="relative bg-white/95 backdrop-blur-md rounded-2xl p-6 border border-[#e1bebe] shadow-xl">
                <div className="flex items-center justify-between border-b border-[#f5eced] pb-4 mb-4">
                  <div>
                    <span className="text-xs font-semibold text-[#81001c] block">
                      {featuredProduct.category}
                    </span>
                    <h3 className="font-bold text-base text-[#1e1b1c]">
                      {featuredProduct.name}
                    </h3>
                  </div>
                  <span className="bg-[#a6192e] text-white text-xs font-bold px-2.5 py-1 rounded-full whitespace-nowrap">
                    الأكثر طلباً
                  </span>
                </div>

                <img
                  src={featuredProduct.images?.main}
                  alt={featuredProduct.name}
                  className="w-full h-44 object-contain rounded-lg bg-[#fbf1f2] p-2"
                />

                <p className="mt-4 text-xs text-[#594040] leading-relaxed line-clamp-2 text-right">
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