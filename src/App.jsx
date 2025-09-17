import { AuthProvider } from "./context/AuthContext";
import { CartProvider } from "./context/CartContext";
import { Route, Routes } from "react-router-dom";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Header from "./components/Header";
import ProductDetails from "./pages/ProductDetails";

export default function App() {
    return (
        <AuthProvider>
            <CartProvider>
                <Header />
                <main className="bg-gray-100 min-h-screen">
                    <Routes>
                        <Route element={<Home />} path="/" />
                        <Route element={<Cart />} path="/cart" />
                        <Route element={<Checkout />} path="/checkout" />
                        <Route element={<Login />} path="/login" />
                        <Route element={<ProductDetails />} path="/product/:id" />
                    </Routes>
                </main>
            </CartProvider>
        </AuthProvider>
    )
}