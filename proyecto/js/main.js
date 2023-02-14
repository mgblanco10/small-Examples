//slider
$(document).ready(function(){

    $('.bxslider').bxSlider({
      mode: 'fade',
      captions: true,
      slideWidth: 1200, 
      responsive: true
    });

    //post
    let posts =[
    {
        title: 'Prueba título 1',
        date: 'Publicado el ' + moment().format("dddd Do") + ' de '+ moment().format("MMMM YYYY"),
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, voluptates dolores? Dolor error perspiciatis modi rem sapiente vitae dolore repellendus asperiores illum ducimus eum incidunt itaque excepturi eveniet, necessitatibus quam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt sapiente vero tenetur, sit inventore odio iste. Placeat nobis sint aperiam tenetur at ea repellat, ad, sed, vero totam eligendi magni? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi officiis earum illum at odio officia adipisci maiores architecto repellat repudiandae omnis similique maxime perspiciatis, eius mollitia impedit voluptate reprehenderit exercitationem.'
    },
    {
        title: 'Prueba título 2',
        date: 'Publicado el ' + moment().format("dddd Do") + ' de '+ moment().format("MMMM YYYY"),
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, voluptates dolores? Dolor error perspiciatis modi rem sapiente vitae dolore repellendus asperiores illum ducimus eum incidunt itaque excepturi eveniet, necessitatibus quam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt sapiente vero tenetur, sit inventore odio iste. Placeat nobis sint aperiam tenetur at ea repellat, ad, sed, vero totam eligendi magni? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi officiis earum illum at odio officia adipisci maiores architecto repellat repudiandae omnis similique maxime perspiciatis, eius mollitia impedit voluptate reprehenderit exercitationem.'

    },
    {
        title: 'Prueba título 3',
        date: 'Publicado el ' + moment().format("dddd Do") + ' de '+ moment().format("MMMM YYYY"),
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, voluptates dolores? Dolor error perspiciatis modi rem sapiente vitae dolore repellendus asperiores illum ducimus eum incidunt itaque excepturi eveniet, necessitatibus quam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt sapiente vero tenetur, sit inventore odio iste. Placeat nobis sint aperiam tenetur at ea repellat, ad, sed, vero totam eligendi magni? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi officiis earum illum at odio officia adipisci maiores architecto repellat repudiandae omnis similique maxime perspiciatis, eius mollitia impedit voluptate reprehenderit exercitationem.'

    },
    {
        title: 'Prueba título 4',
        date: 'Publicado el ' + moment().format("dddd Do") + ' de '+ moment().format("MMMM YYYY"),
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, voluptates dolores? Dolor error perspiciatis modi rem sapiente vitae dolore repellendus asperiores illum ducimus eum incidunt itaque excepturi eveniet, necessitatibus quam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt sapiente vero tenetur, sit inventore odio iste. Placeat nobis sint aperiam tenetur at ea repellat, ad, sed, vero totam eligendi magni? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi officiis earum illum at odio officia adipisci maiores architecto repellat repudiandae omnis similique maxime perspiciatis, eius mollitia impedit voluptate reprehenderit exercitationem.'

    },
    {
        title: 'Prueba título 5',
        date: 'Publicado el ' + moment().format("dddd Do") + ' de '+ moment().format("MMMM YYYY"),
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, voluptates dolores? Dolor error perspiciatis modi rem sapiente vitae dolore repellendus asperiores illum ducimus eum incidunt itaque excepturi eveniet, necessitatibus quam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt sapiente vero tenetur, sit inventore odio iste. Placeat nobis sint aperiam tenetur at ea repellat, ad, sed, vero totam eligendi magni? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi officiis earum illum at odio officia adipisci maiores architecto repellat repudiandae omnis similique maxime perspiciatis, eius mollitia impedit voluptate reprehenderit exercitationem.'
    },
    {
        title: 'Prueba título 6',
        date: 'Publicado el ' + moment().format("dddd Do") + ' de '+ moment().format("MMMM YYYY"),
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, voluptates dolores? Dolor error perspiciatis modi rem sapiente vitae dolore repellendus asperiores illum ducimus eum incidunt itaque excepturi eveniet, necessitatibus quam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt sapiente vero tenetur, sit inventore odio iste. Placeat nobis sint aperiam tenetur at ea repellat, ad, sed, vero totam eligendi magni? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi officiis earum illum at odio officia adipisci maiores architecto repellat repudiandae omnis similique maxime perspiciatis, eius mollitia impedit voluptate reprehenderit exercitationem.'
    },
    {
        title: 'Prueba título 7',
        date: 'Publicado el ' + moment().format("dddd Do") + ' de '+ moment().format("MMMM YYYY"),
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, voluptates dolores? Dolor error perspiciatis modi rem sapiente vitae dolore repellendus asperiores illum ducimus eum incidunt itaque excepturi eveniet, necessitatibus quam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt sapiente vero tenetur, sit inventore odio iste. Placeat nobis sint aperiam tenetur at ea repellat, ad, sed, vero totam eligendi magni? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi officiis earum illum at odio officia adipisci maiores architecto repellat repudiandae omnis similique maxime perspiciatis, eius mollitia impedit voluptate reprehenderit exercitationem.'
    }
    ];
    // console.log(post)

    posts.forEach((item, index)=>{
        let post = ` 
            <article class="post">
                <h2>${item.title}</h2>
                <span class="date">${item.date}</span>
                <p>${item.content}</p>
                <a href="#" class="button">Más Información</a>
            </article> 
        `;
        // console.log(post)
        $('#posts').append(post);
    });

    // selector de tema
    let theme =$('#theme');

    $('#purple').click(function(){
        theme.attr("href", "styles/purple.css");
    });

    $('#pink').click(function(){
        theme.attr("href", "styles/pink.css");
    });

    $('#blue').click(function(){
        theme.attr("href", "styles/blue.css");
    });

    $('#green').click(function(){
        theme.attr("href", "styles/green.css");
    });

    //scroll arriba web
    $('.subir').click(function(e){
        e.preventDefaul();

        $('html, body').animate({
            scrollTop: 0
        }, 500);

        return false;
    });


});
