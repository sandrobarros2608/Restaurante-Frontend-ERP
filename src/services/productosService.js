/*
import { productos } from "../data/productos";

export const getProductos = () => {
    return productos;
}
*/

export const calcularTotal = (productosCarro) => {
    return productosCarro.reduce((accumulator, productosCarro) => accumulator + productosCarro.producto.precio * productosCarro.cantidad, 0);
}