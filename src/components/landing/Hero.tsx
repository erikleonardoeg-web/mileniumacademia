import { ChevronDown } from "lucide-react";
import heroAsset from "@/assets/fachada-academia-milenium-nova.jpg.asset.json";
import { WaButton } from "./WaButton";
import { site } from "@/config/site";

export function Hero() {
  return (
    <section id="inicio" className="relative flex min-h-[100svh] items-end overflow-hidden pb-20 pt-28 md:items-center">
      <img src={heroAsset.url} alt="Fachada da Academia Milenium em Maringá" width={1599} height={984} fetchPriority="high" className="absolute inset-0 h-full w-full object-cover object-center lg:inset-x-0 lg:top-auto lg:bottom-0 lg:h-[120svh] lg:w-full lg:object-bottom" />
      <div className="absolute inset-0 bg-gradient-hero-sm md:hidden" />
      <div className="absolute inset-0 hidden bg-gradient-hero md:block" />
      <div className="container relative mx-auto px-5">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-primary animate-in fade-in slide-in-from-bottom-4 duration-700">Academia em {site.city} – {site.state}</p>
        <h1 className="max-w-3xl text-7xl sm:text-8xl lg:text-[9rem] animate-in fade-in slide-in-from-bottom-6 duration-1000">
          Seu melhor <br /><span className="text-gradient-light">está por vir.</span>
        </h1>
        <p className="mt-6 max-w-md text-lg text-foreground/80 animate-in fade-in duration-1000">
          Dê o primeiro passo hoje. Fale com a equipe da Academia Milenium e descubra o plano ideal para você.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <WaButton msg="matricula">Quero me matricular</WaButton>
          <WaButton msg="planos" variant="heroOutline">Consultar planos</WaButton>
        </div>
      </div>
      <a href="#sobre" aria-label="Rolar para a próxima seção" className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 animate-bounce text-muted-foreground md:block"><ChevronDown /></a>
    </section>
  );
}
