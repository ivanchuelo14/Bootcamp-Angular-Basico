//Objetos anidados
interface IPelicula {
    id: number;
    titulo: string;
    descripcion: string;
    anio: number;
    director: IDirector;
}

interface IDirector {
    nombres: string;
    apellidos: string;
}

const pelicula: IPelicula = {
    id: 1,
    titulo: 'Star Wars - guerra de los Clones',
    descripcion: 'Saga de Star Wars',
    anio: 2001,
    director: {
        nombres:'George',
        apellidos: 'Lucas'
    }
}

//Desestructuraion solamente extraigo las propiedades que necesito del objeto

const { titulo, anio, director } = pelicula;
const {nombres} = director;

console.log(`Pelicula: ${titulo} y nombre director ${nombres}`)
