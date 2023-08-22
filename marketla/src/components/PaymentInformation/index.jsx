const PaymentInformation = ({cart}) => {
    const calculateCartTotal = () => {
        let total = 0;

        cart.forEach(prod => total += (prod.price * prod.quantity))

        return total.toFixed(2)
    }

    return (
        <div>
            <h1>Total to pay: {calculateCartTotal()}</h1>
        </div>
    );
};

export default PaymentInformation;
