const http = require('http');
const url = require('url');
const path = require('path');
const fs = require('fs');
const PUERTO = 8080


//-- Funcion para atender a una Peticion
//-- req: Mensaje de solicitud
//-- res: Mensaje de respuesta
function peticion(req, res) {

  //-- Mostrar en la consola el recurso al que se accede
  const q = url.parse(req.url, true);
  console.log("Petición: " + q.pathname)

  //-- Creamos varaibles para obtener terminaciones y el objeto que queremos

  let recurso = q.pathname
  let filename =""

  //-- Leer las cookies
  const cookie = req.headers.cookie;
  console.log("Cookie: " + cookie)

  //-- Segun el recurso al que se accede
  switch (q.pathname) {

    //-- Pagina principal
    case "/":

      //-- No hay ninguna cookie
      if (!cookie) {
        content = "\nNo te conozco... Registrate!\n"
        content = "Accede a /login"
        recurso = "registrate.html"
        //--- OBTENER RECURSO ENTERO
        filename = "./" + recurso


      //-- Hay definida una Cookie.
      } else {
        content = "Cokiee encontrada"
        recurso = "index.html"
        //--- OBTENER RECURSO ENTERO
        filename = "./" + recurso

      }

      res.statusCode = 200;
      break;

    //-- Pagina de acceso
    case "/login":
      content = "Registrado! Cookie enviada al navegador!"
      recurso = "registrado.html"
      //--- OBTENER RECURSO ENTERO
      filename = "./" + recurso

      //-- ESTABLECER LA COOKIE!! En el campo set-cookie metemos la cookie que tengamos
      res.setHeader('Set-Cookie', 'user=marta')
      break

    //-- Se intenta acceder a cualquier otro recurso
    default:
      recurso = q.pathname
      filename = "./" + recurso
  }

  //-- Leer fichero
  var content_type = path.extname(q.pathname);

  console.log(content)
  //  ./P1.png fichero valido leer png path.extname
  console.log("Fichero:" + filename);
  console.log("MIME:" + path.extname(q.pathname));


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
console.log(content)
}

//-- Inicializar el servidor
//-- Cada vez que recibe una petición
//-- invoca a la funcion peticion para atenderla
const server = http.createServer(peticion)


server.listen(PUERTO);

console.log("Servidor LISTO!")
console.log("Escuchando en puerto: " + PUERTO)
