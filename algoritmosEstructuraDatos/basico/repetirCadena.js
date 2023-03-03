function repeatStringNumTimes(str, num) {
    if (num < 0) {
    return "";
  }
  
  let result = "";
  for (let i = 0; i < num; i++) {
    result += str;
  }
  
  return result;
}

console.log(repeatStringNumTimes("abc", 3));
console.log(repeatStringNumTimes("Monica", 3));
console.log(repeatStringNumTimes("MoNiCa", 3));