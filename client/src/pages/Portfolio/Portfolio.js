import React, { Component } from 'react';

import PortfolioDisplay from "../../components/PortfolioDisplay"

class Portfolio extends Component {
    state = {
        portfolio: [
            {
                name: "Rock, Paper, Scissors",
                lang: "Firebase database",
                desc: "What? You never played rock, paper, scissors or something?",
                git: "https://maxl999.github.io/07-RPS-Multiplayer/",
                link1: "https://maxl999.github.io/07-RPS-Multiplayer/",
                link2: "test",
                link1Name: "Fight!",
                link2Name: "TEST"
            }, {
                name: "Hangman!",
                lang: "Javascript logic",
                desc: "A classic hangman game that can be accessed on a webpage or directly thorugh a terminal using Node.",
                git: "",
                link: "https://maxl999.github.io/3-WordGuess/",
                link2: false,
                link1Name: "Webpage",
                link2Name: false,
            },
            // {
            //     name: "",
            //     lang: "",
            //     desc: "",
            //     git: "",
            //     link: "",
            //     linkName: "",
            // },
        ]
    }
    render() {
        return (
            <>
                {/* card deck? */}
                <div className="card-deck d-flex flex-wrap p-3">
                    {this.state.portfolio.map((project, i) => (
                        <PortfolioDisplay {...project} />
                    ))}
                </div>
            </>
        )
    }
}

export default Portfolio