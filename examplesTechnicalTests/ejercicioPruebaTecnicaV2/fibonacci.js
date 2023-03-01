function fibonacci (num){
    let array = [0, 1]

    for (let i=2; i<= num; i++){
        // console.log(i)
        array.push(array[i - 1]+ array[i - 2])
    }
    // console.log(array)
    return [ array, array[num]];
}

console.log("Array complete: ", fibonacci(10)[0]);
console.log("Array result: ", fibonacci(10)[1]);