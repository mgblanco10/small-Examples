'use strict'

window.addEventListener('load', function(){
    console.log("DOM LOADED!!");

    let form = document.querySelector('#form');
    let boxDashed = document.querySelector('.dashed');
    boxDashed.style.display = "none";

    form.addEventListener('submit', function(){
        console.log('Submit event captured');

        let name = document.querySelector("#name").value;
        let lastName = document.querySelector("#lastName").value;
        let age = document.querySelector("#age").value;

        boxDashed.style.display = "block";

        let informationUser = [name, lastName, age];

        let item;
        for(item in informationUser){
            let paragraph = document.createElement("p");
            paragraph.append(informationUser[item]);
            boxDashed.append(paragraph)      
        }

    });
});
