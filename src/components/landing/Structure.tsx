import g1 from "@/assets/gym-1.jpg";
import g2 from "@/assets/gym-2.jpg";
import g3 from "@/assets/gym-3.jpg";
import hero from "@/assets/hero.jpg";
import { Reveal, SectionTitle } from "./Reveal";
import { cn } from "@/lib/utils";

// Substitua pelas fotos reais da academia (mantenha alt descritivo).
const photos = [
  { src: g1, alt: "Área de musculação (imagem ilustrativa)", w: 1024, h: 768, cls: "md:col-span-2 md:row-span-2" },
  { src: g2, alt: "Área de cardio (imagem ilustrativa)", w: 1024, h: 768, cls: "" },
  { src: g3, alt: "Treino funcional (imagem ilustrativa)", w: 1024, h: 768, cls: "" },
  { src: hero, alt: "Peso livre (imagem ilustrativa)", w: 1600, h: 1008, cls: "md:col-span-2" },
];

export function Structure() {
  return (
    <section id="estrutura" className="bg-surface py-24 md:py-32">
      <div className="container mx-auto px-5">
        <SectionTitle eyebrow="Estrutura" title={<>Espaço para <span className="text-gradient-gold">evoluir</span></>} text="Imagens ilustrativas. Em breve, fotos reais da nossa estrutura e equipamentos." />
        <div className="grid auto-rows-[220px] gap-3 md:grid-cols-4">
          {photos.map((p, i) => (
            <Reveal key={i} delay={i * 100} className={cn("group relative overflow-hidden rounded-sm", p.cls)}>
              <img src={p.src} alt={p.alt} width={p.w} height={p.h} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-80" />
              <p className="absolute bottom-3 left-4 font-display text-xl tracking-wider">{p.alt.split(" (")[0]}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
