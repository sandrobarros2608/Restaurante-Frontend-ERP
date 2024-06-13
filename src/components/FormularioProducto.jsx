import { useEffect, useState } from "react";
import Swal from "sweetalert2";

//handlerCrearProducto viene de InventarioProducto
//inicialFormularioProducto viene de InventarioProducto
//productoSeleccionado viene de InventarioProducto
//handlerCerrarFormulario viene de InvenarioProducto
export const FormularioProducto = ({ handlerCrearProducto, inicialFormularioProducto, productoSeleccionado, handlerCerrarFormulario }) => {

    const [formularioProducto, setFormularioProducto] = useState(inicialFormularioProducto);

    const { id, nombre, precio } = formularioProducto;

    useEffect(() => {
        setFormularioProducto({ ...productoSeleccionado });
    }, [productoSeleccionado]);

    const onCambioFormulario = ({ target }) => {
        //name y value viene de los inputs
        const { name, value } = target;
        setFormularioProducto({
            ...formularioProducto,
            [name]: value,
        });
    }

    const onEnviarFormulario = (event) => {
        event.preventDefault();
        if (!nombre || !precio) {
            Swal.fire({
                title: "Error de validacion",
                text: "Debe completar los campos del formulario",
                icon: "error"
            });
            return;
        }

        // Guardar el FormularioCliente 
        handlerCrearProducto(formularioProducto);
        setFormularioProducto(inicialFormularioProducto);
    }

    const onCerrarFormulario = () => {
        handlerCerrarFormulario();
        setFormularioProducto(inicialFormularioProducto);
    }

    return (
        <>
            <form onSubmit={onEnviarFormulario}>
                <input
                    className="form-control my-3 w-75"
                    type="text"
                    placeholder="Nombre"
                    name="nombre"
                    value={nombre}
                    onChange={onCambioFormulario} />
                <input
                    className="form-control my-3 w-75"
                    type="text"
                    placeholder="Precio"
                    name="precio"
                    value={precio}
                    onChange={onCambioFormulario} />
                <input
                    type="hidden"
                    name="id"
                    value={id} />
                <button
                    className="btn btn-primary"
                    type="submit">
                    {id > 0 ? 'Editar' : 'Crear'}
                </button>
                <button className="btn btn-primary mx-2"
                    type="button"
                    onClick={() => onCerrarFormulario()}>
                    Cerrar
                </button>
            </form>
        </>
    )
}
