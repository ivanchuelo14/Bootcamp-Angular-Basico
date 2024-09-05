//Objetos anidados e interfaces

interface ICliente{
    nombre: string;
    apellido: string;
    credito: number;
    monstrarCliente: () => void; //Metodo que esta dentro del objeto
    direccion: IDireccion //Objetos anidados 
}

interface IDireccion {
    numeroCalle:string;
    ciudad:string;
    pais: string;
}


//Insantia y seteo
const clienteObj : ICliente = {
    nombre: 'Ivan',
    apellido : 'Guerra',
    credito: 10000,
    monstrarCliente(){
        console.log(`Esta es una forma de conctenar: ${this.nombre} ${this.apellido} es ${this.credito}`);
    },
    direccion:{
        numeroCalle: 'dasda',
        ciudad: 'Eu',
        pais: 'Colombia'
    }
}

const deuda = (cliente: ICliente, monto: number): void => {
    cliente.credito += monto;
}

//Metodo
deuda(clienteObj, 300);

//Metodo dentro de un objeto
clienteObj.monstrarCliente();