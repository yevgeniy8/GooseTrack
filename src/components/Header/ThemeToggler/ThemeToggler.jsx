import { LIGHT } from 'constants';
import { useThemeContext } from 'hooks/ThemeContext';
import { ToggleBtn, Svg } from './ThemeToggler.styled';
import sprite from 'images/icons.svg';

const ThemeToggler = () => {
  const { theme, onChangeTheme } = useThemeContext();
  const isLightTheme = theme === LIGHT;

  return (
    <ToggleBtn aria-label="change-theme" type="button" onClick={onChangeTheme}>
      {isLightTheme ? (
        <Svg>
          <use href={`${sprite}#moon`} />
        </Svg>
      ) : (
        <Svg>
          <use href={`${sprite}#sun`} />
        </Svg>
      )}
    </ToggleBtn>
  );
};

export default ThemeToggler;
