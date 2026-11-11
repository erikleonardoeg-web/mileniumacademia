import { MapPin, MessageCircle, Target, Flame } from "lucide-react";
import { Reveal, SectionTitle } from "./Reveal";

const items = [
  { icon: MapPin, title: "Em Maringá", text: "Uma academia da cidade, pensada para a rotina de quem mora e trabalha aqui." },
  { icon: Target, title: "Foco no seu objetivo", text: "Conte o que você busca e receba orientação sobre o melhor caminho para começar." },
  { icon: MessageCircle, title: "Atendimento direto", text: "Tire dúvidas e faça sua matrícula de forma rápida pelo WhatsApp." },
  { icon: Flame, title: "Ambiente motivador", text: "Um espaço para treinar com energia e manter a constância." },
];

export function Benefits() {
  return (
    <section className="bg-surface py-24 md:py-32">
      <div className="container mx-auto px-5">
        <SectionTitle eyebrow="Por que a Milenium" title={<>Feita para quem <span className="text-gradient-light">não para</span></>} />
        <div className="grid gap-px overflow-hidden rounded-sm bg-border sm:grid-cols-2 lg:grid-cols-4">
          {items.map((b, i) => (
            <Reveal key={b.title} delay={i * 100} className="group h-full bg-surface p-8 transition-colors hover:bg-card">
              <b.icon className="mb-6 size-8 text-primary transition-transform group-hover:scale-110" />
              <h3 className="text-3xl">{b.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{b.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
