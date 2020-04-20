# Práctica 3 MARTA QUINTANA PORTALES

Enunciado:

El objetivo de la práctica es familiarizarse con tres formas de interacción entre un cliente y un servidor: Formularios, cookies y peticiones AJAX. Con ellos implementaremos tres nuevas características a nuestro servidor web tienda de la práctica 1: Formulario de compra, carrito de la compra y búsqueda con autocompletado

Carrito de la compra: Para tener carrito de la compra, el usuario deberá registrarse primero en la tienda. Para ello pinchará en el enlace en 'QUIERO REGUISTRARME' y el servidor creará una cookie con un identificador de usuario conocido (En una tienda real sería un valor generado aleatoriamente). En cada producto habrá un botón de añadir al carrito, que hará que el servidor añada el producto a otra cookie. Al apretar el botón de comprar, el servidor leerá los productos a comprar de la cookie, y los mostrará como respuesta --> Cuando se envie el pedido

Formulario de compra: Al pinchar en el enlace de 'PEDIDO', además de lo anterior, el servidor enviará un formulario donde el usuario deberá rellenar los datos para formalizar la compra: Nombre, Apellidos, Correo Electrónico y Método de pago (paypal, tarjeta de crédito, transferencia bancaria). El servidor recibe esta información y debe crear una página de respuesta, mostrando los datos recibidos

Búsqueda con autocompletado: La tienda tendrá una caja de búsqueda, para buscar información sobre un producto. Al escribir 3 ó más caracteres, aparecerá un menú desplegable con las opciones posibles. Al apretar el botón de buscar se enviará esta inforamción, y el servidor devolverá una página con información sobre el producto

Se implementará en Node.js, partiendo del código de la práctica 1.


Resolución:

Terminal para arrancar el servidor:  node server.js  
Navegador:   http://localhost:8080/

Cada una de mis secciones (Panadería Bolleria y Pastelería) solamente tienen un producto para hacerlo más sencillo y como en principio sólo eran 3 productos lo he hecho de esta forma.
Si pinchas 'añadir a la cesta' en cada producto se van  añadiendo valores de cada producto a la cookie 'carrito' para luego en el pedido poder leerlo.
Solo puedes añadir a la cesta si estas registrado, si no estas registrado al pinchar en 'añadir a la cesta' te lleva a que te registres.

Botón Quiero registrarme: Crea una cookie con un user (marta) y  te lleva a una página que te dice que estas registrado.

Botón Pedido : Te lleva a un formulario para que lo rellenes, al enviarlo se genera una página con tus datos, con los productos que has pedido (lee las cookies) **y la cantidad de cada uno.**

Botón Búsqueda : te lleva a http://localhost:8080/busqueda.html y con peticiones ligeras para el servidor (Peticiones AJAX) te muestra los productos que cumplen lo que buscas, si pones el producto entero correcto (da igual si lo pones en mayúscula o en minúscula) aparece información concreta. Por ejemplo puedes probar buscando 'Tarta plancha', 'Donuts', 'Palmeras', 'Pan candeal'...
