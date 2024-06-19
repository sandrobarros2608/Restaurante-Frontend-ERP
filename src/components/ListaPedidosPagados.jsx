//pedidos viene PedidosPagados
export const ListaPedidosPagados = ({ pedidos }) => {
    return (
        <>
            <table className="table table-hover table-striped">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Total</th>
                        <th>Pagado</th>
                        <th>Fecha</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        pedidos.map((pedidosPagados) => (
                            <tr key={pedidosPagados.id}>
                                <td>{pedidosPagados.id}</td>
                                <td>{pedidosPagados.total}</td>
                                <td>{pedidosPagados.pagado ? "Pagado" : "No Pagado"}</td>
                                <td>{pedidosPagados.fecha}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}
