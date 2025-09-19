import { CartContext } from "../context/CartContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
    const { cart, clearCart } = useContext(CartContext);
    const navigate = useNavigate();
    const total = cart.reduce((sum, i) =>
        sum + i.price, 0
    );
    const handlePayment = () => {
        const existing = JSON.parse(localStorage.getItem("orders") || "[]");
        const order = {id:Date.now(), items:cart, total};
        localStorage.setItem("orders", JSON.stringify([...existing, order]));
        clearCart();
        navigate("/confirmation", {state:{order}});
    };

    return (
        <article className="p-4">
            <h2 className="text-xl font-bold mb-4">
                Order Summary
            </h2>
            {cart.map(i => (
                <div className="mb-2" key = {i.id}>
                    {i.title} — ${i.price}
                </div>
            ))}
            <p className="mt-4 font-bold">
                Total: ${total.toFixed(2)}
            </p>
            {total > 0 &&
                <button
                    className="mt-4 bg-green-500 text-white px-4 py-2"
                    onClick={handlePayment}
                >
                    Pay Now
                </button>
            }
        </article>
    )
}