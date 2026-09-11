import React from 'react';
import { Award, ShieldCheck, Target, Users, Zap, CheckCircle2 } from 'lucide-react';
import Logo from './Logo';

export default function AboutSection({ onBrowseProducts, onContactUs }) {
  return (
    <main className="flex-grow pt-28 pb-20 px-4 sm:px-8 md:px-12 max-w-7xl mx-auto w-full dir-rtl">
      
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-[#fff8f8] via-[#fbf1f2] to-[#ffdad9]/30 rounded-3xl p-8 sm:p-12 border border-[#e1bebe] mb-16 text-right relative overflow-hidden">
        <div className="max-w-3xl space-y-4 relative z-10">
          <div className="inline-block bg-white p-2 rounded-xl shadow-xs border border-[#e1bebe]">
            <Logo showSubtext={false} className="h-10" />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1e1b1c] leading-tight">
            المجموعة الهندسية المتكاملة (IEG)
          </h1>
          <p className="text-lg text-[#594040] leading-relaxed">
            الشركة الرائدة في جمهورية مصر العربية المتخصصة في توريد وتكامل أنظمة طباعة الباركود والترميز الآلي وحلول ملصقات المصانع والمتاجر.
          </p>
          <div className="pt-2 flex flex-wrap gap-4">
            <button
              onClick={onBrowseProducts}
              className="bg-[#a6192e] text-white px-6 py-3 rounded-full font-bold text-sm hover:bg-[#81001c] transition-all shadow-xs"
            >
              تصفح كتالوج الأجهزة
            </button>
            <button
              onClick={onContactUs}
              className="bg-white border border-[#5d5e60] text-[#1e1b1c] px-6 py-3 rounded-full font-bold text-sm hover:bg-[#efe6e7] transition-all"
            >
              طلب استشارة هندسية
            </button>
          </div>
        </div>
      </div>

      {/* Vision & Mission Bento */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        
        <div className="bg-white rounded-2xl p-8 border border-[#e1bebe] shadow-xs text-right space-y-4">
          <div className="w-12 h-12 rounded-xl bg-[#ffdad9] text-[#81001c] flex items-center justify-center">
            <Target className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-[#1e1b1c]">رؤيتنا (Our Vision)</h3>
          <p className="text-sm text-[#594040] leading-relaxed">
            أن نكون الشريك التكنولوجي والهندسي الأول لجميع القطاعات الصناعية والتجارية في مصر والشرق الأوسط من خلال تقديم حلول طباعة وتتبع ذكية وموثوقة.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-8 border border-[#e1bebe] shadow-xs text-right space-y-4">
          <div className="w-12 h-12 rounded-xl bg-[#e0dfe1] text-[#5d5e60] flex items-center justify-center">
            <Award className="w-6 h-6 text-[#81001c]" />
          </div>
          <h3 className="text-xl font-bold text-[#1e1b1c]">رسالتنا (Our Mission)</h3>
          <p className="text-sm text-[#594040] leading-relaxed">
            تزويد عملائنا بأفضل أجهزة طباعة الباركود العالمية مع توفير أعلى مستوى من الدعم الفني، وقطع الغيار، ومستلزمات الإنتاج بأسعار تنافسية تلبي طموحاتهم.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-8 border border-[#e1bebe] shadow-xs text-right space-y-4">
          <div className="w-12 h-12 rounded-xl bg-[#ffdad6] text-[#ba1a1a] flex items-center justify-center">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-[#1e1b1c]">قيمنا (Core Values)</h3>
          <p className="text-sm text-[#594040] leading-relaxed">
            الدقة الهندسية، الالتزام بمواعيد التوريد، الشفافية التامة في التعامل، والتركيز على نجاح واستمرارية أعمال عملائنا بدون توقف.
          </p>
        </div>

      </div>

      {/* Why IEG Engineering Excellence */}
      <div className="bg-[#fbf1f2] rounded-3xl p-8 sm:p-12 border border-[#e1bebe] text-right">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1e1b1c] mb-6">
          ما يميز المجموعة الهندسية المتكاملة
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          
          <div className="flex items-start gap-3 bg-white p-5 rounded-2xl border border-[#e1bebe]/80">
            <CheckCircle2 className="w-5 h-5 text-[#81001c] flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-base text-[#1e1b1c] mb-1">وكلاء وموزعون معتمدون</h4>
              <p className="text-xs text-[#594040]">نوفر علامات عالمية رائدة مثل Zebra, Honeywell, Xprinter, Bixolon.</p>
            </div>
          </div>

          <div className="flex items-start gap-3 bg-white p-5 rounded-2xl border border-[#e1bebe]/80">
            <CheckCircle2 className="w-5 h-5 text-[#81001c] flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-base text-[#1e1b1c] mb-1">مصنع متكامل للاستيكر</h4>
              <p className="text-xs text-[#594040]">خطوط إنتاج لقص وتجهيز بكرات الاستيكر بمختلف المقاسات والخامات.</p>
            </div>
          </div>

          <div className="flex items-start gap-3 bg-white p-5 rounded-2xl border border-[#e1bebe]/80">
            <CheckCircle2 className="w-5 h-5 text-[#81001c] flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-base text-[#1e1b1c] mb-1">مركز صيانة هندسي معتمد</h4>
              <p className="text-xs text-[#594040]">مهندسون متخصصون في صيانة رؤوس الطباعة الحرارية (Printheads) واللوحات.</p>
            </div>
          </div>

        </div>
      </div>

    </main>
  );
}
