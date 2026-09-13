import React from "react";
import {
  Phone,
  Mail,
  MapPin,
  ShieldCheck,
  Clock,
  MessageCircle,
} from "lucide-react";
import Logo from "./Logo";
import { buildWhatsAppLink } from "../lib/whatsapp";

export default function Footer({ settings = {}, onNavigate }) {
  const whatsappLink = buildWhatsAppLink(
    settings.whatsapp,
    "مرحباً IEG، أود الاستفسار عن أنظمة الترميز والطباعة الصناعية.",
  );
  return (
    <footer className="bg-[#e9e0e1] w-full py-16 border-t border-[#e1bebe]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 text-right dir-rtl">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Col 1: About & Identity */}
          <div className="md:col-span-1 space-y-4">
            <div className="bg-white/80 p-3 rounded-xl inline-block border border-[#e1bebe]/80">
              <Logo showSubtext={false} className="h-10" />
            </div>
            <h4 className="text-xl font-bold text-[#1e1b1c]">
              المجموعة الهندسية المتكاملة (IEG)
            </h4>
            <p className="text-sm text-[#594040] leading-relaxed">
              حلول هندسية متكاملة لطباعة الباركود والملصقات وتوريد طابعات
              ومستلزمات الإنتاج بأعلى معايير الجودة والاعتمادية.
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-4">
            <h5 className="font-bold text-base text-[#1e1b1c] border-r-4 border-[#81001c] pr-3">
              روابط سريعة
            </h5>
            <ul className="space-y-2.5 text-sm text-[#594040]">
              <li>
                <button
                  onClick={() => onNavigate("about")}
                  className="hover:text-[#81001c] hover:underline transition-colors"
                >
                  عن الشركة
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("products")}
                  className="hover:text-[#81001c] hover:underline transition-colors"
                >
                  المنتجات وطابعات الباركود
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("home")}
                  className="hover:text-[#81001c] hover:underline transition-colors"
                >
                  الرئيسية
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("contact")}
                  className="hover:text-[#81001c] hover:underline transition-colors"
                >
                  طلب عرض أسعار مخصص
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Legal & Support */}
          <div className="space-y-4">
            <h5 className="font-bold text-base text-[#1e1b1c] border-r-4 border-[#81001c] pr-3">
              قانوني ودعم
            </h5>
            <ul className="space-y-2.5 text-sm text-[#594040]">
              <li>
                <button
                  onClick={() => onNavigate("about")}
                  className="hover:text-[#81001c] hover:underline transition-colors"
                >
                  سياسة الخصوصية
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("about")}
                  className="hover:text-[#81001c] hover:underline transition-colors"
                >
                  الشروط والأحكام
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("contact")}
                  className="hover:text-[#81001c] hover:underline transition-colors"
                >
                  الدعم الفني والصيانة
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Direct Contact Info */}
          <div className="space-y-4">
            <h5 className="font-bold text-base text-[#1e1b1c] border-r-4 border-[#81001c] pr-3">
              تواصل معنا
            </h5>
            <ul className="space-y-3 text-sm text-[#594040]">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#81001c] flex-shrink-0" />
                <a
                  href={`tel:${settings.phoneDisplay || "01034451738"}`}
                  className="hover:text-[#81001c] font-mono"
                >
                  {settings.phoneDisplay || "01034451738"}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#81001c] flex-shrink-0" />
                <a
                  href={`mailto:${settings.email || "info@ieg-eg.com"}`}
                  className="hover:text-[#81001c]"
                >
                  {settings.email || "info@ieg-eg.com"}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#81001c] flex-shrink-0 mt-1" />
                <span>
                  {settings.address || "القاهرة - جمهورية مصر العربية"}
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#81001c] flex-shrink-0" />
                <span>
                  {settings.workingHours || "السبت - الخميس: 9:00 ص - 6:00 م"}
                </span>
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-[#25D366] flex-shrink-0" />
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#25D366] text-[#81001c] font-bold"
                >
                  محادثة واتساب مباشرة
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#d8c1c3] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#594040]">
          <p>
            © {new Date().getFullYear()} المجموعة الهندسية المتكاملة (IEG). جميع
            الحقوق محفوظة.
          </p>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#81001c]" />
            <span className="font-semibold">
              CODING with CONFIDENCE • معتمدون رسمياً
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
