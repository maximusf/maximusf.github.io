// components/Header.tsx
import { NavLink } from "react-router";

// creates a header component for the portfolio website
const Header = () => {
    return (
        <header className="border-b">
            <nav className="mx-auto max-w-5xl flex item-center justify-between p-4">
                <h1 className="text-xl font-bold">My Portfolio</h1>
                <div className = "flex gap-2">
                    <NavLink to ="/">Home</NavLink>
                    <NavLink to ="/about">About</NavLink>
                </div>
            </nav>
        </header>
    );
};

// makes header component available for import in other files
export default Header;