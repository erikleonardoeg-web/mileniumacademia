import structureImg from "@/assets/estrutura-academia-milenium.jpg";
import { Reveal, SectionTitle } from "./Reveal";

export function Structure() {
  return (
    <section id="estrutura" className="bg-surface py-24 md:py-32">
      <div className="container mx-auto px-5">
        <SectionTitle
          eyebrow="Estrutura"
          title={<>Espaço para <span className="text-gradient-light">evoluir</span></>}
        />
        <Reveal variant="scale" className="structure-reveal mx-auto max-w-5xl">
          <figure className="overflow-hidden rounded-sm border border-border bg-card shadow-light">
            <div className="overflow-hidden">
              <img
                src={structureImg}
                alt="Área de musculação da Academia Milenium, com equipamentos e iluminação colorida"
                width={1254}
                height={1254}
                loading="lazy"
                className="aspect-square w-full object-cover"
              />
            </div>
            <figcaption className="flex items-center justify-between gap-4 border-t border-border px-5 py-4 text-xs uppercase tracking-[0.2em] text-muted-foreground md:px-7 md:py-5">
              <span className="font-semibold text-foreground">Área de musculação</span>
              <span className="shrink-0">Milenium</span>
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
