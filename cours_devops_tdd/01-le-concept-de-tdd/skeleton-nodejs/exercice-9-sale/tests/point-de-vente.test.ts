import { scannerCodeBarres, calculerTotalCommande } from "../src/point-de-vente";

describe("Point de Vente", () => {
  it("should scan a valid barcode and return the price", () => {
    expect(scannerCodeBarres("12345")).toBe("$7.25");
    expect(scannerCodeBarres("23456")).toBe("$12.50");
  });

  it("should return 'Erreur : code-barres non trouvé' for an invalid barcode", () => {
    expect(scannerCodeBarres("99999")).toBe("Erreur : code-barres non trouvé");
  });

  it("should return 'Erreur : code-barres vide' for an empty barcode", () => {
    expect(scannerCodeBarres("")).toBe("Erreur : code-barres vide");
  });

  it("should calculate the total price of scanned items", () => {
    const codesBarres = ["12345", "23456", "12345"];
    expect(calculerTotalCommande(codesBarres)).toBe("$27.00");
  });
});
