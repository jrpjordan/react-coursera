# Managing the state of the component

## Step 1

Abra el archivoApp.js.

Localice la función spendGiftCard().

Dentro de la función spendGiftCard(), invoque la función de actualización de estado setGiftCard(). Por ahora, limítese a invocarla, sin pasarle ningún parámetro ni hacer nada más con ella.

## Step 2 

Dentro de los paréntesis de la invocación de la función setGiftCard(), pase una función de flecha.

Esta función flecha tiene un único parámetro, llamado prevState. Después de la flecha, añada un bloque de código (empezando con una llave de apertura y terminando con una llave de cierre dos líneas más abajo).

## Step 3

En el paso 2, ha añadido el objeto de estado anterior como argumentoprevState de la función de flecha que pasó a la función setGiftCard().

Ahora necesita devolver un nuevo objeto basado en este objeto de estado anterior.

Por ahora, en el paso 3, necesita simplemente devolver una copia del objeto prevState.

Eso significa que necesita utilizar la palabra clavereturn y una copia del objetoprevState, utilizando el operador resto, es decir, el operador....

## Step 4

En el paso 3, devolvió una copia del objeto prevState utilizando el operador rest.

Ahora necesita combinar esta copia del objetoprevState con aquellas propiedades que desee actualizar.

Dicho de otro modo, necesita actualizar algunos de los pares clave-valor que ya existen en el objeto de estado que se pasaron inicialmente a la llamada a la función useState().

Por ahora, en el paso 4, actualice la propiedadtext del objeto de estado, como se indica a continuación:

text: "Your coupon has been used."

## Step 5

En el Paso 4, ha actualizado la propiedadtext del objeto state.

En este paso, necesita actualizar las propiedades restantes del objeto estado.

Necesita actualizar el valor de la clave valid a false.

Debe actualizar el valor de la claveinstructions aPlease visit our restaurant to renew your gift card..