export const cities: string[] = [
    "Paris", "Budapest", "Skopje", "Rotterdam", "Valence", "Vancouver",
    "Amsterdam", "Vienne", "Sydney", "New York City", "Londres", "Bangkok",
    "Hong Kong", "Dubaï", "Rome", "Istanbul"
];

export function searchCities(query: string): string[] {
    // Condition préalable : si le texte de recherche a moins de 2 caractères, retourner un tableau vide
    if (query.length < 2) {
      return [];
    }
  
    query = query.toLowerCase(); // Convertir la requête en minuscules pour une recherche insensible à la casse
  
    if (query === "*") {
      return cities; // Si la requête est une astérisque, renvoyer toutes les villes
    }
  
    // Filtrer les villes qui commencent par la requête
    const matchingCities = cities.filter(city => city.toLowerCase().startsWith(query));
  
    return matchingCities;
}
  