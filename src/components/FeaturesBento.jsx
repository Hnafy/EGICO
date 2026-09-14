import React from 'react';
import { CheckCircle, DollarSign, Headphones, Zap, ShieldCheck, Cpu } from 'lucide-react';

export default function FeaturesBento() {
  return (
    <section className="py-20 bg-white" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-3">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#111827]">
            لماذا تختار مجموعتنا؟
          </h2>
          <p className="text-base sm:text-lg text-[#667085] max-w-2xl mx-auto leading-relaxed">
            نقدم لك أفضل الحلول التي تجمع بين الجودة العالية والسعر التنافسي لضمان استمرارية أعمالك.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 dir-rtl">
          
          {/* Feature 1: Large Card (2 Cols) - جودة عالية */}
          <div className="md:col-span-2 bg-[#F8FAFC] rounded-2xl p-8 border border-[#E5E7EB] shadow-xs hover:shadow-md transition-all relative overflow-hidden group">
            {/* Ambient Radial Highlight */}
            <div className="absolute -left-12 -top-12 w-48 h-48 bg-[#FEF2F2] rounded-full blur-3xl group-hover:bg-[#FEE2E2] transition-colors"></div>
            
            <div className="relative z-10 text-right">
              <div className="w-12 h-12 bg-[#B5122B] text-white rounded-xl flex items-center justify-center mb-6 shadow-sm">
                <CheckCircle className="w-6 h-6" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#111827] mb-3">
                جودة عالية
              </h3>
              <p className="text-[#667085] text-base leading-relaxed max-w-xl">
                أحدث التقنيات في عالم الطباعة لضمان وضوح ودقة لا مثيل لها في كل ملصق، مع دعم معايير الباركود العالمية والباركود ثنائي الأبعاد QR.
              </p>
            </div>
          </div>

          {/* Feature 2: أسعار تنافسية */}
          <div className="bg-[#F8FAFC] rounded-2xl p-8 border border-[#E5E7EB] shadow-xs hover:shadow-md transition-all text-right">
            <div className="w-12 h-12 bg-[#F1F5F9] text-[#172033] rounded-xl flex items-center justify-center mb-6 shadow-xs">
              <DollarSign className="w-6 h-6 text-[#172033]" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#111827] mb-3">
              أسعار تنافسية
            </h3>
            <p className="text-[#667085] text-base leading-relaxed">
              نقدم أفضل قيمة مقابل استثمارك مع خيارات متنوعة تناسب ميزانيتك، مع خصومات حصرية للمصانع والكميات.
            </p>
          </div>

          {/* Feature 3: دعم فني متميز */}
          <div className="bg-[#F8FAFC] rounded-2xl p-8 border border-[#E5E7EB] shadow-xs hover:shadow-md transition-all text-right">
            <div className="w-12 h-12 bg-[#172033] text-white rounded-xl flex items-center justify-center mb-6 shadow-xs">
              <Headphones className="w-6 h-6" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#111827] mb-3">
              دعم فني متميز
            </h3>
            <p className="text-[#667085] text-base leading-relaxed">
              فريق مهندسين متخصص جاهز للرد على استفساراتك وتدريب فريقك وحل أي مشكلة تقنية قد تواجهك فوراً.
            </p>
          </div>

          {/* Feature 4: Wide Card (2 Cols) - سرعة التنفيذ */}
          <div className="md:col-span-2 bg-[#F8FAFC] rounded-2xl p-8 border border-[#E5E7EB] shadow-xs hover:shadow-md transition-all text-right relative overflow-hidden">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="flex-1">
                <div className="w-12 h-12 bg-[#FEF2F2] text-[#B5122B] rounded-xl flex items-center justify-center mb-6 shadow-xs">
                  <Zap className="w-6 h-6 text-[#B5122B]" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#111827] mb-3">
                  سرعة التنفيذ والتوريد
                </h3>
                <p className="text-[#667085] text-base leading-relaxed">
                  نلتزم بتوريد وتركيب الأجهزة وتوفير مستلزمات الطباعة في أسرع وقت لضمان عدم توقف عملياتك التجارية وخطوط إنتاجك.
                </p>
              </div>

              {/* Stat Pill */}
              <div className="bg-white border border-[#E5E7EB] px-6 py-4 rounded-xl flex items-center gap-4 self-stretch md:self-auto justify-center">
                <ShieldCheck className="w-8 h-8 text-[#B5122B]" />
                <div className="text-right">
                  <span className="block text-xl font-extrabold text-[#B5122B]">24 - 48 ساعة</span>
                  <span className="text-xs text-[#667085]">متوسط سرعة التوصيل بمصر</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}