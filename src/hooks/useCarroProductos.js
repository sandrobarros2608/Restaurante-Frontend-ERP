import { useEffect, useReducer } from "react";
import { carroProductoReducer } from "../reducer/carroProductosReducer";
import { ActualizarCantidadProductoAlCarro, AgregarProductoAlCarro, EliminarProductoDelCarro } from "../reducer/carroProductosActions";


const inicialCarroProductos = JSON.parse(sessionStorage.getItem('carro')) || [];

export const useCarroProductos = () => {

    //Informacion de la comida en el carrito
    const [carroProductos, dispatch] = useReducer(carroProductoReducer, inicialCarroProductos);

    //Se renderiza cuando haya cambio en el carrito
    useEffect(() => {
        sessionStorage.setItem('carro', JSON.stringify(carroProductos));
    }, [carroProductos])


    //Agrega la comida al carrito
    const handlerAgregarProductoAlCarro = (producto) => {
        const productoEnCarro = carroProductos.find((i) => i.producto.id === producto.id);
        if (productoEnCarro) {
            dispatch({
                type: ActualizarCantidadProductoAlCarro,
                payload: producto,
            });
        } else {
            dispatch({
                type: AgregarProductoAlCarro,
                payload: producto,
            });
        }
    }

    const handlerEliminarProductoDelCarro = (id) => {
        dispatch({
            type: EliminarProductoDelCarro,
            payload: id,
        });
    }

    return {
        carroProductos,

        handlerAgregarProductoAlCarro,
        handlerEliminarProductoDelCarro,
    }
}