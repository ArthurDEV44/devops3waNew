// citySearch.test.ts

import { searchCities } from "../src/city-search";
import { cities } from "../src/city-search";

describe("City Search", () => {
  it("should return an empty array for a query with less than 2 characters", () => {
    const result = searchCities("a");
    expect(result).toEqual([]);
  });

  it("should return matching cities for a valid query", () => {
    const result = searchCities("va");
    expect(result).toEqual(["Valence", "Vancouver"]);
  });

  it("should be case-insensitive", () => {
    const result = searchCities("PARIS");
    expect(result).toEqual(["Paris"]);
  });

//   it("should work with partial city names", () => {
//     const result = searchCities("ape");
//     expect(result).toEqual(["Budapest"]);
//   });

//   it("should return all cities for '*' query", () => {
//     const result = searchCities("*");
//     expect(result).toEqual(cities);
//   });
});
