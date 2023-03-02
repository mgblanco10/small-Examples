//formato de un número de EE. UU. 

function telephoneCheck(str) {
    // Utilizar una expresión regular para validar el número de teléfono
    const phoneRegex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s-]?\d{3}[\s-]?\d{4}$/;
    return phoneRegex.test(str);
  }
  
console.log(telephoneCheck("555-555-5555"));