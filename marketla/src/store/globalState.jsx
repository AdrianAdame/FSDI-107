import { useState } from "react";
import DataContext from "./dataContext";

const GlobalState = (props) => {
    const [user, setUser] = useState({
        name: "Adrian",
        id: 2001,
        email: "adrian.adame@uabc.edu.mx",
    });

    const [cart, setCart] = useState([]);

    const addToCart = (prod) => {
        let same = cart.find((products) => products._id === prod._id);

        if (same) {
            same.quantity += prod.quantity;
            setCart([...cart]);
        } else {
            setCart([...cart, prod]);
        }
    };

    const removeFromCart = (id) => {
        let prods = cart.filter((prod) => prod._id !== id);
        setCart(prods);
    };

    return (
        <DataContext.Provider
            value={{
                cart: cart,
                user: user,
                addToCart: addToCart,
                removeFromCart: removeFromCart,
            }}
        >
            {props.children}
        </DataContext.Provider>
    );
};

export default GlobalState;
