import React, { Component } from 'react';

import Navbar from '../components/Navbar'
import PortfolioDisplay from "../components/PortfolioDisplay"

class Portfolio extends Component {
    state = {
        portfolio: [
            {
                name: "Rock, Paper, Scissors",
                lang: ["Javascript", "Firebase"],
                desc: "Multiplayer is enabled through use of google firebase",
                git: "https://github.com/MaxL999/07-RPS-Multiplayer",
                link1: "https://maxl999.github.io/07-RPS-Multiplayer/singleplayer.html",
                link1Name: "Singleplayer",
                link2: "https://maxl999.github.io/07-RPS-Multiplayer/",
                link2Name: "Multiplayer"
            }, {
                name: "Hangman!",
                lang: ["Javascript"],
                desc: "A classic hangman game made with constructors that can be accessed on a webpage or directly thorugh a terminal using Node.",
                git: "https://github.com/MaxL999/3-WordGuess",
                link: "https://maxl999.github.io/3-WordGuess/",
                link1Name: "Webpage",
                link2: false,
                link2Name: false
            }, {
                name: "Minesweeper",
                lang: ["Javascript"],
                desc: "The classic minesweeper game",
                git: "https://github.com/MaxL999/minesweeper",
                link1: "https://maxl999.github.io/minesweeper/",
                link1Name: "Minesweeper",
                link2: false,
                link2Name: false
            }, {
                name: "Burger-Breakin",
                lang: ["MYSQL", "Handlebars", "Heroku"],
                desc: "A simple app where you can create and parse data, deployed unto the cloud with Heroku",
                git: "https://github.com/MaxL999/12-burgerHandlebars",
                link1: "https://burger-handlebars999.herokuapp.com/",
                link1Name: "Heroku",
                link2: false,
                link2Name: false
            }
            // {
            //     name: "",
            //     lang: ["",""],
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
                <Navbar />
                <div className="container-fluid">
                    <div className="row">
                        <div className="card-deck px-3">
                            {this.state.portfolio.map((project, i) => (
                                <PortfolioDisplay {...project} className="col-md-4 col-xl-3s" key={i} />
                            ))}
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Portfolio