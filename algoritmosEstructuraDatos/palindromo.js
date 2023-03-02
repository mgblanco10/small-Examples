function palindrome(str) {
    // Eliminar caracteres no alfanuméricos y convertir a minúsculas
    str = str.replace(/[\W_]/g, '').toLowerCase();
    
    // Verificar si es un palíndromo
    for (let i = 0; i < str.length / 2; i++) {
      if (str[i] !== str[str.length - 1 - i]) {
        return false;
      }
    }
    
    return true;
  }
  
  const result = palindrome("eye");
  console.log(result);

  console.log(palindrome("eye")); // true
  console.log(palindrome("RaceCar")); // true
  console.log(palindrome("2A3*3a2")); // true
  console.log(palindrome("not a palindrome")); // false
