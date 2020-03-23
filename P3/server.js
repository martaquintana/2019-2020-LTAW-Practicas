const http = require('http');
const url = require('url');
const path = require('path');
const fs = require('fs');
const PUERTO = 8080

let carrito =""
let content =""
let productos = ["PAN CHAPATA", "PAN PISTOLA", "PAN CANDEAL", "DONUTS", "MAGDALENAS","PALMERAS", "TARTA REDONDA", "TARTA PLANCHA"];

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

    case "/pan":
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
              carrito+="pan"
            }else{
            carrito+="&pan"
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

    case "/magdalenas":
        if (cookie){
          //mira en las cookies si tiene la cookie user = marta
          //console.log(arraycookies[0])
          var user=getCookie(cookie,"user")
          console.log(user)
          if (user == "marta") {
              console.log("yas!")
              recurso = "bolleria.html"
              //--- OBTENER RECURSO ENTERO
              filename = "./" + recurso

              if (carrito == "" ) {
                carrito+="magdalenas"
              }else{
              carrito+="&magdalenas"
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
     case "/tarta":
          if (cookie){
            //mira en las cookies si tiene la cookie user = marta
            //console.log(arraycookies[0])
            var user=getCookie(cookie,"user")
            console.log(user)
            if (user == "marta") {
                console.log("yas!")
                recurso = "pasteleria.html"
                //--- OBTENER RECURSO ENTERO
                filename = "./" + recurso

                if (carrito == "" ) {
                  carrito+="tarta"
                }else{
                carrito+="&tarta"
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


      break


    case "/myform":
        //leer carrito de las cookies
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
          var pedido = ""
          var npan = 0
          var nmagdalenas = 0
          var ntarta = 0
          ok1 = new Boolean(false)
          ok2 = new Boolean(false)
          ok3 = new Boolean(false)
          ok1 = false
          ok2 = false
          ok3 = false

          for (var i = 0; i < arraycompra.length; i++)  {
            if(arraycompra[i]== 'pan'){
               ok1= true;
              npan+=1
              }
            if(arraycompra[i]== 'magdalenas'){
               ok2 = true;
              nmagdalenas+=1
            }
            if(arraycompra[i]== 'tarta'){
              ok3 =true;
              ntarta+=1
            }

            }

            console.log(ok1)

            if (ok1 | ok2 | ok3) {

                if (ok1) {
                  pedido +=' <li>' + npan + ": pan   "+ '<br>'
                }
                if (ok2) {
                  pedido += ' <li>' + nmagdalenas + ": magdalenas    "+ '<br>'
                }
                if (ok3) {
                  pedido += ' <li>' + ntarta + ": tarta    "+ '<br>'
                }
            }else{
              pedido= "no hay ningun articulo en la cesta"
            }
          //  var content = npan + "pan  " +nmagdalenas + "magdalenas " + ntarta + "tarta "

          console.log("Content")
          console.log(pedido)

        //  res.writeHead(200, {'Content-Type': 'text/plain'});
        }
      }
        if (req.method === 'POST') {
          // Handle post info...

          var content = `
          <!DOCTYPE html>
          <html lang="es">
          <link rel="stylesheet" href="styles.css" type="text/css">
            <head>
              <meta charset="utf-8">
              <title>PEDIDO</title>
            </head>
            <body>
            <div class="informacion" >
              <p>`

            req.on('data', chunk => {
              //-- Leer los datos (convertir el buffer a cadena)
              data = chunk.toString();

              var datos = data.split('&')
              console.log(datos)
              console.log(datos.length)
              //-- Añadir los datos a la respuesta
              for (var j = 0; j < datos.length; j++)  {
                content+= datos[j] + '<br>';
              }
              //content += data;
              content += "<h2> Tu pedido: </h2> "+ '<br>'+  pedido + '<br>' + "<h2> Ha sido recibido con éxito </h2>";
              //-- Fin del mensaje. Enlace al formulario
              content += `
                  </p>
                  <a class="boton" href="/">Página Inicial</a>
                  </div>
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


        // Busqueda
        //-- Fichero js cliente
    case "/client.js":
          recurso = "/client.js"
          //--- OBTENER RECURSO ENTERO
          filename = "./" + recurso
          break;


          //-- Acceso al recurso JSON
      case "/myquery":
          //-- Leer los parámetros recibidos en la peticion
          const params = q.query;

          //-- No hacemos nada con ellos, simplemente los mostramos en
          //-- la consola
          console.log("Parametros: " +params.param1 + ' y ' + params.param2);
            mime='application/json';
            //-- El array de productos lo pasamos a una cadena de texto,
            //-- en formato JSON:
            content = JSON.stringify(productos) + '\n';

            //-- Generar el mensaje de respuesta
            //-- IMPORTANTE! Hay que indicar que se trata de un objeto JSON
            //-- en la cabecera Content-Type

            return


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
    if (content_type == ".js")
        mime = "application/javascript"
    if (mime =='application/json')
        data=content
    //-- Generar el mensaje de respuesta
    res.writeHead(200, {'Content-Type': mime});
    res.write(data);
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
