import { Login, Logout } from "../../reducer/carroProductosActions";

export const loginReducer = (state = {}, action) => {
    switch (action.type) {
        case Login:
            return {
                estaAutenticado: true,
                correo: action.payload,
            };
        case Logout:
            return {
                estaAutenticado: false,
            };
        default:
            state;
    }
}