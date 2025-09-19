import { AuthContext } from "../context/AuthContext";
import { useState, useContext } from "react";

export default function Login() {
    const [email, setEmail] = useState("");
    const { login } = useContext(AuthContext);

    return (
        <article className="p-4 max-w-md mx-auto">
            <input
                className="border mb-2 p-2 w-full"
                onChange={e => setEmail(e.target.value)}
                placeholder="Enter your email address"
                type="email"
                value={email}
            />
            <button
                className="bg-blue-500 px-4 py-2 text-white"
                onClick={() => login(email)}
            >
                Login
            </button>
        </article>
    )
}