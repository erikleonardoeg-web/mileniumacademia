import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { WaButton } from "./WaButton";
import { cn } from "@/lib/utils";
import logoImg from "@/assets/logo-milenium.png";

const links = [
  ["Sobre", "#sobre"], ["Estrutura", "#estrutura"], ["Modalidades", "#modalidades"],
  ["Planos", "#planos"], ["Localização", "#localizacao"], ["Dúvidas", "#faq"], ["Contato", "#contato"],
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 30);
    f(); window.addEventListener("scroll", f, { passive: true });
    return () => window.removeEventListener("scroll", f);
  }, []);
  return (
    <header className={cn("fixed inset-x-0 top-0 z-50 transition-all", scrolled || open ? "border-b border-border bg-background/90 backdrop-blur-md" : "bg-transparent")}>
      <div className="container mx-auto flex h-16 items-center justify-between px-5 md:h-20">
        <a href="#inicio" className="flex items-center" aria-label="Academia Milenium - início">
          <img
            src={logoImg}
            alt="Academia Milenium"
            width={908}
            height={176}
            className="h-7 w-auto md:h-8"
          />
        </a>
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Principal">
          {links.map(([l, h]) => <a key={h} href={h} className="text-sm uppercase tracking-wider text-muted-foreground transition-colors hover:text-primary">{l}</a>)}
        </nav>
        <div className="flex items-center gap-2">
          <WaButton msg="matricula" size="sm" className="hidden h-10 px-5 sm:inline-flex">Matricule-se</WaButton>
          <button className="p-2 lg:hidden" onClick={() => setOpen(!open)} aria-label={open ? "Fechar menu" : "Abrir menu"} aria-expanded={open}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {open && (
        <nav className="border-t border-border px-5 pb-6 lg:hidden" aria-label="Menu móvel">
          {links.map(([l, h]) => <a key={h} href={h} onClick={() => setOpen(false)} className="block border-b border-border py-4 font-display text-2xl tracking-wider">{l}</a>)}
          <WaButton msg="matricula" className="mt-6 w-full">Quero me matricular</WaButton>
        </nav>
      )}
    </header>
  );
}
