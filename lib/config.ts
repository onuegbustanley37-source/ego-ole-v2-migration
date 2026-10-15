// SINGLE SOURCE OF TRUTH — change a value here and it updates everywhere in the app.

export const BANK = {
  bankName: "UBA BANK",
  accountNumber: "2087484005",
  whatsapp: "08161280254",
  whatsappLink: "https://wa.me/2348161280254",
} as const;

export const STALL = {
  pricePerMonth: 12500,
  priceLabel: "N12,500/MONTH",
} as const;

export const SITE = {
  name: "EGO OLE?",
  url: "https://ego-ole-v2-migration.vercel.app",
  location: "Onitsha, Anambra",
  title: "EGO OLE? - Live Onitsha Market Prices",
  description:
    "Check real-time prices from Onitsha markets - Main Market, Ochanja, Relief. Fresh Ifite Ogwari okro and more.",
  year: 2026,
} as const;

export const ADMIN = {
  // NOTE: client-side only and visible to anyone who views the page source.
  // Replace with real authentication before protecting anything sensitive.
  password: "stanley1991",
} as const;

export function whatsappUrl(message?: string) {
  return message
    ? `${BANK.whatsappLink}?text=${encodeURIComponent(message)}`
    : BANK.whatsappLink;
}

export function vendorWhatsappUrl(phone: string | undefined, message: string) {
  const base = phone ? `https://wa.me/${phone}` : BANK.whatsappLink;
  return `${base}?text=${encodeURIComponent(message)}`;
}
