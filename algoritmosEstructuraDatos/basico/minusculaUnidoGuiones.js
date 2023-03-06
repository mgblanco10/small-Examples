function spinalCase(str) {
    // expresión regular para encontrar todas las letras en mayúsculas seguidas por una letra en minúsculas y reemplazarlas con la letra en minúsculas seguida de un guión medio 
    str = str.replace(/([a-z])([A-Z])/g, '$1-$2');
    // Convertir todas las letras en minúsculas
    str = str.toLowerCase();
    // reemplazamos cualquier espacio o guión bajo con un guión medio
    str = str.replace(/\s+|_+/g, '-');
    return str;
  }
  
console.log(spinalCase("This Is Spinal Tap")); // devuelve "this-is-spinal-tap"
console.log(spinalCase("The_Andy_Griffith_Show")); // devuelve "the-andy-griffith-show"
console.log(spinalCase("Teletubbies say Eh-oh")); //devuelve "teletubbies-say-eh-oh"
console.log(spinalCase("The_Andy_Griffith_Show")); //devuelve "all-the-small-things"
console.log(spinalCase("Soy Monica Blanco y poco a poco con ejercicios voy aprendiendo")); //devuelve "soy-monica-blanco-y-poco-a-poco-con-ejercicios-voy-aprendiendo"


