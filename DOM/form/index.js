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
        let age = parseInt(document.querySelector("#age").value);

        if(name.trim() == null || name.trim().length == 0){
            // alert("The name is invalid");
            document.querySelector("#notValidName").innerHTML = "The name you have entered is not correct";
            return false;
        }else{
            document.querySelector("#notValidName").style.display = "none";
        }

        if(lastName.trim() == null || lastName.trim().length == 0){
            // alert("The last name is invalid");
            document.querySelector("#notValidLastName").innerHTML = "The last name you have entered is not correct";
            return false;
        }else{
            document.querySelector("#notValidLastName").style.display = "none";
        }

        if(age == null || age.length <= 0 || isNaN(age)){
            // alert("The age is invalid");
            document.querySelector("#notValidAge").innerHTML = "The age you have entered is not correct";
            return false;
        }else{
            document.querySelector("#notValidAge").style.display = "none";
        }
        

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
