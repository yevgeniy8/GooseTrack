import { createContext, useContext, useState, useEffect } from 'react';
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import { LIGHT, DARK } from 'constants';

const ThemeContext = createContext();

export const useThemeContext = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
    const storedTheme = localStorage.getItem('theme');
    const [theme, setTheme] = useState(storedTheme === 'dark' ? DARK : LIGHT);

    const onChangeTheme = () => {
        const newTheme = theme === LIGHT ? DARK : LIGHT;
        setTheme(newTheme);
    };

    useEffect(() => {
        localStorage.setItem('theme', theme === DARK ? 'dark' : 'light');
    }, [theme]);

    return (
        <ThemeContext.Provider
            value={{
                theme,
                onChangeTheme,
            }}
        >
            <EmotionThemeProvider theme={theme}>
                {children}
            </EmotionThemeProvider>
        </ThemeContext.Provider>
    );
};
