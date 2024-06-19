import React from 'react'
import ReactDOM from 'react-dom/client'
import { PaginaPrincipal } from './components/PaginaPrincipal.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Categoria } from './components/Categoria.jsx'
import { Pedido } from './components/Pedido.jsx'
import { InventarioProducto } from './components/InventarioProducto.jsx'
import { PaginaLogin } from './auth/pages/PaginaLogin.jsx'
import { PedidosNoPagados } from './components/PedidosNoPagados.jsx'
import { PedidosPagados } from './components/PedidosPagados.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PaginaPrincipal />} />
        <Route path="/login" element={<PaginaLogin />}/>
        <Route path="/categoria" element={<Categoria/>} />
        <Route path="/pedido" element={<Pedido/>} />
        <Route path="/inventario" element={<InventarioProducto />}/>
        <Route path="/pedidosnopagados" element={<PedidosNoPagados />}/>
        <Route path="/pedidospagados" element={<PedidosPagados />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
