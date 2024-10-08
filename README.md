# CursoTypeScript
Primeros pasos usando TypeScript.
En este archivo indicaremos los pasos seguidos para inicializar nuestro proyecto TypeScript.

## 1. Creación un proyecto node. Lo inicializamos con las dependencias indicadas:
Una vez que nos clonado nuestro repositorio de GitHub, el siguiente paso será inicializar un proyecto node, usando para ello el siguiente comando:
   
   `npm init` 
   
Este comando nos lanzará un asistente y tras completar cada pregunta nos creará una archivo de configuración package.json donde indicaremos las dependencias de nuestro proyecto.

## 2. Instalación de las dependencias locales
Una vez inicializado el proyecto añadiremos las dependencias necesarias para que nuestro proyecto sea compatible con TypeScript, ejecutando la siguiente línea en la carpeta raiz de nuestro proyecto:

 `npm install --save-dev @types/node nodemon ts-node typescript `

A continuación se indica la descripción de cada una de las dependencias:
	- **@types\/node**:  indicamos que todas las dependencias serán para un proyecto TypeScript
	- **nodemon**: detecta los cambios en el código y los ejecuta
	- **ts-node**:  nos permite ejecutar el código sin la necesidad de tener que realizar la transpilación del código
	- **typescript**: dependencia de typescript

## 3. Creación archivo configuración TypeScript
Este archivo de configuración es necesario para indicar qué configuración tendrá typescript, como, por ejemplo, cómo se realizará la transpilación el código. Para ello, será necesario ejecutar el siguiente comando, lo que dará como resultado un archivo tsconfig.json.

 
 `npx tsc --init --outDir build --esModuleInterop --resolveJsonModule --lib es6 --module commonjs --allowjs --noImplicitAny`
 
Con npx vamos a ejecutar la dependencia typescript que hemos añadido a nuestro proyecto. --init creará un archivo de configuración con las siguientes características:

    --outDir build -> dónde se almacenará el código transpilado?
	--esModuleInterop -> permite usar módulos con diferentes versiones de ECMAScript
	--resolveJsonModule -> permite importar módulos con extensión .json. 
	--lib es6 -> le indicamos la versión que usaremos de ECMAScript.
	--module commonjs -> le indicamos que lo transpile a commonjs para que sea compatible con la mayoría de los navegadores.
	--allowjs -> permite que convivan tanto archivos .ts como .json
	--noImplicitAny -> establecemos el tipado fuerte. No podemos usar variables con el tipo de dato any.

## 4. Creación de una carpeta src y primer archivo index.ts
Lo siguiente que realizaremos será crear una carpeta src dónde incluiremos todo nuestro código fuente y un archivo index.ts que contendrá todo el código TypeScript


## 5. Instalación de extensiones útiles
Microsoft Visual Studio Code incluye algunas extensiones que pueden ser muy útiles para agilizar la programación, entre las que se encuentran:

	- Material Icon Theme
	- JavaScript and TypeScript Nightly
	- TypeScript Hero
	- TypeScript Hero
	- Path Intellisense
	- Path Intellisense
	- TODO Highlight
	- Todo Tree


## 6. Ejecución primer archivo

Para poder ejecutar el archivo TypeScript que hemos añadido a la carpeta src debemos lanzar el siguiente comando.

`npm exec ts-node src/index.ts`

La ejecución de los archivos .ts se puede automatizar un poco si creamos un nuevo script en el archivo package.json, cómo se puede observar en la siguiente línea:

 ` "tsnode": "cd src && ts-node index.ts", `

Para poder lanzar este script será necesario ejecutar el siguiente comando en la terminal:

 ` npm run tsNode` 
 
Recordar que hemos añadido a nuestro proyecto un componente que será el encargado de estar constantemente comprobando los archivos que van cambiando de nuestro proyecto y los ejecutará cada vez que se produzca un cambio. Una primera forma de ejecutar nodemon es la siguiente:

 ` npm exec nodemon src/index.ts `
 
Podemos agilizar este proceso añadiendo un archivo de configuración nodemon.json dónde se indicaremos qué carpeta deberá comprobar así como las extensiones de los archivos y archivos a ignorar. El contenido del archivo nodemon.json debe ser el siguiente:

{
    "watch": ["src"],
    "ext": ".ts, .js",
    "ignore": [],
    "exec": "ts-node ./src/index.ts"
}

