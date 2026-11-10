import img from "@/assets/gym-3.jpg";
import { Reveal } from "./Reveal";
import { WaButton } from "./WaButton";

export function About() {
  return (
    <section id="sobre" className="py-24 md:py-32">
      <div className="container mx-auto grid items-center gap-12 px-5 md:grid-cols-2">
        <Reveal className="relative">
          <img src={img} alt="Imagem ilustrativa de aluna treinando" width={1024} height={768} loading="lazy" className="aspect-[4/5] w-full rounded-sm object-cover" />
          <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-sm border border-primary/40" />
          <span className="absolute bottom-3 left-3 rounded-sm bg-background/80 px-2 py-1 text-[10px] uppercase tracking-wider text-muted-foreground">Imagem ilustrativa</span>
        </Reveal>
        <Reveal delay={150}>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-primary">Sobre nós</p>
          <h2 className="text-5xl md:text-6xl">Academia Milenium, <span className="text-gradient-gold">em Maringá</span></h2>
          <p className="mt-6 text-muted-foreground">
            A Academia Milenium é um espaço dedicado a quem quer evoluir. Aqui você encontra um ambiente para treinar com foco,
            constância e motivação — seja para começar agora ou para ir além dos seus limites.
          </p>
          <p className="mt-4 text-muted-foreground">
            Quer saber mais sobre a nossa estrutura, equipe e forma de trabalho? Fale com a gente pelo WhatsApp.
          </p>
          <WaButton msg="info" variant="heroOutline" className="mt-8">Conhecer a academia</WaButton>
        </Reveal>
      </div>
    </section>
  );
}
