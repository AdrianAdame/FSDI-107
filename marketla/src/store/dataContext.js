import { createContext } from "react";

/**
 * Is a promise, interface, description or blueprint of the data
 * It should not have any implementations
 */
const DataContext = createContext({
    cart: [],
    user: {},
    addToCart: () => {},
    removeFromCart: () => {},
})

export default DataContext;