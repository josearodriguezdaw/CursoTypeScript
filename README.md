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