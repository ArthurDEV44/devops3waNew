const prixProduits: Record<string, number> = {
    '12345': 7.25,
    '23456': 12.50,
};
  
export function scannerCodeBarres(codeBarres: string): string {
    if (codeBarres === '') {
      return 'Erreur : code-barres vide';
    }
  
    if (prixProduits.hasOwnProperty(codeBarres)) {
      return `$${prixProduits[codeBarres].toFixed(2)}`;
    }
  
    return 'Erreur : code-barres non trouvé';
}

export function calculerTotalCommande(codesBarres: string[]): string {
    let total = 0;
  
    for (const codeBarres of codesBarres) {
      if (prixProduits.hasOwnProperty(codeBarres)) {
        total += prixProduits[codeBarres];
      }
    }
  
    return `$${total.toFixed(2)}`;
}
  
  