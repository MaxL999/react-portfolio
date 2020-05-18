import React, { Component } from 'react';

import PortfolioDisplay from "../../components/PortfolioDisplay"

class Portfolio extends Component {
    state = {
        portfolio: [
            {
                name: "Rock, Paper, Scissors",
                // lang: "Firebase database",
                lang: ["Firebase"],
                desc: "What? You never played rock, paper, scissors or something?",
                git: "https://maxl999.github.io/07-RPS-Multiplayer/",
                link1: "https://maxl999.github.io/07-RPS-Multiplayer/",
                link1Name: "Fight!",
                link2: "#",
                link2Name: "TEST"
            }, {
                name: "Hangman!",
                // lang: "Javascript logic",
                lang: ["Javascript"],
                desc: "A classic hangman game that can be accessed on a webpage or directly thorugh a terminal using Node.",
                git: "",
                link: "https://maxl999.github.io/3-WordGuess/",
                link1Name: "Webpage",
                link2: false,
                link2Name: false,
            }, {
                name: "Minesweeper",
                // lang: "Javascript",
                lang: ["Javascript"],
                desc: "The classic minesweeper game",
                git: "",
                link1: "https://maxl999.github.io/minesweeper/",
                link1Name: "Minesweeper",
                link2: false,
                link2Name: false
            }, {
                name: "Burger-Breakin",
                // lang: "MSQL, Handlebars, Heroku",
                lang: ["MYSQL","Handlebars", "Heroku"],
                desc: "A simple app where you can create and parse data, deployed unto the cloud with Heroku",
                git: "",
                link1: "https://burger-handlebars999.herokuapp.com/",
                link1Name: "Break-In",
                link2: "",
                link2Name: ""
            },
            // {
            //     name: "",
            //     lang: "",
            //     desc: "",
            //     git: "",
            //     link1: "",
            //     link1Name: "",
            //     link2: "",
            //     link2Name: ""
            // },
        ]
    }
    render() {
        return (
            <>
                <div className="container-fluid">
                    <div className="row">
                        <div className="card-deck px-3">
                            {this.state.portfolio.map(project => (
                                <PortfolioDisplay {...project} className="col-md-4 col-xl-3s"/>
                            ))}
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Portfolio