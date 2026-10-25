import type { Metadata } from "next";
import { Container } from "@/components/container";
import { PageHeader } from "@/components/page-header";

export const metadata: Metadata = {
  title: "Über mich",
};

export default function AboutPage() {
  return (
    <Container className="py-16">
      <PageHeader title="Über mich" description="Inhalt folgt." />
    </Container>
  );
}
