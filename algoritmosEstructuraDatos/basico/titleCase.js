// Devuelve la cadena proporcionada con la primera letra de cada palabra en mayúscula el resto de las palabras en minúsculas.
// A los efectos de este ejercicio, también debe escribir en mayúsculas las palabras de conexión como "they" y "of".

function titleCase(str) { 
    let words = str.toLowerCase().split(" ");
  
    return words.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
  }
  

console.log(titleCase("I'm a little tea pot"));
console.log(titleCase("sHoRt AnD sToUt"));
console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"));
console.log(titleCase("the house of Monica"));