import { ActualizarPedidoNoPagado, CargandoPedidosNoPagados, CargandoPedidosPagados, EnviarPedido } from "./carroProductosActions";

export const pedidosReducer = (state = [], action) => {
    switch (action.type) {

        case EnviarPedido:
            return {
                total: action.payload
            }

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