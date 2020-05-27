import React from 'react';

import Navbar from '../components/Navbar'

import portfolio from "../GitList"
import PortfolioDisplay from "../components/PortfolioDisplay"

function Portfolio() {
    return (
        <>
            <Navbar />
            <div className="container-fluid">
                <div className="row">
                    <div className="card-deck m-0">
                        {portfolio.map((project, i) => (
                            <PortfolioDisplay {...project} className="col-md-4 col-xl-3" key={i} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )

}

export default Portfolio