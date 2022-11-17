export function validateLength(a) { return a + 1; }

export function validateInput(inputValue, validationScheme) {
    const validationSchemas = {
        digits: /^\d*$/,
        digitsAbc: /^[a-zA-Z0-9]*$/,
      };
      return validationSchemas[validationScheme].test(inputValue);
}
