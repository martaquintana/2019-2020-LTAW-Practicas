# Práctica 4   Marta Quintana Portales

Enunciado:

Hacer un chat en el que múltiples usuarios puedan hablar entre sí. Primero hay que lanzar el servidor (hecho con node) al que se conectarán los usuarios. Cada vez que un usuario se conecte el servidor le enviará un mensaje de Bienvenida, y anunciará al resto de participantes que se ha conectado alguien nuevo

La conexión al servidor será a través del navegador. Una vez conectado el servidor devuelve la página html y los ficheros javascript y de estilo necesarios

El servidor, además, responderá a estos comandos:

/help: Mostrará una lista con todos los comandos soportados
/list: Devolverá el número de usuarios conectados
/hello: El servidor nos devolverá el saludo
/date: Nos devolverá la fecha
Cuando el servidor detecta que llega un mensaje que empieza por el carácter '/', lo interpretará como un comando y lo procesará (pero no lo enviará al resto de usuarios del chat). El resto de mensjaes que no sean comandos sí los re-enviará a los participantes del chat.


Resolución:

Primero hay que ir hasta el directorio de mi práctica P4:

Terminal:  node chat-server.js

NAVEGADOR(Chrome o Firefox): http://localhost:8080/ , poniendo http://localhost:8080/woala hay un mensaje.

Contador de usuario: El servidor envia un mesaje que se muestra en la pantalla "Eres el usuario ---> X"

Evento cmd: hay que poner en el mensaje a enviar los comandos, he implementado los comandos indicados en el enunciado de la práctica como se especifica: /help, /date, /list y /hello . Y solo se muestra en el usuario que pone el comando.

He añadido que al iniciar el chat el server te mande un mensaje de 'Te has unido al chat' cuando hay un usuario nuevo el server envía un 'new user join the chat' y si algún usuario se desconecta el server envía 'un usuario se ha desconectado'. He añadido un poco de estilo con chat-style.css
