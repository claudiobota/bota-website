export type NavKey = "heritage" | "strategy" | "investments";

export const NAV_ITEMS: { key: NavKey; label: string; href: string }[] = [
  { key: "heritage", label: "Heritage", href: "/" },
  { key: "strategy", label: "Strategy", href: "/strategy" },
  { key: "investments", label: "Investments", href: "/investments" },
];

export const FOOTER_LEGAL = [
  { label: "Regulatory Disclosures", href: "/legal/disclosures" },
  { label: "Privacy Policy", href: "/legal/privacy" },
  { label: "Terms of Engagement", href: "/legal/terms" },
];