Por último, vamos a añadir un nuevo script al archivo package.json para lanzar de manera más intuitiva nodemon:

`"start" : "nodemon"`

Podemos verificar que nodemon funciona correctamente lanzando el script start:

` npm run start `


## 11. Transpilación del código
Si queremos transpilar nuestro código typescript a javascript debemos usar el tsc (TypeScript Compiler) lanzando el siguiente comando:

` npm exec tsc`

Para facilitar esta operación también se puede añadir un comando y se lanzaría la transpilación usando:

`npm run transpilation`

## 12. Configuración de WebPack
Durante el desarrollo de nuestra aplicación con TypeScript hemos realizado la instalación e importación de diferentes módulos/dependencias que aportan una funcionalidad extra a nuestra APP. Estos módulos han sido instalados en Node, por lo que necesitamos de una herramienta que empaquete dichos módulos en un único archivo para poder desplegar nuestro proyecto en un servidor web. Todo esto lo podremos realizar gracias a WebPack.
### ¿Qué es WebPack?
Webpack es un empaquetador de módulos, es decir, te permite generar un achivo único con todos aquellos módulos que necesita tu aplicación para funcionar. Para darte una idea, te permite incluir todos tus archivos javascript .js en un único archivo, incluso se pueden incluir hasta archivos de estilos .css en el mismo archivo, llamado *.bundle.js. Además, se puede realizar otras tareas de optimización de los códigos, tales como la minificación y la compresión.

### Instalación de WebPack
Para poder beneficiarnos de la funcionalidad de WebPack es necesario instalar los siguientes módulos usando npm:

` npm i npm install --save-dev webpack webpack-cli webpack-dev-server typescript ts-loader `

### Configuración de WebPack

Una vez instalado, es necesario crear un archivo llamado webpack.config.js, donde algunas opciones sobre cómo se realizará el empaquetado de nuestra aplicación. Concretamente, este archivo debe contener lo siguiente:
```javascript
const path = require('path');
module.exports = {
  mode:"development",
  entry: './src/index.ts',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  devtool: 'source-map',
  devServer: {
    static: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  }
};
```
### Empaquetado y despliegue

Para poder hacer uso de WebPack será necesario primeramente empaquetar todo el código y posteriormente desplegarlo en un servidor web. Para ello, debemos ejecutar los siguientes comandos en la terminal de nuestro proyecto:

`npm exec webpack build`

