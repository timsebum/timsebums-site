## Timsebums Website

Next.js (App Router) + Tailwind CSS v4.

### Struktur

- `app/` – Routen (`page.tsx` pro Seite), `layout.tsx` mit Header/Footer, `sitemap.ts`, `robots.ts`
- `components/` – wiederverwendbare Komponenten (`site-header`, `site-footer`, `container`, `page-header`)
- `lib/site-config.ts` – zentrale Konfiguration: Name, Beschreibung, URL, Navigation

### Neue Seite hinzufügen

1. Ordner `app/<name>/page.tsx` anlegen
2. Eintrag in `siteConfig.mainNav` (oder `footerNav`) ergänzen – Navigation und Sitemap aktualisieren sich automatisch

### Farben

Design-Tokens in `app/globals.css` (`background`, `foreground`, `muted`, `border`, `accent`), inkl. Dark Mode.
