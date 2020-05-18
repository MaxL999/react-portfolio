import React from 'react';
import "./style.css"

function PortfolioDisplay(props) {
    return (
        <div className="card text-center width m-2">
            <div className="card-header d-flex justify-content-between">
                <h5 className="card-title">{props.name}</h5>

                <a href={props.git} className="card-link btn"
                    target="_blank" rel="noopener noreferrer">GIT</a>
            </div>
            <div className="card-body">

                <h6 className="text-muted">{props.lang}</h6>

                <p className="card-text">{props.desc}</p>

            </div>
            <div className="card-footer d-flex justify-content-start">

                <a href={props.link1} className="btn btn-primary m-1"
                    target="_blank" rel="noopener noreferrer">{props.link1Name}</a>

                {props.link2 ?
                    <a href={props.link2} className="btn btn-primary m-1"
                        target="_blank" rel="noopener noreferrer">{props.link2Name}
                    </a>
                    : false
                }

                {/* second footer with */}
                {/* <small class="text-muted">Last updated * mins ago</small> */}

            </div>
        </div>
    )
}

export default PortfolioDisplay