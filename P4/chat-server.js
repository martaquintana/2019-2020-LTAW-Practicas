//-- Cargar las dependencias
//-- Modulo express
const express = require('express')
//-- Crear una nueva aplciacion web
const app = express()
//-- Crear un servidor. Los mensajes recibidos
//-- los gestiona la app
const http = require('http').Server(app);
//-- Biblioteca socket.io en el lado del servidor
const io = require('socket.io')(http);
//-- Puerto donde lanzar el servidor
const PORT = 8080


let users = 0;
//-- Lanzar servidor
http.listen(PORT, function(){
  console.log('Servidor lanzado en puerto ' + PORT);
});

//-------- PUNTOS DE ENTRADA DE LA APLICACION WEB
//-- Página principal
app.get('/', (req, res) => {
  let path = __dirname + '/chat.html';
  res.sendFile(path);
  console.log("Acceso a " + path);
});

//-- Otra vista de prueba
app.get('/woala', (req, res) => {
  res.send('WOALA!! :-D  :-) ÁNIMO CON LA LUCHA CONTRA EL CORONAVIRUS!! ');
  console.log("Acceso a /woala");
});

//-- El resto de peticiones se interpretan como
//-- ficheros estáticos
app.use('/', express.static(__dirname +'/'));

//------ COMUNICACION POR WEBSOCKETS
//-- Evento: Nueva conexion recibida
//-- Un nuevo cliente se ha conectado!
io.on('connection', function(socket){

  //-- Usuario conectado. Imprimir el identificador de su socket
  console.log('--> Usuario conectado!. Socket id: ' + socket.id);

  //-- Le damos la bienvenida a través del evento 'hello'
  //-- ESte evento lo hemos creado nosotros para nuestro chat
  socket.emit('hello', "Bienvenido al Chat");
  users += 1;
  socket.emit('hello', "Eres el usuario --->  " + users );


  //Envia mensaje al nuevo que entra
  socket.emit('newuser', "Te has unido al chat");
  //Enviar a todos que hay un nuevo usuario menos al nuevo
  socket.broadcast.emit('newuser', ">  " +" new user join the chat");


  //-- Función de retrollamada de mensaje recibido del cliente
  socket.on('msg', (msg) => {
    console.log("Cliente: " + socket.id + ': ' + msg);
    //-- Enviar el mensaje a TODOS los clientes que estén conectados
    io.emit('msg', msg);
  })

  //-- Función de retrollamada de mensaje recibido del cliente
  socket.on('cdm', (msg) => {

    switch (msg) {
        case '/help':
              msg = "<hr>Estos son los comandos soportados <hr>"
              + "  /help <br>"
              + "  /list <br> "
              + "  /hello <br>"
              + "  /date <br>"
          break

        case '/list':
              msg = "Ahora mismo hay " + users + " usuarios conectados"
          break

        case '/hello':
              msg = "Hello my friend! Welcome to the URJC CHAT"
          break
        case '/date':
              var d = new Date();
              msg= 'La fecha y hora actual<br>-----------------------------<br> Time: '+ d.getHours() +":"+ d.getMinutes() + " <br>  Date: "  + d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear()
               ;

          break

        default:
              msg = msg + "  I don't know this command"
          break

      }


    console.log("Cliente: " + socket.id + ': ' + msg);
    //-- Enviar el mensaje a TODOS los clientes que estén conectados
    socket.emit('cdm', msg);
  })



  //-- Usuario desconectado. Imprimir el identificador de su socket
  socket.on('disconnect', function(){
    users -= 1;
    console.log('--> Usuario Desconectado. Socket id: ' + socket.id);
    socket.broadcast.emit('newuser', ">  " +" un usuario se ha desconectado");
  });
});
