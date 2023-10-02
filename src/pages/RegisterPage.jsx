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
                    media="(min-width: 1200px)"
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

const WrapperRegister = styled.body`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #dcebf7;
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
    top: 354px;
    left: 49px;
`;

export default RegisterPage;
