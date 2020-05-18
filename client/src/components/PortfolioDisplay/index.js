import React from 'react';

function PortfolioDisplay(props) {
    return (
        <div class="card p-3 m-2">
            <div class="card-body">
                <h5 class="card-title">{props.name}</h5>
                <h6 className="text-muted">{props.lang}</h6>
                <p class="card-text">{props.desc}</p>
                <a href={props.link} class="btn btn-primary"
                    target="_blank" rel="noopener noreferrer">{props.linkName}</a>
                <a href={props.git} class="btn btn-primary"
                    target="_blank" rel="noopener noreferrer">GIT</a>
            </div>
        </div>
    )
}

export default PortfolioDisplay