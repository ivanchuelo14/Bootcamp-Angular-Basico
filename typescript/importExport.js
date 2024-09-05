"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var producto_1 = require("./producto");
//Buscamos el objeto y le damos enter automaticamente hace el import
var listProduct = [
    {
        id: 1,
        description: 'Tablet',
        precio: 200
    },
    {
        id: 2,
        description: 'Euuu',
        precio: 100
    },
    {
        id: 3,
        description: 'Producto final',
        precio: 300
    }
];
var totalLista = (0, producto_1.sumProductosPrecio)(listProduct);
console.log(totalLista);
