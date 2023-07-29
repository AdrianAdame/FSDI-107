import Product from "../../components/Product";

const products = [
    {name: "Carrot", price:20},
    {name: "Apple", price:20},
    {name: "Lettuce", price:20},
    {name: "Veggies", price:20},
    {name: "Potato", price:20},
]

const Catalog = () => {
    return(
        <div className="catalog">
            <h1>Check out our amazing catalog</h1>
            {products.map((p, index) => (
                <Product key={index} name={p.name} price={p.price} />
            ))}
        </div>
    )
}

export default Catalog;