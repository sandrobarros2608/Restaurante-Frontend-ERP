import { useEffect, useState } from "react";
import { calcularTotal } from "../services/productosService";

//productosCarro viene de Pedido
//handlerEliminar viene de Pedido
export const CarroDeCompras = ({handlerEliminar, productosCarro, handlerCrearPedido}) => {

    const [total, setTotal] = useState(0);

    //Se renderiza cuando haya cambio en el carrito
    useEffect(() => {
        setTotal(calcularTotal(productosCarro));
    }, [productosCarro])

    const onEnviarPedido = (total) => {
        console.log(total);
        handlerCrearPedido(total);
    }

    //Eliminar producto en el carro
    const onEliminar = (id) => {
        console.log(id);
        handlerEliminar(id);
    } 

    return (
        <>
            <h3>Carro de compras</h3>
            <table className="table tabe-hover table-striped">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                        <th>Total</th>
                        <th>Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {productosCarro.map(productoCarro => (
                    <tr key={productoCarro.producto.id}>
                        <td>{productoCarro.producto.nombre}</td>
                        <td>{productoCarro.producto.precio}</td>
                        <td>{productoCarro.cantidad}</td>
                        <td>{productoCarro.cantidad * productoCarro.producto.precio}</td>
                        <td><button className="btn btn-danger" onClick={() => onEliminar(productoCarro.producto.id)}>Eliminar</button></td>
                    </tr>
                    ))}
                </tbody>
                <tbody>
                    <tr>
                        <td colSpan="3" className="text-end fw-bold">Total</td>
                        <td colSpan="1" className="text-start fw-bold">{total}</td>
                        <td colSpan="1" className="text-start fw-bold"><button className="btn btn-success" onClick={() => onEnviarPedido({total})}>Enviar</button></td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}