import Link from "next/link";
import { Container } from "@/components/container";
import { CurrentYear } from "@/components/current-year";
import { siteConfig } from "@/lib/site-config";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-border">
      <Container className="flex flex-col gap-4 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          {"© "}
          <CurrentYear /> {siteConfig.name}
        </p>
        <nav aria-label="Rechtliches">
          <ul className="flex gap-6">
            {siteConfig.footerNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="transition-colors hover:text-foreground"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </footer>
  );
}
