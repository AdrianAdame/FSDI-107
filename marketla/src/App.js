
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import "@fortawesome/fontawesome-free/css/all.min.css"

import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Catalog from "./pages/Catalog";
import Home from "./pages/Home";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Admin from "./pages/Admin";
import GlobalState from "./store/globalState";
import Layout from "./components/Layout";

const App = () => {
    return (
        <div className="App">
            <GlobalState>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path = "/" element={<Layout />}>
                            <Route path="/about" element={<About />} />
                            <Route path="/catalog" element={<Catalog />} />
                            <Route path="/admin" element={<Admin />} />
                            <Route path="/cart" element={<Cart />} />
                        </Route>
                    </Routes>
                </BrowserRouter>
            </GlobalState>
        </div>
    );
};

export default App;