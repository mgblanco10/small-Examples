// Se proporcioná una matriz inicial (el primer argumento de la destroyerfunción),
//  seguida de uno o más argumentos. 
// Elimina todos los elementos de la matriz inicial que tengan el mismo valor que estos argumentos.

function destroyer(arr) {
    const args = Array.from(arguments).slice(1);
   return arr.filter((element) => !args.includes(element));
 }
 
 console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));// [1, 1]
 console.log(destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3)); // [1, 5, 1]
 console.log(destroyer([3, 5, 1, 2, 2], 2, 3, 5)); // [1]
 console.log(destroyer(["tree", "hamburger", 53], "tree", 53));// ["hamburger"]
 console.log(destroyer(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan")); // [12,92,65]