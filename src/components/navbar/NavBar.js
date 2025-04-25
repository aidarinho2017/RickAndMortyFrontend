import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
            <Link className="navbar-brand" to="/">Rick & Morty</Link>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Characters</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/episodes">Episodes</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/locations">Locations</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
