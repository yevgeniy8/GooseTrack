import styled from '@emotion/styled';

import { Field, ErrorMessage, Form } from 'formik';
import { motion } from 'framer-motion';

export const MainContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 31px auto 0;
    max-width: 355px;
    position: relative;
    padding: 135px 18px 0 18px;

    border-radius: 16px;
    background-color: ${({ theme }) => theme.colors.backgroundSecondary};
    transition: ${({ theme }) =>
        `background-color ${theme.animations.duration} ${theme.animations.cubicBezier}`};
    @media (min-width: 768px) {
        padding: 40px 175px 0 175px;
    }
    @media (min-width: 768px) {
        margin: 0 auto;
        max-width: 704px;
        padding: 60px 164px 0 164px;
    }
    @media (min-width: 1440px) {
        max-width: 1087px;
    }
`;


export const AvatarContainer = styled(motion.div)`
    @media (max-width: 767px) {
        position: absolute;
        top: 12px;
        left: 40%;
        transform: translateX(-50%);
    }
    @media (min-width: 768px) {
        position: static;
        margin-top: 51px;
        margin-bottom: 0px;
    }

    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 40px;
    margin-left: auto;
    margin-right: auto;
`;

export const ImgContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 18px;
    width: 72px;
    height: 76px;
    border: 2px solid #3e85f3;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.backgroundSecondary};
    @media (min-width: 768px) {
        width: 124px;
        height: 124px;
        margin-bottom: 20px;
    }
    transition: ${({ theme }) =>
        `background-color ${theme.animations.duration} ${theme.animations.cubicBezier}`};
`;

export const ImgAvatar = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
   
`;

export const InputFile = styled(Field)`
    position: absolute;
    top: 55px;
    left: 34px;
    width: 50px;
    opacity: 0;
    z-index: 2;
    @media (min-width: 768px) {
        top: 114px;
        left: 62px;
    }
`;

export const SvgPlus = styled.svg`
    stroke: white;
    fill: #3e85f3;
    position: absolute;
    top: 60px;
    left: 48px;
    cursor: pointer;
    @media (min-width: 768px) {
        top: 112px;
        left: 84px;
        width: 24px;
        height: 24px;
    }
`;

export const UserName = styled.h2`
    color: ${({ theme }) => theme.colors.textPrimary};
    font-family: Inter;
    font-size: 14px;
    font-weight: 700;
    line-height: 1.285;
    @media (min-width: 768px) {
        margin-bottom: 8px;
        font-size: 18px;
    }
`;

export const UserP = styled.p`
    color: ${({ theme }) => theme.colors.textPrimary};
    font-size: 12px;
    font-weight: 600;
    font-family: Inter;
    line-height: 1.1666;
    @media (min-width: 768px) {
        font-size: 14px;
    }
`;

export const StyledForm = styled(Form)`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;

export const FieldsWrap = styled(motion.div)`
    width: 100%;
    margin-top: 40px;
    @media (min-width: 1440px) {
        max-width: 758px;
        display: grid;
        grid-template: repeat(3, 1fr) / repeat(2, 1fr);
        justify-content: center;
        gap: 18px 50px;
    }
`;

export const Label = styled.label`
    position: relative;
`;

export const Span = styled.span`
    display: block;
    color: ${({ theme }) => theme.colors.textPrimary};
    font-size: 12px;
    line-height: 1.166;
    margin-bottom: 8px;
    @media (min-width: 768px) {
        font-size: 14px;
    }
    line-height: 1.285;
`;

export const LabelWrap = styled.div`
    width: 100%;
    &:not(:last-child) {
        margin-bottom: 18px;
    }
    @media (min-width: 768px) {
        &:not(:last-child) {
            margin-bottom: 24px;
        }
    }
    @media (min-width: 1440px) {
        width: 354px;
    }
`;

export const InputForm = styled(Field)`
    width: 100%;
    padding: 12px;
    border-radius: 8px;
    border: 1px solid rgba(220, 227, 229, 0.6);
    outline: none;
    line-height: 1.28;
    background-color: ${({ theme }) => theme.colors.backgroundSecondary};
    color:${({ theme }) => theme.colors.textPrimary};
    &:hover,
    &:focus {
        border: 1px solid #111;
    }
    ::placeholder {
        color: ${({ theme }) => theme.colors.textPrimary};
        font-weight: 600;
        font-size: 14px;
    }

    &.input-error {
        border: 1px solid #e74a3b;
    }

    &.input-valid {
        border: 1px solid #3cbc81;
    }
    @media (min-width: 768px) {
        padding: 14px;
        ::placeholder {
            color:${({ theme }) => theme.colors.textPrimary};
            font-weight: 600;
            font-size: 16px;
        }
    }
`;

export const IconDone = styled.svg`
    position: absolute;
    top: 35px;
    right: 18px;
    fill: #3cbc81;
`;

export const IconErr = styled.svg`
    position: absolute;
    top: 35px;
    right: 18px;
    fill: #e74a3b;
`;
export const Button = styled(motion.button)`
    // margin: 40px 0;
    /* width: 195px; */
    margin: 20px 0;
    padding: 14px 50px;
    align-self: center;
    border: none;
    outline: none;

    border-radius: 16px;
    background: #3e85f3;
    box-shadow: 4px 2px 16px 0px rgba(136, 165, 191, 0.48);

    color: #fff;
    font-size: 14px;
    font-weight: 600;
    line-height: 1.333;
    letter-spacing: -0.36px;
    transition: background-color 500ms cubic-bezier(0.4, 0, 0.2, 1);

    &:hover,
    &:focus {
        background-color: #1d56ac;
        color: ${({ theme }) => theme.colors.white};
    }
    @media (min-width: 768px) {
        padding: 15px 84px;
    }

    @media (min-width: 1440px) {
        margin: 48px 0 26px 0;
    }

    &:disabled {
        opacity: 0.75;
    }
`;

export const Error = styled(ErrorMessage)`
    position: absolute;
    bottom: -28px;
    left: 0;

    color: #da1414;
    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 14px;
    @media (min-width: 768px) {
        bottom: -33px;
        left: 6px;
    }
`;
