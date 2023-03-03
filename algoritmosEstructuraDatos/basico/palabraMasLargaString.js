function findLongestWordLength(str) {
    // Divide la cadena en palabras
    const words = str.split(' ');
    // Inicializa la longitud de la palabra más larga a 0
    let maxLength = 0;
    // Itera sobre las palabras y encuentra la longitud de la palabra más larga
    for (let i = 0; i < words.length; i++) {
      const currentLength = words[i].length;
      if (currentLength > maxLength) {
        maxLength = currentLength;
      }
    }
    // Devuelve la longitud de la palabra más larga
    return maxLength;
  }
  
console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));
console.log(findLongestWordLength("Muy buenos días por la mañana"));