import { Link } from "react-router-dom"
import "./home.css"

const Home = () => {
    return (
        <div
            className="d-flex text-center text-white img-background"
            style={{ height: "100vh" }}
        >
            <div className="cover-container d-flex w-100 p-3 mx-auto flex-column">
                <header className="mb-auto">
                    <div>
                        <h3 className="float-md-start mb-0">Climbingio</h3>
                        <nav className="nav nav-masthead justify-content-center float-md-end">
                            <Link
                                className="nav-link active"
                                aria-current="page"
                                to="#"
                            >
                                Home
                            </Link>
                            <Link className="nav-link" to="catalog">
                                Catalog
                            </Link>
                            <Link className="nav-link" to="about">
                                About
                            </Link>
                        </nav>
                    </div>
                </header>
                <main className="px-3">
                    <h1>The best hiking equipment in one place</h1>
                    <p className="lead">
                        Equipping Your Adventure, Step by Step!
                    </p>
                    <p className="lead">
                        <Link
                            to="catalog"
                            className="btn btn-lg btn-secondary fw-bold border-white bg-white"
                        >
                            Go to catalog
                        </Link>
                    </p>
                </main>
                <footer className="mt-auto text-white-50">
                    <p>Climbingio</p>
                </footer>
            </div>
        </div>
    );
}

export default Home