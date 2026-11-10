import { Quote } from "lucide-react";
import { Reveal, SectionTitle } from "./Reveal";

// CONTEÚDO DEMONSTRATIVO — substitua por depoimentos reais de alunos (com autorização).
const items = [
  { text: "Espaço reservado para o depoimento de um aluno sobre sua experiência na academia.", name: "Nome do aluno" },
  { text: "Espaço reservado para o depoimento de um aluno sobre os resultados alcançados.", name: "Nome do aluno" },
  { text: "Espaço reservado para o depoimento de um aluno sobre o atendimento e o ambiente.", name: "Nome do aluno" },
];

export function Testimonials() {
  return (
    <section className="bg-surface py-24 md:py-32">
      <div className="container mx-auto px-5">
        <SectionTitle eyebrow="Depoimentos" title={<>Quem treina, <span className="text-gradient-gold">recomenda</span></>} />
        <p className="-mt-8 mb-10 text-center text-xs uppercase tracking-wider text-muted-foreground">Conteúdo demonstrativo — depoimentos reais em breve</p>
        <div className="grid gap-4 md:grid-cols-3">
          {items.map((t, i) => (
            <Reveal key={i} delay={i * 100} className="rounded-sm border border-border bg-card p-8">
              <Quote className="mb-4 text-primary" />
              <p className="italic text-muted-foreground">“{t.text}”</p>
              <p className="mt-6 font-semibold">{t.name}</p>
              <p className="text-xs text-muted-foreground">Exemplo demonstrativo</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
