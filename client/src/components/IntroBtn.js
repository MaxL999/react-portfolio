import React from 'react';
import { Link } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';

function IntroBtn(props) {

    const items = [
        { name: "Resume", link: "/Resume" },
        { name: "Personal", link: "/Personal" },
        { name: "Portfolio", link: "/Portfolio" }
    ]
    const config = { mass: 5, tension: 2000, friction: 200 }

    const spring = useSpring({ opacity: 1, from: { opacity: 0 } })

    const [toggle, set] = useState(true)
    const trail = useTrail(items.length, {
        config,
        opacity: toggle ? 1 : 0,
        x: toggle ? 0 : 20,
        height: toggle ? 80 : 0,
        from: { opacity: 0, x: 20, height: 0 },
    })

    return <>
        {/* <animated.div style={spring}>
            <Link className="nav-link btn" to={props.link}>{props.name}</Link>
        </animated.div> */}
        {trail.map(({ x, height, ...rest }, index) => (
            <animated.div
                key={items[index]}
                className=""
                style={{ ...rest, transform: x.interpolate(x => `translate3d(0,${x}px,0)`) }}>
                <animated.div style={{ height }}>{items[index]}</animated.div>
            </animated.div>
        ))}
    </>
}

export default IntroBtn