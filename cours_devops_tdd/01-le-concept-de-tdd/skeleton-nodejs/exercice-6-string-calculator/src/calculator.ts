export function Add(numbers: string): number {
  if (numbers === "") {
    return 0;
  }

  if (numbers.endsWith(",") || numbers.endsWith("\n")) {
    throw new Error("Séparateur invalide à la fin de la chaîne.");
  }

  if (numbers.startsWith("//")) {
    const delimiterEnd = numbers.indexOf("\n");
    if (delimiterEnd === -1) {
      throw new Error("Format de délimiteur incorrect.");
    }
    const customDelimiter = numbers.substring(2, delimiterEnd);
    const remainingNumbers = numbers.substring(delimiterEnd + 1);

    if (customDelimiter.includes(",") || customDelimiter.includes("\n")) {
      throw new Error(`'${customDelimiter}' attendu mais ',' ou '\n' trouvé à la position ${customDelimiter.indexOf(",") !== -1 ? customDelimiter.indexOf(",") : customDelimiter.indexOf("\n")}`);
    }

    const nums = remainingNumbers.split(new RegExp(`[${customDelimiter},\n]`));
    const negativeNumbers = nums.filter((num) => parseInt(num) < 0);

    if (negativeNumbers.length > 0) {
      throw new Error(`Nombres négatifs non autorisés : ${negativeNumbers.join(", ")}`);
    }

    const filteredNums = nums.filter((num) => parseInt(num) <= 1000);
    return filteredNums.reduce((sum, num) => sum + parseInt(num), 0);
  } else {
    const nums = numbers.split(/,|\n/);
    const negativeNumbers = nums.filter((num) => parseInt(num) < 0);

    if (negativeNumbers.length > 0) {
      throw new Error(`Nombres négatifs non autorisés : ${negativeNumbers.join(", ")}`);
    }

    const filteredNums = nums.filter((num) => parseInt(num) <= 1000);
    return filteredNums.reduce((sum, num) => sum + parseInt(num), 0);
  }
}
