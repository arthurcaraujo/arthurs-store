import { AuthProvider } from "./context/AuthContext";
import { CartProvider } from "./context/CartContext";
import { Route, Routes } from "react-router-dom";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Header from "./components/Header";
import OrderConfirmation from "./pages/OrderConfirmation";
import Orders from "./pages/Orders";
import ProductDetails from "./pages/ProductDetails";
import ProtectedRoute from "./components/ProtectedRoute";

export default function App() {
    return (
        <AuthProvider>
            <CartProvider>
                <div className="bg-gray-100 font-sans min-h-screen">
                    <Header />
                    <main className="max-w-6xl mx-auto px-4 py-6">
                        <Routes>
                            <Route element={<Home />} path="/" />
                            <Route element={<Cart />} path="/cart" />
                            <Route
                                element={
                                    <ProtectedRoute>
                                        <Checkout />
                                    </ProtectedRoute>
                                }
                                path="/checkout"
                            />
                            <Route element={<Login />} path="/login" />
                            <Route
                                element={
                                    <ProtectedRoute>
                                        <OrderConfirmation />
                                    </ProtectedRoute>
                                }
                                path="/confirmation"
                            />
                            <Route
                                element={
                                    <ProtectedRoute>
                                        <Orders />
                                    </ProtectedRoute>
                                }
                                path="/orders"
                            />
                            <Route element={<ProductDetails />} path="/product/:id" />
                        </Routes>
                    </main>
                </div>
            </CartProvider>
        </AuthProvider>
    )
}