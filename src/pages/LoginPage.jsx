import React from 'react';
import LoginForm from 'components/LoginForm/LoginForm';

import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

import login_goose_rocket_desktop from '../images/login_register/login_goose_rocket_desktop.png';
import login_goose_rocket_desktop2x from '../images/login_register/login_goose_rocket_desktop@2x.png';

const LoginPage = () => {
    return (
        <WrapperRegister>
            <LoginForm />
            <LinkToLogin to="/register">Sign Up</LinkToLogin>
            <Picture>
                <source
                    srcSet={
                        (login_goose_rocket_desktop,
                        login_goose_rocket_desktop2x)
                    }
                    media="(min-width: 1200px)"
                />
                <img
                    srcSet={
                        (login_goose_rocket_desktop,
                        login_goose_rocket_desktop2x)
                    }
                    width={368}
                    height={521}
                    alt=""
                />
            </Picture>
        </WrapperRegister>
    );
};

const WrapperRegister = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #dcebf7;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`;

const LinkToLogin = styled(NavLink)`
    margin-top: 24px;

    color: #3e85f3;
    text-shadow: 0px 9.399999618530273px 57.6875px rgba(0, 0, 0, 0.04),
        0px 47px 355px rgba(0, 0, 0, 0.07);
    font-family: Inter;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px; /* 133.333% */
    text-decoration-line: underline;
`;

const Picture = styled.picture`
    position: absolute;
    top: 230px;
    right: 60px;
`;

export default LoginPage;
