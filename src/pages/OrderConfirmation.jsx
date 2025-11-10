import { Link, useLocation } from "react-router-dom";

export default function OrderConfirmation() {
    const { state } = useLocation();
    const order = state?.order;

    if (!order) return
        <p className="p-4">No order found.</p>

    return (
        <article className="sm:bg-gray-200 sm:p-4 sm:rounded-lg sm:w-[36rem]
            md:w-[45rem] lg:p-6 lg:rounded-xl lg:w-[60rem] xl:w-[75rem]"
        >
            <h2 className="text-2xl font-bold mb-4">
                Thank you!
            </h2>
            <p>Order ID: {order.id}</p>
            <p>Total: <span className="font-bold">${order.total.toFixed(2)}</span></p>
            <Link
                className="inline-block mt-4 text-blue-700 hover:text-blue-500 underline"
                to="/orders"
            >
                View All Orders
            </Link>
        </article>
    )
}