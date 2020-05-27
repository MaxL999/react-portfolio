import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar navbar-light border">
            <ul className="nav">
                <li className="nav-item">
                    <Link className="nav-link btn py-0" to={"/Resume"}>Resume</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link btn py-0" to={"/Personal"}>Personal</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link btn py-0" to={"/Portfolio"}>Portfolio</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar