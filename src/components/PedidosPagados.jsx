import { useEffect } from "react";
import { usePedidos } from "../hooks/usePedidos";
import { NavbarPedidoPagado } from "./NavbarPedidoPagado"
import { ListaPedidosPagados } from "./ListaPedidosPagados";

export const PedidosPagados = () => {

    const { pedidos, obtenerTodosLosPedidosPagados } = usePedidos();

    useEffect(() => {
        obtenerTodosLosPedidosPagados();
    }, [])

    return (
        <>
            <NavbarPedidoPagado />

            <div className="container my-4">
                <h2>Pedidos Pagados</h2>
                <button className="btn btn-primary">Generar Cierre Diario</button>
                <div className="row">
                    <div className="col">
                        {pedidos.length === 0
                            ? <div className="alert alert-warning">No hay pedidos pagados en el sistema!</div>
                            : <ListaPedidosPagados pedidos={pedidos} />}
                    </div>
                </div>
            </div>
        </>
    )
}
