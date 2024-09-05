import { IProduct, sumProductosPrecio } from "./producto";

//Buscamos el objeto y le damos enter automaticamente hace el import
const listProduct: IProduct[] = [
    {
        id:1,
        description:'Tablet',
        precio: 200
    },
    {
        id:2,
        description:'Euuu',
        precio: 100
    },
    {
        id:3,
        description:'Producto final',
        precio:300
    }
];

//Buscamos el metodo del archvio producto y darle enter para importarlo
const totalLista = sumProductosPrecio(listProduct);
console.log(totalLista);
