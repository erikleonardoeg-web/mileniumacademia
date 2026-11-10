import { useState } from "react";
import { z } from "zod";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { waLink } from "@/config/site";
import { Reveal } from "./Reveal";

const goals = ["Emagrecimento", "Ganho de massa muscular", "Condicionamento físico", "Saúde e qualidade de vida", "Outro"];
const interests = ["Matrícula", "Conhecer os planos", "Agendar uma visita", "Outras informações"];

const schema = z.object({
  nome: z.string().trim().min(2, "Informe seu nome").max(80),
  telefone: z.string().trim().refine((v) => { const d = v.replace(/\D/g, ""); return d.length >= 10 && d.length <= 11; }, "Telefone com DDD inválido"),
  objetivo: z.string().min(1, "Selecione um objetivo"),
  interesse: z.string().min(1, "Selecione seu interesse"),
});
type Form = z.infer<typeof schema>;

function maskPhone(v: string) {
  const d = v.replace(/\D/g, "").slice(0, 11);
  if (d.length <= 2) return d;
  if (d.length <= 6) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
  if (d.length <= 10) return `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`;
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
}

const field = "w-full rounded-sm border border-input bg-background px-4 py-3 text-foreground outline-none transition-colors focus:border-primary";

export function Contact() {
  const [f, setF] = useState<Form>({ nome: "", telefone: "", objetivo: "", interesse: "" });
  const [errors, setErrors] = useState<Partial<Record<keyof Form, string>>>({});
  const set = (k: keyof Form, v: string) => setF((p) => ({ ...p, [k]: k === "telefone" ? maskPhone(v) : v }));

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const r = schema.safeParse(f);
    if (!r.success) {
      const errs: typeof errors = {};
      r.error.issues.forEach((i) => { errs[i.path[0] as keyof Form] ??= i.message; });
      setErrors(errs); return;
    }
    setErrors({});
    const d = r.data;
    const msg = `Olá! Conheci a Academia Milenium pelo site.\n\nNome: ${d.nome}\nTelefone: ${d.telefone}\nObjetivo: ${d.objetivo}\nInteresse: ${d.interesse}`;
    window.open(waLink(msg), "_blank", "noopener,noreferrer");
  }

  const Err = ({ k }: { k: keyof Form }) => errors[k] ? <p className="mt-1 text-xs text-destructive">{errors[k]}</p> : null;

  return (
    <section id="contato" className="relative overflow-hidden py-24 md:py-32">
      <div className="container mx-auto grid gap-12 px-5 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-primary">Matrícula</p>
          <h2 className="text-6xl md:text-7xl">Seu melhor <span className="text-gradient-gold">começa agora.</span></h2>
          <p className="mt-6 max-w-md text-muted-foreground">Preencha seus dados e continue o atendimento pelo WhatsApp com a equipe da Academia Milenium.</p>
        </Reveal>
        <Reveal delay={150}>
          <form onSubmit={submit} noValidate className="space-y-4 rounded-sm border border-border bg-card p-6 md:p-8">
            <div>
              <label htmlFor="nome" className="mb-1 block text-sm">Nome</label>
              <input id="nome" className={field} value={f.nome} onChange={(e) => set("nome", e.target.value)} maxLength={80} autoComplete="name" />
              <Err k="nome" />
            </div>
            <div>
              <label htmlFor="tel" className="mb-1 block text-sm">Telefone (WhatsApp)</label>
              <input id="tel" type="tel" inputMode="tel" placeholder="(44) 99999-9999" className={field} value={f.telefone} onChange={(e) => set("telefone", e.target.value)} autoComplete="tel" />
              <Err k="telefone" />
            </div>
            <div>
              <label htmlFor="obj" className="mb-1 block text-sm">Objetivo de treino</label>
              <select id="obj" className={field} value={f.objetivo} onChange={(e) => set("objetivo", e.target.value)}>
                <option value="">Selecione</option>
                {goals.map((g) => <option key={g}>{g}</option>)}
              </select>
              <Err k="objetivo" />
            </div>
            <div>
              <label htmlFor="int" className="mb-1 block text-sm">Interesse</label>
              <select id="int" className={field} value={f.interesse} onChange={(e) => set("interesse", e.target.value)}>
                <option value="">Selecione</option>
                {interests.map((g) => <option key={g}>{g}</option>)}
              </select>
              <Err k="interesse" />
            </div>
            <Button type="submit" variant="hero" size="xl" className="w-full"><Send />Enviar pelo WhatsApp</Button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
