import { Quote } from "lucide-react";
import { Reveal, SectionTitle } from "./Reveal";
import { site } from "@/config/site";

export function Testimonials() {
  return (
    <section className="bg-surface py-24 md:py-32">
      <div className="container mx-auto px-5">
        <SectionTitle eyebrow="Depoimentos" title={<>Quem treina, <span className="text-gradient-light">recomenda</span></>} />
        <div className="grid gap-4 md:grid-cols-3">
          {site.testimonials.map((t, i) => (
            <Reveal key={i} delay={i * 100} variant="scale" className="flex h-full flex-col rounded-sm border border-border bg-card p-8">
              <Quote className="mb-4 text-primary" />
              <p className="italic text-muted-foreground">“{t.text}”</p>
              <p className="mt-auto pt-6 font-semibold">{t.name}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
