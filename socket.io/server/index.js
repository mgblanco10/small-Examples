const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

app.use(express.static('client'));

app.get('/hello', function(req, res) {
  res.status(200).send('Hello World from a route');
});

const messages = [{
  id: 1,
  text: 'Bienvenido al chat privado de Socket.io y Node.js',
  nickname: 'Bod'
}];

io.on('connection', function(socket) {
    console.log('Un usuario se ha conectado en la IP: '+ socket.handshake.address+ " se ha conectado");
  
    socket.emit('messages', messages);

    socket.on('add-message', function(data){
        messages.push(data);

        io.emit('messages', messages);
    });

});

server.listen(6677, function() {
  console.log('Servidor corriendo en http://localhost:6677');
});
