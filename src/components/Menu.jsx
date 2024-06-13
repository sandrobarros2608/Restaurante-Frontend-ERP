import { useEffect, useState } from "react";
import { getAll } from "../api/productoService";

//handler viene de Pedido
export const Menu = ({ handler }) => {

    const [productos, setProductos] = useState([]);
    const [estaCargando,setEstaCargando] = useState(true);

    const findAll = async () => {
        const prods = await getAll();
        setProductos(prods);
        setEstaCargando(false);
    }

    //Cada vez que la pagina se cargue por primera vez
    //Se renderiza el useEffect
    useEffect(() => {
        findAll();
    }, []);

    //Agrega el producto al carrito
    const onAgregarProductoAlCarro = (producto) => {
        console.log(producto);
        handler(producto);
    }

    return (
        <>
            {estaCargando && <div className="alert alert-info">Cargando...</div>}
            <h3>Menu</h3>
            <div className="my-4 w-50">
                <table className="table tabe-hover table-striped">
                    <thead>
                        <tr>
                            <th>Comida</th>
                            <th>Precio</th>
                            <th>Acción</th>
                        </tr>
                    </thead>
                    <tbody>
                        {productos.map(producto => (
                            <tr key={producto.id}>
                                <td>{producto.nombre}</td>
                                <td>$ {producto.precio}</td>
                                <td>
                                    <button className="btn btn-success"
                                        onClick={() => onAgregarProductoAlCarro(producto)}>Agregar</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}