import { useState } from "react";
import Swal from "sweetalert2";
import { useAuth } from "../hooks/useAuth";

const inicialFormularioLogin = {
    correo: '',
    contraseña: '',
}

export const PaginaLogin = () => {

    //Controla los datos del login
    const [formularioLogin, setFormularioLogin] = useState(inicialFormularioLogin);

    const { correo, contraseña } = formularioLogin;

    //login, handlerLogin, handlerLogout viene de useAuth
    const { login, handlerLogin, handlerLogout } = useAuth();

    const onCambioFormulario = ({ target }) => {
        const { name, value } = target;
        setFormularioLogin({
            ...formularioLogin,
            [name]: value,
        });
    }

    const onEnviarFormulario = (event) => {
        event.preventDefault();
        if (!correo || !contraseña) {
            Swal.fire('Error de validacion', 'Correo y Contraseña Requeridos', 'error');
        }

        handlerLogin(correo, contraseña);
        setFormularioLogin(inicialFormularioLogin);
    }

    return (
        <>
            <div className="modal" style={{ display: 'block' }} tabIndex="-1">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Iniciar Sesion</h5>
                        </div>
                        <form onSubmit={onEnviarFormulario}>
                            <div className="modal-body">
                                <input
                                    type="text"
                                    className="form-control my-3 w-75"
                                    placeholder="Correo"
                                    name="correo"
                                    value={correo}
                                    onChange={onCambioFormulario}
                                />
                                <input
                                    type="password"
                                    className="form-control my-3 w-75"
                                    placeholder="Contraseña"
                                    name="contraseña"
                                    value={contraseña}
                                    onChange={onCambioFormulario}
                                />
                            </div>
                            <div className="modal-footer">
                                <button
                                    type="submit"
                                    className="btn btn-primary">
                                    Login
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
