//inicialPedidos viene de PedidosNoPagados
//handlerPagarPedido viene de PedidosNoPagados
export const ListaPedidosNoPagados = ({ pedidos, handlerPagarPedido }) => {

    const onPagarPedido = (pedidoNoPagado) => {
        handlerPagarPedido(pedidoNoPagado);
    }

    return (
        <>
            <table className="table table-hover table-striped">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Total</th>
                        <th>Pagado</th>
                        <th>Fecha</th>
                        <th>Pagar</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        pedidos.map((pedidosNoPagados) => (
                            <tr key={pedidosNoPagados.id}>
                                <td>{pedidosNoPagados.id}</td>
                                <td>{pedidosNoPagados.total}</td>
                                <td>{!pedidosNoPagados.pagado ? 'No Pagado' : 'Pagado'}</td>
                                <td>{pedidosNoPagados.fecha}</td>
                                <td><button onClick={() => onPagarPedido(pedidosNoPagados)} className="btn btn-primary btn-sm">Pagar</button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}
