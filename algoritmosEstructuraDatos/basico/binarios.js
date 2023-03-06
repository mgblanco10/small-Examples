// Devuelve una oración traducida al inglés de la cadena binaria pasada.
// La cadena binaria estará separada por espacios.

function binaryAgent(str) {
    const binaryArray = str.split(" ");
    let englishArray = [];
    for (let i = 0; i < binaryArray.length; i++) {
      const decimal = parseInt(binaryArray[i], 2);
      const englishChar = String.fromCharCode(decimal);
      englishArray.push(englishChar);
    }
    const englishString = englishArray.join("");
    return englishString;
  }
  
console.log(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"));
// Aren't bonfires fun!?
console.log(binaryAgent("01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110101 01101110 00100001"));
// I love Fun!
