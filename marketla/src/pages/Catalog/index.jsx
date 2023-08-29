import { useEffect, useState } from "react";

import Product from "../../components/Product";
import DataService from "../../services/dataService";

const Catalog = () => {
    const [products, setProducts] = useState([])
    const [categories, setCategories] = useState([])
    const [productsToDisplay, setProductsToDisplay] = useState([])

    const loadCatalog = async () => {
        let service = new DataService()
        
        let products = await service.getProducts()
        setProducts(products)
        setProductsToDisplay(products)
        
        let cat = await service.getCategories()

        setCategories(cat)
    }

    const filter = (category) => {
        let allProducts = products
        let matchedProducts = allProducts.filter(p => p.category === category)
        setProductsToDisplay(matchedProducts)
    }

    const clearFilter = () => {
        setProductsToDisplay(products)
    }

    useEffect(() => {
        loadCatalog()
    }, [])
    
    return (
        <div className="catalog page">
            <h1>
                Check out our {products.length} amazing products in our catalog
            </h1>
            <button
                onClick={clearFilter}
                className="btn btn-sm btn-warning m-2"
            >
                Clear Filters
            </button>
            {categories.length > 0
                ? categories.map((cat, index) => (
                        <button
                            key={index}
                            onClick={() => filter(cat)}
                            className="btn btn-sm btn-info m-2"
                        >
                            {cat}
                        </button>
                    ))
                : ""}
            <br />
            <br />
            <div className="row row-cols-1 row-cols-md-3 g-4 m-5">
                {productsToDisplay.length > 0 ? (
                    productsToDisplay.map((p) => (
                        <Product key={p._id} product={p} />
                    ))
                ) : (
                    <div className="m-3 p-5">No products in DB!</div>
                )}
            </div>
        </div>
    );
}

export default Catalog;