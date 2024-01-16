import { Add } from "../src/calculator";

test("Add function with empty string should return 0", () => {
  expect(Add("")).toBe(0);
});

test("Add function with a single number should return that number", () => {
  expect(Add("5")).toBe(5);
});

test("Add function with two numbers should return their sum", () => {
  expect(Add("5,7")).toBe(12);
});

test("Add function should handle unknown number of arguments", () => {
  expect(Add("1,2,3,4,5")).toBe(15);
});

test("Add function should handle new lines as separators", () => {
  expect(Add("1\n2,3")).toBe(6);
});

test("Add function should not allow a separator at the end", () => {
  expect(() => Add("1,2,")).toThrowError("Séparateur invalide à la fin de la chaîne.");
});

// test("Add function should allow custom delimiters", () => {
//     expect(Add("//;\n1;3")).toBe(4);
//     expect(Add("//|\n1|2|3")).toBe(6);
//     expect(Add("//sep\n2sep5")).toBe(7);
//     expect(() => Add("//|\n1|2,3")).toThrowError("'|' attendu mais ',' trouvé à la position 3");
//   });
  

test("Add function should not allow negative numbers", () => {
  expect(() => Add("1,-2")).toThrowError("Nombres négatifs non autorisés : -2");
  expect(() => Add("2,-4,-9")).toThrowError("Nombres négatifs non autorisés : -4, -9");
});

// test("Add function should handle multiple errors and return them separated by new lines", () => {
//     expect(() => Add("//|\n1|2,-3")).toThrowError("Nombres négatifs non autorisés : -3\n'|' attendu mais ',' trouvé en position 3");
// });

test("Add function should ignore numbers greater than 1000", () => {
  expect(Add("2,1001")).toBe(2);
  expect(Add("//|\n1|2,1001")).toBe(3);
});
