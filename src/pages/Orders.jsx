import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Orders() {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem("orders") || "[]");
        setOrders(stored);
    }, []);

    return (
        <article className="w-[100%] sm:bg-gray-200 sm:p-4 sm:rounded-lg sm:w-[36rem]
            md:w-[45rem] lg:rounded-xl lg:w-[60rem] xl:w-[75rem]"
        >
            <Link
                className="inline-block mb-4 text-blue-700 text-sm
                    hover:text-blue-500 underline lg:mb-6"
                to="/"
            >
                Back to Homepage
            </Link>
            <h2 className="font-bold mb-4 text-xl">
                Your Orders
            </h2>
            {orders.length === 0 
                ? <p>No previous orders.</p>
                : orders.map(o => (
                    <div
                        className="border border-gray-500 mb-4 p-3 rounded-lg"
                        key={o.id}
                    >
                        <p>Order ID: {o.id}</p>
                        <p>Total: <span className="font-bold">${o.total.toFixed(2)}</span></p>
                        <details>
                            <summary className="cursor-pointer hover:underline">
                                Items
                            </summary>
                            {o.items.map(i => (
                                <p
                                    className="bg-gray-300 flex gap-x-3
                                        items-center justify-between mb-2 px-2
                                        py-1 rounded-lg md:px-4 md:py-2"
                                    key={i.id}
                                >
                                    <span>{i.title}</span>
                                    <span>${i.price.toFixed(2)}</span>
                                </p>
                            ))}
                        </details>
                    </div>
                ))
            }
        </article>
    )
}