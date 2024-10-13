import {Curso} from "./Curso"
export class Estudiante {

    // Propiedades
    private nombre:string;
    apellidos?:string;
    cursos:Curso[];

    // Constructor

    constructor (nombre:string, cursos:Curso[], apellidos?:string){
        this.nombre = nombre;
        this.apellidos = apellidos?apellidos:"";
        this.cursos = cursos;
    }

    get totalHorasEstudiadas():number{
        let suma =0;

        this.cursos.forEach((curso:Curso) => {suma+=curso.horas;})
        return suma;
    }

    get getNombre(){
        return this.nombre;
    }
    set setNombre(nombre:string){
        this.nombre = nombre;
    }
}