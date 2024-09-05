"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sumProductosPrecio = void 0;
var sumProductosPrecio = function (producto) {
    var total = 0;
    if (producto != null && producto.length > 0) {
        producto.forEach(function (producto) {
            total += producto.precio;
        });
    }
    return total;
};
exports.sumProductosPrecio = sumProductosPrecio;
