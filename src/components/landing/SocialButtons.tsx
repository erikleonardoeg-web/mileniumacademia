import type { ComponentType } from "react";
import { ArrowUpRight } from "lucide-react";
import { site } from "@/config/site";
import { cn } from "@/lib/utils";

export function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
      className={cn("size-5", className)}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.9}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2.6" y="2.6" width="18.8" height="18.8" rx="5.2" />
      <circle cx="12" cy="12" r="4.3" />
      <circle cx="17.55" cy="6.45" r="1.15" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" className={cn("size-5", className)} fill="currentColor">
      <path d="M24 12.073C24 5.404 18.627 0 12 0S0 5.404 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
    </svg>
  );
}

export type Network = {
  key: "instagram" | "facebook";
  label: string;
  handle: string;
  url: string;
  cta: string;
  description: string;
  Icon: ComponentType<{ className?: string }>;
  /** fundo do botão preenchido */
  solid: string;
  /** halo de brilho que aparece no hover */
  glow: string;
  /** fundo do botão só com ícone no hover */
  hoverBg: string;
  /** sombra colorida no hover */
  hoverShadow: string;
};

export const networks: Network[] = [
  {
    key: "instagram",
    label: "Instagram",
    handle: `@${site.instagram}`,
    url: site.instagramUrl,
    cta: "Seguir no Instagram",
    description: "Acompanhe as novidades e o dia a dia da Academia Milenium.",
    Icon: InstagramIcon,
    solid: "bg-instagram-gradient",
    glow: "bg-instagram-gradient",
    hoverBg: "hover:bg-instagram-gradient",
    hoverShadow: "hover:shadow-instagram",
  },
  {
    key: "facebook",
    label: "Facebook",
    handle: `facebook.com/${site.facebook}`,
    url: site.facebookUrl,
    cta: "Curtir no Facebook",
    description: "Curta a página da Milenium e acompanhe as novidades por lá.",
    Icon: FacebookIcon,
    solid: "bg-facebook",
    glow: "bg-facebook",
    hoverBg: "hover:bg-facebook",
    hoverShadow: "hover:shadow-facebook",
  },
];

type SocialButtonsProps = {
  /** "solid" = botões com nome e @/endereço; "icon" = botões redondos só com a marca */
  variant?: "solid" | "icon";
  size?: "sm" | "md";
  className?: string;
};

export function SocialButtons({ variant = "solid", size = "md", className }: SocialButtonsProps) {
  return (
    <div className={cn("flex flex-wrap items-center gap-3", className)}>
      {networks.map((n) => {
        const Icon = n.Icon;
        if (variant === "icon") {
          return (
            <a
              key={n.key}
              href={n.url}
              target="_blank"
              rel="noopener noreferrer"
              title={`${n.label}: ${n.handle}`}
              aria-label={`Abrir o ${n.label} da Academia Milenium`}
              className={cn(
                "social-sheen grid place-items-center rounded-full border border-border bg-surface text-muted-foreground transition-all duration-300 hover:-translate-y-1 hover:border-transparent hover:text-on-brand",
                size === "sm" ? "size-9" : "size-11",
                n.hoverBg,
                n.hoverShadow,
              )}
            >
              <Icon className={size === "sm" ? "size-4" : "size-5"} />
            </a>
          );
        }
        return (
          <a
            key={n.key}
            href={n.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Abrir o ${n.label} da Academia Milenium: ${n.handle}`}
            className={cn(
              "social-sheen group inline-flex items-center gap-3 rounded-sm text-on-brand transition-all duration-300 hover:-translate-y-1",
              size === "sm" ? "px-4 py-2.5" : "px-6 py-3.5",
              n.solid,
              n.hoverShadow,
            )}
          >
            <Icon className={size === "sm" ? "size-5" : "size-6"} />
            <span className="flex flex-col leading-none">
              <span className={cn("font-display tracking-wider", size === "sm" ? "text-lg" : "text-2xl")}>{n.label}</span>
              <span className={cn("mt-1 uppercase tracking-[0.16em] opacity-85", size === "sm" ? "text-[10px]" : "text-[11px]")}>
                {n.handle}
              </span>
            </span>
            <ArrowUpRight className={cn("ml-1 opacity-70 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5", size === "sm" ? "size-4" : "size-5")} />
          </a>
        );
      })}
    </div>
  );
}
