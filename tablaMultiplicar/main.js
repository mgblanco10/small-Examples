var resultado = document.getElementById('resultado');

function TablaMultiplicar(){ 
    
    var n= document.getElementById ('dato').value;
    var m;
    var tabla = '';
    if (isNaN(n)|| n===''){
        tabla= 'Error!! >>> Dato mal escrito.';
        resultado.style.backgroundColor='#f00';
    }else {
        tabla='<table class="center">';
        resultado.style.backgroundColor='inherit';
        n=parseInt(n);
        m= n+9;
        tabla += '<tr><td class="titulo">Tablas</td>';
        for(var k=1;k<=10;k++){
            tabla += '<td class="titulo">x'+k+'</td>';
        } 
        tabla += '</tr>';
        for (var i=n; i<=m; i++) {
            tabla += '<tr><td class="columna">'+i+'</td>';
            for (var j=1; j<=10; j++){
                tabla += '<td class="hover" data-n="'+'='+(i*j)+ '">'+ i + 'x'+ j +'</td>';
            }
            tabla += '</tr>';
        }
        tabla+='</table>';
    }
    resultado.innerHTML = tabla;
}