import { describe, expect, it } from "vitest";
import { waMsg, waLink, site } from "./site";
describe("WhatsApp links", () => {
  it("usa o número correto", () => {
    expect(waLink("oi")).toBe("https://wa.me/5544998212872?text=oi");
  });
  it("mensagem de matrícula", () => {
    expect(decodeURIComponent(waMsg("matricula").split("text=")[1] ?? "")).toBe(
      "Olá! Conheci a Academia Milenium pelo site e gostaria de informações sobre matrícula.",
    );
  });
});

describe("Depoimentos", () => {
  it("traz os depoimentos reais enviados pelo proprietário, sem texto de exemplo", () => {
    expect(site.testimonials).toHaveLength(3);
    expect(site.testimonials.some((t) => t.text.includes("Espaço reservado"))).toBe(false);
    expect(site.testimonials[0]?.text).toBe(
      "Excelente ambiente muito bom agradável pessoas educadas e o proprietário é muito atencioso.",
    );
    expect(site.testimonials[2]?.text).toBe(
      "Atendimento muito bom e os profissionais acompanham nosso treino. Recomendo a qualquer um",
    );
  });
});
