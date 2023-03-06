// Compara 2 matrices y devuelve nueva matriz con cualquier elemento que solo se encuentre en 1 de las matrices
// pero no en ambas. En otras palabras, devuelve diferencia simétrica de las 2 matrices.

function diffArray(arr1, arr2) {
    const newArr = [];
  
    // Recorre la primera matriz y agrega elementos que no estan en la segunda matriz
    for (let i = 0; i < arr1.length; i++) {
      if (!arr2.includes(arr1[i])) {
        newArr.push(arr1[i]);
      }
    }
  
    // Recorre la segunda matriz y agrega elementos que no estan en la primera matriz
    for (let j = 0; j < arr2.length; j++) {
      if (!arr1.includes(arr2[j])) {
        newArr.push(arr2[j]);
      }
    }
  
    return newArr;
  }
  
console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5])); // Devuelve [4]
console.log(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"])); // [ 'pink wool' ]
console.log(diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"])); // [ 'pink wool', 'diorite' ]
console.log(diffArray(["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"])); // []
console.log(diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4])); // [ 'piglet', 4 ]
console.log(diffArray([], ["snuffleupagus", "cookie monster", "elmo"])); // [ 'snuffleupagus', 'cookie monster', 'elmo' ]
console.log(diffArray([1, "calf", 3, "piglet"], [7, "filly"])); // [ 1, 'calf', 3, 'piglet', 7, 'filly' ]