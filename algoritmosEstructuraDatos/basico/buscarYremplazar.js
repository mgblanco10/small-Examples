function myReplace(str, before, after) {
    let firstChar = before.charAt(0);
    if (firstChar === firstChar.toUpperCase()) {
      after = after.charAt(0).toUpperCase() + after.slice(1);
    } else {
      after = after.charAt(0).toLowerCase() + after.slice(1);
    }
    return str.replace(before, after);
  }
  
  
  
  
  
console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));//A quick brown fox leaped over the lazy dog
console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting")); // He is Sitting on the couch
console.log(myReplace("I think we should look up there", "up", "Down")); // I think we should look Down there
console.log(myReplace("This has a spellngi error", "spellngi", "spelling")); // This has a spelling error

console.log(myReplace("I think we should look up there", "up", "Down"));

