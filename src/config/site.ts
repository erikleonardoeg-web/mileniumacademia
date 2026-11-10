// Informações comerciais centralizadas. Edite aqui para atualizar todo o site.
export const site = {
  name: "Academia Milenium",
  city: "Maringá",
  state: "PR",
  whatsapp: "5544998212872",
  whatsappDisplay: "(44) 99821-2872",
  instagram: "milenium_academia",
  instagramUrl: "https://www.instagram.com/milenium_academia/",
  mapsUrl: "https://maps.app.goo.gl/KA2E9RESaP6nsziq8",
  mapsEmbed: "https://www.google.com/maps?q=Academia+Milenium+Maring%C3%A1+PR&output=embed",
  messages: {
    matricula: "Olá! Conheci a Academia Milenium pelo site e gostaria de informações sobre matrícula.",
    planos: "Olá! Gostaria de conhecer os planos, valores e condições da Academia Milenium.",
    info: "Olá! Gostaria de conhecer melhor a Academia Milenium.",
  },
  // Modalidades: preencha com as modalidades reais oferecidas pela academia.
  modalities: [] as { name: string; description: string }[],
} as const;

export type MessageKey = keyof typeof site.messages;

export function waLink(text: string) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;
}
export const waMsg = (k: MessageKey) => waLink(site.messages[k]);
