import React from "react";
import {
  Phone,
  Mail,
  MapPin,
  ShieldCheck,
  Clock,
  MessageCircle,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import Logo from "./Logo";
import { buildWhatsAppLink } from "../lib/whatsapp";

export default function Footer({ settings = {}, onNavigate }) {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language?.startsWith("ar");
  const settingValue = (arValue, key) =>
    isArabic ? arValue || t(key) : t(key);
  const whatsappLink = buildWhatsAppLink(
    settings.whatsapp,
    t("whatsapp.defaultQuote"),
  );
  return (
    <footer className="bg-[#F8FAFC] w-full py-16 border-t border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 text-start">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Col 1: About & Identity */}
          <div className="md:col-span-1 space-y-4">
            <div className="bg-white p-3 rounded-xl inline-block border border-[#E5E7EB]">
              <Logo showSubtext={false} className="h-10" />
            </div>
            <h4 className="text-xl font-bold text-[#111827]">
              {t("footer.companyName")}
            </h4>
            <p className="text-sm text-[#667085] leading-relaxed">
              {t("footer.description")}
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-4">
            <h5 className="font-bold text-base text-[#111827] border-s-4 border-[#B5122B] ps-3">
              {t("footer.quickLinks")}
            </h5>
            <ul className="space-y-2.5 text-sm text-[#667085]">
              <li>
                <button
                  onClick={() => onNavigate("about")}
                  className="hover:text-[#B5122B] hover:underline transition-colors"
                >
                  {t("footer.aboutCompany")}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("products")}
                  className="hover:text-[#B5122B] hover:underline transition-colors"
                >
                  {t("footer.productsBarcode")}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("home")}
                  className="hover:text-[#B5122B] hover:underline transition-colors"
                >
                  {t("footer.home")}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("contact")}
                  className="hover:text-[#B5122B] hover:underline transition-colors"
                >
                  {t("footer.customQuote")}
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Legal & Support */}
          <div className="space-y-4">
            <h5 className="font-bold text-base text-[#111827] border-s-4 border-[#B5122B] ps-3">
              {t("footer.legal")}
            </h5>
            <ul className="space-y-2.5 text-sm text-[#667085]">
              <li>
                <button
                  onClick={() => onNavigate("about")}
                  className="hover:text-[#B5122B] hover:underline transition-colors"
                >
                  {t("footer.privacy")}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("about")}
                  className="hover:text-[#B5122B] hover:underline transition-colors"
                >
                  {t("footer.terms")}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("contact")}
                  className="hover:text-[#B5122B] hover:underline transition-colors"
                >
                  {t("footer.technicalSupport")}
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Direct Contact Info */}
          <div className="space-y-4">
            <h5 className="font-bold text-base text-[#111827] border-s-4 border-[#B5122B] ps-3">
              {t("footer.contactUs")}
            </h5>
            <ul className="space-y-3 text-sm text-[#667085]">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#B5122B] flex-shrink-0" />
                <a
                  href={`tel:${settings.phoneDisplay || "01220997663"}`}
                  className="hover:text-[#B5122B] font-mono"
                  dir="ltr"
                >
                  {settings.phoneDisplay || "01220997663"}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#B5122B] flex-shrink-0" />
                <a
                  href={`mailto:${settings.email || "info@ieg-eg.com"}`}
                  className="hover:text-[#B5122B]"
                  dir="ltr"
                >
                  {settings.email || "info@ieg-eg.com"}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#B5122B] flex-shrink-0 mt-1" />
                <span>{settingValue(settings.address, "settings.address")}</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#B5122B] flex-shrink-0" />
                <span>{settingValue(settings.workingHours, "settings.workingHours")}</span>
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-[#25D366] flex-shrink-0" />
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#25D366] text-[#B5122B] font-bold"
                >
                  {t("footer.directWhatsApp")}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#E5E7EB] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#667085]">
          <p>
            © {new Date().getFullYear()} {t("footer.companyName")}. {t("footer.copyright")}
          </p>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#B5122B]" />
            <span className="font-semibold">
              CODING with CONFIDENCE • {t("footer.certified")}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}