import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";

export default function Home() {
    const [products, setProducts] = useState([]);
    const { addToCart } = useContext(CartContext);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    return (
        <article className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {products.map(product => (
                <div
                    className="border border-gray-300 duration-300 p-4
                        rounded-xl shadow-md hover:shadow-xl transition"
                    key={product.id}
                >
                    <Link to={`/product/${product.id}`}>
                        <img
                            alt={product.title}
                            className="h-40 mx-auto"
                            src={product.image}
                        />
                        <h2 className="font-bold line-clamp-2 text-gray-800 text-lg">
                            {product.title}
                        </h2>
                        <p className="font-bold mt-2 text-blue-700">
                            ${product.price}
                        </p>
                    </Link>
                    <button
                        className="bg-blue-500 hover:bg-blue-600 cursor-pointer
                            mt-2 px-4 py-2 rounded-lg text-md text-white"
                        onClick={() => addToCart(product)}
                    >
                        Add to cart
                    </button>
                </div>
            ))}
        </article>
    )
}