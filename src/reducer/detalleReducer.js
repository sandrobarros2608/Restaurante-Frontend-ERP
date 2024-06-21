export const detalleReducer = (state = [], action) => {
    switch (action.type) {

        case 'EnviarDetalle':
            return {
                producto: action.payload,
                cantidad: action.payload,
                pedido: action.payload
            }

        default:
            return state;
    }
}