// Hay dos matrices y un índice.
// Copia cada elemento de la primera matriz en la segunda matriz, en orden.
// Inserta elementoS en el índice de la segunda matriz.
// Devuelve la matriz resultante. Las matrices de entrada deben permanecer iguales después de que se ejecute la función.

function frankenSplice(arr1, arr2, n) {
    // Create a new array that combines the elements of arr2 with the elements of arr1 copied into the appropriate position
    let result = arr2.slice(0, n).concat(arr1).concat(arr2.slice(n));
  
    return result;
  }
  
console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));
console.log(frankenSplice([3, 2, 3], [47, 5, 6, 7], 2));
