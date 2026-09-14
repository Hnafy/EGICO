import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  MessageSquare,
  Clock,
  Send,
  CheckCircle,
} from "lucide-react";
import { buildWhatsAppLink, contactMessageFor } from "../lib/whatsapp";

export default function ContactSection({ products = [], settings = {} }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    company: "",
    product: products[0]?.name || "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert("يرجى إدخال الاسم ورقم الهاتف على الأقل.");
      return;
    }
    window.open(
      buildWhatsAppLink(settings.whatsapp, contactMessageFor(formData)),
      "_blank",
    );
    setSubmitted(true);
  };

  const handleWhatsAppDirect = () => {
    const text =
      "مرحباً IEG، أود الاستفسار بخصوص أنظمة الترميز والطباعة الصناعية.";
    window.open(buildWhatsAppLink(settings.whatsapp, text), "_blank");
  };

  return (
    <main className="flex-grow pt-28 pb-20 px-4 sm:px-8 md:px-12 max-w-7xl mx-auto w-full dir-rtl">
      <div className="text-right mb-12">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#111827] mb-3">
          تواصل مع المجموعة الهندسية المتكاملة
        </h1>
        <p className="text-base text-[#667085] max-w-2xl">
          فريق المبيعات والدعم الفني متواجد لمساعدتك في اختيار نظام الترميز
          والطباعة المثالي لخط إنتاجك.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="space-y-6 text-right">
          <div className="bg-white rounded-2xl p-6 border border-[#E5E7EB] shadow-xs space-y-4">
            <h3 className="font-bold text-lg text-[#111827] border-r-4 border-[#B5122B] pr-3">
              بيانات التواصل المباشر
            </h3>

            <div className="space-y-4 text-sm text-[#667085] pt-2">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#FEF2F2] flex items-center justify-center text-[#B5122B] flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-[#98A2B3] block font-bold">
                    الهاتف والخط الساخن:
                  </span>
                  <a
                    href="tel:01220997663"
                    className="font-bold text-[#172033] hover:text-[#B5122B] text-base font-mono"
                  >
                    {settings.phoneDisplay || "01220997663"}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#25D366]/10 flex items-center justify-center text-[#25D366] flex-shrink-0">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-[#98A2B3] block font-bold">
                    خدمة عملاء واتساب:
                  </span>
                  <button
                    onClick={handleWhatsAppDirect}
                    className="font-bold text-[#172033] hover:text-[#25D366] text-sm underline cursor-pointer"
                  >
                    تحدث معنا الآن عبر واتساب
                  </button>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#F1F5F9] flex items-center justify-center text-[#667085] flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-[#98A2B3] block font-bold">
                    البريد الإلكتروني:
                  </span>
                  <a
                    href={`mailto:${settings.email || "info@ieg-eg.com"}`}
                    className="font-medium text-[#172033] hover:text-[#B5122B]"
                  >
                    {settings.email || "info@ieg-eg.com"}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#F8FAFC] flex items-center justify-center text-[#B5122B] flex-shrink-0 border border-[#E5E7EB]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-[#98A2B3] block font-bold">
                    العنوان والمقر:
                  </span>
                  <span className="font-medium text-[#172033]">
                    {settings.address || "القاهرة - جمهورية مصر العربية"}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#F8FAFC] flex items-center justify-center text-[#667085] flex-shrink-0 border border-[#E5E7EB]">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-[#98A2B3] block font-bold">
                    مواعيد العمل:
                  </span>
                  <span className="font-medium text-[#172033]">
                    {settings.workingHours || "السبت - الخميس: 9:00 ص - 6:00 م"}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#F8FAFC] rounded-2xl p-6 border border-[#E5E7EB] text-right space-y-2">
            <h4 className="font-bold text-sm text-[#B5122B]">
              التوصيل والشحن:
            </h4>
            <p className="text-xs text-[#667085] leading-relaxed">
              {settings.deliverySpeed ||
                "توريد وتركيب الأجهزة في أسرع وقت لضمان عدم توقف خطوط إنتاجك."}
            </p>
          </div>
        </div>

        <div className="lg:col-span-2">
          <div className="bg-white rounded-2xl p-8 border border-[#E5E7EB] shadow-xs text-right">
            {submitted ? (
              <div className="py-12 text-center space-y-4 animate-in fade-in duration-300">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-[#111827]">
                  تم فتح محادثة واتساب بنجاح!
                </h3>
                <p className="text-sm text-[#667085] max-w-md mx-auto">
                  أُرسل طلب عرض السعر عبر واتساب. سيتواصل معك مسؤول المبيعات
                  خلال دقائق بأفضل عرض وتوافر مخزون.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="bg-[#B5122B] text-white text-sm font-bold px-6 py-2.5 rounded-full hover:bg-[#8F0F20] transition-colors"
                >
                  إرسال استفسار آخر
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="font-bold text-xl text-[#111827] mb-2">
                  اطلب عرض سعر أو استفسر الآن — عبر واتساب مباشرة
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#172033] mb-1.5">
                      الاسم بالكامل *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="أدخل اسمك الكريم"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full p-3 bg-[#F8FAFC] border border-[#E5E7EB] rounded-xl text-sm text-[#172033] focus:outline-none focus:border-[#B5122B] focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#172033] mb-1.5">
                      رقم الهاتف / الواتساب *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="010XXXXXXXX"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full p-3 bg-[#F8FAFC] border border-[#E5E7EB] rounded-xl text-sm text-[#172033] focus:outline-none focus:border-[#B5122B] focus:bg-white text-left font-mono"
                      dir="ltr"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#172033] mb-1.5">
                      اسم الشركة أو المصنع
                    </label>
                    <input
                      type="text"
                      placeholder="مثال: مصنع الأمل، خط إنتاج..."
                      value={formData.company}
                      onChange={(e) =>
                        setFormData({ ...formData, company: e.target.value })
                      }
                      className="w-full p-3 bg-[#F8FAFC] border border-[#E5E7EB] rounded-xl text-sm text-[#172033] focus:outline-none focus:border-[#B5122B] focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#172033] mb-1.5">
                      المنتج المطلوب
                    </label>
                    <select
                      value={formData.product}
                      onChange={(e) =>
                        setFormData({ ...formData, product: e.target.value })
                      }
                      className="w-full p-3 bg-[#F8FAFC] border border-[#E5E7EB] rounded-xl text-sm text-[#172033] focus:outline-none focus:border-[#B5122B] focus:bg-white cursor-pointer"
                    >
                      {products.map((p) => (
                        <option key={p.id} value={p.name}>
                          {p.name} — {p.category}
                        </option>
                      ))}
                      <option value="استشارة مخصصة">
                        استشارة مخصصة / تكامل في خط الإنتاج
                      </option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#172033] mb-1.5">
                    تفاصيل الطلب أو الكمية المطلوبة
                  </label>
                  <textarea
                    rows={4}
                    placeholder="اكتب تفاصيل الطلب، الكميات، أو طبيعة خط الإنتاج..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full p-3 bg-[#F8FAFC] border border-[#E5E7EB] rounded-xl text-sm text-[#172033] focus:outline-none focus:border-[#B5122B] focus:bg-white"
                  ></textarea>
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <span className="text-xs text-[#98A2B3]">
                    * سيتم إرسال طلبك عبر واتساب مباشرة
                  </span>
                  <button
                    type="submit"
                    className="bg-[#B5122B] text-white font-bold text-sm sm:text-base px-8 py-3 rounded-full hover:bg-[#8F0F20] transition-all shadow-md active:scale-98 flex items-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>إرسال عبر واتساب</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}