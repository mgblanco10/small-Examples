// Elimina los valores falsos de una matriz. 
// Devuelve una nueva matriz y no cambia la matriz original.
// OJO Los valores falsos en JavaScript son false, null, 0, "", undefinedy NaN.


function bouncer(arr) {
    // filter() method crea un new array que  contiene sólo valores verdaderos
    let result = arr.filter(value => Boolean(value));
  
    return result;
  }
  
console.log(bouncer([7, "ate", "", false, 9]));
console.log(bouncer([7, "hola", "", undefined, 0, false, null, 9, "23"]));