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
    width: 142px;
    height: 142px;
    text-align: center;

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.m}) {
        width: 150px;
        height: 149px;
    }
`;

export const Title = styled.h1`
    font-size: 44px;
    /* font-style: italic; */
    font-weight: 700;
    line-height: calc(48 / 44);
    letter-spacing: 0em;
    /* text-align: left; */
    margin-bottom: 40px;
    color: #ffffff;

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.m}) {
        font-size: 100px;
        line-height: calc(130 / 100);
    }

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.l}) {
        font-size: 120px;
        line-height: calc(150 / 120);
    }
`;

export const SpanTitle = styled.span`
    font-style: italic;
    padding-right: 10px;
    margin-left: -5px;
`;

export const Nav = styled.nav`
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    gap: 16px;

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.m}) {
        flex-direction: row;
        gap: 24px;
    }
`;

export const Register = styled(NavLink)`
    font-family: Inter;
    font-size: 12px;
    font-weight: 600;
    line-height: calc(14 / 12);
    letter-spacing: 0em;
    color: #ffffff;
    text-decoration: underline;
    text-shadow: 0px 9.399999618530273px 57.6875px rgba(0, 0, 0, 0.04),
        0px 47px 355px rgba(0, 0, 0, 0.07);

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.m}) {
        font-size: 14px;
        line-height: calc(18 / 14);
    }
`;

export const Login = styled(NavLink)`
    min-width: 131px;
    font-family: Inter;
    font-size: 14px;
    font-weight: 600;
    line-height: calc(18 / 14);
    letter-spacing: -0.02em;
    padding: 14px 22px;
    border-radius: 16px;
    background-color: #ffffff;
    color: #3e85f3;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 6px;

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.m}) {
        min-width: 121px;
    }
`;

export const Svg = styled.svg`
    fill: white;
    stroke: #3e85f3;
`;
