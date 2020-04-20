# Práctica 4   Marta Quintana Portales

Enunciado:

Hacer un chat en el que múltiples usuarios puedan hablar entre sí. Primero hay que lanzar el servidor (hecho con node) al que se conectarán los usuarios. Cada vez que un usuario se conecte el servidor le enviará un mensaje de Bienvenida, y anunciará al resto de participantes que se ha conectado alguien nuevo

La conexión al servidor será a través del navegador. Una vez conectado el servidor devuelve la página html y los ficheros javascript y de estilo necesarios

El servidor, además, responderá a estos comandos:

/help: Mostrará una lista con todos los comandos soportados

/list: Devolverá el número de usuarios conectados

/hello: El servidor nos devolverá el saludo

/date: Nos devolverá la fecha

Cuando el servidor detecta que llega un mensaje que empieza por el carácter '/', lo interpretará como un comando y lo procesará (pero no lo enviará al resto de usuarios del chat). El resto de mensajes que no sean comandos sí los re-enviará a los participantes del chat.


Resolución:

Primero hay que ir hasta el directorio de mi práctica P4, luego hay que ejecutarlo de esta forma:

1. Terminal para arrancar el servidor:  node chat-server.js

2. NAVEGADOR(Chrome o Firefox, mejor): http://localhost:8080/ , poniendo http://localhost:8080/woala hay un mensaje.

3. Para enviar un mensaje escribir en la barra de escritura y dar a SEND. La conversación se mostrará en la parte inferior.

4. Contador de usuario: El servidor envia un mesaje que se muestra en la pantalla "Eres el usuario ---> X"

5. Evento cmd: cuando el servidor detecte que el mensaje que empieza por '/', lo interpretará como comando y le enviará un mensaje solamente al usuario que haya enviado el comando con la información del comando que ha escrito: /help, /date, /list o /hello .

6. Al iniciar el chat el server te mande un mensaje de 'Te has unido al chat', cuando hay un usuario nuevo el server envía un 'new user join the chat' y si algún usuario se desconecta el server envía 'un usuario se ha desconectado'. 
He añadido un poco de estilo con chat-style.css
