import { Link } from "react-router-dom"

export const NavbarPedidoPagado = () => {
    return (
        <>
            <nav className="navbar nav-first navbar-dark bg-dark navbar-expand-sm navbar-dark bg-primary shadow p-3">
                <div className="container">
                    <a className="navbar-brand">Pedidos Pagados</a>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link to="/pedido" className="btn btn-primary">Tomar Pedidos</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/inventario" className="btn btn-primary" style={{ marginLeft: '10px' }}>Agregar Productos</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/pedidosnopagados" className="btn btn-primary" style={{ marginLeft: '10px' }}>Pedidos No Pagados</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/categoria" className="btn btn-primary" style={{ marginLeft: '10px' }}>Volver a Categorias</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
