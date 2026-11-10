import { MapPin, Instagram, MessageCircle } from "lucide-react";
import { site } from "@/config/site";
import { Button } from "@/components/ui/button";
import { Reveal, SectionTitle } from "./Reveal";

export function Location() {
  return (
    <section id="localizacao" className="py-24 md:py-32">
      <div className="container mx-auto px-5">
        <SectionTitle eyebrow="Localização" title={<>Venha nos <span className="text-gradient-gold">visitar</span></>} />
        <div className="grid gap-6 lg:grid-cols-3">
          <Reveal className="overflow-hidden rounded-sm border border-border lg:col-span-2">
            <iframe title="Mapa da Academia Milenium em Maringá" src={site.mapsEmbed} loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="h-[360px] w-full grayscale-[60%] md:h-[440px]" />
          </Reveal>
          <Reveal delay={150} className="flex flex-col gap-6 rounded-sm border border-border bg-card p-8">
            <div className="flex gap-3"><MapPin className="text-primary" /><p>{site.city} – {site.state}</p></div>
            <div className="flex gap-3"><MessageCircle className="text-primary" /><p>{site.whatsappDisplay}</p></div>
            <div className="flex gap-3"><Instagram className="text-primary" /><p>@{site.instagram}</p></div>
            <Button asChild variant="hero" size="xl" className="mt-auto">
              <a href={site.mapsUrl} target="_blank" rel="noopener noreferrer"><MapPin />Como chegar</a>
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
