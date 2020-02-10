const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');
const PUERTO = 8080

//-- Configurar y lanzar el servidor. Por cada peticion recibida
//-- se imprime un mensaje en la consola
http.createServer((req, res) => {
  console.log("----------> Peticion recibida")
  let q = url.parse(req.url, true);



  let filename = ""

  //-- Obtener fichero a devolver
  if (q.pathname == "/")
    filename += "index.html"

  if (q.pathname != "/")
      filename += "."+ q.pathname
//  ./P1.png fichero valido leer png path.extname
console.log("Fichero:" + filename);
console.log("MIME:" + path.extname(q.pathname));

  var content_type = path.extname(q.pathname);

  //-- Leer fichero
  fs.readFile(filename, function(err, data) {

    //-- Fichero no encontrado. Devolver mensaje de error
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end("404 Not Found");
    }

    //-- Tipo mime por defecto: html

    let mime = "text/html"
    if (content_type == ".css")
      mime = "text/css"
    if (content_type == ".png")
      mime = "image/png"
    if (content_type == ".jpg")
      mime = "image/jpg"

    //-- Generar el mensaje de respuesta
    res.writeHead(200, {'Content-Type': mime});
    res.write(data);
    res.end();
  });


}).listen(PUERTO);

console.log("Servidor corriendo...")
console.log("Puerto: " + PUERTO)
