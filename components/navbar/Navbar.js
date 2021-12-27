import Link from "next/link";

const Navbar = () => {
    return (
        <header>
            <nav>
                <Link href="/">
                <a>Home</a>
                </Link>
                <Link href="/about">
                <a>About</a>
                </Link>
            </nav>
        </header>
    )
}

export default Navbar;