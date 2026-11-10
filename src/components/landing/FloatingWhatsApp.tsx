import { MessageCircle } from "lucide-react";
import { waMsg } from "@/config/site";

export function FloatingWhatsApp() {
  return (
    <a href={waMsg("info")} target="_blank" rel="noopener noreferrer" aria-label="Falar no WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex size-14 items-center justify-center rounded-full bg-whatsapp text-primary-foreground shadow-lg transition-transform hover:scale-110 animate-pulse-ring">
      <MessageCircle className="size-7" />
    </a>
  );
}
