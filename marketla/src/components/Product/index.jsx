import "./product.css"
import QuantityPicker from "../QuantityPicker";

const Product = ({ name, price, image }) => {

    console.log(image)
    return (
        <div className="product">
            <img src={image} alt={`miss-${name}`}></img>
            <h5>{name}</h5>
            <div className="prices">
                <label>{`Price: $ ${price}`}</label>
                <label>{`Total: $ ${price}`}</label>
            </div>
            <QuantityPicker />
        </div>
    );
};

export default Product;
