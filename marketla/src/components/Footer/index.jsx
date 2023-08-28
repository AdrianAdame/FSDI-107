import "./footer.css"

import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="py-3">
            <ul className="nav justify-content-center border-bottom pb-3">
                <li className="nav-item">
                    <Link href="#" className="nav-link px-2 text-muted" to="/">
                        Home
                    </Link>
                </li>
                <li className="nav-item">
                    <Link
                        href="#"
                        className="nav-link px-2 text-muted"
                        to="/cart"
                    >
                        Your Cart
                    </Link>
                </li>
                <li className="nav-item">
                    <Link
                        href="#"
                        className="nav-link px-2 text-muted"
                        to="/about"
                    >
                        About
                    </Link>
                </li>
            </ul>
            <p className="text-center text-muted">© 2023 Climbingio, Inc</p>
        </footer>
    );
}

export default Footer;