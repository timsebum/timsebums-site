export type NavItem = {
  label: string;
  href: string;
};

export const siteConfig = {
  name: "Timsebum",
  description: "Die persönliche Website von Timsebum.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://timsebum.de",
  locale: "de-DE",
  mainNav: [
    { label: "Start", href: "/" },
    { label: "Über mich", href: "/about" },
    { label: "Kontakt", href: "/contact" },
  ] satisfies NavItem[],
  footerNav: [
    { label: "Impressum", href: "/impressum" },
    { label: "Datenschutz", href: "/datenschutz" },
  ] satisfies NavItem[],
} as const;
