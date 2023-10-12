import { UserForm } from 'components/UserForm/UserForm';
import { useThemeContext } from 'hooks/ThemeContext';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

    body {
        background-color: ${({ theme }) => theme.colors.backgroundPrimary};
    }
`;

const AccountPage = () => {
    const { theme } = useThemeContext();

    return (
        <div>
            <GlobalStyles theme={theme} />
            <UserForm />
        </div>
    );
};

export default AccountPage;
