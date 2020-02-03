//fs-test1.js simplificacion del codigo

//-- Acceso al módulo fs, para lectura de ficheros
const fs = require('fs');

//-- Leer el fichero. Al terminar se invoca a la función show_file
fs.readFile('test.txt', 'utf8', function (err, data) {
    //-- Mostrar el contenido del fichero
    console.log(data)
});
