import { useReducer } from "react";
import { pedidosReducer } from "../reducer/pedidosReducer";
import { ActualizarPedidoNoPagado, CargandoPedidosNoPagados, CargandoPedidosPagados, EnviarPedido } from "../reducer/carroProductosActions";
import { findOrderPaid, findOrderUnpaid, saveOrder, updateOrder } from "../api/pedidosService";
import Swal from "sweetalert2";

const inicialPedidos = [];
export const usePedidos = () => {

    const [pedidos, dispatch] = useReducer(pedidosReducer, inicialPedidos);

    //Crear pedido
    const handlerCrearPedido = async (total) => {
        let response = await saveOrder(total);
        dispatch({
            type: EnviarPedido,
            payload: response.data,
        })
    }

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
        Swal.fire({
            title: "Pedido Pagado!",
            text: "El pedido se ha pagado correctamente!",
            icon: "success"
        });
        setTimeout(() => {
            window.location.reload();
        }, 1000);
    }

    return {
        pedidos,

        handlerPagarPedido,
        obtenerTodosLosPedidosNoPagados,
        obtenerTodosLosPedidosPagados,
        handlerCrearPedido,
    }
}