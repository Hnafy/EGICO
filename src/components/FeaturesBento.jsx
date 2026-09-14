import React from 'react';
import { CheckCircle, DollarSign, Headphones, Zap, ShieldCheck } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function FeaturesBento() {
  const { t } = useTranslation();
  return (
    <section className="py-20 bg-white" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-3">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#111827]">
            {t("features.title")}
          </h2>
          <p className="text-base sm:text-lg text-[#667085] max-w-2xl mx-auto leading-relaxed">
            {t("features.subtitle")}
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Feature 1: Large Card (2 Cols) - جودة عالية */}
          <div className="md:col-span-2 bg-[#F8FAFC] rounded-2xl p-8 border border-[#E5E7EB] shadow-xs hover:shadow-md transition-all relative overflow-hidden group">
            {/* Ambient Radial Highlight */}
            <div className="absolute -left-12 -top-12 w-48 h-48 bg-[#FEF2F2] rounded-full blur-3xl group-hover:bg-[#FEE2E2] transition-colors"></div>
            
            <div className="relative z-10 text-start">
              <div className="w-12 h-12 bg-[#B5122B] text-white rounded-xl flex items-center justify-center mb-6 shadow-sm">
                <CheckCircle className="w-6 h-6" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#111827] mb-3">
                {t("features.quality.title")}
              </h3>
              <p className="text-[#667085] text-base leading-relaxed max-w-xl">
                {t("features.quality.desc")}
              </p>
            </div>
          </div>

          {/* Feature 2: أسعار تنافسية */}
          <div className="bg-[#F8FAFC] rounded-2xl p-8 border border-[#E5E7EB] shadow-xs hover:shadow-md transition-all text-start">
            <div className="w-12 h-12 bg-[#F1F5F9] text-[#172033] rounded-xl flex items-center justify-center mb-6 shadow-xs">
              <DollarSign className="w-6 h-6 text-[#172033]" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#111827] mb-3">
              {t("features.pricing.title")}
            </h3>
            <p className="text-[#667085] text-base leading-relaxed">
              {t("features.pricing.desc")}
            </p>
          </div>

          {/* Feature 3: دعم فني متميز */}
          <div className="bg-[#F8FAFC] rounded-2xl p-8 border border-[#E5E7EB] shadow-xs hover:shadow-md transition-all text-start">
            <div className="w-12 h-12 bg-[#172033] text-white rounded-xl flex items-center justify-center mb-6 shadow-xs">
              <Headphones className="w-6 h-6" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#111827] mb-3">
              {t("features.techSupport.title")}
            </h3>
            <p className="text-[#667085] text-base leading-relaxed">
              {t("features.techSupport.desc")}
            </p>
          </div>

          {/* Feature 4: Wide Card (2 Cols) - سرعة التنفيذ */}
          <div className="md:col-span-2 bg-[#F8FAFC] rounded-2xl p-8 border border-[#E5E7EB] shadow-xs hover:shadow-md transition-all text-start relative overflow-hidden">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="flex-1">
                <div className="w-12 h-12 bg-[#FEF2F2] text-[#B5122B] rounded-xl flex items-center justify-center mb-6 shadow-xs">
                  <Zap className="w-6 h-6 text-[#B5122B]" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#111827] mb-3">
                  {t("features.speed.title")}
                </h3>
                <p className="text-[#667085] text-base leading-relaxed">
                  {t("features.speed.desc")}
                </p>
              </div>

              {/* Stat Pill */}
              <div className="bg-white border border-[#E5E7EB] px-6 py-4 rounded-xl flex items-center gap-4 self-stretch md:self-auto justify-center">
                <ShieldCheck className="w-8 h-8 text-[#B5122B]" />
                <div className="text-start">
                  <span className="block text-xl font-extrabold text-[#B5122B]">{t("features.deliveryTime")}</span>
                  <span className="text-xs text-[#667085]">{t("features.deliveryNote")}</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}