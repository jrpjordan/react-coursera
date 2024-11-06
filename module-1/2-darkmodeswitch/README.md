# Create a dark mode switch

El código de inicio incluye todos los elementos de interfaz de usuario necesarios, así como un componente Switch para alternar el tema. Su objetivo es implementar la funcionalidad que falta dentro deThemeContext.js.ThemeContext ya exporta un componenteThemeProvider y un ganchouseTheme. Por el momento, no hacen nada y devuelven valores ficticios.

Tendrá que implementar tanto el componente ThemeProvider como el gancho useTheme dentro del archivo ThemeContext.js para completar este ejercicio.

ThemeProviderdebe renderizar un componente proveedor de contexto e inyectar como valor de contexto un objeto con dos propiedades: una propiedadtheme que es una cadena, que puede serlight odark, y una función llamadatoggleTheme que le permite alternar el tema. El ganchouseTheme debe devolver ese objeto de contexto.

### Paso 1 

Abra el archivoThemeContext.js.

Cree un objetoThemeContext utilizandoReact.createContext().

Implemente el componente ThemeProvider. Debe aceptar unachildren prop y devolver un componente ThemeContext.Provider. El ThemeContext.Provider recibe un objeto como suvalue prop, con una theme cadena y una toggleTheme función.

toggleThemedebería alternar el tema entre light y dark.

### Paso 2

Implemente el gancho useTheme. Debería devolver los valores theme y toggleTheme del ThemeContext.

### Paso 3

Abra el archivo Switch/index.js. Añada un prop onChange al elemento de entrada y pase una función callback, como manejador del evento, para cambiar el tema. En este caso no necesita utilizar el argumento del evento.

### Paso 4

Verifique que la aplicación funciona como se espera. Debería poder alternar el tema entre claro y oscuro. Observe cómo cambia el color de fondo de la página, así como el color del texto.

