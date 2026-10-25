import type { Metadata } from "next";
import { Container } from "@/components/container";
import { PageHeader } from "@/components/page-header";

export const metadata: Metadata = {
  title: "Datenschutz",
};

export default function DatenschutzPage() {
  return (
    <Container className="py-16">
      <PageHeader title="Datenschutzerklärung" description="Angaben folgen." />
    </Container>
  );
}
