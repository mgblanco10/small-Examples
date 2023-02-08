'use strict'

window.addEventListener('load', function(){
    function interval(){
        //timers
        let time = setInterval(function(){
            console.log('setInterval ejecutado')

            let head = document.querySelector("h1");
            if(head.style.fontSize == "50px"){
                head.style.fontSize = "30px";
            }else{
                head.style.fontSize = "50px";
            }
            
        },1500);       
        return time;
    }

    let time = interval();

    let stop = document.querySelector('#stop');
    stop.addEventListener("click", function(){
        alert("Stop loop");
        clearInterval(time);
    });

    let start = document.querySelector('#start');
    start.addEventListener("click", function(){
        alert("Start loop");
        interval();
    });

    let pressButton = document.querySelector('#button');

    //click
    pressButton.addEventListener('click', function(){
        this.style.border = "8px solid black";
    });

    //mouse over
    pressButton.addEventListener('mouseover', function(){
        pressButton.style.background = "yellow";
    });

    //mouse out
    pressButton.addEventListener('mouseout', function(){
        pressButton.style.background = "red";
    });


});
