import Link from "next/link";
import { Container } from "@/components/container";
import { MainNav } from "@/components/main-nav";
import { siteConfig } from "@/lib/site-config";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur">
      <Container className="flex h-16 items-center justify-between gap-6">
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight text-foreground"
        >
          {siteConfig.name}
        </Link>
        <MainNav items={siteConfig.mainNav} />
      </Container>
    </header>
  );
}
