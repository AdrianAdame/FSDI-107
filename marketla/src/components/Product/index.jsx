import QuantityPicker from "../QuantityPicker";

const Product = ({ name, price }) => {
    return (
        <div className="product">
            <h5>{name}</h5>
            <p>{`$ ${price}.00`}</p>
            <QuantityPicker />
        </div>
    );
};

export default Product;
