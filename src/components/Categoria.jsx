import { Link } from "react-router-dom"
import { NavbarCategoria } from "./NavbarCategoria"

export const Categoria = () => {
    return (
        <>
            <NavbarCategoria />
            <section className="vh-100 d-flex justify-content-center align-items-center" style={{ backgroundColor: '#dfc8a9' }}>
                <div className="card mx-3" style={{ width: '18rem' }}>
                    <img src="./imgs/comidaa.jpg" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Tomar Pedidos</h5>
                        <p className="card-text">Irás al inventario de comida.</p>
                        <Link to="/pedido" className="btn btn-primary">Ir a Tomar Pedidos</Link>
                    </div>
                </div>

                <div className="card mx-3" style={{ width: '18rem' }}>
                    <img src="./imgs/producto.png" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Agregar Productos</h5>
                        <p className="card-text">Agregaras nuevas comidas.</p>
                        <Link to="/inventario" className="btn btn-primary">Ir a Agregar Productos</Link>
                    </div>
                </div>

                <div className="card mx-3" style={{ width: '18rem' }}>
                    <img src="./imgs/plata.png" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Historial de Ventas</h5>
                        <p className="card-text">Irás al historial de ventas.</p>
                        <Link to="/record" className="btn btn-primary">Ir a Historial de Ventas</Link>
                    </div>
                </div>
            </section>
        </>
    )
}