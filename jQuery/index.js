// Para ver que se cargo la librería en el html
    $(document).ready(function(){
        console.log("jQuery y Web cargados ...");

//selectores
    // Id
        $('#red').css("background", "red")
                 .css("color", "green");

        $('#yellow').css("background", "yellow")
                    .css("color", "red");

        $('#green').css("background", "green")
                   .css("color", "yellow");

    //class
        $('.boxSelect').css("border", "5px solid black");

        $('.box').click(function(){
            console.log('Click dado en class .box!!');
            $('.box').css("padding", "10px");
        });

    //etiqueta
        $('p').click(function(){
            console.log('Click dado en etiqueta p!!');
        });

    //atributo
    $('[title = "google"]').css('background', 'purple')
                            .css ('color', 'orange');
    $('[title = "gitHub"]').css('background', 'pink')
                            .css ('color', 'green');
    $('[title = "linkedin"]').css('background', 'orange')
                            .css ('color', 'blue');

 });
