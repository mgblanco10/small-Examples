'use strict'

//local storage comprobar compativilidad
if(typeof(Storage)!= 'undefined'){
    console.log('LocalStorage disponible');
}else{
    console.log('LocalStorage NO disponible');
}

//local storage Guardar Datos (key, value)
localStorage.setItem("titulo", "guardado en localStorage");

// recuperar elemento y meterlo en la página web
localStorage.getItem("titulo");
console.log(localStorage.getItem("titulo"));

//guardar objetos
let user ={
    name:"Monica",
    lastName:"Blanco",
    email:"mgblanco1001@gmail.com"
};
localStorage.setItem("user", JSON.stringify(user));

//recuperar objeto
localStorage.getItem("user");
console.log(localStorage.getItem("user"));

let userJs = JSON.parse(localStorage.getItem("user"));
console.log(userJs)

//BORRAR
// localStorage.removeItem("user");
// localStorage.clear();

//Pruebas con ingresar y borrar películas Ojo  arriba el ejemplo con user
let formulario = document.querySelector("#formPeliculas");

formulario.addEventListener('submit', function(){
    let peli = document.querySelector("#addPeliculas").value;

    if(peli.length >= 1){
        localStorage.setItem(peli, peli);
    }
});

let ul = document.querySelector("#peliculasList");
for(let i in localStorage){
    if(typeof localStorage[i]== 'string'){
        let li = document.createElement("li");
        li.append(localStorage[i]);
        ul.append(li);
    }
}

let formularioBorrar = document.querySelector("#formBorrarPeliculas");

formularioBorrar.addEventListener('submit', function(){
    let peli = document.querySelector("#borrarPeliculas").value;

    if(peli.length >= 1){
        localStorage.removeItem(peli);
    }
});