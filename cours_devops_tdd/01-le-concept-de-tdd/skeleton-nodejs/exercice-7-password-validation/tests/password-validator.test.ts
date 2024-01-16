// passwordValidator.test.ts

import { validatePassword } from "../src/password-validator";

describe("Password Validation", () => {
  it("should validate a valid password", () => {
    const result = validatePassword("ValidP@ss123");
    expect(result.isValid).toBe(true);
    expect(result.errors).toHaveLength(0);
  });

  it("should return an error for a password with less than 8 characters", () => {
    const result = validatePassword("Short");
    expect(result.isValid).toBe(false);
    expect(result.errors).toContain("Le mot de passe doit comporter au moins 8 caractères");
  });

  // Add more test cases for other validation criteria
});
