
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="bg-blue-600 px-6 py-4 flex justify-between items-center fixed top-0 left-0 w-full z-10">
            <h1 className="text-2xl font-bold text-black text-center">으지니의 Mini Blog ✏️</h1>
        </header>
    );
}

export default Header;
