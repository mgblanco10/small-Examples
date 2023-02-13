$(document).ready(function(){
    //Load
    // $('#datos').load("https://reqres.in/");

    //get 
    $.get("https://reqres.in/api/users",{page:2}, function(response){
        response.data.forEach((element, index) => {
            $('#datos').append("<p>"+ "Name: " + element.first_name+ " & Email: " + element.email+ " " +"</p>");
        });
    });

    //post
    $('#form').submit(function(e){
        e.preventDefault();

        let user = {
            name: $('input[name = "name"]').val(),
            email: $('input[name = "email"]').val()
        };
        console.log(user)
        
        $.post ($(this).attr("action"), user, function(response){
            console.log(response);
        }).done(function(){
            alert('user registrado correctamente');
        });

        $.ajax({
            type: 'POST',
            dataType: 'json',
            contentType:'application/json',
            url: $(this).attr("action"),
            data:user,
            beforeSend: function(){
                console.log('enviando user');
            },
            success: function(response){
                console.log(response);
            }, 
            error: function (){
                console.log('A ocurrido un error');
            },
            timeut: 1000
        });
        return false;
    });
});