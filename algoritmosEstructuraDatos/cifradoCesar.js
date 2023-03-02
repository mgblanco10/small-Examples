function rot13(str) {
    let decodedStr = '';
  
    // Iterar sobre cada carácter de la cadena
    for (let i = 0; i < str.length; i++) {
      // Obtener el valor ASCII del carácter actual
      const charCode = str.charCodeAt(i);
  
      // Decodificar letras mayúsculas
      if (charCode >= 65 && charCode <= 90) {
        // Desplazar el valor ASCII por 13 posiciones y envolver si se sale del rango de letras mayúsculas
        const decodedCharCode = ((charCode - 65 + 13) % 26) + 65;
        decodedStr += String.fromCharCode(decodedCharCode);
      } else {
        // Mantener cualquier carácter no alfabético
        decodedStr += str[i];
      }
    }
  
    return decodedStr;
  }
  
const result = rot13("ZBAVPN TNOEVRYN OYNAPB"); 
console.log(result) 