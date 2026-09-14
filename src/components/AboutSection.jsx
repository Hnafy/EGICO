import React from 'react';
import { Award, ShieldCheck, Target, Users, Zap, CheckCircle2 } from 'lucide-react';
import Logo from './Logo';

export default function AboutSection({ onBrowseProducts, onContactUs }) {
  return (
    <main className="flex-grow pt-28 pb-20 px-4 sm:px-8 md:px-12 max-w-7xl mx-auto w-full dir-rtl">
      
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-white via-[#F8FAFC] to-[#FEF2F2] rounded-3xl p-8 sm:p-12 border border-[#E5E7EB] mb-16 text-right relative overflow-hidden shadow-xs">
        <div className="max-w-3xl space-y-4 relative z-10">
          <div className="inline-block bg-white p-2 rounded-xl shadow-xs border border-[#E5E7EB]">
            <Logo showSubtext={false} className="h-10" />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#111827] leading-tight">
            المجموعة الهندسية المتكاملة (IEG)
          </h1>
          <p className="text-lg text-[#667085] leading-relaxed">
            الشركة الرائدة في جمهورية مصر العربية المتخصصة في توريد وتكامل أنظمة طباعة الباركود والترميز الآلي وحلول ملصقات المصانع والمتاجر.
          </p>
          <div className="pt-2 flex flex-wrap gap-4">
            <button
              onClick={onBrowseProducts}
              className="bg-[#B5122B] text-white px-6 py-3 rounded-full font-bold text-sm hover:bg-[#8F0F20] transition-all shadow-xs"
            >
              تصفح كتالوج الأجهزة
            </button>
            <button
              onClick={onContactUs}
              className="bg-white border border-[#E5E7EB] text-[#172033] px-6 py-3 rounded-full font-bold text-sm hover:bg-[#F8FAFC] transition-all"
            >
              طلب استشارة هندسية
            </button>
          </div>
        </div>
      </div>

      {/* Vision & Mission Bento */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        
        <div className="bg-white rounded-2xl p-8 border border-[#E5E7EB] shadow-xs text-right space-y-4">
          <div className="w-12 h-12 rounded-xl bg-[#FEF2F2] text-[#B5122B] flex items-center justify-center">
            <Target className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-[#111827]">رؤيتنا (Our Vision)</h3>
          <p className="text-sm text-[#667085] leading-relaxed">
            أن نكون الشريك التكنولوجي والهندسي الأول لجميع القطاعات الصناعية والتجارية في مصر والشرق الأوسط من خلال تقديم حلول طباعة وتتبع ذكية وموثوقة.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-8 border border-[#E5E7EB] shadow-xs text-right space-y-4">
          <div className="w-12 h-12 rounded-xl bg-[#F1F5F9] text-[#172033] flex items-center justify-center">
            <Award className="w-6 h-6 text-[#B5122B]" />
          </div>
          <h3 className="text-xl font-bold text-[#111827]">رسالتنا (Our Mission)</h3>
          <p className="text-sm text-[#667085] leading-relaxed">
            تزويد عملائنا بأفضل أجهزة طباعة الباركود العالمية مع توفير أعلى مستوى من الدعم الفني، وقطع الغيار، ومستلزمات الإنتاج بأسعار تنافسية تلبي طموحاتهم.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-8 border border-[#E5E7EB] shadow-xs text-right space-y-4">
          <div className="w-12 h-12 rounded-xl bg-[#FEF2F2] text-[#B5122B] flex items-center justify-center">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-[#111827]">قيمنا (Core Values)</h3>
          <p className="text-sm text-[#667085] leading-relaxed">
            الدقة الهندسية، الالتزام بمواعيد التوريد، الشفافية التامة في التعامل، والتركيز على نجاح واستمرارية أعمال عملائنا بدون توقف.
          </p>
        </div>

      </div>

      {/* Why IEG Engineering Excellence */}
      <div className="bg-[#F8FAFC] rounded-3xl p-8 sm:p-12 border border-[#E5E7EB] text-right">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111827] mb-6">
          ما يميز المجموعة الهندسية المتكاملة
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          
          <div className="flex items-start gap-3 bg-white p-5 rounded-2xl border border-[#E5E7EB]">
            <CheckCircle2 className="w-5 h-5 text-[#B5122B] flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-base text-[#111827] mb-1">وكلاء وموزعون معتمدون</h4>
              <p className="text-xs text-[#667085]">نوفر علامات عالمية رائدة مثل Zebra, Honeywell, Xprinter, Bixolon.</p>
            </div>
          </div>

          <div className="flex items-start gap-3 bg-white p-5 rounded-2xl border border-[#E5E7EB]">
            <CheckCircle2 className="w-5 h-5 text-[#B5122B] flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-base text-[#111827] mb-1">مصنع متكامل للاستيكر</h4>
              <p className="text-xs text-[#667085]">خطوط إنتاج لقص وتجهيز بكرات الاستيكر بمختلف المقاسات والخامات.</p>
            </div>
          </div>

          <div className="flex items-start gap-3 bg-white p-5 rounded-2xl border border-[#E5E7EB]">
            <CheckCircle2 className="w-5 h-5 text-[#B5122B] flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-base text-[#111827] mb-1">مركز صيانة هندسي معتمد</h4>
              <p className="text-xs text-[#667085]">مهندسون متخصصون في صيانة رؤوس الطباعة الحرارية (Printheads) واللوحات.</p>
            </div>
          </div>

        </div>
      </div>

    </main>
  );
}