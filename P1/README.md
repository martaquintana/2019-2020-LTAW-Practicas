# Práctica 1  MARTA QUINTANA PORTALES

Aquí se puede ver gracias a los servidores de github la página web de la tienda.
https://martaquintana.github.io/2019-2020-LTAW-Practicas/P1


Quería que fuese lo más parecido a un proyecto real y he hecho la página web de la Panadería de mis tíos,
sale un error en la consola del navegador por lo que he añadido un enlace a instagram de la panadería oficial y
que por defecto al añadir este iframe sale ese error. Lo he comprobado y si lo quito no aparece el error,
pero me gustó más así.

Enunciado:

Construir un servidor web usando Node.js, que sirva las páginas de la web de una tienda. Las páginas serán estáticas (en HTML), y consistirán en textos e imágenes, compartiendo una hoja de estilo. La tienda debe tener al menos 3 productos

El servidor es un programa, escrito en node.js (javascript). Recibe peticiones de los clientes, que tiene que atender. Debe detectar qué es lo que pide el cliente, acceder al sistema de ficheros local, localizar el recurso pedido y devolverlo. Si se accede a un recursos no existente deberá generar una respuesta de error--> página 404 Not Found

Componentes obligatorios

Usar el módulo http de Node.js HECHO

Documentos HTML, horas de estilo (.css) e imágenes HECHO


Resolución:
Primero hay que ir hasta el directorio de mi práctica P1, luego hay que ejecutarlo de esta forma:

1. Terminal para arrancar el servidor : node server.js

2. Navegador :  http://localhost:8080/


3. Mis productos son secciones: Panadería, Bollería y Pastelería; para ver cada producto/sección pinchar encima de cada imagen (al poner el ratón encima se mueve para destacar nuestra selección), al hacer click nos llevará a la página correspondiente. Cada una de ellas es un html distinto. Para volver a la pantalla principal dar al botón volver <- del propio navegador.
