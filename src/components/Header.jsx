import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="w-full h-16 bg-purple-600 text-white flex justify-between items-center">
            <h1 className="font-semibold text-2xl ml-6">Redux blog</h1>
            <nav>
                <ul className="flex items-center gap-4 mr-6">
                    <li className="font-semibold text-md"><Link to="/">Home</Link></li>
                    <li className="font-semibold text-md"><Link to="post">Post</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;