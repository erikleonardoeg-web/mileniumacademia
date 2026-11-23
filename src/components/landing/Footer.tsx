import { MapPin, MessageCircle } from "lucide-react";
import { site, waMsg } from "@/config/site";
import { SocialButtons } from "./SocialButtons";
import logoImg from "@/assets/logo-milenium.png";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface pb-24 pt-16 md:pb-10">
      <div className="container mx-auto grid gap-10 px-5 md:grid-cols-3">
        <div>
          <img
            src={logoImg}
            alt="Academia Milenium"
            width={908}
            height={176}
            className="h-8 w-auto"
          />
          <p className="mt-3 text-sm text-muted-foreground">Academia em {site.city} – {site.state}. Seu melhor está por vir.</p>
        </div>
        <nav aria-label="Rodapé" className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
          {[["Sobre", "#sobre"], ["Estrutura", "#estrutura"], ["Modalidades", "#modalidades"], ["Planos", "#planos"], ["Localização", "#localizacao"], ["Dúvidas", "#faq"]].map(([l, h]) => (
            <a key={h} href={h} className="hover:text-primary">{l}</a>
          ))}
        </nav>
        <div className="space-y-3 text-sm">
          <a href={waMsg("info")} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary"><MessageCircle className="size-4 text-primary" />{site.whatsappDisplay}</a>
          <a href={site.mapsUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary"><MapPin className="size-4 text-primary" />Ver no Google Maps</a>
          <div>
            <p className="mb-2 text-xs uppercase tracking-[0.25em] text-muted-foreground">Siga a Milenium</p>
            <SocialButtons variant="icon" size="md" />
          </div>
        </div>
      </div>
      <p className="container mx-auto mt-12 px-5 text-xs text-muted-foreground">© {new Date().getFullYear()} {site.name}. Todos os direitos reservados. Imagens ilustrativas.</p>
    </footer>
  );
}
