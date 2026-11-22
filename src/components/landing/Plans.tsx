import { Check } from "lucide-react";
import { Reveal, SectionTitle } from "./Reveal";
import { WaButton } from "./WaButton";

const steps = ["Fale com a equipe pelo WhatsApp", "Conte seu objetivo e sua rotina", "Receba valores e condições atualizados", "Comece a treinar"];

export function Plans() {
  return (
    <section id="planos" className="py-24 md:py-32">
      <div className="container mx-auto px-5">
        <SectionTitle eyebrow="Planos" title={<>O plano certo <span className="text-gradient-light">para você</span></>} text="Valores e condições são informados diretamente pela nossa equipe, sempre atualizados." />
        <Reveal variant="scale" className="mx-auto max-w-3xl rounded-sm border border-primary/40 bg-card p-8 shadow-light md:p-12">
          <ul className="grid gap-4 sm:grid-cols-2">
            {steps.map((s, i) => (
              <li key={s} className="flex items-start gap-3">
                <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-gradient-light font-display text-lg text-primary-foreground">{i + 1}</span>
                <span className="pt-1">{s}</span>
              </li>
            ))}
          </ul>
          <div className="mt-10 flex flex-col items-center gap-3 text-center">
            <WaButton msg="planos" className="w-full sm:w-auto">Consultar planos e valores</WaButton>
            <p className="flex items-center gap-2 text-xs text-muted-foreground"><Check className="size-4 text-primary" />Sem compromisso</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
