import { Container } from "@/components/container";
import { PageHeader } from "@/components/page-header";
import { siteConfig } from "@/lib/site-config";

export default function HomePage() {
  return (
    <Container className="py-16 sm:py-24">
      <PageHeader
        title={`Willkommen bei ${siteConfig.name}`}
        description={siteConfig.description}
      />
    </Container>
  );
}
