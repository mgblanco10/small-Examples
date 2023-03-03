function largestOfFour(arr) {
    let largestNumbers = [];
    for (let i = 0; i < arr.length; i++) {
      let largest = arr[i][0];
      for (let j = 1; j < arr[i].length; j++) {
        if (arr[i][j] > largest) {
          largest = arr[i][j];
        }
      }
      largestNumbers.push(largest);
    }
    return largestNumbers;
  }

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));

console.log(largestOfFour([[7, 5, 1, 53], [166, 101, 857, 1]]));