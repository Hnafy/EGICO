import React, { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { buildWhatsAppLink, normalizePhone } from "../lib/whatsapp";

export default function FloatingWhatsApp({ settings = {} }) {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState(
    "مرحباً، أود الاستفسار عن أنظمة الترميز والطباعة الصناعية.",
  );

  const handleSend = () => {
    window.open(buildWhatsAppLink(settings.whatsapp, message), "_blank");
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 dir-rtl">
      {/* Quick Chat Popup Box */}
      {isOpen && (
        <div className="mb-4 w-72 sm:w-80 bg-white rounded-2xl border border-[#e1bebe] shadow-2xl overflow-hidden animate-in slide-in-from-bottom-4 duration-200">
          {/* Header */}
          <div className="bg-[#25D366] text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center font-bold">
                IEG
              </div>
              <div>
                <h4 className="font-bold text-sm leading-tight">
                  خدمة عملاء IEG
                </h4>
                <span className="text-[10px] text-white/90">
                  متواجدون للرد الفوري
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
          <div className="p-4 bg-[#fbf1f2]/50 space-y-3">
            <div className="bg-white p-3 rounded-xl rounded-tr-xs shadow-2xs text-xs text-[#1e1b1c] border border-[#e1bebe]/60">
              مرحباً بك في المجموعة الهندسية المتكاملة! كيف يمكننا مساعدتك اليوم
              بخصوص طابعات وأنظمة الترميز الصناعية؟
            </div>

            <div className="relative">
              <textarea
                rows={2}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full p-2.5 bg-white border border-[#e1bebe] rounded-xl text-xs text-[#1e1b1c] focus:outline-none focus:border-[#25D366] resize-none"
                placeholder="اكتب رسالتك..."
              ></textarea>
              <button
                onClick={handleSend}
                className="w-full mt-2 bg-[#25D366] text-white py-2 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 hover:bg-[#20bd5a] transition-colors"
              >
                <span>ابدأ المحادثة على واتساب</span>
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
        title="تواصل عبر واتساب"
        aria-label="تواصل عبر واتساب"
      >
        <MessageCircle className="w-7 h-7 fill-white" />
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-red-500 border-2 border-white rounded-full"></span>
      </a>
    </div>
  );
}