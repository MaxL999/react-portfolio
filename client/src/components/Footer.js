import React from 'react';
import { goToTop } from 'react-scrollable-anchor'

function Footer() {
    return (
        <footer className="mw-100 text-center p-2 border" onClick={goToTop}>
            <h2>Click here to return to the front</h2>
        </footer>
    )
}

export default Footer