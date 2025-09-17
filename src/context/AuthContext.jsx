import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export function AuthProvider({children}) {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem("auth"));
        if (stored) setUser(stored);
    }, []);

    const login = email => {
        const u = {email};
        setUser(u);
        localStorage.setItem("auth", JSON.stringify(u));
        navigate("/");
    }
    const logout = () => {
        setUser(null);
        localStorage.removeItem("auth");
        navigate("/login");
    }

    return (
        <AuthContext.Provider value={{user, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}