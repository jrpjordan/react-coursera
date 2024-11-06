# CREATE A SIGN UP FORM

Paso 1
Abra el archivoApp.js. Convierta todos los elementos del formulario en componentes controlados añadiendo los atributos value y onChange a cada entrada. Asegúrese de que la entrada de contraseña está oscurecida.

Paso 2
Muestre un mensaje de error si la contraseña tiene menos de 8 caracteres y el usuario ha interactuado con la entrada al menos una vez. El mensaje de error debe mostrarse debajo de la entrada de contraseña de la siguiente manera.

Para ello, se le ha proporcionado un componente llamadoPasswordErrorMessage. Su objetivo es implementar la lógica para saber cuándo mostrar el mensaje de error. El estado de la contraseña es especial y tiene una propiedad adicional llamadaisTouched. Esta propiedad se utiliza para determinar si el usuario ha interactuado con la entrada o no.

Paso 3
Evite el comportamiento por defecto del formulario cuando el usuario pulse el botón de enviar.

Paso 4
Implemente el cuerpo de la funcióngetIsFormValid para que devuelvatrue si el formulario es válido yfalse en caso contrario. Esto determina el estado del botón de envío. Las reglas para que el formulario sea válido son las siguientes:

El nombre no puede estar vacío.

El correo electrónico debe ser una dirección válida y no puede estar vacío. Ya se ha proporcionado una función llamada validateEmail para que compruebe si el correo electrónico es válido. Devuelve true si el correo electrónico es válido, en caso contrario devuelve false.

La contraseña debe tener al menos 8 caracteres.

El rol debe ser individual o business.

Paso 5
Implemente el cuerpo de la funciónclearForm para borrar el estado del formulario tras un envío correcto.

To run the application, execute:

    npm start

and open the browser