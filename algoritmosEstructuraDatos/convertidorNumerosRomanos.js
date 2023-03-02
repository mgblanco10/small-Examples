function convertToRoman(num) {
    // Definir los valores y símbolos romanos
    const romanValues = [
      { value: 1000, symbol: 'M' },
      { value: 900, symbol: 'CM' },
      { value: 500, symbol: 'D' },
      { value: 400, symbol: 'CD' },
      { value: 100, symbol: 'C' },
      { value: 90, symbol: 'XC' },
      { value: 50, symbol: 'L' },
      { value: 40, symbol: 'XL' },
      { value: 10, symbol: 'X' },
      { value: 9, symbol: 'IX' },
      { value: 5, symbol: 'V' },
      { value: 4, symbol: 'IV' },
      { value: 1, symbol: 'I' }
    ];
  
    let romanNumeral = '';
  
    // Convertir el número en un número romano
    for (let i = 0; i < romanValues.length; i++) {
      while (num >= romanValues[i].value) {
        romanNumeral += romanValues[i].symbol;
        num -= romanValues[i].value;
      }
    }
  
    return romanNumeral;
  }

console.log(convertToRoman(36)); // XXXVI
console.log(convertToRoman(1999)); // MCMXCIX
console.log(convertToRoman(148)); // CXLVIII