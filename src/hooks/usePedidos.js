import { useReducer } from "react";
import { pedidosNoPagadosReducer } from "../reducer/pedidosNoPagadosReducer";
import { ActualizarPedidoNoPagado, CargandoPedidos } from "../reducer/carroProductosActions";
import { findOrderUnpaid, updateOrder } from "../api/pedidosService";

const inicialPedidos = [];
export const usePedidos = () => {

    const [pedidos, dispatch] = useReducer(pedidosNoPagadosReducer, inicialPedidos);

    const obtenerTodosLosPedidos = async () => {
        const result = await findOrderUnpaid();
        console.log("Promesa: " + result);
        dispatch({
            type: CargandoPedidos,
            payload: result.data,
        })
    }
    const handlerPagarPedido = async (pedidoNoPagado) => {
        console.log(pedidoNoPagado);
        let response = await updateOrder(pedidoNoPagado.id, pedidoNoPagado.total, true);
        dispatch({
            type: ActualizarPedidoNoPagado,
            payload: response.data,
        });
    }

    return {
        pedidos,

        handlerPagarPedido,
        obtenerTodosLosPedidos,
    }
}