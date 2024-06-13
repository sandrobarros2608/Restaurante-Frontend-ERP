import { Link } from "react-router-dom"

export const PaginaPrincipal = () => {
    return (
        <>
            {/* First Navigation */}
            <nav className="navbar nav-first navbar-dark bg-dark">
                <div className="container">
                    <a className="navbar-brand" href="#">
                        <img src="./imgs/mackslogo.png" alt="" />
                    </a>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link text-primary" href="#home">LLAMANOS : <span className="pl-2 text-muted">304 485 1358</span></a>
                        </li>
                    </ul>
                </div>
            </nav>
            {/* End of First Navigation */}

            {/* Second Navigation */}
            <nav className="nav-second navbar custom-navbar navbar-expand-sm navbar-dark bg-dark sticky-top">
                <div className="container">
                    <button className="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="#about">Acerca de Nosotros</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#service">Nuestro Servicio</a>
                            </li>
                        </ul>
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link to="/login" className="btn btn-primary btn-sm">Iniciar Sesión</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            {/* End Of Second Navigation */}

            {/* Page Header */}
            <header className="header">
                <div className="overlay">
                    <img src="./imgs/mackslogo.png" alt="" className="logo" />
                    <h1 className="subtitle">Bienvenidos a Mack's Big</h1>
                    <h1 className="title">Tan Rico Como En Casa</h1>
                </div>
            </header>
            {/* End Of Page Header */}

            {/* About Section */}
            <section id="about">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <h6 className="section-subtitle">Apertura</h6>
                            <h3 className="section-title">Horario</h3>
                            <p className="mb-1 font-weight-bold">Lunes - Viernes : <span className="font-weight-normal pl-2 text-muted">5:00 pm - 12:30 am</span></p>
                            <p className="mb-1 font-weight-bold">Sabado - Domingo : <span className="font-weight-normal pl-2 text-muted">5:00 pm - 1:30 pm</span></p>
                        </div>
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col">
                                    <img src="./imgs/about-1.jpg" className="w-100 rounded shadow" />
                                </div>
                                <div className="col">
                                    <img src="./imgs/about-2.jpg" className="w-100 rounded shadow" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="section-devider my-6 transparent"></div>
                </div>
            </section>
            {/* End OF About Section */}

            {/* Service Section */}
            <section id="service" className="pattern-style-4 has-overlay">
                <div className="container raise-2">
                    <h6 className="section-subtitle text-center">Comida Destacada</h6>
                    <h3 className="section-title mb-6 pb-3 text-center">Platos Especiales</h3>
                    <div className="row">
                        <div className="col-md-6 mb-4">
                            <a href="javascrip:void(0)" className="custom-list">
                                <div className="img-holder">
                                    <img src="./imgs/dish-1.jpg" />
                                </div>
                                <div className="info">
                                    <div className="head clearfix">
                                        <h5 className="title float-left">Hamburguesa Doble Carne</h5>
                                        <p className="float-right text-primary">$23.000</p>
                                    </div>
                                    <div className="body">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing Eos, earum dicta est veniam beatae libero!</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col-md-6 mb-4">
                            <a href="javascrip:void(0)" className="custom-list">
                                <div className="img-holder">
                                    <img src="./imgs/dish-2.jpg" />
                                </div>
                                <div className="info">
                                    <div className="head clearfix">
                                        <h5 className="title float-left">Burrito Mixto</h5>
                                        <p className="float-right text-primary">$35</p>
                                    </div>
                                    <div className="body">
                                        <p>Voluptatem voluptate ad fugit aliquam, laboriosam neque vero incidunt itaque.</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col-md-6 mb-4">
                            <a href="javascrip:void(0)" className="custom-list">
                                <div className="img-holder">
                                    <img src="./imgs/dish-3.jpg" />
                                </div>
                                <div className="info">
                                    <div className="head clearfix">
                                        <h5 className="title float-left">Salchipapa Mixta</h5>
                                        <p className="float-right text-primary">$18</p>
                                    </div>
                                    <div className="body">
                                        <p>Accusamus libero quo tempore suscipit molestias qui quam illo facere aspernatur esse! Doloribus?</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col-md-6 mb-4">
                            <a href="javascrip:void(0)" className="custom-list">
                                <div className="img-holder">
                                    <img src="./imgs/dish-4.jpg" />
                                </div>
                                <div className="info">
                                    <div className="head clearfix">
                                        <h5 className="title float-left">Picada (4P)</h5>
                                        <p className="float-right text-primary">$30</p>
                                    </div>
                                    <div className="body">
                                        <p>Doloremque maiores tempore, nostrum rerum nihil distinctio expedita voluptates eos deserunt.</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col-md-6 mb-4">
                            <a href="javascrip:void(0)" className="custom-list">
                                <div className="img-holder">
                                    <img src="./imgs/dish-5.jpg" />
                                </div>
                                <div className="info">
                                    <div className="head clearfix">
                                        <h5 className="title float-left">Perro Suizo</h5>
                                        <p className="float-right text-primary">$24</p>
                                    </div>
                                    <div className="body">
                                        <p>Doloremque maiores tempore, nostrum rerum expedita incidunt eius voluptates eos deserunt.</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col-md-6 mb-4">
                            <a href="javascrip:void(0)" className="custom-list">
                                <div className="img-holder">
                                    <img src="./imgs/dish-6.jpg" />
                                </div>
                                <div className="info">
                                    <div className="head clearfix">
                                        <h5 className="title float-left">Mazorca Desgranada Mixta</h5>
                                        <p className="float-right text-primary">$44</p>
                                    </div>
                                    <div className="body">
                                        <p>Doloremque maiores tempore, nostrum rerum nihil distinctio expedita voluptates eos deserunt.</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            {/* End of Featured Food Section */}

            {/* Menu Section */}
            <section className="has-img-bg">
                <div className="container">
                    <h6 className="section-subtitle text-center">Asados</h6>
                    <h3 className="section-title mb-6 text-center">Menu de Asados</h3>
                    <div className="card bg-light">
                        <div className="card-body px-4 pb-4 text-center">
                            <div className="row text-left">
                                <div className="col-md-6 my-4">
                                    <a href="#" className="pb-3 mx-3 d-block text-dark text-decoration-none border border-left-0 border-top-0 border-right-0">
                                        <div className="d-flex">
                                            <div className="flex-grow-1">
                                                Pechuga asada
                                                <p className="mt-1 mb-0">Numquam dolor dolores molestiae maiores quidem.</p>
                                            </div>
                                            <h6 className="float-right text-primary">$12</h6>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-md-6 my-4">
                                    <a href="#" className="pb-3 mx-3 d-block text-dark text-decoration-none border border-left-0 border-top-0 border-right-0">
                                        <div className="d-flex">
                                            <div className="flex-grow-1">
                                                Carne asada
                                                <p className="mt-1 mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                            </div>
                                            <h6 className="float-right text-primary">$23</h6>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-md-6 my-4">
                                    <a href="#" className="pb-3 mx-3 d-block text-dark text-decoration-none border border-left-0 border-top-0 border-right-0">
                                        <div className="d-flex">
                                            <div className="flex-grow-1">
                                                Costilla BBQ
                                                <p className="mt-1 mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                            </div>
                                            <h6 className="float-right text-primary">$32</h6>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-md-6 my-4">
                                    <a href="#" className="pb-3 mx-3 d-block text-dark text-decoration-none border border-left-0 border-top-0 border-right-0">
                                        <div className="d-flex">
                                            <div className="flex-grow-1">
                                                Lomo de Cerdo
                                                <p className="mt-2 mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                            </div>
                                            <h6 className="float-right text-primary">$17</h6>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-md-6 my-4">
                                    <a href="#" className="pb-3 mx-3 d-block text-dark text-decoration-none border border-left-0 border-top-0 border-right-0">
                                        <div className="d-flex">
                                            <div className="flex-grow-1">
                                                Asado Mixto
                                                <p className="mt-2 mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                            </div>
                                            <h6 className="float-right text-primary">$21</h6>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-md-6 my-4">
                                    <a href="#" className="pb-3 mx-3 d-block text-dark text-decoration-none border border-left-0 border-top-0 border-right-0">
                                        <div className="d-flex">
                                            <div className="flex-grow-1">
                                                Bandeja
                                                <p className="mt-2 mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                            </div>
                                            <h6 className="float-right text-primary">$10</h6>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* End of Menu Section */}

            {/* Prefooter Section */}
            <div className="py-4 border border-lighter border-bottom-0 border-left-0 border-right-0 bg-dark">
                <div className="container">
                    <div className="row justify-content-between align-items-center text-center">
                        <div className="col-md-3 text-md-left mb-3 mb-md-0">
                            <img src="./imgs/mackslogo.png" width="100" className="mb-0" />
                        </div>
                    </div>
                </div>
            </div>
            {/* End of PreFooter Section */}

            {/* Page Footer */}
            <footer className="border border-dark border-left-0 border-right-0 border-bottom-0 p-4 bg-dark">
                <div className="container">
                    <div className="row align-items-center text-center text-md-left">
                        <div className="col">
                            <p className="mb-0 small">&copy; <script>document.write(new Date().getFullYear())</script>, <a href="https://www.devcrud.com" target="_blank">DevCrud</a>  All rights reserved </p>
                        </div>
                        <div className="d-none d-md-block">
                            <h6 className="small mb-0">
                                <a href="javascript:void(0)" className="px-2"><i className="ti-facebook"></i></a>
                                <a href="javascript:void(0)" className="px-2"><i className="ti-twitter"></i></a>
                                <a href="javascript:void(0)" className="px-2"><i className="ti-instagram"></i></a>
                                <a href="javascript:void(0)" className="px-2"><i className="ti-google"></i></a>
                            </h6>
                        </div>
                    </div>
                </div>
            </footer>
            {/*End of Page Footer */}

            {/* Core */}
            <script src="assets/vendors/jquery/jquery-3.4.1.js"></script>
            <script src="assets/vendors/bootstrap/bootstrap.bundle.js"></script>

            {/* Bootstrap Affix */}
            <script src="assets/vendors/bootstrap/bootstrap.affix.js"></script>

            {/* Pigga js */}
            <script src="assets/js/pigga.js"></script>
        </>
    )
}