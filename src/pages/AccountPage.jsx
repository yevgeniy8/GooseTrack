import { UserForm } from 'components/UserForm/UserForm';

import { createGlobalStyle } from 'styled-components';

const AccountPage = () => {
    return (
        <div>
            <Global />
            <UserForm />
        </div>
    );
};

const Global = createGlobalStyle`
    body {
        background-color: ${() => {
            return localStorage.getItem('theme') === 'light'
                ? '#F7F6F9'
                : '#171820';
        }};
    }
`;

export default AccountPage;
