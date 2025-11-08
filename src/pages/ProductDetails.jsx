import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
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
        <article className="grid grid-cols-1 items-center
            sm:grid-cols-[36rem] sm:justify-center
            md:gap-x-[1rem] md:grid-cols-[22rem_22rem] md:grid-rows-[auto_auto_auto_auto_auto_auto_auto]
            lg:gap-x-[2rem] lg:grid-cols-[26rem_32rem]
            xl:gap-x-[4rem] xl:grid-cols-[29rem_42rem]"
        >
            <Link
                className="mb-2 row-[1_/_2] text-blue-700 hover:text-blue-500
                    text-sm underline md:col-[1_/_3] md:mb-4"
                to="/"
            >
                Back to Homepage
            </Link>
            <div className="bg-white border border-gray-200 col-[1_/_2] h-60 p-[1rem] rounded-xl
                md:h-auto md:rounded-2xl md:row-[2_/_8] md:w-[100%]
                lg:p-[2rem] lg:rounded-3xl xl:p-[3rem] xl:rounded-4xl"
            >
                <img
                    alt={product.title}
                    className="max-h-[100%] mx-auto object-contain"
                    src={product.image}
                />
            </div>
            <h2 className="text-2xl font-bold mt-4 text-gray-800
                    md:col-[2_/_3] md:row-[2_/_3]"
            >
                {product.title}
            </h2>
            <p className="font-semibold mt-2 text-blue-600 text-lg
                    md:col-[2_/_3] md:row-[3_/_4]"
            >
                ${product.price}
            </p>
            <p className="mt-2 md:col-[2_/_3] md:row-[4_/_5]">
                {product.description}
            </p>
            <button
                className="bg-blue-500 hover:bg-blue-600 cursor-pointer
                    text-white px-4 py-2 mt-4 rounded-lg
                    md:col-[2_/_3] md:row-[5_/_6]"
                onClick={()=>addToCart(product)}
            >
                Add to Cart
            </button>
        </article>
    )
}