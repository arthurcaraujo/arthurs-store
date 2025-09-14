import { useEffect, useState } from "react";

export default function ProductList() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
            {products.map(product => (
                <div key={product.id} className="border p-4 rounded shadow">
                    <img
                        alt={product.title}
                        className="h-40 mx-auto"
                        src={product.image}
                    />
                    <h2 className="font-bold text-lg">
                        {product.title}
                    </h2>
                    <p>${product.price}</p>
                </div>
            ))}
        </div>
    )
}