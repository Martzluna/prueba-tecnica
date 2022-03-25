import React from 'react'
import { Link } from 'react-router-dom'

function Navigation() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light mb-3">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li>
                            <Link className="nav-link" to="/">
                                Inicio
                            </Link>
                        </li>
                        <li>
                            <Link className="nav-link" to="/create">
                                Crear Producto
                            </Link>
                        </li>
                        <li>
                            <Link className="nav-link" to="/list">
                                Lista de productos
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navigation