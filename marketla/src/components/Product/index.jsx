import "./product.css"
import QuantityPicker from "../QuantityPicker";
import { useContext, useState } from "react";
import DataContext from "../../store/dataContext";

const Product = ({ product }) => {
    const addToCart = useContext(DataContext).addToCart

    const [quantity, setQuantity] = useState(1)

    const handleQuantityChange = (value) => {
        setQuantity(value)
    };

    const handleAddToCart = () => {
        const prodWithQty = {
            ...product,
            quantity: quantity
        }

        addToCart(prodWithQty)
    }

    const getPrice = () => {
        return product.price.toFixed(2)
    }

    const getTotal = () => {
        const total = quantity * product.price

        return total.toFixed(2)
    }

    return (
        <div className="product">
            <img
                src={"/assets/images/" + product.image}
                alt={`missing-${product.title}`}
            ></img>
            <h5>{product.title}</h5>
            <div className="prices">
                <label>{`Price: $ ${getPrice()}`}</label>
                <label>{`Total: $ ${getTotal()}`}</label>
            </div>
            <QuantityPicker onChange={handleQuantityChange} />
            <button className="add btn btn-success mt-3" onClick={handleAddToCart}>Add to Cart</button>
        </div>
    );
};

export default Product;
