import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { site, waMsg } from "@/config/site";
import { SectionTitle, Reveal } from "./Reveal";

const faqs = [
  { q: "Quais são os valores dos planos?", a: "Os valores e condições são informados diretamente pela nossa equipe no WhatsApp, sempre atualizados." },
  { q: "Como faço minha matrícula?", a: "Basta clicar em qualquer botão de matrícula do site ou preencher o formulário. Você será atendido pelo WhatsApp." },
  { q: "Quais modalidades e horários estão disponíveis?", a: "Consulte nossa equipe pelo WhatsApp para saber as modalidades e horários atuais." },
  { q: "Onde fica a academia?", a: `Estamos em ${site.city} – ${site.state}. Veja a localização exata no mapa acima ou toque em “Como chegar”.` },
  { q: "Nunca treinei. Posso começar?", a: "Claro! Conte seu objetivo para a nossa equipe e tire todas as suas dúvidas antes de começar." },
];

export function FAQ() {
  return (
    <section id="faq" className="bg-surface py-24 md:py-32">
      <div className="container mx-auto max-w-3xl px-5">
        <SectionTitle eyebrow="Dúvidas" title={<>Perguntas <span className="text-gradient-gold">frequentes</span></>} />
        <Reveal>
          <Accordion type="single" collapsible>
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`i${i}`}>
                <AccordionTrigger className="text-left text-base hover:text-primary hover:no-underline">{f.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <p className="mt-8 text-center text-sm text-muted-foreground">
            Ficou com alguma dúvida? <a href={waMsg("info")} target="_blank" rel="noopener noreferrer" className="text-primary underline-offset-4 hover:underline">Fale com a gente</a>.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
