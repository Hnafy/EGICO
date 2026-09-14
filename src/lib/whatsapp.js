import i18next from 'i18next';

const FALLBACK_PHONE = "+201220997663";
const t = i18next.t.bind(i18next);

export function normalizePhone(phone) {
  return String(phone || FALLBACK_PHONE).replace(/[^\d]/g, "");
}

export function buildWhatsAppLink(phone, text) {
  return `https://wa.me/${normalizePhone(phone)}?text=${encodeURIComponent(text)}`;
}

export function quoteMessageFor(product) {
  if (!product || !product.name) {
    return t("whatsapp.defaultQuote");
  }
  return [
    t("whatsapp.greeting"),
    "",
    t("whatsapp.quoteIntro"),
    "",
    `*${t("whatsapp.product")}:* ${product.name}`,
    `*${t("whatsapp.category")}:* ${product.category}`,
    "",
    t("whatsapp.quoteRequest"),
    t("whatsapp.thanks"),
  ].join("\n");
}

export function contactMessageFor(form) {
  const lines = [
    t("whatsapp.greeting"),
    "",
    t("whatsapp.quoteMessage"),
    "",
    `*${t("whatsapp.nameField")}:* ${form.name}`,
    `*${t("whatsapp.phoneField")}:* ${form.phone}`,
  ];
  if (form.company) lines.push(`*${t("whatsapp.companyField")}:* ${form.company}`);
  if (form.product) lines.push(`*${t("whatsapp.productField")}:* ${form.product}`);
  if (form.message) lines.push("", `*${t("whatsapp.messageField")}:* ${form.message}`);
  lines.push("", t("whatsapp.thanks"));
  return lines.join("\n");
}