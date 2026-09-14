import React, { useEffect, useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { useTranslation } from "react-i18next";
import { buildWhatsAppLink, normalizePhone } from "../lib/whatsapp";

export default function FloatingWhatsApp({ settings = {} }) {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState(t("whatsapp.defaultQuote"));

  useEffect(() => {
    setMessage(t("whatsapp.defaultQuote"));
  }, [i18n.language]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleSend = () => {
    window.open(buildWhatsAppLink(settings.whatsapp, message), "_blank");
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {/* Quick Chat Popup Box */}
      {isOpen && (
        <div className="mb-4 w-72 sm:w-80 bg-white rounded-2xl border border-[#E5E7EB] shadow-2xl overflow-hidden animate-in slide-in-from-bottom-4 duration-200">
          {/* Header */}
          <div className="bg-[#25D366] text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center font-bold">
                IEG
              </div>
              <div>
                <h4 className="font-bold text-sm leading-tight">
                  {t("whatsapp.customerService")}
                </h4>
                <span className="text-[10px] text-white/90">
                  {t("whatsapp.availableNow")}
                </span>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-black/10 rounded-full p-1 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Body */}
          <div className="p-4 bg-white space-y-3">
            <div className="bg-[#F8FAFC] p-3 rounded-xl rounded-tr-xs shadow-2xs text-xs text-[#172033] border border-[#E5E7EB]">
              {t("whatsapp.welcome")}
            </div>

            <div className="relative">
              <textarea
                rows={2}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full p-2.5 bg-[#F8FAFC] border border-[#E5E7EB] rounded-xl text-xs text-[#172033] focus:outline-none focus:border-[#25D366] resize-none"
                placeholder={t("whatsapp.typeMessage")}
              ></textarea>
              <button
                onClick={handleSend}
                className="w-full mt-2 bg-[#25D366] text-white py-2 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 hover:bg-[#20bd5a] transition-colors"
              >
                <span>{t("whatsapp.startChat")}</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Floating Button */}
      <a
        href={buildWhatsAppLink(settings.whatsapp, message)}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex bg-[#25D366] hover:bg-[#20bd5a] text-white w-14 h-14 rounded-full items-center justify-center shadow-[0_4px_20px_rgba(0,0,0,0.2)] hover:scale-110 active:scale-95 transition-all duration-300 relative cursor-pointer"
        title={t("whatsapp.contactWhatsApp")}
        aria-label={t("whatsapp.contactWhatsApp")}
      >
        <MessageCircle className="w-7 h-7 fill-white" />
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-red-500 border-2 border-white rounded-full"></span>
      </a>
    </div>
  );
}