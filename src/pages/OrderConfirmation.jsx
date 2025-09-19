import { Link, useLocation } from "react-router-dom";

export default function OrderConfirmation() {
    const { state } = useLocation();
    const order = state?.order;

    if (!order) return
        <p className="p-4">No order found.</p>

    return (
        <article className="p-4">
            <h2 className="text-2xl font-bold mb-4">
                Thank you!
            </h2>
            <p>Order ID: {order.id}</p>
            <p>Total: ${order.total.toFixed(2)}</p>
            <Link
                className="block mt-4 text-blue-500 underline"
                to="/orders"
            >
                View All Orders
            </Link>
        </article>
    )
}