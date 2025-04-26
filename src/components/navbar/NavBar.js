import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ThemeContext } from "../themes/ThemeContext";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    const { theme, toggleTheme } = useContext(ThemeContext);

    const handleSelect = (e) => {
        navigate(e.target.value);
    };

    return (
        <nav className={`navbar navbar-expand-lg navbar-${theme} bg-${theme} px-4`}>
            <Link className="navbar-brand" to="/">Rick & Morty</Link>
            <button
                className="navbar-toggler"
                type="button"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? "Hide Menu" : "Show Menu"}
            </button>

            <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}>
                <ul className="navbar-nav ms-auto align-items-center">
                    <li className="nav-item me-3">
                        <select
                            className={`form-select bg-${theme} text-${theme === "dark" ? "white" : "dark"}`}
                            onChange={handleSelect}
                            defaultValue=""
                            style={{ minWidth: "150px" }}
                        >
                            <option value="" disabled>Navigate...</option>
                            <option value="/">Characters</option>
                            <option value="/episodes">Episodes</option>
                            <option value="/locations">Locations</option>
                        </select>
                    </li>
                    <li className="nav-item">
                        <button className="btn btn-outline-light" onClick={toggleTheme}>
                            {theme === "dark" ? "Light Mode" : "Dark Mode"}
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;