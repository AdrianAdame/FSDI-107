import "./footer.css"

import { Link } from "react-router-dom";

const Footer = () => {
    return(
        <footer class="py-3">
            <ul class="nav justify-content-center border-bottom pb-3">
            <li class="nav-item"><Link href="#" class="nav-link px-2 text-muted" to="/">Home</Link></li>
            <li class="nav-item"><Link href="#" class="nav-link px-2 text-muted" to="/cart">Your Cart</Link></li>
            <li class="nav-item"><Link href="#" class="nav-link px-2 text-muted" to="/about">About</Link></li>
            </ul>
            <p class="text-center text-muted">© 2023 Marketla, Inc</p>
        </footer>
    )
}

export default Footer;