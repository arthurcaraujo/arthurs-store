import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import { useContext } from "react";

export default function Cart() {
    const { cart, removeFromCart, clearCart } = useContext(CartContext);

    const deleteItem = (item) => {
        let confirmation = confirm("Are you sure you want to delete this item?");
        confirmation && removeFromCart(item);
    }
    const deleteAll = () => {
        let confirmation = confirm("Are you sure you want to clear your cart?");
        confirmation && clearCart();
    }

    return (
        <article className="p-4">
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
                            onClick={() => deleteItem(item.id)}
                        >
                            Remove
                        </button>
                    </div>
                ))
            }
            {cart.length !== 0 &&
                <div>
                    <button
                        className="bg-gray-600 px-2 py-1
                            rounded text-white"
                        onClick={() => deleteAll()}
                    >
                        Clear cart
                    </button>
                    <Link className="bg-blue-500 block" to="/checkout">
                        Checkout
                    </Link>
                </div>
            }
            <Link className="bg-blue-500" to="/orders">
                Your orders
            </Link>
        </article>
    )
}