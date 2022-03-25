import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <header id="header">
            <div className="intro">
                <div className="overlay">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 col-md-offset-2 intro-text">
                                <h1>
                                    Pagina prueba de deportes de Hector
                                    <span></span>
                                </h1>
                                <p>
                                    Porque soy un deportista
                                </p>
                                <Link
                                    to="/blog"
                                    className="btn btn-custom btn-lg page-scroll"
                                >
                                    Learn More
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header