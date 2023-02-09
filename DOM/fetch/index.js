'use strict'

let divUser = document.querySelector("#user");

// let usuarios = [];
fetch('https://reqres.in/api/users')
    .then (data=> data.json())
    .then(users =>{
        // usuarios = users.data;
        // console.log(usuarios);
        listUser(users.data)   
    });

    
    function listUser(users){
        users.map((user, i)=>{
        let name = document.createElement('h3');
        name.innerHTML = i + ". " + user.first_name + " " + users.last_name;
        
        divUser.appendChild(name);
        document.querySelector(".loading").style.display ='none';
        });
    }