import { ListaPedidosNoPagados } from "./ListaPedidosNoPagados";
import { NavbarPedidoNoPagado } from "./NavbarPedidoNoPagado"
import { usePedidos } from "../hooks/usePedidos";
import { useEffect } from "react";

export const PedidosNoPagados = () => {

    const {pedidos, handlerPagarPedido, obtenerTodosLosPedidosNoPagados} = usePedidos();

    useEffect(() => {
        obtenerTodosLosPedidosNoPagados();
    }, [])

    return (
        <>
            <NavbarPedidoNoPagado />

            <div className="container my-4">
                <h2>Pedidos Por Confirmar Pagos</h2>
                <div className="row">
                    <div className="col">
                        {pedidos.length === 0
                            ? <div className="alert alert-warning">No hay pedidos sin pagar en el sistema!</div>
                            : <ListaPedidosNoPagados pedidos={pedidos} handlerPagarPedido={handlerPagarPedido} />}
                    </div>
                </div>
            </div>
        </>
    )
}
