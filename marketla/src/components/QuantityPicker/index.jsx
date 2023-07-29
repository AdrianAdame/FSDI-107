import { useState } from "react"
import "./quantityPicker.css"

const QuantityPicker = () => {
    const [quantity, setQuantity] = useState(1)

    const increase = () => {
        setQuantity(qty => qty + 1)
    }

    const decrease = () => {
        setQuantity(qty => {
            if(qty <=1){
                return 1
            }else{
                return qty - 1
            }
        })
    }

    return (
        <div className="qt-picker">
            <button disabled={quantity === 1} onClick={decrease}>-</button>
            <label>{quantity}</label>
            <button onClick={increase}>+</button>
        </div>
    )
}

export default QuantityPicker;