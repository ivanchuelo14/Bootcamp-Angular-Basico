var cliente = '';
cliente = 'Eu';
var numero = ''; // Con esto | se puede manejar varios tipos de datos 
numero = 1;
//Arreglos
var clientesNombres = ['Ivan', 'Casallas', 'Maria'];
clientesNombres.push('Marcela');
//Objetos
var empleado = {
    nombre: 'Carlos',
    apellido: 'Guerra',
    direccion: 'asdasdasdasd',
    telefono: ['2342342342', '3242342342'],
    sueldo: 10000000,
    fechaNacimiento: new Date() //Fecha hora actuales TS
};
console.table(empleado);
