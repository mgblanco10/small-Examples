//jquery ui

$(document).ready(function(){
    console.log('cargando jquery ui')
    //mover elemento por la página
    $(".elemento").draggable();

    // redimencionarlo se agregan los link css
    $(".elemento").resizable();

    //lista seleccionable
    // $(".listaPelis").selectable();

    //mover y organizar
    $(".listaPelis").sortable({
        update: function(event, ui){
            console.log("Ha cambiado la lista")
        }
    });

    //tooltip plugins
    $(document).tooltip();

    //calendario DatePicker
    $('#calendario').datepicker();

    //tabs

});