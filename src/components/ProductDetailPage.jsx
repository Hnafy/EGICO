import React, { useMemo, useState } from 'react';
import {
  ChevronLeft,
  FileText,
  MessageCircle,
  CheckCircle2,
  Box,
  MonitorSmartphone,
  Sparkles,
  ShieldCheck,
  Zap,
  Layers,
  BadgePercent,
  Rotate3D,
} from 'lucide-react';
import { ProductImage, Lightbox } from './ProductImages';
import { buildWhatsAppLink, quoteMessageFor } from '../lib/whatsapp';

const ADVANTAGE_ICONS = [Box, MonitorSmartphone, Sparkles, ShieldCheck, Zap, Layers, BadgePercent, Rotate3D];

export default function ProductDetailPage({
  product,
  products,
  settings,
  onBackToProducts,
  onSelectProduct,
}) {
  const galleryImages = useMemo(() => {
    if (!product || !product.images) return [];
    const main = [product.images.main].filter(Boolean);
    const gallery = (product.images.gallery || []).filter(Boolean);
    return [...main, ...gallery];
  }, [product]);

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');

  const highlights = (product.advantages || []).slice(0, 4);
  const keyFeatureGroups = product.keyFeatures || [];
  const specGroups = product.specifications || [];
  const relatedProducts = (products || [])
    .filter((p) => p.id !== product.id)
    .slice(0, 3);

  const handleSelectProduct = (item) => {
    onSelectProduct(item);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main className="flex-grow pt-28 pb-20 px-4 sm:px-8 md:px-12 max-w-7xl mx-auto w-full dir-rtl">

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="text-[#594040] mb-8 flex flex-wrap gap-2 items-center text-sm font-semibold">
        <button onClick={onBackToProducts} className="hover:text-[#81001c] transition-colors cursor-pointer">
          المنتجات
        </button>
        <ChevronLeft className="w-4 h-4 text-[#8d7070]" />
        <span className="hover:text-[#81001c]">{product.category}</span>
        <ChevronLeft className="w-4 h-4 text-[#8d7070]" />
        <span className="text-[#1e1b1c] font-bold">{product.name}</span>
      </nav>

      {/* Hero grid: gallery + summary */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16">

        {/* Gallery */}
        <div className="flex flex-col gap-4">
          <div
            className="bg-[#fbf1f2] rounded-2xl border border-[#e1bebe] p-6 flex items-center justify-center aspect-square relative shadow-xs overflow-hidden cursor-zoom-in group"
            onClick={() => galleryImages.length > 0 && setLightboxOpen(true)}
          >
            <ProductImage
              images={galleryImages}
              index={selectedIndex}
              alt={product.name}
              className="object-contain w-full h-full max-h-[440px] transition-transform duration-300 group-hover:scale-105"
            />
            <span className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-3 py-1.5 rounded-full text-[11px] font-bold text-[#594040] flex items-center gap-1.5 shadow-xs">
              <Zap className="w-3.5 h-3.5 text-[#81001c]" />
              اضغط للتكبير
            </span>
          </div>

          {galleryImages.length > 1 && (
            <div className="flex gap-4 overflow-x-auto pb-2">
              {galleryImages.map((img, idx) => (
                <button
                  key={img}
                  onClick={() => setSelectedIndex(idx)}
                  className={`w-24 h-24 flex-shrink-0 bg-[#fbf1f2] rounded-xl p-2 transition-all cursor-pointer ${
                    selectedIndex === idx
                      ? 'border-2 border-[#81001c] ring-2 ring-[#ffdad9] shadow-sm'
                      : 'border border-[#e1bebe] hover:border-[#81001c]/50 opacity-80 hover:opacity-100'
                  }`}
                >
                  <ProductImage
                    images={[img]}
                    index={0}
                    alt={`${product.name} ${idx + 1}`}
                    className="object-cover w-full h-full rounded-lg"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Summary column */}
        <div className="flex flex-col text-right">

          <span className="inline-block bg-[#efe6e7] text-[#1e1b1c] font-bold text-xs md:text-sm px-3.5 py-1.5 rounded-full mb-3 w-fit">
            {(product.brand || 'IEGCO')}
          </span>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#1e1b1c] leading-tight mb-2">
            {product.name}
          </h1>
          <div className="flex items-center gap-3 mb-4 text-sm sm:text-base font-bold text-[#81001c]">
            <span>{product.category}</span>
          </div>

          <p className="text-base sm:text-lg text-[#594040] leading-relaxed mb-6">
            {product.summary}
          </p>

          {/* Quick Highlights */}
          {highlights.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-8">
              {highlights.map((adv, idx) => {
                const Icon = ADVANTAGE_ICONS[idx % ADVANTAGE_ICONS.length];
                return (
                  <div
                    key={idx}
                    className="flex items-start gap-3.5 p-4 bg-[#fbf1f2] rounded-xl border border-[#e1bebe]/70 hover:border-[#81001c]/40 transition-colors"
                  >
                    <div className="p-2 rounded-lg bg-white text-[#81001c] shadow-2xs flex-shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-[#1e1b1c] mb-0.5">{adv.title}</h4>
                      <p className="text-xs sm:text-sm text-[#594040] font-medium leading-relaxed">{adv.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* CTA */}
          <div className="bg-white border border-[#e1bebe] rounded-2xl p-6 sm:p-7 shadow-xs space-y-4">
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={buildWhatsAppLink(settings.whatsapp, quoteMessageFor(product))}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-[#25D366] text-white font-bold text-base sm:text-lg py-3.5 rounded-xl hover:bg-[#20bd5a] transition-all shadow-md hover:shadow-lg active:scale-98 flex items-center justify-center gap-2 cursor-pointer text-center"
              >
                <MessageCircle className="w-5 h-5" />
                <span>اطلب عرض سعر</span>
              </a>

              {product.pdfUrl && (
                <a
                  href={product.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-[#fbf1f2] border border-[#e1bebe] text-[#81001c] text-base sm:text-lg py-3.5 rounded-xl hover:bg-[#efe6e7] transition-all font-bold flex items-center justify-center gap-2 shadow-xs"
                >
                  <FileText className="w-5 h-5" />
                  <span>تحميل الكاتالوج PDF</span>
                </a>
              )}
            </div>

            <div className="pt-3 border-t border-[#f5eced] text-xs text-[#594040] text-center">
              سيصلك عرض سعر رسمي وموعد توريد عبر واتساب خلال دقائق
            </div>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section className="mb-20">
        <div className="border-b border-[#e1bebe] flex gap-4 sm:gap-8 mb-8 overflow-x-auto">
          <button
            onClick={() => setActiveTab('overview')}
            className={`pb-3 font-bold text-base sm:text-lg transition-all relative whitespace-nowrap ${
              activeTab === 'overview'
                ? 'text-[#81001c] after:content-[""] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#81001c]'
                : 'text-[#594040] hover:text-[#1e1b1c]'
            }`}
          >
            المميزات والاستخدامات
          </button>
          <button
            onClick={() => setActiveTab('specs')}
            className={`pb-3 font-bold text-base sm:text-lg transition-all relative whitespace-nowrap ${
              activeTab === 'specs'
                ? 'text-[#81001c] after:content-[""] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#81001c]'
                : 'text-[#594040] hover:text-[#1e1b1c]'
            }`}
          >
            المواصفات الفنية
          </button>
        </div>

        {/* Tab 1: Overview & Advantages */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            <div className="bg-white rounded-2xl border border-[#e1bebe] p-8 text-[#594040] leading-relaxed shadow-xs">
              <h3 className="text-xl font-bold text-[#1e1b1c] mb-3">
                نظرة عامة على {product.name}
              </h3>
              <p className="text-base">{product.summary}</p>

              {keyFeatureGroups.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-6">
                  {keyFeatureGroups.map((group, gi) => (
                    <div key={gi} className="p-5 bg-[#fbf1f2] rounded-xl border border-[#e1bebe]">
                      <h5 className="font-bold text-[#81001c] mb-3 flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4" />
                        {group.category}
                      </h5>
                      <ul className="space-y-2 text-sm">
                        {group.points.map((point, pi) => (
                          <li key={pi} className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-[#25a26e] flex-shrink-0 mt-0.5" />
                            <span className="text-[#1e1b1c]">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {(product.advantages || []).length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {(product.advantages || []).map((adv, idx) => {
                  const Icon = ADVANTAGE_ICONS[idx % ADVANTAGE_ICONS.length];
                  return (
                    <div key={idx} className="bg-white rounded-2xl border border-[#e1bebe] p-6 shadow-xs">
                      <div className="w-12 h-12 rounded-xl bg-[#ffdad9] text-[#81001c] flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6" />
                      </div>
                      <h4 className="font-bold text-base text-[#1e1b1c] mb-1.5">{adv.title}</h4>
                      <p className="text-sm text-[#594040] leading-relaxed">{adv.description}</p>
                    </div>
                  );
                })}
              </div>
            )}

            {galleryImages.length > 1 && (
              <div>
                <h4 className="text-lg font-bold text-[#1e1b1c] mb-4">
                  صور حقيقية من زوايا مختلفة
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {galleryImages.map((img, idx) => (
                    <div
                      key={img}
                      className="bg-[#fbf1f2] rounded-xl border border-[#e1bebe] p-3 aspect-square flex items-center justify-center cursor-zoom-in"
                      onClick={() => { setSelectedIndex(idx); setLightboxOpen(true); }}
                    >
                      <ProductImage images={[img]} index={0} alt={`${product.name} ${idx + 1}`} className="w-full h-full object-contain" />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Tab 2: Technical Specifications (grouped table) */}
        {activeTab === 'specs' && (
          <div className="space-y-8">
            {specGroups.length === 0 && (
              <div className="bg-white rounded-2xl border border-[#e1bebe] p-8 text-[#594040] text-center">
                لا تتوفر مواصفات مسجلة لهذا المنتج.
              </div>
            )}
            {specGroups.map((group, gi) => (
              <div key={gi} className="bg-white rounded-2xl border border-[#e1bebe] overflow-hidden shadow-xs">
                <div className="bg-[#1e1b1c] text-white px-5 py-3.5 font-bold text-sm sm:text-base flex items-center gap-2">
                  {group.groupName}
                </div>
                <div className="divide-y divide-[#f5eced]">
                  {group.fields.map((field, fi) => (
                    <div
                      key={fi}
                      className={`grid grid-cols-1 sm:grid-cols-3 text-sm ${
                        fi % 2 === 0 ? 'bg-[#fff8f8]' : 'bg-white'
                      }`}
                    >
                      <span className="font-bold text-[#1e1b1c] px-5 py-3 sm:col-span-1">
                        {field.label}
                      </span>
                      <span className="text-[#594040] px-5 py-3 sm:col-span-2 font-medium border-t sm:border-t-0 border-[#f5eced]">
                        {field.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Related products */}
      {relatedProducts.length > 0 && (
        <section>
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-[#1e1b1c]">منتجات أخرى ذات صلة</h3>
            <button
              onClick={onBackToProducts}
              className="text-sm font-bold text-[#81001c] hover:underline flex items-center gap-1"
            >
              <span>عرض كافة المنتجات</span>
              <ChevronLeft className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedProducts.map((item) => (
              <div
                key={item.id}
                onClick={() => handleSelectProduct(item)}
                className="bg-white rounded-2xl border border-[#e1bebe] p-5 shadow-xs hover:shadow-md transition-all cursor-pointer flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  <div className="bg-[#fbf1f2] rounded-xl p-4 aspect-square flex items-center justify-center mb-4 overflow-hidden">
                    <ProductImage
                      images={item.images?.main ? [item.images.main] : []}
                      index={0}
                      alt={item.name}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <span className="text-xs font-semibold text-[#81001c] bg-[#ffdad9] px-2.5 py-1 rounded-full">
                    {item.category}
                  </span>
                  <h4 className="text-lg font-bold text-[#1e1b1c] mt-2 mb-1 group-hover:text-[#81001c] transition-colors">
                    {item.name}
                  </h4>
                  <p className="text-xs text-[#594040] line-clamp-2 leading-relaxed">
                    {item.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#f5eced] flex items-center justify-between gap-2">
                  <span className="text-xs font-bold text-[#1e1b1c] bg-[#efe6e7] hover:bg-[#a6192e] hover:text-white px-3 py-1.5 rounded-lg transition-colors cursor-pointer">
                    التفاصيل
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {lightboxOpen && galleryImages.length > 0 && (
        <Lightbox
          images={galleryImages}
          index={selectedIndex}
          title={product.name}
          onClose={() => setLightboxOpen(false)}
          onNavigate={setSelectedIndex}
        />
      )}
    </main>
  );
}