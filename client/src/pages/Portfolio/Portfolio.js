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
                link: "https://maxl999.github.io/07-RPS-Multiplayer/",
                linkName: "Fight!",
            },{
                name: "",
                lang: "",
                desc: "",
                git: "",
                link: "",
                linkName: "",
            },{
                name: "",
                lang: "",
                desc: "",
                git: "",
                link: "",
                linkName: "",
            },
        ]
    }
    render() {
        return (
            <>
                {this.state.portfolio.map((project, i) => (
                    <PortfolioDisplay {...project}/>
                ))}
            </>
        )
    }
}

export default Portfolio