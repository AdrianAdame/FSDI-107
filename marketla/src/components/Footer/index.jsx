import "./footer.css"

const Footer = () => {
    return(
        <footer class="py-3 my-4">
            <ul class="nav justify-content-center border-bottom pb-3 mb-3">
            <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Home</a></li>
            <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">All Categories</a></li>
            <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Your Cart</a></li>
            <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">FAQs</a></li>
            <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">About</a></li>
            </ul>
            <p class="text-center text-muted">© 2023 Marketla, Inc</p>
        </footer>
    )
}

export default Footer;