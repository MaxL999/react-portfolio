import React from 'react';
import Navbar from './Navbar';

function NoMatch() {
    return (
        <>
            <Navbar />
            <div class="card p-3 m-2">
                <div class="card-body">
                    <h5 class="card-title">Sorry, 404!</h5>
                </div>
            </div>
        </>
    )
}

export default NoMatch