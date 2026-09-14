import React, { useMemo, useState } from 'react';
import { Search, MessageCircle, Sparkles, Eye } from 'lucide-react';
import { ProductImage } from './ProductImages';
import { buildWhatsAppLink, quoteMessageFor } from '../lib/whatsapp';
import { useScrollReveal } from '../lib/useScrollReveal';

function ProductCard({ item, settings, onSelectProduct, delayMs }) {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

  return (
    <div
      ref={ref}
      onClick={() => onSelectProduct(item)}
      style={{
        transitionDelay: `${delayMs}ms`,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
      }}
      className="group bg-white rounded-[20px] border border-[#E5E7EB] overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_60px_-12px_rgba(0,0,0,0.1)] hover:border-[#B5122B]/40 hover:-translate-y-1.5 flex flex-col justify-between cursor-pointer transition-all duration-[350ms] ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform"
    >
      {/* Image Container */}
      <div className="bg-[#F8FAFC] rounded-t-[20px] p-6 sm:p-8 aspect-[4/3] flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#F8FAFC]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-[350ms] pointer-events-none" />
        <ProductImage
          images={item.images?.main ? [item.images.main] : []}
          index={0}
          alt={item.name}
          className="w-full h-full object-contain transition-all duration-[350ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03] group-hover:-translate-y-[2px]"
        />
      </div>

      {/* Content */}
      <div className="p-5 sm:p-6 flex flex-col flex-1">
        {/* Category */}
        <span className="text-[11px] font-semibold tracking-wide uppercase text-[#667085] mb-2 block">
          {item.category}
        </span>

        {/* Product Name */}
        <h3 className="text-[17px] sm:text-lg font-bold text-[#172033] leading-snug mb-2 group-hover:text-[#B5122B] transition-colors duration-[350ms]">
          {item.name}
        </h3>

        {/* Description */}
        <p className="text-[13px] text-[#667085] leading-relaxed line-clamp-2 mb-5 flex-1">
          {item.summary}
        </p>

        {/* Separator */}
        <div className="border-t border-[#F1F5F9] mb-4" />

        {/* CTA Row */}
        <div className="flex items-center gap-2.5">
          <button
            onClick={(e) => { e.stopPropagation(); onSelectProduct(item); }}
            className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-[#172033] bg-[#F8FAFC] hover:bg-[#F1F5F9] border border-[#E5E7EB] rounded-xl transition-all duration-[350ms] ease-[cubic-bezier(0.16,1,0.3,1)] cursor-pointer whitespace-nowrap"
          >
            <Eye className="w-3.5 h-3.5 text-[#B5122B]" />
            <span>التفاصيل</span>
          </button>

          <a
            href={buildWhatsAppLink(settings.whatsapp, quoteMessageFor(item))}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex-1 flex items-center justify-center gap-1.5 px-4 py-2 text-xs sm:text-sm font-bold text-white bg-[#25D366] hover:bg-[#20bd5a] rounded-xl shadow-[0_2px_8px_rgba(37,211,102,0.25)] hover:shadow-[0_4px_16px_rgba(37,211,102,0.35)] transition-all duration-[350ms] ease-[cubic-bezier(0.16,1,0.3,1)] active:scale-95 text-center whitespace-nowrap"
          >
            <MessageCircle className="w-4 h-4" />
            <span>اطلب عرض سعر</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default function ProductsCatalog({ products, categories, settings = {}, onSelectProduct }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const section = useScrollReveal({ threshold: 0.05, rootMargin: '0px 0px -80px 0px' });

  const filteredProducts = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return (products || []).filter((item) => {
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      const matchesQuery =
        !q ||
        item.name?.toLowerCase().includes(q) ||
        item.category?.toLowerCase().includes(q) ||
        item.summary?.toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [selectedCategory, searchQuery, products]);

  return (
    <main className="flex-grow pt-28 pb-20 px-4 sm:px-8 md:px-12 max-w-7xl mx-auto w-full dir-rtl">

      {/* Section Header */}
      <div
        ref={section.ref}
        className="text-right mb-10 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
        style={{
          opacity: section.isVisible ? 1 : 0,
          transform: section.isVisible ? 'translateY(0)' : 'translateY(24px)',
        }}
      >
        <div className="inline-flex items-center gap-2 bg-white border border-[#E5E7EB] px-3.5 py-1 rounded-full mb-3 shadow-xs">
          <Sparkles className="w-4 h-4 text-[#B5122B]" />
          <span className="text-xs font-bold text-[#B5122B]">كتالوج منتجات IEG</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#111827] mb-3">
          أنظمة الترميز والطباعة الصناعية
        </h1>
        <p className="text-base text-[#667085] max-w-2xl">
          طابعات حرارية وأحرف كبيرة، آلات وسم بالليزر CO2 و Fibre و UV، وحلول ترميز متكاملة
          لخطوط الإنتاج، مع دعم فني وتركيب.
        </p>
      </div>

      {/* Search & Filters */}
      <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-4 sm:p-6 mb-10 shadow-[0_1px_3px_rgba(0,0,0,0.04)] space-y-4">
        <div className="relative">
          <input
            type="text"
            placeholder="ابحث عن موديل، فئة، أو استخدام..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-4 pr-11 py-3 bg-[#F8FAFC] border border-[#E5E7EB] rounded-xl text-sm font-medium text-[#172033] placeholder-[#98A2B3] focus:outline-none focus:border-[#B5122B] focus:bg-white transition-all duration-[350ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
          />
          <Search className="w-5 h-5 text-[#98A2B3] absolute top-3.5 right-3.5" />
        </div>

        <div className="flex gap-2 overflow-x-auto pb-2 pt-2 border-t border-[#F1F5F9] scrollbar-none">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-[350ms] ease-[cubic-bezier(0.16,1,0.3,1)] cursor-pointer ${
              selectedCategory === 'all'
                ? 'bg-[#B5122B] text-white shadow-[0_2px_8px_rgba(181,18,43,0.25)]'
                : 'bg-white text-[#172033] hover:bg-[#F8FAFC] border border-[#E5E7EB] hover:border-[#D1D5DB]'
            }`}
          >
            الكل
          </button>
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-[350ms] ease-[cubic-bezier(0.16,1,0.3,1)] cursor-pointer ${
                  isSelected
                    ? 'bg-[#B5122B] text-white shadow-[0_2px_8px_rgba(181,18,43,0.25)]'
                    : 'bg-white text-[#172033] hover:bg-[#F8FAFC] border border-[#E5E7EB] hover:border-[#D1D5DB]'
                }`}
              >
                {cat.name}
              </button>
            );
          })}
        </div>
      </div>

      {/* Products Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProducts.map((item, idx) => (
            <ProductCard
              key={item.id}
              item={item}
              settings={settings}
              onSelectProduct={onSelectProduct}
              delayMs={idx % 3 === 0 ? 0 : idx % 3 === 1 ? 90 : 180}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-white rounded-[20px] border border-[#E5E7EB] p-8 space-y-4 shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
          <div className="w-16 h-16 rounded-full bg-[#F8FAFC] border border-[#E5E7EB] flex items-center justify-center mx-auto mb-2">
            <Search className="w-7 h-7 text-[#98A2B3]" />
          </div>
          <p className="text-lg font-bold text-[#172033]">لا توجد نتائج مطابقة لبحثك</p>
          <p className="text-sm text-[#667085]">جرّب البحث بكلمات أخرى أو اختر قسماً مختلفاً.</p>
          <button
            onClick={() => { setSelectedCategory('all'); setSearchQuery(''); }}
            className="bg-[#B5122B] text-white text-sm font-bold px-6 py-2.5 rounded-full hover:bg-[#8F0F20] transition-all duration-[350ms] ease-[cubic-bezier(0.16,1,0.3,1)] shadow-[0_2px_8px_rgba(181,18,43,0.25)] hover:shadow-[0_4px_16px_rgba(181,18,43,0.35)] cursor-pointer"
          >
            إعادة تعيين البحث
          </button>
        </div>
      )}
    </main>
  );
}