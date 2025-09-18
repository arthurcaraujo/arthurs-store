import { AuthContext } from "../context/AuthContext";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import { useContext } from "react";

export default function Header() {
    const { cart } = useContext(CartContext);
    const { user, logout } = useContext(AuthContext);

    return (
        <header className="grid grid-cols-1 lg:grid-cols-[auto_auto]">
            <h1 className="bg-green-600">Arthur's Store</h1>
            <nav className="bg-white p-4 flex gap-4
                shadow justify-between items-center">
                <Link to="/">Home</Link>
                <Link to="/checkout">Checkout</Link>
                <Link to="/cart">Cart ({cart.length})</Link>
                {user && <Link to="/orders">Orders</Link>}
                {user ?
                    <>
                        <span className="mr-2">
                            Hi, {user.email}
                        </span>
                        <button
                            className="bg-red-600 px-3 py-1
                                rounded text-white"
                            onClick={logout}
                        >
                            Logout
                        </button>
                    </>
                    :
                    <Link
                        className="bg-blue-500 px-3 py-1
                            rounded text-white"
                        to="/login"
                    >
                        Login
                    </Link>
                }
            </nav>
        </header>
    )
}