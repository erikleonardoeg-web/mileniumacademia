import structureImg from "@/assets/estrutura-academia-milenium.jpg";
import equipmentImg from "@/assets/estrutura-academia-milenium-equipamentos.jpg";
import { Reveal, SectionTitle } from "./Reveal";

const photos = [
  {
    src: structureImg,
    alt: "Área de musculação da Academia Milenium, com equipamentos e iluminação colorida",
    label: "Área de musculação",
  },
  {
    src: equipmentImg,
    alt: "Equipamentos de musculação da Academia Milenium vistos de outro ângulo",
    label: "Equipamentos",
  },
];

export function Structure() {
  return (
    <section id="estrutura" className="bg-surface py-24 md:py-32">
      <div className="container mx-auto px-5">
        <SectionTitle
          eyebrow="Estrutura"
          title={<>Espaço para <span className="text-gradient-light">evoluir</span></>}
        />
        <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-2">
          {photos.map((photo, index) => (
            <Reveal
              key={photo.label}
              delay={index * 140}
              variant={index === 0 ? "left" : "right"}
              className="structure-reveal"
            >
              <figure className="h-full overflow-hidden rounded-sm border border-border bg-card shadow-light">
                <div className="overflow-hidden">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    width={1254}
                    height={1254}
                    loading="lazy"
                    className="aspect-square w-full object-cover"
                  />
                </div>
                <figcaption className="flex items-center justify-between gap-4 border-t border-border px-5 py-4 text-xs uppercase tracking-[0.2em] text-muted-foreground md:px-6">
                  <span className="font-semibold text-foreground">{photo.label}</span>
                  <span className="shrink-0">Milenium</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
