import "./navbar.css"

import { Link } from "react-router-dom"

const Navbar = () => {

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    Marketla
                </Link>
                <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarTogglerDemo02"
                aria-controls="navbarTogglerDemo02"
                aria-expanded="false"
                aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page"to="/">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/catalog">
                                All Catalog
                            </Link>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <Link className="btn btn-outline-success" to="/cart">
                            Go to Cart
                        </Link>
                    </form>
                </div>
            </div>
        </nav>

    )
}

export default Navbar;