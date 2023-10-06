import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const AuthSectContainer = styled.div`
    height: 100vh;
    background-color: ${({ theme }) => theme.colors.brand};
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
    font-weight: ${({ theme }) => theme.fontWeight.b};
    line-height: calc(48 / 44);
    letter-spacing: 0em;
    /* text-align: left; */
    margin-bottom: 40px;
    color: ${({ theme }) => theme.colors.white};

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
    font-size: ${({ theme }) => theme.fontSizes.xs};
    font-weight: ${({ theme }) => theme.fontWeight.sb};
    line-height: calc(14 / 12);
    letter-spacing: 0em;
    color: ${({ theme }) => theme.colors.white};
    text-decoration: underline;
    text-shadow: ${({ theme }) => theme.shadows.text};

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.m}) {
        font-size: ${({ theme }) => theme.fontSizes.s};
        line-height: calc(18 / 14);
    }
`;

export const Login = styled(NavLink)`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 6px;
    padding: 14px 22px;
    min-width: 131px;
    font-size: ${({ theme }) => theme.fontSizes.s};
    font-weight: ${({ theme }) => theme.fontWeight.sb};
    line-height: calc(18 / 14);
    letter-spacing: -0.02em;
    border-radius: ${({ theme }) => theme.borderRadius.m};
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.brand};

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.m}) {
        min-width: 121px;
    }
`;

export const Svg = styled.svg`
    fill: ${({ theme }) => theme.colors.white};
    stroke: ${({ theme }) => theme.colors.brand};
`;
