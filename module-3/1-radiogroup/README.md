## Step 1

Si ejecuta npm start y ve la aplicación en el navegador, observará que la aplicación React inicial funciona tal cual. La app muestra una vista sencilla con una cabecera y un botón de envío, pero sin opciones de radio todavía.

Abra el archivo App.js. Allí ya verá la API deseada para los componentesRadioGroup yRadioOption. Por el momento, no renderizan nada en la pantalla. No tiene que cambiar nada en este archivo, sino simplemente comprender el conjunto de accesorios implicados en el diseño del componente.

## Step 2

Abra el archivo Radio/index.js. Implemente los bits restantes para el componente RadioGroup. La variable RadioOptions se establece inicialmente en null. En su lugar, utilice React.Children.map para iterar sobre children y clone cada hijo utilizando React.cloneElement. El resultado debe asignarse a la variable RadioOptions.

Cada hijo clonado debería recibir dos accesorios adicionales,checked y onChange.

## Step 3

Abra el archivo Radio/index.js. El componente RadioOption está incompleto. En concreto, le faltan algunos props en el elemento de entrada que renderiza:value,checked y onChange.

El componente RadioOption ya recibe todos esos props. Su objetivo es conectarlos al elemento de entrada.

Al añadir la prop onChange a la entrada de radio, que representa el evento que se desencadena cada vez que se interactúa con ella, puede acceder a la propiedad value del objetivo del evento para obtener el valor de la opción de radio recién seleccionada, según el código siguiente.

## Step 4

Verifique que la aplicación funciona como se espera. Debería poder seleccionar una opción de radio y ver cómo el botón de envío se activa en cuanto se realiza una selección.

