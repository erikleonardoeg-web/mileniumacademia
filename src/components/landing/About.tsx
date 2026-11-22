import img from "@/assets/sobre-academia-milenium.jpg";
import { Reveal } from "./Reveal";
import { WaButton } from "./WaButton";

export function About() {
  return (
    <section id="sobre" className="py-24 md:py-32">
      <div className="container mx-auto grid items-center gap-12 px-5 md:grid-cols-2">
        <Reveal className="relative">
          <img src={img} alt="Fachada da Academia Milenium em Maringá, com entrada de vidro, motos estacionadas e banner de Muay Thai e Jiu-Jitsu" width={1254} height={1254} loading="lazy" className="aspect-square w-full rounded-sm object-cover" />
          <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-sm border border-primary/40" />
        </Reveal>
        <Reveal delay={150}>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-primary">Sobre nós</p>
          <h2 className="text-5xl md:text-6xl">Academia Milenium, <span className="text-gradient-light">em Maringá</span></h2>
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
