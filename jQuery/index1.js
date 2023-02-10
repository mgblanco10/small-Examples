$(document).ready(function(){
    console.log("jQuery y Web cargados ...");

    let caja = $('#caja');

//Efectos hide y show 
    $('#mostrar').hide();

    $('#mostrar').click(function(){
        $(this).hide();
        $('#ocultar').show();
        // $('#caja').show('fast');
        $('#caja').fadeIn('slow');
    });

    $('#ocultar').click(function(){
        $(this).hide();
        $('#mostrar').show();
        // $('#caja').hide('fast');
        $('#caja').fadeOut('slow');
    });
    $('#toggle').click(function(){
        $('#caja').toggle('fast');
    });

    $('#animar').click(function(){
        caja.animate({
                    marginLeft: '500px', 
                    fontSize:'40px',
                    height: '200px',
                    width: '400px'
                        }, 'slow');
    });


});
