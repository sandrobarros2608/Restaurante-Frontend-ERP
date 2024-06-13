import { useReducer } from "react";
import { loginReducer } from "../reducer/loginReducer";
import { Login, Logout } from "../../reducer/carroProductosActions";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const inicialLogin = JSON.parse(sessionStorage.getItem('login')) || {
    estaAutenticado: false,
    correo: undefined,
}
export const useAuth = () => {

    const [login, dispatch] = useReducer(loginReducer, inicialLogin);

    const navigate = useNavigate();

    const handlerLogin = (correo, contraseña) => {
        if (correo === 'admin@gmail.com' && contraseña === '12345') {
            const usuario = { correo: 'admin@gmail.com' }
            dispatch({
                type: Login,
                payload: usuario,
            });
            sessionStorage.setItem('login', JSON.stringify({
                estaAutenticado: true,
                usuario
            }));
            navigate("/categoria");
        } else {
            Swal.fire('Error de Login', 'Correo o Contraseña Invalidos', 'error');
        }
    }

    const handlerLogout = () => {
        dispatch({
            type: Logout,
        });
        sessionStorage.removeItem('login');
    }

    return {
        login,

        handlerLogin,
        handlerLogout   ,  
    }
}