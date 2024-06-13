import { useCarroProductos } from "../hooks/useCarroProductos"
import { CarroDeCompras } from "./CarroDeCompras"
import { Menu } from "./Menu"
import { NavbarPedido } from "./NavbarPedido";

//Pagina para tomar pedidos
export const Pedido = () => {

    //carroProductos, handlerAgregarProductoAlCarro, handlerEliminarProductoDelCarro viene de el Hooks useCarroProductos
    const { carroProductos, handlerAgregarProductoAlCarro, handlerEliminarProductoDelCarro } = useCarroProductos();

    return (
        <>
            <NavbarPedido />
            <div className="container my-4">
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    {/* Menu de comidas */}
                    <div style={{ flex: 1, marginRight: '20px', minWidth: '500px' }}>
                        <Menu handler={handlerAgregarProductoAlCarro} />
                    </div>
                    {/* Carro de Compras */}
                    <div style={{ flex: 1 }}>
                        {carroProductos?.length <= 0 ? (
                            <div className="alert alert-warning alert-dismissible fade show">No hay productos en el carrito de compras!</div>
                        ) : (
                            <CarroDeCompras productosCarro={carroProductos} handlerEliminar={handlerEliminarProductoDelCarro} />
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}