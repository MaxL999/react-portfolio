import React from 'react';
import "../style.css"

function PortfolioDisplay(props) {
    return (
        <div className="card text-center m-2">

            <div className="card-header d-flex justify-content-between align-items-center">
                <p className="tHeavy m-0 p-0">{props.name}</p>

                <a href={props.git} className="btn p-0" target="_blank" rel="noopener noreferrer">
                    <p className="tBold text-secondary m-0">
                        GIT
                    </p>
                </a>
            </div>

            <div className="card-body">

                <h6 className="text-muted d-flex justify-content-around mb-3">
                    {props.lang.map((msg, i) => (
                        <p key={i} className="m-0 tItalic">{msg}</p>
                    ))}
                </h6>

                <p className="card-text">{props.desc}</p>

            </div>

            <div className="card-footer d-flex justify-content-start">

                <a href={props.link1} className="btn btn-primary m-1"
                    target="_blank" rel="noopener noreferrer">{props.link1Name}</a>

                {props.link2 &&
                    <a href={props.link2} className="btn btn-primary m-1"
                        target="_blank" rel="noopener noreferrer">{props.link2Name}
                    </a>}

                {/* put updated time or a color indicator for how finished the project is */}
                {/* <small class="text-muted">Last updated * mins ago</small> */}

            </div>
            {/* </> */}
        </div>
    )
}

export default PortfolioDisplay