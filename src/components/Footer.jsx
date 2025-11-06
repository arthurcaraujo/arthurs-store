export default function Footer() {
    return (
        <footer className="bg-gray-600 mt-[4rem] p-[3rem] text-[1rem]
            text-center text-white md:text-[1.2rem]"
        >
            <a
                className="hover:underline"
                href="https://arthurcaraujo.github.io/"
            >
                Arthur C. Araújo
            </a> - {new Date().getFullYear()}
        </footer>
    )
}