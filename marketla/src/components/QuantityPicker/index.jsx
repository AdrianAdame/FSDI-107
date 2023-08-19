import { useState } from "react"
import "./quantityPicker.css"

const QuantityPicker = ({onChange}) => {
    const [quantity, setQuantity] = useState(1)

    const increase = () => {
        let qty = quantity + 1
        setQuantity(qty)
        onChange(qty)
    }

    const decrease = () => {
        let qty = quantity <= 1 ? 1 : quantity - 1
        setQuantity(qty)
        onChange(qty)
    }

    return (
        <div className="qt-picker">
            <button className="btn btn-dark" disabled={quantity === 1} onClick={decrease}>-</button>
            <label>{quantity}</label>
            <button className="btn btn-dark" onClick={increase}>+</button>
        </div>
    )
}

export default QuantityPicker;