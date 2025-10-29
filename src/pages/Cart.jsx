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
        <article className="bg-gray-200 mx-auto p-4 rounded-xl shadow
            sm:w-[36rem] md:p-6 md:w-[45rem] lg:p-8 lg:w-[60rem] xl:w-[75rem]"
        >
            <h2 className="text-xl font-bold mb-4 md:text-2xl lg:mb-6">
                Your Cart
            </h2>
            <Link
                className="inline-block mb-2 text-blue-700
                    hover:text-blue-500 underline md:mb-4 lg:mb-6"
                to="/orders"
            >
                Your orders
            </Link>
            {cart.length === 0 
                ? <p className="text-gray-800">Your cart is empty.</p>
                : cart.map(item => (
                    <div
                        className="bg-gray-300 flex items-center justify-between mb-2 p-2 rounded-lg lg:mb-2"
                        key={item.id}
                    >
                        <span>{item.title}</span>
                        <button
                            className="bg-red-700 hover:bg-red-500 cursor-pointer text-white
                                px-2 py-1 rounded"
                            onClick={() => deleteItem(item.id)}
                        >
                            Remove
                        </button>
                    </div>
                ))
            }
            {cart.length !== 0 &&
                <div className="gap-y-4 grid grid-cols-[1fr_1fr]
                    grid-rows-[auto_auto] mt-4
                    md:gap-y-6 md:grid-cols-[1fr_1fr_1fr] md:mt-6
                    lg:gap-x-8 lg:grid-cols-[1fr_1fr_1fr_1fr] lg:grid-rows-1 lg:mt-8"
                >
                    <button
                        className="bg-red-700 hover:bg-red-500 col-[2_/_3]
                            cursor-pointer font-bold p-2 rounded-lg text-white
                            md:col-[3_/_4] lg:col-[4_/_5]"
                        onClick={() => deleteAll()}
                    >
                        Clear cart
                    </button>
                    <Link
                        className="bg-gray-600 hover:bg-gray-500 block col-[1_/_3]
                            font-bold p-[0.5rem] rounded-lg row-[2_/_3] text-center text-white md:col-[2_/_4] lg:row-[1_/_2]"
                        to="/checkout"
                    >
                        Checkout
                    </Link>
                </div>
            }
        </article>
    )
}