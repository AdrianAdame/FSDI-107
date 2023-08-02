import "./product.css"
import QuantityPicker from "../QuantityPicker";

const Product = ({ product }) => {
    return (
        <div className="product">
            <img src={"/assets/images/" + product.image} alt={`missing-${product.title}`}></img>
            <h5>{product.title}</h5>
            <div className="prices">
                <label>{`Price: $ ${product.price}`}</label>
                <label>{`Total: $ ${product.price}`}</label>
            </div>
            <QuantityPicker />
        </div>
    );
};

export default Product;
