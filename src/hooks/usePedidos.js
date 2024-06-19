import { useReducer } from "react";
import { pedidosReducer } from "../reducer/pedidosReducer";
import { ActualizarPedidoNoPagado, CargandoPedidosNoPagados, CargandoPedidosPagados } from "../reducer/carroProductosActions";
import { findOrderPaid, findOrderUnpaid, updateOrder } from "../api/pedidosService";

const inicialPedidos = [];
export const usePedidos = () => {

    const [pedidos, dispatch] = useReducer(pedidosReducer, inicialPedidos);

    const obtenerTodosLosPedidosNoPagados = async () => {
        const result = await findOrderUnpaid();
        console.log("Promesa: " + result);
        dispatch({
            type: CargandoPedidosNoPagados,
            payload: result.data,
        })
    }

    const obtenerTodosLosPedidosPagados = async () => {
        const result = await findOrderPaid();
        console.log("Promesa: " + result);
        dispatch({
            type: CargandoPedidosPagados,
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
        obtenerTodosLosPedidosNoPagados,
        obtenerTodosLosPedidosPagados,
    }
}