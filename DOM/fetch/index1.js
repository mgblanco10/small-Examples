'use strict'

let divUser = document.querySelector("#user");
let divJanet = document.querySelector("#janet");

    getUsers()
        .then (data=> data.json())
        .then(users =>{ 
            listUser(users.data);
            
            return getJanet();
        })
        .then(data => data.json())
        .then(user=>{
            mostrarJanet(user.data);
        });

    function getUsers(){
        return fetch('https://reqres.in/api/users');
    }

    function getJanet(){
        return fetch('https://reqres.in/api/users/2');
    }
    
    function listUser(users){
        users.map((user, i)=>{
        let name = document.createElement('h3');
        name.innerHTML = i + ". " + user.first_name + " " + users.last_name;
        
        divUser.appendChild(name);
        document.querySelector(".loading").style.display ='none';
        });
    }

    function mostrarJanet(user){
        let name = document.createElement('h4');
        let avatar = document.createElement('img');

        name.innerHTML = user.first_name + " " + user.last_name;
        avatar.src = user.avatar;
        avatar.width = '100';


        divJanet.appendChild(name);
        divJanet.appendChild(avatar);
        document.querySelector("#janet .loading").style.display ='none';

    }