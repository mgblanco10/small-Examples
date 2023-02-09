let fecha = new Date();

let year = fecha.getFullYear();
let month = fecha.getMonth();
let day = fecha.getDate();

let timeText = `
    El año es: ${year}
    El mes es: ${month}
    El dia es: ${day}
`;

console.log(timeText);

//Prueba de Función Matemáticas de Operaciones Básicas (random y quitar decimales "ceil")
//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math

console.log(Math.ceil(Math.random()*100));