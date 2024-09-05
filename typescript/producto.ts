// Exortar interfaces u objetos es para llamar 
export interface IProduct {
    id:number;
    description:string;
    precio:number
}

export const sumProductosPrecio = (producto: IProduct[]): number => {
    let total = 0;
    if(producto != null && producto.length > 0){
            producto.forEach((producto) => {
                total += producto.precio;
            })
    }        
    return total;
}