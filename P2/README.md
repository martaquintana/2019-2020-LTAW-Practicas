# Práctica 2 MARTA QUINTANA PORTALES

Enunciado:
Crear una tienda usando django. La versión que utilizaremos será la 2.2.10, que es la última estable (LTS), y funciona sobre python3

La tienda al menos debe incluir los siguientes elementos:

Al menos 3 productos diferentes (puede ser la misma tienda que la práctica 1)
El sitio debe generar varias vistas: la general, sólo producto-1, sólo producto-2, sólo producto-3, los resultados de las búsquedas, etc...
Se deben utilizar plantillas para generar los contenidos dinámicos concretos
El cliente debe poder rellenar un formulario para relizar un pedido concreto, que se recibe en el servidor y se inserta en la base de datos
Diseña los modelos de datos y la aplicación de la tienda
Como base de datos usaremos SQLite


Resolución:

Para la visualización de todos los contenidos de esta práctica:
Primero hay que ir hasta el directorio de mi práctica P2, luego hay que ejecutarlo de esta forma:

1. Terminal para arrancar el server ir al directorio de P2/mi_tienda_web y ejecutar: python3 manage.py runserver

2. Navegador : http://localhost:8000/mi_panaderia/

3. En cada una de mis secciones (Panadería, Bollería y Pastelería) te salen unos productos que se leen de una base de datos y nos dice el nombre el precio y el stock de cada producto.

4. Para hacer un pedido hacer click en el boton 'Hacer pedido' que te lleva a http://localhost:8000/mi_panaderia/formulario/ al enviar se genera una página de respuesta: ' Datos recibidos!!. Comprador: xxx'.

5. Para ver todos los pedidos que se han hecho ir a  http://localhost:8000/mi_panaderia/pedidos/

6. Al final de la página podemos ver la fecha que se va actualizado y un boton 'Lista de nuestros productos' que nos lleva a http://localhost:8000/mi_panaderia/list/  donde se genera dinámicamente una página con los productos y precio que se leen de la base de datos.


7. Si necesitas ver las bases de datos en http://localhost:8000/admin  me avisas y te hago captura de pantalla o te doy la clave y contraseña si es necesario. Está implementado todo lo se pedía en la práctica y a lo largo de las clases.
