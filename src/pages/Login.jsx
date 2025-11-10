import { AuthContext } from "../context/AuthContext";
import { useState, useContext } from "react";

export default function Login() {
    const [email, setEmail] = useState("");
    const { login } = useContext(AuthContext);

    return (
        <article className="flex flex-col items-center mx-auto p-4 w-full
            sm:bg-gray-200 sm:p-6 sm:rounded-lg sm:w-[36rem] md:p-8 md:w-[45rem]
            lg:p-10 lg:rounded-xl lg:w-[60rem] xl:p-12 xl:w-[75rem]"
        >
            <input
                className="bg-white border mb-3 p-2 rounded-md w-full
                    md:mb-4 md:w-[80%] lg:w-[70%] xl:w-[60%]"
                onChange={e => setEmail(e.target.value)}
                placeholder="Enter your email address"
                type="email"
                value={email}
            />
            <button
                className="bg-blue-500 hover:bg-blue-600 cursor-pointer
                    px-4 py-2 rounded-md text-white w-full sm:w-[50%]
                    lg:w-[40%] xl:w-[30%]"
                onClick={() => login(email)}
            >
                Login
            </button>
        </article>
    )
}