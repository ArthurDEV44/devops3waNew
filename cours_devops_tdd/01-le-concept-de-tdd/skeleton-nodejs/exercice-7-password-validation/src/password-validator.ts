interface ValidationResult {
    isValid: boolean;
    errors: string[];
  }
  
  export function validatePassword(password: string): ValidationResult {
    const errors: string[] = [];
  
    if (password.length < 8) {
      errors.push("Le mot de passe doit comporter au moins 8 caractères");
    }
  
    const digitCount = password.split('').filter(char => /\d/.test(char)).length;
    if (digitCount < 2) {
      errors.push("Le mot de passe doit contenir au moins 2 chiffres");
    }
  
    if (!/[A-Z]/.test(password)) {
      errors.push("Le mot de passe doit contenir au moins une lettre majuscule");
    }
  
    if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password)) {
      errors.push("Le mot de passe doit contenir au moins un caractère spécial");
    }
  
    return {
      isValid: errors.length === 0,
      errors,
    };
  }
  