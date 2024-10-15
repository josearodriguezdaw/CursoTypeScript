import { Alumno } from "../..";

export enum ESexo {
    Masculino,
    Femenino,
    Otro
}

export default interface IPersona {
    nombre:string;
    apellidos?:string;
    edad:number | string;
    sexo:ESexo

    convertTexto: (alumno:Alumno) => string
    textoToPersona: (texto:string) => Alumno
}