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
        setCart(prods => [...prods, prod])

    };

    const removeFromCart = () => {
        console.log("Global remove");
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
