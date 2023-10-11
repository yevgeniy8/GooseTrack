import React from 'react';

import { Error } from 'components/Error/Error';

import { useThemeContext } from 'hooks/ThemeContext';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

    body {
        background-color: ${({ theme }) => theme.colors.backgroundPrimary};
    }
`;

const ErrorPage = () => {
    const { theme } = useThemeContext();

    return (
        <div>
            <GlobalStyles theme={theme} />
            <Error />
        </div>
    );
};

export default ErrorPage;
