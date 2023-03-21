// mi direccion ip 79.153.34.135 ipv4
// 192.168.1.56
//se pude pone localhost pero limitaría el uso

const socket = io.connect('http://localhost:6677',{'forceNew': true});

socket.on('messages', function(data){
    console.log(data);
    render(data);
});

function render (data){
    const html = data.map(function(message, index){
        return (`
        <div class= "message">
            <strong>${message.nickname} </strong> dice:
            <p>${message.text}</p>
        </div>
        `);
    }).join(' ');

    document.getElementById('messages').innerHTML= html;
}

function addMessage(e){
    const message = {
        nickname: document.getElementById('nickname').value,
        text: document.getElementById('text').value
    };
    document.getElementById('nickname').style.display = 'none';
    socket.emit('add-message', message );
    return false;
}

