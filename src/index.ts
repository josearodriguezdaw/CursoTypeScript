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

Object.keys('')
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




/**
 * Funciones: nos permitirá crear bloque de códigos reutilizables.
 * 
 * funtion name (nameParam: type):{}
 * 
 */

// Funciónes clásicas y documentación del código

/**
 * Muestra un saludo por consola a una persona
 * @param nombre string nombre del usuario
 * 
 */
function saludar (nombre:string){
    console.log(`Hola ${nombre}, qué tal estas?`);

}

saludar("José Antonio");

//Funciones con parámeros por defecto

function saludarDefault (nombre:string = "Jose"){
    console.log(`Hola ${nombre}, qué tal estas?`);
}
saludarDefault();
saludarDefault("Juan");


//Funciones con parámeros opcionales

function saludarOpcional (nombre?:string){
    let nombreParam = nombre;
    if(nombreParam == undefined){
        nombreParam = "Nombre Defecto";
    }
    console.log(`Hola ${nombreParam}, qué tal estas?`);

}

saludarOpcional();

// Funciones con parámetros de varios tipos
function variosTipos (a: string | number){
    if (typeof(a) == "string"){
        console.log("a es un string");
    } else{
        console.log("a es un number");
    }
}
variosTipos(1);

// Función con retorno: return
function suma (a:number,b:number): number{
    return a+b;
}

var resultadoSuma:number = suma(1,2);
console.log(resultadoSuma);
console.log(suma(1,2));


// Funciones anónimas: no se especifica un nombre.
/**
 * Suma dos valores
 * @param valor1 primer valor
 * @param valor2 segundo valor
 * @returns devuelve la suma de valor1 y valor2
 */
const funcRestar = function (valor1:number, valor2:number): number {
    return valor1 - valor2;
}

/**
 * Funciones, rest parameters (parámetros rest)
 * Permite definir funciones que tomen un número indeterminado de argumentos
 */
function multiParam (...nombres: string[]):void{
    nombres.forEach((nombre)  => {
        console.log(nombre);
    })
}

multiParam("Alex","Martin");

// A las funciones rest también se le puede pasar una lista de elementos
let listaNombres:string[] = ["Leandro","Francisco"];
multiParam(...listaNombres);

/**
 * La diferencia entre usar una función que reciba como parámetro un array es que esta función recibe como parámetro una referencia al objeto.
 * En cambio, con una función rest param lo que recibe como parámetro es cada uno de los elementos de la lista de forma individual.
*/

/**
 * Las funciones arrow son una sintaxis compacta de definir funciones en JavaScript y TypeScript.
 * Proporcionan una forma más breve y clara de escribir funciones en comparación con la sintaxis tradicional, 
 * lo que mejora la legibilidad y mantiene la seguridad de los tipos.
 * 
 * (param1, param2, ..., paramN) => {}
 */

let getDatosTarea = (tarea:Tarea):string => {return `La tarea denominada ${tarea.nombre} cuyo estado es ${tarea.estado} tiene una prioridad ${tarea.prioridad} `}
console.log(getDatosTarea(tarea1));


/**
 * Funciones CallBack
 * Una función callback es una función que se pasa a otra función como parámetro y dentro de la misma es llamada.
 * Hay que tener en cuenta que una función se trata como un objeto.
 */

//Ejemplo 1: 

const funcionMuestra = function (){
    console.log("CallBack desde función estándar");
}

setTimeout(funcionMuestra,100); // La función timeout llama a funciónMuestra después de 100ms

// Ejemplo 2: paso de una función anónima
setTimeout(function(){console.log("CallBack desde función anónima")},1000);

// Ejemplo 3: paso de una función flecha

setTimeout(()=>{console.log("CallBack desde función flecha")},500);


// Ejemplo 4:

let muestraDatos = function (a:string, b:number, c:string[]){
    console.log(`Ejemplo 4 - ${a}`);
}

listaTareas.forEach(muestraDatos)

listaTareas.forEach((valor:string,indice:number,datos:string[]) => {
    console.log(`${valor}, mostrado desde función CallBack fecha`)
})

// Ejemplo 5: 

let fsuma = function suma(a:number, b:number){
    console.log("Llamada desde función opera")
    return a+b;
}

let fresta = function resta(a:number,b:number){
    return a-b;
}
// En este ejemplo estamos definiendo que la función opera espera recibir como parámetro una función CallBack
// Concretamente, estamos diciendo que la función como entrada tiene que tener dos parámetros y devolver un número
// Cuando se llama a dicha función CallBack desde la función principal se le pasan dichos parámetros y se vuelve a operar con el resultado

function opera (x:number,y:number,callbackfuntion:(a:number,b:number)=> number){
    return callbackfuntion(x,y);
}

opera(2,3,fsuma);
opera(2,3,fresta)