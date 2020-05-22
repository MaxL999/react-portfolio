// import React, { Component } from "react";
// // import { render } from "react-dom";
// // import { Circle } from "./circle";
// // import "./Documents.css";

// class IntroBtn extends Component {
//     constructor() {
//         super(...arguments);
//         this.state = { hover: false };
//     }

//     render() {
//         const { hover } = this.state;

//         return (
//             <div
//                 className="Document"
//                 onMouseEnter={_ => this.setState({ hover: true })}
//                 onMouseLeave={_ => this.setState({ hover: false })}
//             >
//                 <div className="meta">Article</div>
//                 <div className="title">The title</div>
//                 <Circle
//                     animation={{ in: hover }}
//                     color="pink"
//                     icon={{ src: "", size: 15 }}
//                     size={40}
//                 />
//             </div>
//         );
//     }
// }

// export default IntroBtn

import React from 'react';
import { useSpring, animated } from 'react-spring';

function IntroBtn() {
    const props = useSpring({ opacity: 1, from: { opacity: 0 } })
    return <animated.div style={props}>I will fade in</animated.div>
}

export default IntroBtn