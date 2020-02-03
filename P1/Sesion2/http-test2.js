const http = require('http');
const PUERTO = 8080

console.log("Arrancando servidor...")

//-- Configurar el servidor. Cada vez que llegue una peteicion se emite un
//-- evento y se invoa a la funcion compacta
server = http.createServer((req, res)=> {
  console.log("---> Peticion recibida")
})

//-- Queremos que el servidor escuche peticiones en puerto 8080
server.listen(PUERTO);

console.log("Puerto: " + PUERTO)


//Otra forma:
//   http.createServer((req, res)=> {
//    console.log("---> Peticion recibida")
//  }).listen(PUERTO);
