import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar navbar-light border">
            <ul className="nav">
                <li className="nav-item">
                    <Link className="nav-link btn py-0" to={"/Resume"}><p className="tHeavy m-0">Resume</p></Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link btn py-0" to={"/Personal"}><p className="tHeavy m-0">Personal</p></Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link btn py-0" to={"/Portfolio"}><p className="tHeavy m-0">Portfolio</p></Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar