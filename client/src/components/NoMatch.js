import React from 'react';
import { Link } from 'react-router-dom';

import Navbar from './Navbar';

function NoMatch({ location }) {
    return (
        <>
            <Navbar />
            <div class="card p-3 m-2">
                <div class="card-body">
                    <h5 class="card-title">Sorry, 404 <code>{location.pathname}</code> not found</h5>
                    <Link to={"/"}>Return to Homepage</Link>
                </div>
            </div>
        </>
    )
}

export default NoMatch