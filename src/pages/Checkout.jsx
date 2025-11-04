import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
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
        <article className="bg-white p-2 rounded-lg shadow
            sm:mx-auto sm:p-4 sm:w-[36rem]
            md:w-[45rem] lg:p-6 lg:rounded-xl lg:w-[60rem] xl:w-[75rem]"
        >
            <Link
                className="inline-block mb-2 text-blue-700 text-sm
                    hover:text-blue-500 underline md:mb-4 lg:mb-6"
                to="/cart"
            >
                Back to Cart
            </Link>
            <h2 className="text-xl font-bold mb-4 md:text-2xl">
                Order Summary
            </h2>
            {cart.map(i => (
                <div
                    className="bg-gray-200 flex gap-x-3 items-center
                        justify-between mb-2 px-2 py-1 rounded-lg md:px-4 md:py-2"
                    key={i.id}
                >
                    <span>{i.title}</span>
                    <span className="font-bold text-gray-800">${i.price.toFixed(2)}</span>
                </div>
            ))}
            <p className="mt-4 font-bold text-lg">
                Total: ${total.toFixed(2)}
            </p>
            {total > 0 &&
                <button
                    className="bg-blue-500 hover:bg-blue-600 cursor-pointer mt-4 px-4 py-2 rounded-lg text-white"
                    onClick={handlePayment}
                >
                    Pay Now
                </button>
            }
        </article>
    )
}