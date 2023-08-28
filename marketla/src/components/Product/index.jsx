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
        setQuantity(1)

    }

    const getPrice = () => {
        return product.price.toFixed(2)
    }

    const getTotal = () => {
        const total = quantity * product.price

        return total.toFixed(2)
    }

    return (
        <div class="col">
            <div class="card h-100">
                <img
                    src={"/assets/images/" + product.image}
                    alt={`missing-${product.title}`}
                    className="card-img-top h-100"
                ></img>
                <div className="card-body">
                    <h5 class="card-title">{product.title}</h5>
                    <div className="prices">
                        <label>{`Price: $ ${getPrice()}`}</label>
                    </div>
                    <QuantityPicker onChange={handleQuantityChange} />
                    <button
                        className="add btn btn-success mt-3"
                        onClick={handleAddToCart}
                    >
                        Add to Cart
                    </button>
                </div>
                <div className="card-footer">
                    <label>{`Total: $ ${getTotal()}`}</label>
                </div>
            </div>
        </div>
    );
};

export default Product;
