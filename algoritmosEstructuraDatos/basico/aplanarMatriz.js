//Aplana una matriz anidada.

function steamrollArray(arr) {
    let flattened = [];
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        flattened = flattened.concat(steamrollArray(arr[i]));
      } else {
        flattened.push(arr[i]);
      }
    }
    return flattened;
  }
  
  console.log(steamrollArray([1, [2], [3, [[4]]]])); 
  // devuelve [1, 2, 3, 4]
  console.log(steamrollArray([[["a"]], [["b"]]])); 
  // devuelve [ 'a', 'b' ]
  console.log(steamrollArray([1, [], [3, [[4]]]])); 
  // devuelve [ 1, 3, 4 ]
  console.log(steamrollArray([1, {}, [3, [[4]]]])); 
  // devuelve [ 1, {}, 3, 4 ]