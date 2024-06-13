//productosInventario viene de InventarioProducto
//handlerEliminarProducto viene de InventarioProducto
//handlerProductoSeleccionadoForm viene de InventarioProducto
//obtenerTodosLosProductos viene de InventarioProducto
export const ListaProductos = ({ productosInventario = [], handlerEliminarProducto, handlerProductoSeleccionadoForm }) => {

    const onEliminarProducto = (id) => {
        handlerEliminarProducto(id);
    }

    const onProductoSeleccionadoForm = (productoIn) => {
        handlerProductoSeleccionadoForm(productoIn);
    }

    return (
        <>
            <table className="table table-hover table-striped">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>Actualizar</th>
                        <th>Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        productosInventario.map((productoIn) => (
                            <tr key={productoIn.id}>
                                <td>{productoIn.id}</td>
                                <td>{productoIn.nombre}</td>
                                <td>{productoIn.precio}</td>
                                <td>
                                    <button
                                    onClick={() => onProductoSeleccionadoForm(productoIn)}
                                        type="button"
                                        className="btn btn-secondary btn-sm">
                                        Actualizar</button>
                                </td>
                                <td>
                                    <button
                                        onClick={() => onEliminarProducto(productoIn.id)}
                                        type="button"
                                        className="btn btn-danger btn-sm">
                                        Eliminar</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}
