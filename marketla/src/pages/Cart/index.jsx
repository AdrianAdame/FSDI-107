import "./cart.css";

import DataContext from "../../store/dataContext"
import { useContext } from "react";

import ProductInCart from "../../components/ProductInCart";
import PaymentInformation from "../../components/PaymentInformation";

const Cart = () => {
    const cart = useContext(DataContext).cart;

    console.log(cart);

    const getProductCount = () => {
        let sum = 0;
        cart.forEach((prod) => (sum += prod.quantity));
        return sum;
    };

    return (
        <div className="cart page">
            {cart.length > 0 ? (
                <>
                    <h1>Are you ready to get your product(s)?</h1>
                    <h5>
                        You have {getProductCount()} product(s) in the bascket
                    </h5>
                    <div className="cart-container row">
                        <div className="list col">
                            {cart.map((prod, index) => (
                                <ProductInCart key={index} product={prod} />
                            ))}
                        </div>
                        <div className="side-menu col">
                            <PaymentInformation cart={cart}/>
                        </div>
                    </div>
                </>
            ) : (
                <div>
                    <h1>No products in cart</h1>
                    <h5>
                        Check our awesome catalog to start adding into the cart!
                    </h5>
                </div>
            )}
        </div>
    );
};

export default Cart;
