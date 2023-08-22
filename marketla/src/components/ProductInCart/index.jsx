import "./productInCart.css";

import { useContext } from "react";
import DataContext from "../../store/dataContext";

const ProductInCart = ({ product }) => {
    const removeFromCart = useContext(DataContext).removeFromCart;

    const fixFloatPrice = (price) => {
        return price.toFixed(2)
    }

    return (
        <div className="card mb-3">
            <div className="row g-0">
                <div className="col-md-4">
                    <img
                        src={"/assets/images/" + product.image}
                        alt={`missing-${product.title}`}
                        className="img-fluid rounded-start"
                    ></img>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{product.title}</h5>
                        <p className="card-text">
                            Quantity: {product.quantity}
                        </p>
                        <p className="card-text">
                            <small className="text-muted">
                                Total price: {fixFloatPrice(product.price * product.quantity)}
                            </small>
                        </p>
                        <div>
                        <button className="btn btn-danger" onClick={() => removeFromCart(product._id)}><i class="fa-solid fa-trash"></i> Remove</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductInCart;
