import { useReducer } from "react"
import { detalleReducer } from "../reducer/detalleReducer";
import { saveDetails } from "../api/detalleService";

const inicialDetalle = [];
export const useDetalle = () => {

    const [detalle, dispatch] = useReducer(detalleReducer, inicialDetalle);

    const handlerEnviarDetalle = async (producto, cantidad, pedido) => {
        let response = await saveDetails(producto.id, cantidad, pedido.id);
        dispatch({
            type: 'EnviarDetalle',
            payload: response.data,
        });
    }

    return {
        handlerEnviarDetalle,
    }
}