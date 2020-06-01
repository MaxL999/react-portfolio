import React from 'react';

// names for custom color CSS classes
// bg1 is background, bg4 is forground
export const Themes = {
    light: {
        bg1: " Bclr1",
        bg2: " Bclr3",
        bg3: " Bclr5",
        bg4: " Bclr7",
        btn1: " btn-outline-light",
        btn2: " ",
        btn3: " ",
        txt1: " clr10",
        txt2: " clr8",
        txt3: " clr1",
    },
    dark: {
        bg1: " Bclr10",
        bg2: " Bclr8",
        bg3: " Bclr6",
        bg4: " Bclr4",
        btn1: " btn-outline-dark",
        btn2: " ",
        btn3: " ",
        txt1: " clr1",
        txt2: " clr8",
        txt3: " clr10",
    }
};

// used as a Context.provider in the router to pass state setState to change themes
export const ThemeContext = React.createContext();