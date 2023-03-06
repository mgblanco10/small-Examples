// Convierta los caracteres &, <, >, "(comillas dobles) y '(apóstrofe) 
// en una cadena en sus entidades HTML correspondientes.


function convertHTML(str) {
  const entities = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
    "'": "&apos;"
  };
  return str.replace(/[&<>"']/g, match => entities[match]);
}
  
console.log(convertHTML("Dolce & Gabbana")); // Dolce &amp; Gabbana
console.log(convertHTML("Hamburgers < Pizza < Tacos")); // Hamburgers &lt; Pizza &lt; Tacos
console.log(convertHTML("Sixty > twelve")); // Sixty &gt; twelve
console.log(convertHTML("<>")); // &lt;&gt;
console.log(convertHTML("abc")); // abc;