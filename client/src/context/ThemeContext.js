import React from 'react';

// names for custom color CSS classes
export const Themes = {
    light: {
        fore: "LightFore",
        back: "LightBack"
    },
    dark: {
        fore: "DarkFore",
        back: "DarkBack"
    }
};

export const ThemeContext = React.createContext(Themes.light);