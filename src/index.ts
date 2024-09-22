// Sintasis básica de TypeScript

/**
 * En este archivo iremos añadiendo líneas de código 
 * con la sintaxis básica de TypeScript para que nos
 * sirva de guia y nos ayude en el futuro.
 */

// 1. Imprimir por consola
// En TypeScript no es necesario acabar las líneas con ;
console.log("Hola Mundo");

/** 
 * 2. Tipos de Variables
 * 
 * var - variable global
 * let - variable local
 * const - constante
*/

var nombre = "Jose"; // Variable global
let email = "jose@gmail.com";
const PI = "3.141592";

//Formas de concatenar variables y texto
console.log("Hola " + nombre);
console.log(`¿Cuál es tu apellido ${nombre}`)
console.log ("Que tengas un buen día", nombre)
console.log (`El email de ${nombre} es ${email}`)

/**
 * 3. Tipos de datos
 * En TypeScrip es muy recomendable indicar el tipo de dato
 * que almacenará cada una de las variables y constantes.
 * 
 *  - string
 *  - number: incluye tanto enteros como decimales
 *  - boolean
 *  - null
 *  - undefined: variable cuyo valor no haya sido especificado.
 *  - any: el valor de la variable puede ser de cualquier tipo
 */

var apellido1: string = "Jose";
var edad: number = 18;
var esMayorDeEdad: boolean = true;
var curso; // Al no indicar ningún tipo TypeScript le asigna any


// Instanciación de múltiples variables;

let a:string,b:boolean,c:number;
a="A";
b=true;
c=2.5;




// Array de datos

let listaTareas : string [] = ["Tarea 1"," Tarea 2"," Tarea 3"];

let valores: (string | number | boolean)[] = [3, 2.4, true, "ABC"];

// Concatenación de arrays mediante factor de propagación

let nuevaListaTareas : string[] = [...listaTareas, "Tarea 4"];
console.log(nuevaListaTareas);


/***
 * Creación de un objeto compuesto por datos primitivos
 */


let misDatos = {
    nombre:"Jose Antonio",
    apellido:"Rodriguez",
    edad: 18 
}

//Propagación de la variable misDatos
let misDatoProfesionales = {
    ...misDatos,
    profesion: "Docente"
}
// Declaración y Asignación 1 a 1

let miNombre = misDatos.nombre;
let miApellido = misDatos.apellido;
let miEdad = misDatos.edad;




/**
 * Enumerados : permite definir un conjunto de constantes bajo un identificador.
 * Si imprimimos el valor de un valor del enumerado observaremos que 
 * lo que almacena es el un valor numérico.
 * 
 *  */ 

enum EstadoTarea { "Pendiente", "EnProceso", "Completada"};
let estado: EstadoTarea = EstadoTarea.Pendiente;
console.log(`El valor del enumerado Pendiente es: ${estado}`);

/**
 * El enumerado está actuando como una tupla Key:Value.
 * Por defecto la primera key es == a 0. Podemos también cambiar esto.
 * Podemos establecer una clave para cada valor del enumerado:
 *  */

// enum EstadoTarea { "Pendiente" ="P", "EnProceso" ="E", "Completada"="C"};
enum PosicionCarrera { "Primero" = 1, Segundo, Tercero};
console.log (`Has quedado en la posición ${PosicionCarrera.Primero}`);


/**
 * Interfaces: describen la estructura de un objeto.
 * Las interfaces contienen la definición de los métodos y propiedades
 * de un objeto, pero no su implementación.
 * Una interfaz puede extender de otra.
 */

interface Tarea {
    nombre:string,
    estado:EstadoTarea,
    prioridad:number
}

let tarea1: Tarea = { 
    nombre: "Tarea1", 
    estado: EstadoTarea.Pendiente, 
    prioridad: 1 
};

console.log (tarea1);
console.log (tarea1.nombre);


/**
 * Types: permite crear un tipo de dato personalizado a partir de tipos de datos primitivos
 * Permiten crear una estructura de datos más compleja.
 * En TypeScript podemos combiar dos tipos, como veremos a continuación.
 */

type Administrador = {
    nombre: string;
    isAdmin: boolean;
}

type Empleado = {
    nombre: string;
    salario: number;
}

let empleado1: Empleado = {nombre:"Juan",salario:1500};

/* Intersección de datos: permite combinar dos o más tipos de datos en uno solo. 
*/
let empleado2 : Empleado & Administrador;
empleado2 = {isAdmin:true,nombre:"Jose",salario:2000};


/**
 * Estructuras de control: operador ternario, if, switch
 * Operador Ternario
 * condición ? expr1 : expr2
 * Si la condición es true, el operador retorna el valor de la expr1;
 *  de lo contrario, devuelve el valor de expr2.
 */  

console.log (empleado1.salario > 1500 ? `El empleado ${empleado1.nombre} es Senior`: `El empleado ${empleado1.nombre} es Junior` )



/***
 * Operadores de comparación:
 * 
 * == -> compara el valor de la variable
 * === compara el valor de la variable + el tipo de datos
 */
let tarea3 : Tarea = {estado: EstadoTarea.EnProceso, nombre:"Tarea3", prioridad:3};


// Estructura if-else: if (){} else if (){} else{}

if (tarea3.estado == EstadoTarea.EnProceso && tarea3.prioridad === 1){
    console.log(`La tarea ${tarea3.nombre} es de máxima prioridad`);
}else if (tarea3.estado == EstadoTarea.Pendiente ){
    console.log(`La tarea ${tarea3.nombre} aún no ha comenzado`);
}else{
    console.log(`El estado de la tarea ${tarea3.nombre} es  ${tarea3.estado}`);
}

// Estructura Switch: switch (valor){case: break; default: break;}

switch (tarea3.estado) {
    case EstadoTarea.Completada:
        console.log("Tarea completada");
        break;
    case EstadoTarea.EnProceso:
        console.log("Tarea en proceso");
        break;
    default:
        console.log("Tarea pendiente");
        break;
}


// Estructura Try - Catch : para capturar errores

try {
    let numero:number = 3.14;
    console.log(numero.toString());
} catch (error) {
    console.log("Se ha producido el siguiente error", error);
}


/**
 * Estructura de repetición - Bucles : 
 */

let tarea2 : Tarea = {estado: EstadoTarea.Completada, nombre: "Tarea 2", prioridad: 0}
let listadoTareas: Tarea[] = [tarea1,tarea2,tarea3]

//FOREACH
listadoTareas.forEach( 
    (elemento,indice,arreglo) => {
    console.log(indice,elemento.nombre,arreglo[indice].estado)
});

/** 
 * FOR
 * Cuando trabajamos con tipos de datos no funciona
 * for (const tarea: Tarea in listadoTareas){}
 */

// FOR CLÁSICO

for (let index = 0; index < listaTareas.length ; index++){
    const tarea = listaTareas[index];
    console.log(tarea);
}

// WHILE

while (tarea1.estado != EstadoTarea.Completada){
    console.log("Tarea no completada");
    tarea1.estado = EstadoTarea.Completada;
}

do {
    console.log (`El estado de la tarea ${tarea1.nombre} es ${tarea1.estado}`)
}while(tarea1.estado != EstadoTarea.Completada);


