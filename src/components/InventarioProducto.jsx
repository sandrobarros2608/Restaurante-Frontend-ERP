import { ListaProductos } from "./ListaProductos"
import { useProductosCrud } from "../hooks/useProductosCrud"
import '../styles.css'
import { ProductoFormularioModal } from "./ProductoFormularioModal"
import { useEffect } from "react"
import { NavbarInventarioProducto } from "./NavbarInventarioProducto"


export const InventarioProducto = () => {

    //Viene de useProductosCrud
    const {
        productos,
        productoSeleccionado,
        inicialFormularioProducto,
        formularioVisible,

        handlerCrearProducto,
        handlerEliminarProducto,
        handlerProductoSeleccionadoForm,
        handlerAbrirFormulario,
        handlerCerrarFormulario,
        obtenerTodosLosProductos, } = useProductosCrud();

    useEffect(() => {
        obtenerTodosLosProductos();
    }, [])

    return (
        <>
            <NavbarInventarioProducto />

            {!formularioVisible ||
                <ProductoFormularioModal
                    productoSeleccionado={productoSeleccionado}
                    inicialFormularioProducto={inicialFormularioProducto}
                    handlerCrearProducto={handlerCrearProducto}
                    handlerCerrarFormulario={handlerCerrarFormulario}
                />
            }

            <div className="container my-4">
                <h2>Inventario</h2>
                <div className="row">
                    <div className="col">
                        {formularioVisible || <button
                            className="btn btn-primary my-2"
                            onClick={handlerAbrirFormulario}>
                            Nuevo Producto
                        </button>}

                        {productos.length === 0
                            ? <div className="alert alert-warning">No hay productos registrados en el sistema!</div>
                            :
                            <ListaProductos
                                handlerProductoSeleccionadoForm={handlerProductoSeleccionadoForm}
                                handlerEliminarProducto={handlerEliminarProducto}
                                productosInventario={productos}
                            />}
                    </div>
                </div>
            </div>
        </>
    )
}
