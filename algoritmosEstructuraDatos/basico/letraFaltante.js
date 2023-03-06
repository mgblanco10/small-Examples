// Encuentra la letra que falta en el rango de letras aprobadas y la devuelve.
// Si todas las letras están presentes en el rango, devuelve undefined

function fearNotLetter(str) {
    for (let i = 0; i < str.length - 1; i++) {
      const currentCharCode = str.charCodeAt(i);
      const nextCharCode = str.charCodeAt(i + 1);
      if (nextCharCode - currentCharCode > 1) {
        return String.fromCharCode(currentCharCode + 1);
      }
    }
    return undefined;
  }
  
  console.log(fearNotLetter("abce")); // "d"
  console.log(fearNotLetter("abcdefghjklmno")); // "i"
  console.log(fearNotLetter("bcd")); // undefined