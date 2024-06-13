import { ActualizarProducto, CargandoProductos, CrearProducto, EliminarProducto } from "./carroProductosActions";

export const productosReducer = (state = [], action) => {
    switch (action.type) {
        case CrearProducto:
            return [
                ...state,
                {
                    ...action.payload,
                }
            ];

        case ActualizarProducto:
            return state.map(productoActualizar => {
                if (productoActualizar.id === action.payload.id) {
                    return {
                        ...action.payload
                    };
                }
                return productoActualizar;
            })

        case CargandoProductos:
            return action.payload;

        case EliminarProducto:
            return state.filter(producto => producto.id !== action.payload);

        default:
            return state;
    }
}