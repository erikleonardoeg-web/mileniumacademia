import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { About } from "@/components/landing/About";
import { Structure } from "@/components/landing/Structure";
import { Modalities } from "@/components/landing/Modalities";
import { Benefits } from "@/components/landing/Benefits";
import { Plans } from "@/components/landing/Plans";
import { Testimonials } from "@/components/landing/Testimonials";
import { Social } from "@/components/landing/Social";
import { Location } from "@/components/landing/Location";
import { FAQ } from "@/components/landing/FAQ";
import { Contact } from "@/components/landing/Contact";
import { Footer } from "@/components/landing/Footer";
import { FloatingWhatsApp } from "@/components/landing/FloatingWhatsApp";
import { site } from "@/config/site";

const title = "Academia Milenium | Academia em Maringá – PR";
const description = "Academia Milenium em Maringá – PR. Seu melhor está por vir. Consulte planos, modalidades e faça sua matrícula pelo WhatsApp.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { name: "keywords", content: "academia Maringá, academia em Maringá PR, musculação Maringá, Academia Milenium" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "pt_BR" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org", "@type": "ExerciseGym", name: site.name,
        telephone: "+55 44 99821-2872", hasMap: site.mapsUrl, sameAs: [site.instagramUrl, site.facebookUrl],
        address: { "@type": "PostalAddress", addressLocality: "Maringá", addressRegion: "PR", addressCountry: "BR" },
      }),
    }],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Header />
      <main>
        <Hero /><About /><Structure /><Modalities /><Benefits /><Plans />
        <Testimonials /><Social /><Location /><FAQ /><Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
