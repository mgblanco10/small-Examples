function smallestCommons(arr) {
    arr.sort((a, b) => a - b);
    const sequence = Array.from({length: arr[1] - arr[0] + 1}, (_, i) => arr[0] + i);
    let multiple = arr[1];
    
    while (true) {
      let isMultiple = sequence.every(num => multiple % num === 0);
      if (isMultiple) {
        return multiple;
      }
      multiple += arr[1];
    }
  }
  
console.log(smallestCommons([1,5]));//60
console.log(smallestCommons([5, 1])); // 60
console.log(smallestCommons([2, 10])); // 2520
console.log(smallestCommons([1, 13])); // 360360
console.log(smallestCommons([23, 18])); // 6056820