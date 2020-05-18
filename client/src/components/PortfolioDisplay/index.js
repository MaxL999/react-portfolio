import React from 'react';
import "./style.css"

function PortfolioDisplay(props) {
    return (
        <div className="card m-3 text-center">
            <div className="card-header">
                <div className="col">
                    <h5 className="card-title">{props.name}</h5>
                </div>
                <div className="col">
                    <a href={props.git} className="card-link btn"
                        target="_blank" rel="noopener noreferrer">GIT</a>
                </div>
            </div>
            <div className="card-body">
                <h6 className="text-muted">{props.lang}</h6>
                <p className="card-text">{props.desc}</p>

            </div>
            <div class="card-footer">
                {/* <small class="text-muted">Last updated 3 mins ago</small> */}
                <a href={props.link1} className="btn btn-primary"
                    target="_blank" rel="noopener noreferrer">{props.link1Name}</a>

                {props.link2 ?
                    <a href={props.link2} className="btn btn-primary"
                        target="_blank" rel="noopener noreferrer">{props.link2Name}
                    </a>
                    : " "
                }
            </div>
        </div>
    )
}

export default PortfolioDisplay