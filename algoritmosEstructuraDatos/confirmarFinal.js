function confirmEndingMethod(str, target) {
    return str.endsWith(target);
  }
  
console.log(confirmEndingMethod("Bastian", "n"));//true
console.log(confirmEndingMethod("Monica", "a"));//true
console.log(confirmEndingMethod("Bastian", "s"));//false

// sin el método endsWith ()
function confirmEnding(str, target) {
    return str.slice(str.length - target.length) === target;
  }
  
console.log(confirmEnding("Bastian", "n"));//true
console.log(confirmEnding("Monica", "a"));//true
console.log(confirmEnding("Bastian", "s"));//false
