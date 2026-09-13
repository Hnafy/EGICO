const FALLBACK_PHONE = "+201034451738";

export function normalizePhone(phone) {
  return String(phone || FALLBACK_PHONE).replace(/[^\d]/g, "");
}

export function buildWhatsAppLink(phone, text) {
  return `https://wa.me/${normalizePhone(phone)}?text=${encodeURIComponent(text)}`;
}

export function quoteMessageFor(product) {
  if (!product || !product.name) {
    return "مرحباً IEG،\nأود طلب عرض سعر لأحد منتجاتكم. برجاء التواصل معي.";
  }
  return [
    "مرحباً IEG،",
    "",
    "أود طلب عرض سعر للمنتج التالي:",
    "",
    `*المنتج:* ${product.name}`,
    `*الفئة:* ${product.category}`,
    "",
    "برجاء تزويدي بأفضل سعر وتوافر المخزون.",
    "شكراً لكم.",
  ].join("\n");
}

export function contactMessageFor(form) {
  const lines = [
    "مرحباً IEG،",
    "",
    "أود طلب عرض سعر:",
    "",
    `*الاسم:* ${form.name}`,
    `*الهاتف:* ${form.phone}`,
  ];
  if (form.company) lines.push(`*الشركة/النشاط:* ${form.company}`);
  if (form.product) lines.push(`*المنتج المطلوب:* ${form.product}`);
  if (form.message) lines.push("", `*الرسالة:* ${form.message}`);
  lines.push("", "شكراً لكم.");
  return lines.join("\n");
}
