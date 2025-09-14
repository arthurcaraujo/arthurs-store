import ProductList from "./components/ProductList";

export default function App() {
    return (
        <div className="bg-gray-100 min-h-screen">
            <h1 className="font-bold py-6 text-3xl text-center">
                Arthur's Store
            </h1>
            <ProductList />
        </div>
    )
}