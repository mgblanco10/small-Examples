// Crea una función que mira a través de 1 matriz de objetos (primer argumento) 
//y devuelve 1 matriz de todos los objetos que tienen pares de nombre y valor coincidentes (segundo argumento).
//  Cada par de nombre y valor del objeto de origen debe estar presente en el objeto de la colección si se va a incluir en la matriz devuelta.

function whatIsInAName(collection, source) {
    const sourceKeys = Object.keys(source);
    return collection.filter((obj) =>
      sourceKeys.every((key) => obj.hasOwnProperty(key) && obj[key] === source[key])
    );
  }

console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));
// [ { first: 'Tybalt', last: 'Capulet' } ]

console.log(whatIsInAName([{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }], { "apple": 1 }));
// [ { apple: 1 }, { apple: 1 }, { apple: 1, bat: 2 } ]

console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 }));
// [ { apple: 1, bat: 2 }, { apple: 1, bat: 2, cookie: 2 } ]

console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }, { "bat":2 }], { "apple": 1, "bat": 2 }));
// [ { apple: 1, bat: 2 }, { apple: 1, bat: 2, cookie: 2 } ]

console.log(whatIsInAName([{"a": 1, "b": 2, "c": 3}], {"a": 1, "b": 9999, "c": 3}));
// []

console.log(whatIsInAName([{"a": 1, "b": 2, "c": 3, "d": 9999}], {"a": 1, "b": 9999, "c": 3}));
// []