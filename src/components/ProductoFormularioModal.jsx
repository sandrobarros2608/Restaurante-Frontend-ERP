import { FormularioProducto } from "./FormularioProducto"

export const ProductoFormularioModal = ({ productoSeleccionado, inicialFormularioProducto, handlerCrearProducto, handlerCerrarFormulario }) => {
    return (
        <>
            <div className="abrir-modal animacion fadeIn">
                <div className="modal" style={{ display: "block" }} tabIndex="-1">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">
                                    {productoSeleccionado.id > 0 ? 'Editar' : 'Crear'} Modal Productos
                                </h5>
                            </div>
                            <div className="modal-body">
                                <FormularioProducto
                                    productoSeleccionado={productoSeleccionado}
                                    inicialFormularioProducto={inicialFormularioProducto}
                                    handlerCrearProducto={handlerCrearProducto}
                                    handlerCerrarFormulario={handlerCerrarFormulario}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
