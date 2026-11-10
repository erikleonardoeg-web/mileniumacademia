import { describe, expect, it } from "vitest";
import { waMsg, waLink } from "./site";
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
