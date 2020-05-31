import React from 'react';

export const Themes = {
    light: {
        light: true,
        foreground: "#000000",
        background: "#eeeeee"
    },
    dark: {
        light: false,
        foreground: "#ffffff",
        background: "#222222"
    }
};

export const ThemeContext = React.createContext();