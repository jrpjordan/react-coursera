## Step 1

Abra el archivo App.js.

Complete la implementación del componente MousePosition. Específicamente, necesitará

Implementar el cuerpo of handleMousePositionChange inside useEffect

Implementar la sentencia return del componente.

## Step 2

Modifique la implementación de PanelMouseLogger. Los requisitos son:

El componente no debe recibir ningún props.

El componente no debería tener ninguna sentencia if.

El componente debería aprovechar the MousePosition render prop para mostrar las coordenadas en forma de panel. La UI del panel ya le ha sido proporcionada, su objetivo es conectar la UI con los datos de posición del ratón.

## Step 3

Ajuste la implementación de PointMouseLogger. Los requisitos son:

El componente no debe recibir ningún props.

El componente no debería tener ninguna sentencia if.

El componente debería aprovechar the MousePosition render prop para mostrar las coordenadas en una representación de puntos. La UI de puntos ya le ha sido proporcionada, su objetivo es conectar la UI con los datos de posición del ratón

Guarde todos los cambios y ejecute la aplicación. Previsualice las actualizaciones en el navegador y confirme que la página muestra dos interfaces distintas que muestran la información segura (posición del ratón) de forma diferente, una como un panel y otra como un punto de coordenadas.