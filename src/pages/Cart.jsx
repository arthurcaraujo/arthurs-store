import { CartContext } from "../context/CartContext";
import { useContext } from "react";

export default function Cart() {
    const { cart, removeFromCart, clearCart } = useContext(CartContext);

    return (
    <div className="p-4">
        <h2 className="text-xl font-bold mb-4">
            Your Cart
        </h2>
        {cart.length === 0 
            ? <p>Your cart is empty.</p>
            : cart.map(item => (
                <div key={item.id} className="mb-2 flex justify-between items-center">
                    <span>{item.title}</span>
                    <button
                        className="bg-red-500 text-white
                        px-2 py-1 rounded"
                        onClick={()=>removeFromCart(item.id)}
                    >
                        Remove
                    </button>
                </div>
            ))
        }
        {cart.length !== 0 &&
            <button
                className="bg-gray-600 px-2 py-1
                    rounded text-white"
                onClick={() => clearCart()}
            >
                Clear cart
            </button>
        }
    </div>
    )
}