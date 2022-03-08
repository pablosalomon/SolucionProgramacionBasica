# SolucionProgramacionBasica
Solución para la búsqueda de nombres de un Array utilizando Javascript y HTML

FUNCIONAMIENTO
1. En el recuadro del centro (input) se escribe el apellido que se desea encontrar (los datos están dentro del archivo 'SOLUCIONEjercicio.js', se busca en base a ellos).
2. Se da click en el botón 'Buscar'.
3. Se mostrará una alerta en donde aparecerán los nombres completos que coincidan con ese apellido.
*En total hay 5 registros, 2 con los apellidos 'Gomez', 2 con los apellidos 'Romero' y uno sin apellido.*
![image](https://user-images.githubusercontent.com/83409156/157267235-44c372cc-685f-4ec5-8699-e3cecca7cc60.png)


PLANTEAMIENTO
1. Lo primero que hice fue crear un archivo llamado 'SOLUCIONEjercicio.js', dentro un array en formato JSON de 5 registros con las Propiedades 'Nombre' y 'Apellido' respectivamente.

![image](https://user-images.githubusercontent.com/83409156/157265785-edf6db5a-dbe3-44e7-91f9-8d2144a12ad3.png)

2. Construí el HTML dejandolo con lo indispensable que es un 'label' para identificar el próximo elemento que es un 'input' y debajo un botón, todo esto dentro de un 'form'.
3. El input lo identifiqué con un 'name' y un 'id' para que el archivo '.js' pueda extraer los datos que se insertan aquí.
4. El botón tiene la función 'submit' y un comando .js (onclick) llamado 'buscar'.
![image](https://user-images.githubusercontent.com/83409156/157265914-f9f6240e-e7f4-41d0-9b95-bc080c82e6d9.png)
5. Dentro del .js creé una funcion llamada 'buscar' (que coincide con el comando del botón), dentro de esta función declaro una variable 'apellido' que extrae los datos que se pusieron en el
'input' anterior (getElementById), luego declaro otra variable 'ncompleto' en donde traigo la variable que contiene los datos del array 'Datos', uso el método 'filter' con el cual
busco que me retorne aquellos elementos que cumplan con las condiciones del filtro en este caso que me muestre los datos que coincidan con el apellido que se escribió en el input,
por último creo un método 'window.alert' con el comando 'JSON.stringify' y la variable del filtro para que me devuelva los nombres completos.
![image](https://user-images.githubusercontent.com/83409156/157265700-8fc0dd7d-8a28-43a5-9967-4863da539bbc.png)
6. Como complemento usé la biblioteca 'Bootstrap', puse una imagen de color gris de fondo haciendo uso de CSS de igual manera el alineamiento de los elementos.

EXTRA

*Creé un archivo .js llamado 'EXTRAEjercicio.js' en donde intentaba darle otra solución al problema*
1. Creé varios arrays con los datos pero ahora no se diferencian con las propiedades 'Nombre' o 'Apellido' simplemente los identifico con los numeros que se le asignan a
los datos de un array.
2. Utlicé una variable donde concatenaba todos los arrays haciendolos 1 solo.
3. Creé un aray que unicamente contiene el apellido.
4. Hice un 'if' en donde el índice [1] de cada array tiene que coincidir con el array que unicamente contiene el apellido, si lo hace me devuelve todos los arays por consola del navegador
si no solo me devuleve los 2 primeros arrays.

![image](https://user-images.githubusercontent.com/83409156/157268442-69e65edd-5e89-4837-ab83-49805441e2f2.png)

*Este archivo lo deseché de la función principal ya que me pareció muy rebuscado*
