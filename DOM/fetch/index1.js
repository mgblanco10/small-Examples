'use strict'

let divUser = document.querySelector("#user");
let divJanet = document.querySelector("#janet");

    getUsers()
        .then (data=> data.json())
        .then(users =>{ 
            listUser(users.data);
            
            return getInfo();
        })
        .then(data =>{
            console.log(data);
            return getJanet();
        })
        .then(data => data.json())
        .then(user=>{
            mostrarJanet(user.data);
        })
        .catch(error =>{
            console.log(error)
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

//Promesa desde 0 llamada en getJanet con setTimeout de 3000
function getInfo (){
    let person ={
        name: "Monica",
        lastName: "Blanco",
        email: "mgblanco1001@gmail.com",
        phone: "+34 682731765"
    };
    return new Promise((resolve, reject)=>{
        let personString = "";
        setTimeout(function(){
            personString = JSON.stringify(person);
            if (typeof personString != 'string' || personString == '') return reject (error);
    
            return resolve(personString);
        }, 3000);
      
    });
}