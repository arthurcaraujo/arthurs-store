import { CartContext } from "../context/CartContext";
import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";

export default function ProductDetails() {
    const { addToCart } = useContext(CartContext);
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res => res.json())
            .then(setProduct)
    }, [id]);

    if (!product) return <p>Loading...</p>

    return (
        <article className="p-4">
            <img
                alt={product.title}
                className="h-60 mx-auto"
                src={product.image}
            />
            <h2 className="text-2xl font-bold mt-4">
                {product.title}
            </h2>
            <p className="mt-2">
                ${product.price}
            </p>
            <p className="mt-2">
                {product.description}
            </p>
            <button
                className="bg-blue-500 text-white px-4 py-2 mt-4"
                onClick={()=>addToCart(product)}
            >
                Add to Cart
            </button>
        </article>
    )
}