import { Outlet, Link } from "react-router-dom";
import { useState } from "react";
import { CgClose } from "react-icons/cg";
import '../styles/navbar.css'

export default function Navbar(){
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="root-layout-container">
        {/* Top horizontal navigation bar */}
        <nav className="header">
            {/* Mobile hamburger menu */}
            <div
                className="main-hamburger-menu-container"
                onClick={() => setIsMenuOpen(true)}
            >
                <div className="hamburger-menu-line"></div>
                <div className="hamburger-menu-line"></div>
            </div>

            {/* Navigation container */}
            <div className={isMenuOpen ? "main-navbar-container-active" : "main-navbar-container"}>
            {/* Exit button (mobile) */}
                <div
                    className="main-navigation-menu-exit-wrapper"
                    onClick={() => setIsMenuOpen(false)}
                >
                <CgClose className="main-navigation-menu-exit-icon" />
                </div>

                    <div className="main-navigation-menu-exit-line-4"></div>                <ul className="main-navbar">
                    <li className="main-navbar-item">
                        <Link className="main-navbar-link" to="/e-board" onClick={() => setIsMenuOpen(false)}>E-Board</Link>
                    </li>
                    <li className="main-navbar-item">
                        <Link className="main-navbar-link" to="/events" onClick={() => setIsMenuOpen(false)}>Events</Link>
                    </li>
                    <li className="main-navbar-item">
                        <Link className="main-navbar-link" to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
                    </li>
                    <li className="main-navbar-item">
                        <Link className="main-navbar-link" to="/projects" onClick={() => setIsMenuOpen(false)}>Projects</Link>
                    </li>
                    <li className="main-navbar-item">
                        <Link className="main-navbar-link" to="/contact" onClick={() => setIsMenuOpen(false)}>Contact us</Link>
                    </li>
                </ul>
            </div>
        </nav>
        <Outlet />
    </div>
    )
}
