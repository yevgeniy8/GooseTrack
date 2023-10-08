import styled from '@emotion/styled';
import { Field, ErrorMessage } from 'formik';
import { NavLink } from 'react-router-dom';

import { mobile, tablet, min } from '../../styles/media';

export const ContainerForm = styled.div`
    max-width: 335px;
    max-height: 469px;
    border-radius: 8px;
    padding: 40px 24px;
    background-color: #fff;

    /* @media screen and (min-width: ${({ theme }) => theme.breakpoints.m}) {
        width: 100%;
        padding: 40px 40px;
        max-width: 480px;
        max-height: 521px;
    } */

    ${min(tablet)} {
        width: 100%;
        padding: 40px 40px;
        max-width: 480px;
        max-height: 521px;
    }
`;

export const Title = styled.h1`
    margin-bottom: 32px;
    color: #3e85f3;
    text-shadow: 0px 9.399999618530273px 57.6875px rgba(0, 0, 0, 0.04),
        0px 47px 355px rgba(0, 0, 0, 0.07);
    font-family: Inter;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px; /* 100% */

    ${min(tablet)} {
        margin-bottom: 40px;
        font-size: 24px;
    }
`;

export const Label = styled.label`
    position: relative;
`;

export const Span = styled.span`
    display: block;
    color: #111;
    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;

    margin-bottom: 8px;

    ${min(tablet)} {
        font-size: 14px;
    }
`;

export const InputForm = styled(Field)`
    padding: 14px;
    width: 100%;
    height: 46px;
    border-radius: 8px;
    border: 1px solid rgba(220, 227, 229, 0.6);

    border-color: ${({ errors, touched }) =>
        touched
            ? errors
                ? '#E74A3B;'
                : '#3CBC81'
            : 'rgba(220, 227, 229, 0.6)'};

    color: #111;
    outline: none;
    font-family: Inter;
    margin-bottom: 24px;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 18px; /* 112.5% */

    &:hover,
    &:focus {
        border: 1px solid #111;
    }

    ::placeholder {
        color: #dce3e5;

        font-weight: 400;
    }

    /* @media screen and (min-width: ${({ theme }) => theme.breakpoints.m}) {
        padding: 18px;
        margin-bottom: 18px;

        font-size: 16px;
    } */

    ${min(tablet)} {
        padding: 18px;
        margin-bottom: 18px;
        height: 54px;
        font-size: 16px;
    }
`;

export const InputFormMargin0 = styled(InputForm)`
    /* @media screen and (min-width: ${({ theme }) => theme.breakpoints.s}) {
        margin-bottom: 0;
    } */

    ${min(mobile)} {
        margin-bottom: 0;
    }
`;

export const Button = styled.button`
    width: 287px;
    margin-top: 32px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 14px;
    /* padding-bottom: 14px;
    padding-top: 14px; */
    gap: 11px;

    border-radius: 16px;
    background: #3e85f3;
    box-shadow: 4px 2px 16px 0px rgba(136, 165, 191, 0.48);

    border: none;
    outline: none;

    color: #fff;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 18px;
    letter-spacing: -0.28px;
    stroke: white;
    fill: #3e85f3;

    transition: all 500ms cubic-bezier(0.4, 0, 0.2, 1);

    &:hover,
    &:focus {
        background-color: #1d56ac;
        color: ${({ theme }) => theme.colors.white};
        fill: #1d56ac;
        stroke: white;
    }

    /* @media screen and (min-width: ${({ theme }) => theme.breakpoints.m}) {
        margin-top: 48px;
        width: 400px;
        padding: 16px 152px;
        font-size: 18px;
        line-height: 24px;
        letter-spacing: -0.36px;
    } */

    ${min(tablet)} {
        margin-top: 48px;
        width: 400px;
        padding: 16px 152px;
        font-size: 18px;
        line-height: 24px;
        letter-spacing: -0.36px;
    }
`;

// export const Svg = styled.svg`
//     stroke: white;
//     fill: #3e85f3;
//     width: 18px;
//     height: 18px;
// `;

export const ButtonEye = styled.svg`
    position: absolute;
    top: 70%;
    left: 75%;
    width: 24px;
    height: 24px;
    outline: none;
    border: none;
    cursor: pointer;

    /* @media screen and (min-width: ${({ theme }) => theme.breakpoints.m}) {
        position: absolute;
        top: 70%;
        left: 85%;
    } */

    ${min(tablet)} {
        position: absolute;
        top: 70%;
        left: 85%;
    }
`;

export const Error = styled(ErrorMessage)`
    position: absolute;
    bottom: -37px;
    left: 0;
    margin-left: 18px;

    color: #da1414;
    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.16; /* 116.667% */
`;

export const ErrorMes = styled.span`
    position: absolute;
    bottom: -37px;
    left: 18px;
    color: #3cbc81;
    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.16; /* 116.667% */
`;

export const SvgStatus = styled.svg`
    position: absolute;
    fill: ${({ error }) => (!error ? 'green' : 'red')};
    right: 14px;
    top: 83%;
    transform: translateY(-50%);
`;

export const Home = styled(NavLink)`
    margin-bottom: 32px;
    color: #3e85f3;
    text-shadow: 0px 9.399999618530273px 57.6875px rgba(0, 0, 0, 0.04),
        0px 47px 355px rgba(0, 0, 0, 0.07);
    font-family: Inter;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px; /* 100% */
    transition: all 500ms cubic-bezier(0.4, 0, 0.2, 1);

    &:hover,
    &:focus {
        color: #1d56ac;
    }

    ${min(tablet)} {
        margin-bottom: 40px;
        font-size: 24px;
    }
`;

export const TitleContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
