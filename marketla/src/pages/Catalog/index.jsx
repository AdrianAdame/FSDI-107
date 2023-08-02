import { useEffect, useState } from "react";

import Product from "../../components/Product";
import DataService from "../../services/dataService";

const Catalog = () => {
    const [products, setProducts] = useState([])

    const loadCatalog = () => {
        let service = new DataService()
        return service.getProducts() || []
    }

    useEffect(() => {
        setProducts(loadCatalog())
    }, [])

    return(
        <div className="catalog">
            <h1>Check out our {products.length} amazing products in our catalog</h1>
            {products.length > 0 ? (
                products.map(p => (
                    <Product key={p._id} product={p} />
                ))
            ) : (<div className="m-3 p-5">No products in DB!</div>)}
        </div>
    )
}

export default Catalog;