import React from 'react';
import "../style.css"

function PortfolioDisplay(props) {
    return (
        <div className="card text-center m-2 width">

            <div className="card-header d-flex justify-content-between">
                <h5 className="card-title">{props.name}</h5>

                <a href={props.git} className="card-link btn"
                    target="_blank" rel="noopener noreferrer">GIT</a>
            </div>

            <div className="card-body">

                <h6 className="text-muted d-flex justify-content-around">
                    {props.lang.map((msg, i) => (
                        <p key={i}>{msg}</p>
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
        </div>
    )
}

export default PortfolioDisplay