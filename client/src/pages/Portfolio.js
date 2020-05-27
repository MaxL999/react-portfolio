import React from 'react';

import Navbar from '../components/Navbar'

import portfolio from "../GitList"
import PortfolioDisplay from "../components/PortfolioDisplay"

function Portfolio() {
    return (
        <>
            <Navbar />
            <div className="container-fluid p-0">
                <div className="row m-0">
                    {portfolio.map((project, i) => (
                        <div className="col-md-6 col-xl-4 p-0" key={i}>
                            <PortfolioDisplay {...project}/>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )

}

export default Portfolio