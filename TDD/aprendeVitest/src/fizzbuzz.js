/*
Escribir una función que al pasarle un número:
    - Muestra "fizz" si es múltiplo de 3.
    - Muestra "buzz" si es múltiplo de 5.
    - Muestra "fizzbuzz" si es múltiplo de 3 y 5.
    - Muestra "woff" si es igual 7.
    - Muestra "fizzwoff" si es 21.
    - Muestra el número si no es múltiplo de ninguna de las anteriores. 
*/

/*export const fizzbuzz = (number)=>{
    if (typeof number != 'number') throw new Error ('parameter provider must be a number')
    if(Number.isNaN(number)) throw new Error ('parameter provider must be a number')

    if(number % 15 === 0) return "fizzbuzz"
    if( number % 3 === 0) return "fizz"
    if( number % 5 === 0 ) return "buzz"
    if (number === 7 ) return "woff"

    return number 
}*/


// ---Refactor otra manera de hacer
export const fizzbuzz = (number)=>{
    if (typeof number != 'number') throw new Error ('parameter provider must be a number')
    if(Number.isNaN(number)) throw new Error ('parameter provider must be a number')

   const multiplies = { 3: "fizz", 5: "buzz", 7: "woff"}
   let output = ''

   Object
    .entries(multiplies)
    .forEach(([multiplier, word])=>{
        if(number % multiplier === 0) output += word
    })

    return output === '' ? number: output
}