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
                    media="(min-width: 1440px)"
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
    width: 287px;
    text-align: center;
    margin-top: 18px;
    display: block;
    color: #3e85f3;
    text-shadow: 0px 9.399999618530273px 57.6875px rgba(0, 0, 0, 0.04),
        0px 47px 355px rgba(0, 0, 0, 0.07);
    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: 14px;
    text-decoration-line: underline;
    padding: 14px 103px;
    padding-bottom: 14px;
    padding-top: 14px;
    transition: all 500ms cubic-bezier(0.4, 0, 0.2, 1);

    &:hover,
    &:focus {
        background-color: #1d56ac;
        color: ${({ theme }) => theme.colors.white};
        border-radius: 16px;
        box-shadow: 4px 2px 16px 0px rgba(136, 165, 191, 0.48);
    }

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.m}) {
        margin-top: 24px;
        font-size: 18px;
        line-height: 24px;
        width: 400px;
    }
`;

const Picture = styled.picture`
    display: none;

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.l}) {
        display: block;
        position: absolute;
        top: 230px;
        right: 60px;
    }
`;

export default LoginPage;
