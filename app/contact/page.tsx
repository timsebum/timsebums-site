import type { Metadata } from "next";
import { Container } from "@/components/container";
import { PageHeader } from "@/components/page-header";

export const metadata: Metadata = {
  title: "Kontakt",
};

export default function ContactPage() {
  return (
    <Container className="py-16">
      <PageHeader title="Kontakt" description="Inhalt folgt." />
    </Container>
  );
}
