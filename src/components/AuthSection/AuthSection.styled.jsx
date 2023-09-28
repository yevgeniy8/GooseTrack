import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const AuthSectContainer = styled.div`
    height: 100vh;
    background-color: #3e85f3;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Content = styled.div`
    margin: 0 auto;
    text-align: center;
`;

export const WrapperImage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Image = styled.img`
    width: 150px;
    height: 149px;
    text-align: center;
`;

export const Title = styled.h1`
    font-family: Inter;
    font-size: 120px;
    /* font-style: italic; */
    font-weight: 700;
    line-height: 150px;
    letter-spacing: 0em;
    /* text-align: left; */
    margin-bottom: 40px;
    color: #ffffff;
`;

export const SpanTitle = styled.span`
    font-style: italic;
    padding-right: 10px;
`;

export const Nav = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 24px;
`;

export const Register = styled(NavLink)`
    font-family: Inter;
    font-size: 14px;
    font-weight: 600;
    line-height: 18px;
    letter-spacing: 0em;
    color: #ffffff;
    text-decoration: underline;
`;

export const Login = styled(NavLink)`
    font-family: Inter;
    font-size: 14px;
    font-weight: 600;
    line-height: 18px;
    letter-spacing: -0.02em;
    padding: 14px 22px;
    border-radius: 16px;
    background-color: #ffffff;
    color: #3e85f3;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 6px;
`;

export const Svg = styled.svg`
    fill: white;
    stroke: #3e85f3;
`;
