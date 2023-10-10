import styled from '@emotion/styled';
import { Field, ErrorMessage } from 'formik';
import { NavLink } from 'react-router-dom';

import { mobile, tablet, min } from '../../styles/media';

export const ContainerForm = styled.div`
    max-width: 335px;
    max-height: 469px;
    border-radius: 8px;
    padding: 40px 24px;
    background-color: ${({ theme }) => theme.colors.white};

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
    color: ${({ theme }) => theme.colors.brand};
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
    color: ${({ theme }) => theme.colors.black};
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

    color: ${({ theme }) => theme.colors.black};
    outline: none;
    font-family: Inter;
    margin-bottom: 24px;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 18px; /* 112.5% */

    &:hover,
    &:focus {
        border: 1px solid ${({ theme }) => theme.colors.black};
    }

    ::placeholder {
        color: ${({ theme }) => theme.colors.placeholder};

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
    margin-bottom: 0;

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
    gap: 11px;

    border-radius: 16px;
    background-color: ${({ theme }) => theme.colors.brand};
    box-shadow: 4px 2px 16px 0px rgba(136, 165, 191, 0.48);

    border: none;
    outline: none;

    color: ${({ theme }) => theme.colors.white};
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 18px;
    letter-spacing: -0.28px;
    stroke: ${({ theme }) => theme.colors.white};
    fill: ${({ theme }) => theme.colors.brand};

    transition: ${({ theme }) =>
        `background-color ${theme.animations.duration} ${theme.animations.cubicBezier}, color ${theme.animations.duration} ${theme.animations.cubicBezier}, fill ${theme.animations.duration} ${theme.animations.cubicBezier}, stroke ${theme.animations.duration} ${theme.animations.cubicBezier},`};
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
        &:hover {
            background-color: ${({ theme }) => theme.colors.backgroundBtnHover};
            color: ${({ theme }) => theme.colors.white};
            fill: ${({ theme }) => theme.colors.backgroundBtnHover};
            stroke: ${({ theme }) => theme.colors.white};
        }
    }
`;

// export const Svg = styled.svg`
//     stroke: white;
//     fill: ${({ theme }) => theme.colors.brand};
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
    color: ${({ theme }) => theme.colors.brand};
    text-shadow: 0px 9.399999618530273px 57.6875px rgba(0, 0, 0, 0.04),
        0px 47px 355px rgba(0, 0, 0, 0.07);
    font-family: Inter;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px; /* 100% */
    transition: ${({ theme }) =>
        ` color ${theme.animations.duration} ${theme.animations.cubicBezier}`};

    &:hover,
    &:focus {
        color: ${({ theme }) => theme.colors.backgroundBtnHover};
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
