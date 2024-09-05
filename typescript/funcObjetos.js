//Metodos void
var clienteObj = {
    nombre: 'Ivan',
    apellido: 'Guerra',
    credito: 10000,
    monstrarCliente: function () {
        console.log("Esta es una forma de conctenar: ".concat(this.nombre, " ").concat(this.apellido, " es ").concat(this.credito));
    }
};
var deuda = function (cliente, monto) {
    cliente.credito += monto;
};
//Metodo
deuda(clienteObj, 300);
//Metodo dentro de un objeto
clienteObj.monstrarCliente();
