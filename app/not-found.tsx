import Link from "next/link";
import { Container } from "@/components/container";
import { PageHeader } from "@/components/page-header";

export default function NotFound() {
  return (
    <Container className="flex flex-col gap-6 py-24">
      <PageHeader
        title="Seite nicht gefunden"
        description="Die angeforderte Seite existiert nicht oder wurde verschoben."
      />
      <Link href="/" className="text-sm font-medium text-accent hover:underline">
        Zur Startseite
      </Link>
    </Container>
  );
}
