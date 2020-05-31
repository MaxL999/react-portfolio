import React, { useContext } from 'react'
import { ThemeContext, Themes } from '../context/ThemeContext';

function ThemeBtn() {
    const { theme, setTheme } = useContext(ThemeContext)
    return (
        <button
            onClick={() => {
                theme.light ? setTheme(Themes.dark) : setTheme(Themes.light);
                console.log(theme)
            }}>
            Toggle Theme
        </button>
    );
}

export default ThemeBtn;