# Customer Data

## Step 1

Dentro del bloque de código de la funciónfetchData(), ejecute la funciónfetch(), pasándole un único argumento de cadena:"https://randomuser.me/api/?results=1".

## Step 2

Todavía dentro de la funciónfetchData(), bajo la llamada a la funciónfetch(), añada el siguiente fragmento de código:

    .then((response) => response.json())

## Step 3

Continuando desde el paso anterior, añada otra llamada athen(), que toma una función de flecha.

La función flecha pasada debe recibir un argumento data y usando ese argumento data, debe invocar la función setUser(), con eldata pasado a ella.

## Step 4

Bajo el encabezamientoh1, debe añadir una línea de código:

un encabezado h2, con el siguiente código en su interior: Name:{user.results[0].name.first}

## Step 5

En el paso 4, ha actualizado la sentenciareturn del componente App.

En este paso, necesita añadir otra línea de código bajo el recién añadidoh2.

Necesita añadir un elementoimg, cuyo atributosrc contenga el siguiente código:

{user.results[0].picture.large}

Además, necesita añadir un atributoalt, como se indica a continuación:

    alt=""

