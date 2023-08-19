import "./cart.css";

import DataContext from "../../store/dataContext"
import { useContext } from "react";


const Cart = () => {
    const cart = useContext(DataContext).cart

    return (
    <div className="cart page">
        <h1>Are you ready to get your product(s)?</h1>
        <h5>You have {cart.length} product(s) in the bascket</h5>
    </div>);
};

export default Cart;
