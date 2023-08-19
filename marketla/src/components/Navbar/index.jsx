import "./navbar.css"

import { Link } from "react-router-dom"
import DataContext from "../../store/dataContext";
import { useContext } from "react";

const Navbar = () => {
    const user = useContext(DataContext).user;
    const cart = useContext(DataContext).cart;

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
                <div
                    className="collapse navbar-collapse"
                    id="navbarTogglerDemo02"
                >
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link
                                className="nav-link active"
                                aria-current="page"
                                to="/"
                            >
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/catalog">
                                All Catalog
                            </Link>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <Link type="button" className="btn btn-primary" to="/cart" style={{marginRight : '6px'}}>
                            <span className="badge bg-danger"><i className="fa-solid fa-cart-shopping"></i> {cart.length}</span>
                            {" Cart"}
                        </Link>
                        <Link
                            className="btn btn-outline-dark ml-2"
                            to="/my-profile"
                        >
                            <i className="fa-solid fa-user"></i> {` ${user.name}`}
                        </Link>
                    </form>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;