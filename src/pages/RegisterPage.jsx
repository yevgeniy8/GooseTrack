import React from 'react';
import RegisterForm from 'components/RegisterForm/RegisterForm';

import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

import register_goose_rocket_desktop from '../images/login_register/register_goose_rocket_desktop.png';
import register_goose_rocket_desktop2x from '../images/login_register/register_goose_rocket_desktop@2x.png';

const RegisterPage = () => {
    return (
        <WrapperRegister>
            <RegisterForm />
            <LinkToLogin to="/login">Log In</LinkToLogin>
            <Picture>
                <source
                    srcSet={
                        (register_goose_rocket_desktop,
                        register_goose_rocket_desktop2x)
                    }
                    media="(min-width: 1440px)"
                />
                <img
                    srcSet={
                        (register_goose_rocket_desktop,
                        register_goose_rocket_desktop2x)
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
    border-radius: 16px;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
        color 250ms cubic-bezier(0.4, 0, 0.2, 1);

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.m}) {
        margin-top: 24px;
        font-size: 18px;
        line-height: 24px;
        width: 400px;
        &:hover {
            background-color: ${({ theme }) => theme.colors.backgroundBtnHover};
            color: ${({ theme }) => theme.colors.white};
        }
    }
`;

const Picture = styled.picture`
    display: none;

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.l}) {
        display: block;
        position: absolute;
        top: 354px;
        left: 49px;
    }
`;

export default RegisterPage;
