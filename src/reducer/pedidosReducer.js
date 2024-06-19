import { ActualizarPedidoNoPagado, CargandoPedidosNoPagados, CargandoPedidosPagados } from "./carroProductosActions";

export const pedidosReducer = (state = [], action) => {
    switch (action.type) {

        case ActualizarPedidoNoPagado:
            return state.map(pedidoNoPagadoActualizar => {
                if (pedidoNoPagadoActualizar.id === action.payload.id) {
                    return {
                        ...pedidoNoPagadoActualizar,
                        pagado: true,
                    };
                }
                return pedidoNoPagadoActualizar;
            });

        case CargandoPedidosNoPagados:
            return action.payload;

        case CargandoPedidosPagados:
            return action.payload;

        default:
            return state;
    }
}