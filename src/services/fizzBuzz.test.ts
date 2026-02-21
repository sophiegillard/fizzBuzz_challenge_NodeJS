import { fizzBuzz, generateFizzBuzz } from "./fizzBuzz.js";

describe("fizzBuzz", () => {
  it("retourne Fizz pour les multiples de 3", () => {
    expect(fizzBuzz(3)).toBe("Fizz");
    expect(fizzBuzz(6)).toBe("Fizz");
  });

  it("retourne Buzz pour les multiples de 5", () => {
    expect(fizzBuzz(5)).toBe("Buzz");
    expect(fizzBuzz(10)).toBe("Buzz");
  });

  it("retourne FizzBuzz pour les multiples de 3 et 5", () => {
    expect(fizzBuzz(15)).toBe("FizzBuzz");
    expect(fizzBuzz(30)).toBe("FizzBuzz");
  });

  it("retourne le nombre sinon", () => {
    expect(fizzBuzz(1)).toBe(1);
    expect(fizzBuzz(7)).toBe(7);
  });
});

describe("generateFizzBuzz", () => {
  it("génère la séquence correcte", () => {
    expect(generateFizzBuzz(15)).toEqual([
      1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz",
      "Buzz", 11, "Fizz", 13, 14, "FizzBuzz",
    ]);
  });

  it("gère limit=1", () => {
    expect(generateFizzBuzz(1)).toEqual([1]);
  });
});
