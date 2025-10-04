import { AuthContext } from "../context/AuthContext";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import websiteLogo from "../assets/website-logo.png";

export default function Header() {
    const { cart } = useContext(CartContext);
    const { user, logout } = useContext(AuthContext);
    const [username, setUsername] = useState(null);

    useEffect(() => {
        if (user) {
            const atIndex = user.email.indexOf("@");
            setUsername(user.email.substring(0, atIndex));
        }
    }, [user]);

    return (
        <header>
            <nav
                className="bg-gray-600 fixed gap-x-[0.5rem] gap-y-[0.25rem] grid
                    grid-cols-[auto_auto_auto] grid-rows-[auto_auto] items-center justify-between
                    justify-items-center p-[0.5rem] shadow-sm top-0 w-full
                    sm:gap-0 sm:grid-cols-[12rem_12rem_6.5rem_5.5rem] sm:grid-rows-1 sm:justify-center sm:px-0
                    md:grid-cols-[15rem_15rem_9rem_6rem]
                    lg:grid-cols-[20rem_20rem_14rem_6rem] lg:py-[1rem]
                    xl:grid-cols-[25rem_25rem_19rem_6rem]"
            >
                <a
                    className="col-[1_/_2] font-[Nunito] gap-x-[0.3rem] gap-y-0 grid
                        grid-cols-[2.5rem_auto] grid-rows-[1.4rem_1.1rem] group
                        items-center justify-self-start leading-[1] no-underline row-[1_/_3] sm:justify-self-start"
                    href="https://arthurcaraujo.github.io/"
                >
                    <img
                        alt="Website logo"
                        className="border-2 border-[#322] col-[1_/_2] duration-500 h-[2.5rem]
                            group-active:border-[#ddd] group-hover:scale-[1.125] max-h-full
                            rounded-full row-[1_/_3] w-[2.5rem] transition-[border, transform]"
                        src={websiteLogo}
                    />
                    <span className="text-[1.4rem] text-shadow-[2px_2px_1px_#000] text-white">
                        ARTHUR
                    </span>
                    <span className="italic text-[rgb(255,128,0)] text-[1.1rem]
                        text-shadow-[2px_2px_1px_#000] whitespace-nowrap"
                    >
                        C. ARAÚJO
                    </span>
                </a>
                <Link className="col-[2_/_3] row-[1_/_3]" to="/">
                    <h1 className="bg-white font-[Asimovian] font-bold leading-none
                            px-[0.4rem] py-[0.25rem] rounded-xl text-center text-orange-800
                            [text-shadow:_1px_1px_1px_rgba(0,0,0)] text-2xl whitespace-nowrap lg:text-3xl"
                    >
                        Arthur's <br className="sm:hidden"/>Store
                    </h1>
                </Link>
                <Link
                    className="col-[3_/_4] font-bold row-[2_/_3] text-white
                        sm:justify-self-end sm:row-[1_/_2]"
                    to="/cart"
                >
                    Cart ({cart.length})
                </Link>
                {user ?
                    <button
                        className="bg-red-800 col-[3_/_4] px-[0.65rem] py-1 rounded row-[1_/_2] text-white
                            sm:col-[4_/_5] sm:justify-self-end"
                        onClick={logout}
                    >
                        Logout
                    </button>
                    :
                    <Link
                        className="bg-black col-[3_/_4] leading-none px-[0.65rem] py-[0.5rem]
                            rounded-lg row-[1_/_2] text-white sm:col-[4_/_5] sm:justify-self-end"
                        to="/login"
                    >
                        Login
                    </Link>
                }
            </nav>
            <p className="mx-[0.5rem] pt-[5rem] sm:mx-auto sm:w-[36rem] md:w-[45rem] lg:w-[60rem] xl:w-[75rem]">
                Welcome{user &&
                    <span>, <Link className="active:text-red-700 font-bold hover:underline" to="/orders">{username}</Link></span>
                }!
            </p>
        </header>
    )
}