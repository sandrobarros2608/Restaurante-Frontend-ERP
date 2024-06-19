import { ActualizarPedidoNoPagado, CargandoPedidos } from "./carroProductosActions";

export const pedidosNoPagadosReducer = (state = [], action) => {
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

        case CargandoPedidos:
            return action.payload;

        default:
            return state;
    }
}