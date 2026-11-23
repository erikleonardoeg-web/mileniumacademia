import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { networks } from "./SocialButtons";
import { cn } from "@/lib/utils";

export function Social() {
  return (
    <section id="redes" className="relative overflow-hidden bg-surface py-24 md:py-32">
      <div className="container mx-auto px-5">
        <Reveal variant="wipe" className="mx-auto mb-14 max-w-2xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-primary">Redes sociais</p>
          <h2 className="text-5xl md:text-6xl">
            Siga a <span className="text-gradient-light">Milenium</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Toque em um dos botões e entre direto no nosso perfil.
          </p>
        </Reveal>

        <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
          {networks.map((n, i) => {
            const Icon = n.Icon;
            return (
              <Reveal key={n.key} variant={i === 0 ? "left" : "right"} delay={i * 150} className="h-full">
                <a
                  href={n.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Abrir o ${n.label} da Academia Milenium: ${n.handle}`}
                  className="group relative flex h-full flex-col gap-5 overflow-hidden rounded-sm border border-border bg-card p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-on-brand/25 md:p-9"
                >
                  <div
                    className={cn(
                      "pointer-events-none absolute -left-14 -top-14 size-44 rounded-full opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-45",
                      n.glow,
                    )}
                  />
                  <div className="relative flex items-center gap-4">
                    <span
                      className={cn(
                        "social-sheen grid size-14 shrink-0 place-items-center rounded-sm text-on-brand transition-transform duration-500 group-hover:scale-105",
                        n.solid,
                        n.hoverShadow,
                      )}
                    >
                      <Icon className="size-7" />
                    </span>
                    <span>
                      <span className="block font-display text-3xl tracking-wider md:text-4xl">{n.label}</span>
                      <span className="mt-1 block text-sm text-muted-foreground">{n.handle}</span>
                    </span>
                  </div>
                  <p className="relative text-sm text-muted-foreground">{n.description}</p>
                  <span className="relative mt-auto inline-flex items-center gap-2 pt-2 text-xs font-semibold uppercase tracking-[0.25em] text-primary">
                    {n.cta}
                    <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-1" />
                  </span>
                </a>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
