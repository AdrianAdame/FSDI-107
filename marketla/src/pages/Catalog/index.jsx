import Product from "../../components/Product";
import {catalog } from "../../services/dataService"

const Catalog = () => {
    return(
        <div className="catalog">
            <h1>Check out our amazing catalog</h1>
            {catalog.map((p, index) => (
                <Product key={index} name={p.title} price={p.price} image={p.image} />
            ))}
        </div>
    )
}

export default Catalog;