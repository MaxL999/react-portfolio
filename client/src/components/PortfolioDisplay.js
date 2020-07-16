import React, { useContext } from 'react';

import PortfolioDisplayProgress from './PortfolioDisplayProgress';

import { ThemeContext } from '../context/ThemeContext';

function PortfolioDisplay(props) {
    const { theme } = useContext(ThemeContext)

    return (
        <div className="card text-center h-100">

            <div className={"card-header d-flex justify-content-between align-items-center" + theme.bg3}>
                <p className={"tHeavy m-0 p-0" + theme.txt1}>{props.name}</p>

                <a href={props.git} className="" target="_blank" rel="noopener noreferrer">
                    <p className={"tBold m-0" + theme.txt2}>GIT</p></a>
            </div>

            <div className={"card-body"+ theme.bg2}>

                <h6 className="text-muted d-flex justify-content-around mb-3">
                    {props.lang.map((msg, i) => (
                        <p key={i} className={"m-0 tItalic" + theme.txt1}>{msg}</p>
                    ))}
                </h6>

                <p className="card-text">{props.desc}</p>

            </div>

            {/* put updated time or a color indicator for how finished the project is */}
            <PortfolioDisplayProgress progress={props.progress} />

            <div className={"card-footer d-flex justify-content-start" + theme.bg3}>

                <div className="d-block">
                    <a href={props.link1} className={"btn m-1" + theme.btn1}
                        target="_blank" rel="noopener noreferrer">{props.link1Name}</a>

                    {props.link2 &&
                        <a href={props.link2} className={"btn m-1" + theme.btn1}
                            target="_blank" rel="noopener noreferrer">{props.link2Name}
                        </a>
                    }
                </div>

                {/* <small class="text-muted">Last updated * mins ago</small> */}

            </div>
        </div>
    )
}

export default PortfolioDisplay