import { Dumbbell } from "lucide-react";
import { site } from "@/config/site";
import { Reveal, SectionTitle } from "./Reveal";
import { WaButton } from "./WaButton";

export function Modalities() {
  const items = site.modalities;
  return (
    <section id="modalidades" className="py-24 md:py-32">
      <div className="container mx-auto px-5">
        <SectionTitle eyebrow="Modalidades" title={<>Encontre o seu <span className="text-gradient-gold">treino</span></>} />
        {items.length > 0 ? (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((m, i) => (
              <Reveal key={m.name} delay={i * 80} className="rounded-sm border border-border bg-card p-8 transition-colors hover:border-primary">
                <Dumbbell className="mb-4 text-primary" />
                <h3 className="text-3xl">{m.name}</h3>
                <p className="mt-2 text-muted-foreground">{m.description}</p>
              </Reveal>
            ))}
          </div>
        ) : (
          <Reveal className="mx-auto max-w-xl rounded-sm border border-border bg-card p-10 text-center">
            <Dumbbell className="mx-auto mb-4 size-10 text-primary" />
            <p className="text-muted-foreground">Consulte as modalidades disponíveis e os horários diretamente com a nossa equipe.</p>
            <WaButton msg="info" className="mt-6">Ver modalidades</WaButton>
          </Reveal>
        )}
      </div>
    </section>
  );
}
