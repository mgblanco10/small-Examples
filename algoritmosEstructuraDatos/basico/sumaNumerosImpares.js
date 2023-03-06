// Dado un entero positivo num, devuelve la suma de todos los números impares de Fibonacci que son menores o iguales que num.

// Los primeros dos números en la secuencia de Fibonacci son 0 y 1. Cada número adicional en la secuencia es la suma de los dos números anteriores. 
// Los primeros siete números de la sucesión de Fibonacci son 0, 1, 1, 2, 3, 5 y 8.

// Por ejemplo, sumFibs(10)debe volver 10 porque todos los números impares de Fibonacci menores o iguales que 10 son 1, 1, 3 y 5.

function sumFibs(num) {
    let sum = 0;
    let prev = 0;
    let curr = 1;
    while (curr <= num) {
      if (curr % 2 !== 0) {
        sum += curr;
      }
      const next = prev + curr;
      prev = curr;
      curr = next;
    }
    return sum;
  }
  
  console.log(sumFibs(4)); //5
  console.log(sumFibs(1000)); //1785
  console.log(sumFibs(4000000)); //4613732
  console.log(sumFibs(75024));//60696
  console.log(sumFibs(75025)); //135721