import { useEffect, useState } from "react";

export default function Orders() {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem("orders") || "[]");
        setOrders(stored);
    }, []);

    return (
        <article className="p-4">
            <h2 className="font-bold mb-4 text-xl">
                Your Orders
            </h2>
            {orders.length === 0 
                ? <p>No previous orders.</p>
                : orders.map(o => (
                    <div
                        className="border mb-4 p-3 rounded"
                        key={o.id}
                    >
                        <p>Order ID: {o.id}</p>
                        <p>Total: ${o.total.toFixed(2)}</p>
                        <details>
                            <summary>Items</summary>
                            {o.items.map(i => (
                                <p key={i.id}>
                                    {i.title} — ${i.price}
                                </p>
                            ))}
                        </details>
                    </div>
                ))
            }
        </article>
    )
}