![Build webpack](https://raw.githubusercontent.com/josearodriguezdaw/CursoTypeScript/ed261e57739c3ee2220117f536858c187da724b0/resources/images/build.png "Build webpack")

Tras lanzar esta primera línea en la terminar podemos observar que se ha creado una nueva carpeta en nuestro proyecto llamada "dist" la cual contiene un archivo bundle.js con todo el código JavaScript necesario para desplegar nuestra aplicación. 

Para poder probar dicho código, vamos a importarlo en un documento index.html que crearemos dentro de la carpeta /dist y contendrá lo siguiente:

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset='utf-8'>
  <meta http-equiv='X-UA-Compatible' content='IE=edge'>
  <title>Curso TypeScript IES Carillo</title>
  <meta name='viewport' content='width=device-width, initial-scale=1'>
  <script src="bundle.js"></script>
</head>
<body>
</body>
</html>
```
![Creación archivo html](https://raw.githubusercontent.com/josearodriguezdaw/CursoTypeScript/ed261e57739c3ee2220117f536858c187da724b0/resources/images/create-html.png "Creación archivo html")

Por último, para desplegar la carpeta /dist en un servidor de aplicaciones usaremos la siguiente línea:

`npm exec webpack serve`

En la siguiente imagen se puede observar como se indica en la terminal la url dónde se ha desplegado nuestra APP.

![Execute Webpack serve](https://raw.githubusercontent.com/josearodriguezdaw/CursoTypeScript/ed261e57739c3ee2220117f536858c187da724b0/resources/images/exec-webpack-serve.png "Execute Webpack serve")

NOTA: Para aguilizar la ejecución de estos dos comandos podemos crear dos nuevos scripts en el archivo package.json. 

`"build": "webpack",`
`"start-web": "webpack serve"`

![Configuración nuevos comandos](https://raw.githubusercontent.com/josearodriguezdaw/CursoTypeScript/ed261e57739c3ee2220117f536858c187da724b0/resources/images/add-scripts.png "Configuración nuevos comandos")

Si accedemos a nuestro servidor de aplicaciones, haciendo clic en algunos de los enlaces anteriores mostrados en la terminal, se mostrará nuestra APP desplegada. Para poder verificar que se está ejecutando correctamente todo nuestro código TypeScript, previamente transpilado a JavaScript, podemos acceder a la herramienta para desarrolladores del navegador (CTRL + MAYUS + I) y verificar que aparecen todos los logs en la pestaña "Consola"

![Consola APP Desplegada](https://raw.githubusercontent.com/josearodriguezdaw/CursoTypeScript/refs/heads/main/resources/images/web-consola.png "Consola APP Desplegada")

## 13. Depuración del código usando Visual Studio Code

La depuración del código fuente es una práctica muy común ya que les permite a los programadores estudiar el código fuente con el objetivo de encontrar y solucionar errores. 

Para poder depurar el código de nuestra aplicación primeramente debemos establecer un breakpoint o punto de interrupción. Los puntos de interrupción establecen dónde se quiere pausar la ejecución del depurador. 

Para establecer un punto de interrupción hacemos clic justo a la izquierda del número de la línea en la que queremos que se pare el depurador.

![Establecer BreakPoint](https://raw.githubusercontent.com/josearodriguezdaw/CursoTypeScript/refs/heads/main/resources/images/debug-breakpoint.png "Establecer BreakPoint")
 
Una vez establecido el punto de interrupción, el siguiente paso será ejecutar nuestra aplicación en modo depuración. Para ello, hacemos clic en Run > Start Debugging, tras lo cual, se nos abrirá la vista de depuración.

![Iniciar depuración](https://raw.githubusercontent.com/josearodriguezdaw/CursoTypeScript/refs/heads/main/resources/images/debug-start.png "Iniciar depuración")
 
En la vista de depuración seleccionamos en el desplegable que se ejecute la aplicación con Node.js (1) y en la ventana que se abre seleccionamos el script “start” (2), el cual ejecutará nuestro proyecto. Por último, le damos al botón play (3).
 
![Ejecutar código en modo depuración](https://raw.githubusercontent.com/josearodriguezdaw/CursoTypeScript/refs/heads/main/resources/images/debug-run.png "Ejecutar código en modo depuración")
 
Tras realizar estos pasos se ejecutará nuestro código y la ejecución parará en la línea en la que hemos establecido el punto de interrupción.
 
![Debug pausado](https://raw.githubusercontent.com/josearodriguezdaw/CursoTypeScript/refs/heads/main/resources/images/debug-pause.png "Debug pausado")

Podemos navegar por cada una de las líneas de nuestro código haciendo uso del siguiente menú:
 
![Menú de debug](https://raw.githubusercontent.com/josearodriguezdaw/CursoTypeScript/refs/heads/main/resources/images/debug-menu.png "Menú de debug")

Cada uno de los botones realiza lo siguiente:
-	Continue: continua la ejecución del código. Si existe algún otro punto de interrupción posterior se parará en este.

-	Step over: el depurador ejecuta la línea actual y se pausa en la siguiente línea de código.

-	Step into: si la línea en la que se encuentra el depurador es una función entrará dentro de dicha función.

-	Step out: el depurador continuará con la ejecución del código hasta salir de la función en la que se encuentre. Esto permitirá omitir las líneas restantes de la función actual y regresar al contexto desde donde fue llamado.

-	Restart: reinicia la ejecución del depurador

-	Stop: para la ejecución del código.

Como hemos mencionado anteriormente, durante la ejecución del código en modo depuración Visual Studio muestra la vista de depuración. En el lateral de dicha vista existen diferentes secciones de gran utilidad:
 
![Vista de debug](https://raw.githubusercontent.com/josearodriguezdaw/CursoTypeScript/refs/heads/main/resources/images/debug-view.png "Vista de debug")


- Variables: muestras el valor de todas las variables de nuestra aplicación.

- Watch: nos permite añadir expresiones y hacer un seguimiento del valor que va tomando dichas expresiones. Por ejemplo, podemos añadir el identificador de una variable concreta para hacer un seguimiento del valor que va tomando dicha variable.

- Breakpoints: Muestra todos los puntos de interrupción que han sido configurados en nuestro código.


