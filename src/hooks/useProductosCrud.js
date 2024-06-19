import { useReducer, useState } from "react";
import { productosReducer } from "../reducer/productosReducer";
import { ActualizarProducto, CargandoProductos, CrearProducto, EliminarProducto } from "../reducer/carroProductosActions";
import Swal from "sweetalert2";
import { findAll, removeProductId, saveProduct, updateProduct } from "../api/productosInventarioService";

const productoInicial = []

const inicialFormularioProducto = {
    id: 0,
    nombre: '',
    precio: 0
}
export const useProductosCrud = () => {

    const [productos, dispatch] = useReducer(productosReducer, productoInicial);
    const [productoSeleccionado, setProductoSeleccionado] = useState(inicialFormularioProducto);
    const [formularioVisible, setFormularioVisible] = useState(false);


    const obtenerTodosLosProductos = async () => {
        const result = await findAll();
        console.log("Promesa: " + result);
        dispatch({
            type: CargandoProductos,
            payload: result.data,
        })
    }

    const handlerCrearProducto = async (producto) => {
        console.log(producto);

        let response;
        if (producto.id === 0) {
            response = await saveProduct(producto);
        } else {
            response = await updateProduct(producto);
        }

        dispatch({
            type: (producto.id === 0) ? CrearProducto : ActualizarProducto,
            payload: response.data,
        });

        Swal.fire(
            (producto.id === 0) ? "Producto Creado" : "Producto Actualizado",
            (producto.id === 0) ? "El producto ha sido creado con exito!" : "El producto ha sido actualizado con exito!",
            "success"
        );
        handlerCerrarFormulario();
    }

    const handlerEliminarProducto = (id) => {
        console.log(id);
        Swal.fire({
            title: "Estas seguro que deseas eliminar?",
            text: "Cuidado el producto sera eliminado!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Si, eliminar!"
        }).then((result) => {
            if (result.isConfirmed) {
                removeProductId(id);
                dispatch({
                    type: EliminarProducto,
                    payload: id,
                });

                Swal.fire({
                    title: "Producto Eliminado!",
                    text: "El producto ha sido eliminado con exito!",
                    icon: "success"
                });
            }
        });
    }

    const handlerProductoSeleccionadoForm = (producto) => {
        console.log(producto);
        setFormularioVisible(true);
        setProductoSeleccionado({ ...producto });
    }

    const handlerAbrirFormulario = () => {
        setFormularioVisible(true);
    }

    const handlerCerrarFormulario = () => {
        setFormularioVisible(false);
        setProductoSeleccionado(inicialFormularioProducto);
    }

    return {
        productos,
        productoSeleccionado,
        inicialFormularioProducto,
        formularioVisible,

        handlerCrearProducto,
        handlerEliminarProducto,
        handlerProductoSeleccionadoForm,
        handlerAbrirFormulario,
        handlerCerrarFormulario,
        obtenerTodosLosProductos,
    }
}
