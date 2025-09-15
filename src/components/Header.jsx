import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header>
            <h1>Arthur's Store</h1>
            <nav className="bg-white shadow p-4 flex gap-4">
                <Link to="/">Home</Link>
                <Link to="/cart">Cart</Link>
                <Link to="/checkout">Checkout</Link>
                <Link to="/login">Login</Link>
            </nav>
        </header>
    )
}