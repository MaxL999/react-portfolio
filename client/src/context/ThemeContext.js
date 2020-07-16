import React from 'react';

// names for custom color CSS classes inside style.css
export const Themes = {
    light: {
        bg1: " Bclr1",
        bg2: " Bclr2",
        bg3: " Bclr3",
        bg4: " Bclr4",
        btn1: " btn-outline-dark",
        btn2: " ",
        btn3: " ",
        txt1: " clr3",
        txt2: " clr2",
        txt3: " clr1",
    },
    dark: {
        bg1: " Bclr6",
        bg2: " Bclr5",
        bg3: " Bclr4",
        bg4: " Bclr1",
        btn1: " btn-outline-light",
        btn2: " ",
        btn3: " ",
        txt1: " clr1",
        txt2: " clr2",
        txt3: " clr3",
    }
};

// used as a Context.provider in the router to pass state setState to change themes
export const ThemeContext = React.createContext();