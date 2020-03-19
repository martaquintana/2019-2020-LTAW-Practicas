const http = require('http');
const url = require('url');
const path = require('path');
const fs = require('fs');
const PUERTO = 8080

let carrito =""
let content =""

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

  let producto=""


  //-- Leer las cookies
  const cookie = req.headers.cookie;
  console.log("Cookie: " + cookie)


  //Obtener array de cookies
  function getCookie(cookiee,cname) {
    if (cookiee){
     let arraycookies = cookiee.split(";");

     var name = cname + "=";
     var decodedCookie = decodeURIComponent(cookiee);
     var ca = decodedCookie.split(';');
     for(var i = 0; i <ca.length; i++) {
       var c = ca[i];
       while (c.charAt(0) == ' ') {
         c = c.substring(1);
       }
       if (c.indexOf(name) == 0) {
         return c.substring(name.length, c.length);
       }
     }
     return "";
   }
  }



  //-- Segun el recurso al que se accede
  switch (q.pathname) {

    //-- Pagina principal
    case "/":

      //-- No hay ninguna cookie
      if (!cookie) {

        recurso = "index.html"
        //--- OBTENER RECURSO ENTERO
        filename = "./" + recurso


      //-- Hay definida una Cookie.
      } else {

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

    case "/pan1":
      if (cookie){
        //mira en las cookies si tiene la cookie user = marta
        //console.log(arraycookies[0])
        var user=getCookie(cookie,"user")
        console.log(user)
        if (user == "marta") {
            console.log("yas!")
            recurso = "panaderia.html"
            //--- OBTENER RECURSO ENTERO
            filename = "./" + recurso

            if (carrito == "" ) {
              carrito+="pan1"
            }else{
            carrito+="&pan1"
            }
            res.setHeader('Set-Cookie', 'carrito='+carrito)

        }else{
            recurso = "registrate.html"
            //--- OBTENER RECURSO ENTERO
            filename = "./" + recurso
              res.statusCode = 200;

          }
      }else{
          recurso = "registrate.html"
          //--- OBTENER RECURSO ENTERO
          filename = "./" + recurso
            res.statusCode = 200;
        }


        break

    case "/pan2":
        if (cookie){
          //mira en las cookies si tiene la cookie user = marta
          //console.log(arraycookies[0])
          var user=getCookie(cookie,"user")
          console.log(user)
          if (user == "marta") {
              console.log("yas!")
              recurso = "panaderia.html"
              //--- OBTENER RECURSO ENTERO
              filename = "./" + recurso

              if (carrito == "" ) {
                carrito+="pan2"
              }else{
              carrito+="&pan2"
              }
              res.setHeader('Set-Cookie', 'carrito='+carrito)

          }else{
              recurso = "registrate.html"
              //--- OBTENER RECURSO ENTERO
              filename = "./" + recurso
                res.statusCode = 200;

            }
        }else{
            recurso = "registrate.html"
            //--- OBTENER RECURSO ENTERO
            filename = "./" + recurso
              res.statusCode = 200;
          }


          break
     case "/pan3":
          if (cookie){
            //mira en las cookies si tiene la cookie user = marta
            //console.log(arraycookies[0])
            var user=getCookie(cookie,"user")
            console.log(user)
            if (user == "marta") {
                console.log("yas!")
                recurso = "panaderia.html"
                //--- OBTENER RECURSO ENTERO
                filename = "./" + recurso

                if (carrito == "" ) {
                  carrito+="pan3"
                }else{
                carrito+="&pan3"
                }
                res.setHeader('Set-Cookie', 'carrito='+carrito)

            }else{
                recurso = "registrate.html"
                //--- OBTENER RECURSO ENTERO
                filename = "./" + recurso
                  res.statusCode = 200;

              }
          }else{
              recurso = "registrate.html"
              //--- OBTENER RECURSO ENTERO
              filename = "./" + recurso
                res.statusCode = 200;
            }


            break

    case "/carrito":
      recurso = "carrito.html"
      //--- OBTENER RECURSO ENTERO
      filename = "./" + recurso

      if (cookie){
        //mira en las cookies si tiene la cookie user = marta
        //console.log(arraycookies[0])
        var user=getCookie(cookie,"user")
        console.log(user)
        if (user == "marta") {
            console.log("yas!")

        var compra= getCookie(cookie,"carrito")
        console.log(compra)
        var arraycompra = compra.split("&");
        console.log("MI PEDIDO--->    ")
        console.log( arraycompra)
        var npan1 = 0
        var npan2 = 0
        var npan3 = 0
        ok1 = new Boolean(false)
        ok2 = new Boolean(false)
        ok3 = new Boolean(false)
        ok1 = false
        ok2 = false
        ok3 = false

        for (var i = 0; i < arraycompra.length; i++)  {
          console.log(i)
          if(arraycompra[i]== 'pan1'){
             ok1= true;
            npan1+=1
            }
          if(arraycompra[i]== 'pan2'){
             ok2 = true;
            npan2+=1
          }
          if(arraycompra[i]== 'pan3'){
            ok3 =true;
            npan3+=1
          }

          }

          console.log(ok1)
        //   var content = "No hay ningun artículo en la cesta"
          if (ok1 | ok2 | ok3) {

              if (ok1) {
                content += npan1 + ": pan1    "
              }
              if (ok2) {
                content += npan2 + ": pan2    "
              }
              if (ok3) {
                content += npan3 + ": pan3    "
              }
          }
        //  var content = npan1 + "pan1  " +npan2 + "pan2 " + npan3 + "pan3 "

        console.log("Content")
        console.log(content)

      }
    }

      break


      case "/myform":

        if (req.method === 'POST') {
          // Handle post info...

          var content = `
          <!DOCTYPE html>
          <html lang="es">
            <head>
              <meta charset="utf-8">
              <title>PEDIDO</title>
            </head>
            <body>
              <p>Recibido: `

          req.on('data', chunk => {
              //-- Leer los datos (convertir el buffer a cadena)
              data = chunk.toString();

              //-- Añadir los datos a la respuesta
              content += data;

              //-- Fin del mensaje. Enlace al formulario
              content += `
                  </p>
                  <a href="/">[Formulario]</a>
                </body>
              </html>
              `
              //-- Mostrar los datos en la consola del servidor
              console.log("Datos recibidos: " + data)
              res.statusCode = 200;
           });

           req.on('end', ()=> {
             //-- Generar el mensaje de respuesta
             res.setHeader('Content-Type', 'text/html')
             res.write(content);
             res.end();
           })
           return
        }

        break

    //-- Se intenta acceder a cualquier otro recurso
    default:
      recurso = q.pathname
      filename = "./" + recurso


}
  //console.log(recurso)
    //console.log(filename)


  //-- Leer fichero
  var content_type = path.extname(q.pathname);



  //console.log(content)
  //  ./P1.png fichero valido leer png path.extname
  //console.log("Fichero:" + filename);
  //console.log("MIME:" + path.extname(q.pathname));


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
    //res.write(content);
    res.end();
  });
//console.log(content)
}

//-- Inicializar el servidor
//-- Cada vez que recibe una petición
//-- invoca a la funcion peticion para atenderla
const server = http.createServer(peticion)


server.listen(PUERTO);

console.log("Servidor LISTO!")
console.log("Escuchando en puerto: " + PUERTO)
