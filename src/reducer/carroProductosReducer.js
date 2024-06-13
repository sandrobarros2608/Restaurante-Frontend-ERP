import { ActualizarCantidadProductoAlCarro, AgregarProductoAlCarro, EliminarProductoDelCarro } from "./carroProductosActions";

//State es el objeto a cambiar (carroProducto)
//Action es el valor que se pasa a cada variable
export const carroProductoReducer = (state = [], action) => {
    switch (action.type) {
        case AgregarProductoAlCarro:
            return [...state, {
                producto: action.payload,
                cantidad: 1,
            }];

        case ActualizarCantidadProductoAlCarro:
            return state.map((i) => {
                if (i.producto.id === action.payload.id) {
                    return {
                        ...i,
                        cantidad: i.cantidad + 1,
                    };
                }
                return i;
            });

        case EliminarProductoDelCarro:
            return state.filter((i) => i.producto.id !== action.payload);

        default:
            return state;
    }
}