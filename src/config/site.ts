// Informações comerciais centralizadas. Edite aqui para atualizar todo o site.
export const site = {
  name: "Academia Milenium",
  city: "Maringá",
  state: "PR",
  whatsapp: "5544998212872",
  whatsappDisplay: "(44) 99821-2872",
  instagram: "milenium_academia",
  instagramUrl: "https://www.instagram.com/milenium_academia/",
  facebook: "Milenium.Academia",
  facebookUrl: "https://www.facebook.com/Milenium.Academia",
  mapsUrl: "https://maps.app.goo.gl/KA2E9RESaP6nsziq8",
  mapsEmbed: "https://www.google.com/maps?q=Academia+Milenium+Maring%C3%A1+PR&output=embed",
  messages: {
    matricula: "Olá! Conheci a Academia Milenium pelo site e gostaria de informações sobre matrícula.",
    planos: "Olá! Gostaria de conhecer os planos, valores e condições da Academia Milenium.",
    info: "Olá! Gostaria de conhecer melhor a Academia Milenium.",
  },
  // Modalidades: preencha com as modalidades reais oferecidas pela academia.
  modalities: [] as { name: string; description: string }[],
  // Depoimentos reais de alunos, enviados pelo proprietário em 17/11/2026. Texto preservado como recebido.
  testimonials: [
    {
      text: "Excelente ambiente muito bom agradável pessoas educadas e o proprietário é muito atencioso.",
      name: "Aluno(a) da Milenium",
    },
    {
      text: "Aparelhos funcionando perfeitamente diversos a escolha e orientação perfeita para qualquer tipo de exercício que convém e se é indicado para cada uma pessoa com o modo e intensidade de uso.",
      name: "Aluno(a) da Milenium",
    },
    {
      text: "Atendimento muito bom e os profissionais acompanham nosso treino. Recomendo a qualquer um",
      name: "Aluno(a) da Milenium",
    },
  ] as { text: string; name: string }[],
} as const;

export type MessageKey = keyof typeof site.messages;

export function waLink(text: string) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;
}
export const waMsg = (k: MessageKey) => waLink(site.messages[k]);
