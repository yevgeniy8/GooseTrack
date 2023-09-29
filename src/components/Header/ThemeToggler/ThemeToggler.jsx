import { LIGHT } from 'constants';
import { useThemeContext } from './ThemeContext';
import { ToggleBtn } from './ThemeToggler.styled';

const ThemeToggler = () => {
    const { theme, onChangeTheme } = useThemeContext();
    const isLightTheme = theme === LIGHT;

    return (
        <ToggleBtn onClick={onChangeTheme}>
            {isLightTheme ? 'DARK' : 'LIGHT'}
        </ToggleBtn>
    );
};

export default ThemeToggler;
