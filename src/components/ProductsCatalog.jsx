import React, { useMemo, useState } from 'react';
import { Search, MessageCircle, Sparkles } from 'lucide-react';
import { ProductImage } from './ProductImages';

export default function ProductsCatalog({ products, categories, onSelectProduct, onRequestQuote }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

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

      <div className="text-right mb-10">
        <div className="inline-flex items-center gap-2 bg-[#fbf1f2] border border-[#e1bebe] px-3.5 py-1 rounded-full mb-3">
          <Sparkles className="w-4 h-4 text-[#81001c]" />
          <span className="text-xs font-bold text-[#81001c]">كتالوج منتجات IEG</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1e1b1c] mb-3">
          أنظمة الترميز والطباعة الصناعية
        </h1>
        <p className="text-base text-[#594040] max-w-2xl">
          طابعات حرارية وأحرف كبيرة، آلات وسم بالليزر CO2 و Fibre و UV، وحلول ترميز متكاملة
          لخطوط الإنتاج، مع دعم فني وتركيب.
        </p>
      </div>

      <div className="bg-white border border-[#e1bebe] rounded-2xl p-4 sm:p-6 mb-10 shadow-xs space-y-4">
        <div className="relative">
          <input
            type="text"
            placeholder="ابحث عن موديل، فئة، أو استخدام..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-4 pr-11 py-3 bg-[#fbf1f2] border border-[#e1bebe] rounded-xl text-sm font-medium text-[#1e1b1c] placeholder-[#8d7070] focus:outline-none focus:border-[#81001c] focus:bg-white transition-colors"
          />
          <Search className="w-5 h-5 text-[#8d7070] absolute top-3.5 right-3.5" />
        </div>

        <div className="flex gap-2 overflow-x-auto pb-2 pt-2 border-t border-[#f5eced]">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer ${
              selectedCategory === 'all'
                ? 'bg-[#a6192e] text-white shadow-xs'
                : 'bg-[#fbf1f2] text-[#594040] hover:bg-[#efe6e7] border border-[#e1bebe]/60'
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
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-[#a6192e] text-white shadow-xs'
                    : 'bg-[#fbf1f2] text-[#594040] hover:bg-[#efe6e7] border border-[#e1bebe]/60'
                }`}
              >
                {cat.name}
              </button>
            );
          })}
        </div>
      </div>

      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProducts.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl border border-[#e1bebe] overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div className="p-6">
                <div
                  onClick={() => onSelectProduct(item)}
                  className="bg-[#fbf1f2] rounded-xl p-6 aspect-square flex items-center justify-center mb-5 cursor-pointer relative overflow-hidden"
                >
                  <ProductImage
                    images={item.images?.main ? [item.images.main] : []}
                    index={0}
                    alt={item.name}
                    className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                <span className="text-xs font-bold text-[#81001c] bg-[#ffdad9] px-2.5 py-1 rounded-md inline-block mb-2">
                  {item.category}
                </span>

                <h3
                  onClick={() => onSelectProduct(item)}
                  className="text-lg sm:text-xl font-bold text-[#1e1b1c] mb-2 cursor-pointer hover:text-[#81001c] transition-colors leading-snug"
                >
                  {item.name}
                </h3>

                <p className="text-xs sm:text-sm text-[#594040] line-clamp-2 leading-relaxed mb-4">
                  {item.summary}
                </p>
              </div>

              <div className="p-6 pt-0">
                <div className="border-t border-[#f5eced] pt-4 flex items-center justify-between gap-2">
                  <button
                    onClick={() => onSelectProduct(item)}
                    className="px-3.5 py-2 text-xs font-bold text-[#594040] bg-[#fbf1f2] hover:bg-[#efe6e7] rounded-xl transition-colors"
                  >
                    التفاصيل
                  </button>

                  <button
                    onClick={() => onRequestQuote(item)}
                    className="px-4 py-2 text-xs sm:text-sm font-bold text-white bg-[#25D366] hover:bg-[#20bd5a] rounded-xl shadow-xs hover:shadow-md transition-all active:scale-95 flex items-center gap-1.5 cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>اطلب عرض سعر</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-white rounded-2xl border border-[#e1bebe] p-8 space-y-4">
          <p className="text-lg font-bold text-[#1e1b1c]">لا توجد نتائج مطابقة لبحثك</p>
          <p className="text-sm text-[#594040]">جرّب البحث بكلمات أخرى أو اختر قسماً مختلفاً.</p>
          <button
            onClick={() => { setSelectedCategory('all'); setSearchQuery(''); }}
            className="bg-[#a6192e] text-white text-sm font-bold px-6 py-2.5 rounded-full"
          >
            إعادة تعيين البحث
          </button>
        </div>
      )}
    </main>
  );
}