function Sumar(a: number, b: number): number {
    return a + b;
}

const resultado = Sumar(1, 2);

//Funcion flecha lo mismo mas moderno 
const SumarArrow = (a: number, b: number): number => {
    return a + b;
}

const resultadoFlecha = SumarArrow(3, 4);
const resultadoNormal = Sumar(3, 4);
    
function multiplicar(numero1: number, numero2?: number, base: number = 2): number {
    return numero1 * base;
}

const resultMulti = multiplicar(10, 40, 2);