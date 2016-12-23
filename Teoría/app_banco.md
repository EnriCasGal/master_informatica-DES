# DES - Analizar la APP de un banco

> Francisco Javier Bolívar Lupiáñez

**Usar la aplicación móvil que tenga tu banco y analízala desde el punto de vista de la estructura y la navegación.**
* **Tipo de aplicación.**
* **La información (jerarquía, categorías, detalle…) que muestra.**
* **Estructuras de navegación usadas. (Incluir capturas de pantalla en el análisis y si consideras que se podría mejorar, indicar cómo, realizar bocetos de pantalla…)**

En la pantalla de inicio, se muestra un menú inicial *springboard*:

![home](img/app_banco/home.png "Home")

Tiene un *Action Bar* con una acción para ir a la pantalla de notificaciones y un *Navigation Drawer*:

![navigation drawer](img/app_banco/navigation_drawer.png "Navigation Drawer")

Una vez se entra a línea abierta se tiene también otro menú inicial *springboard*:

![linea abierta home](img/app_banco/linea_abierta_home.png "Línea Abierta Home")

Y lo que parecen opciones en un *Action Bar* realmente es una especie de *Navigation Drawer*:

![linea abierta navigation drawer](img/app_banco/linea_abierta_navigation_drawer.png "Línea Abierta Navigation Drawer")

Esto se podría mejorar usándolo como propone Android, colocándolo a la izquierda de la pantalla, para no liar a los usuarios.

Una vez se entra en alguna sección, por ejemplo "Tarjetas" pasamos a tener el *Navigation Drawer* clásico a la izquierda, pero manteniendo el otro de la derecha también. Lo que me hace pensar que se podría cambiar simplemente por un "Más opciones" del *Action Bar*:

![tarjetas navigation drawer izda](img/app_banco/tarjetas_navigation_drawer_izda.png "Tarjetas Navigation Drawer Izquierda")

![tarjetas navigation drawer dcha](img/app_banco/tarjetas_navigation_drawer_dcha.png "Tarjetas Navigation Drawer Derecha")

En la sección de "Cuentas", los elementos aparecen en una lista:

![cuentas](img/app_banco/cuentas.png "Cuentas")

Pinchando en un elemento se entra en el detalle presentándose una vista por tabs:

![cuenta](img/app_banco/cuenta.png "Cuenta")
