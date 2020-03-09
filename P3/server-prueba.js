//-- Puerto donde recibir las peticiones
const PUERTO = 8080;

//-- Modulos a usar
const http = require('http');
const url = require('url');


//-- Funcion para atender a una Peticion
//-- req: Mensaje de solicitud
//-- res: Mensaje de respuesta
function peticion(req, res) {
  console.log("----------> Peticion recibida")
  let q = url.parse(req.url, true);
  console.log("Petición: " + q.pathname)

  //-- Leer las cookies
  const cookie = req.headers.cookie;
  console.log("Cookie: " + cookie)


let filename = ""

  //-- Obtener fichero a devolver
  if (q.pathname == "/")
    filename += "index.html"
    if (!cookie) {
      content = "\nNo te conozco... Registrate!\n"
      content += "Accede a /login"

    //-- Hay definida una Cookie.
    } else {
      content += "Obijuan"
    }
  if (q.pathname == "/login")
    content = "Registrado! Cookie enviada al navegador!"

    //-- ESTABLECER LA COOKIE!!
    res.setHeader('Set-Cookie', 'user=obijuan')

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


}

//-- Inicializar el servidor
//-- Cada vez que recibe una petición
//-- invoca a la funcion peticion para atenderla
const server = http.createServer(peticion)

//-- Configurar el servidor para escuchar en el
//-- puerto establecido
server.listen(PUERTO);

console.log("Servidor LISTO!")
console.log("Escuchando en puerto: " + PUERTO)
