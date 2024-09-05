let cliente: string = '';
cliente = 'Eu';

//Tuberias
let numero: number  | string ; // Con esto | se puede manejar varios tipos de datos 
numero = 1;

//Arreglos

let clientesNombres: string[] = ['Ivan', 'Casallas', 'Maria'];
clientesNombres.push('Marcela');

//Interfaz no se inicializan se definen pero no se da valor 
interface IEmpleado{
    nombre: string;
    apellido: string;
    direccion: string;
    telefono: string[];
    sueldo: number;
    fechaNacimiento: Date;
    cargo?: string; //Nulleable
}

//Objetos
const empleado :IEmpleado = {
    nombre: 'Carlos',
    apellido: 'Guerra',
    direccion: 'asdasdasdasd',
    telefono: ['2342342342', '3242342342'],
    sueldo: 10000000,
    fechaNacimiento : new Date() //Fecha hora actuales TS
}

console.table(empleado);

//Comando para crear archivo JS
//npx tsc variables.ts

 