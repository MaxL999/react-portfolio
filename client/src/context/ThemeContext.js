import React from 'react';

// names for custom color CSS classes
// light themes have white background with dirty foregrounds
// dark themes are black backgrounds with dark foregrounds
export const Themes = {
    light: {
        gnd1: " ",
        gnd2: " ",
        gnd3: " ",
        gnd4: " ",
        btn1: " ",
        btn2: " ",
        btn3: " ",
        txt1: " clr7",
        txt2: " clr5",
        txt3: " clr1",
    },
    dark: {
        gnd1: " ",
        gnd2: " ",
        gnd3: " ",
        gnd4: " ",
        btn1: " ",
        btn2: " ",
        btn3: " ",
        txt1: " clr1",
        txt2: " clr5",
        txt3: " clr7",
    }
};

// used as a Context.provider in the router to pass state setState to change themes
export const ThemeContext = React.createContext();