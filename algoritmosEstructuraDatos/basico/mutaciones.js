// Retorna true si la cadena en el primer elemento de la matriz contiene todas las letras de la cadena en el segundo elemento de la matriz.
//

function mutation(arr) {
    // Convierte ambas cadenas a minúsculas para hacer la comparación 
    let str1 = arr[0].toLowerCase();
    let str2 = arr[1].toLowerCase();
  
    // Recorre cada letra de la segunda cadena
    for (let i = 0; i < str2.length; i++) {
      // Si la letra actual no se encuentra en la primera cadena, retornar false
      if (str1.indexOf(str2[i]) === -1) {
        return false;
      }
    }
  
    // Si se recorrió toda la segunda cadena sin encontrar letras faltantes, retornar true
    return true;
  }
  
  
console.log(mutation(["hello", "hey"]));
console.log(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]));
console.log(mutation(["Mary", "Army"]));
console.log(mutation(["Alien", "line"]));
console.log(mutation(["floor", "for"]));
console.log(mutation(["hello", "neo"]));
console.log(mutation(["voodoo", "no"]));
console.log(mutation(["ate", "date"]));
console.log(mutation(["Tiger", "Zebra"]));
console.log(mutation(["Noel", "Ole"]));
console.log(mutation(["Monica", "Blanco"]));