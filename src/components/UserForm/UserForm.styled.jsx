import styled from '@emotion/styled';
import { Form } from 'formik';
import { Field, ErrorMessage } from 'formik';
import { motion } from 'framer-motion';

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    max-width: 299px;
    padding-top: 59px;
    padding-left: 18px;
    padding-right: 18px;
    padding-bottom: 40px;
    border-radius: 16px;
    background-color: #fff;
    @media (min-width: 768px) {
        max-width: 704px;
    }
    @media (min-width: 1140px) {
        max-width: 1087px;
    }
`;

export const AvatarContainer = styled(motion.div)`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 40px;
    margin-left: auto;
    margin-right: auto;
`;
export const ImgContainer = styled.div`
    margin-bottom: 18px;
    width: 72px;
    height: 76px;
    @media (min-width: 768px) {
        width: 124px;
        height: 130px;
        margin-bottom: 20px;
    }
`;

export const ImgAvatar = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 50%;

    object-fit: cover;
    object-position: 50% 50%;
    margin-bottom: 18px;
`;

export const InputFile = styled.input`
    position: absolute;
    top: 39px;
    left: 32px;
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
    color: #343434;
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
    color: #343434;
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
    margin: 0 auto;
    @media (min-width: 768px) {
        max-width: 354px;
        margin: 0 auto;
    }
    @media (min-width: 1140px) {
        max-width: 758px;
    }
`;

export const FieldsWrap = styled(motion.div)`
    width: 100%;
    @media (min-width: 1140px) {
        max-width: 758px;
        display: grid;
        grid-template: repeat(3, 1fr) / repeat(2, 1fr);
        justify-content: center;
        gap: 18px 50px;
    }
`;
// export const Wrapper = styled.div`
//     width: 299px;
//     @media (min-width: 768px) {
//         max-width: 354px;
//     }
//     @media (min-width: 1140px) {
//     }
// `;

export const Label = styled.label`
    position: relative;
`;

export const Span = styled.span`
    display: block;
    color: #111;
    font-family: Inter;
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
    margin-bottom: 18px;
    @media (min-width: 768px) {
        margin-bottom: 24px;
    }
    @media (min-width: 1140px) {
        width: 354px;
    }
`;

export const InputForm = styled(Field)`
    width: 100%;
    padding: 12px;
    border-radius: 8px;
    border: 1px solid rgba(220, 227, 229, 0.6);

    outline: none;
    font-family: Inter;

    line-height: 1.28;

    &:hover,
    &:focus {
        border: 1px solid #111;
    }

    ::placeholder {
        color: #111;
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
            color: #111;
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
    margin-top: 30px;
    /* width: 195px; */
    padding: 14px 50px;
    align-self: center;
    border: none;
    outline: none;

    border-radius: 16px;
    background: #3e85f3;
    box-shadow: 4px 2px 16px 0px rgba(136, 165, 191, 0.48);

    color: #fff;
    font-family: Inter;
    font-size: 14px;
    font-weight: 600;
    line-height: 1.333;
    letter-spacing: -0.36px;
    @media (min-width: 768px) {
        padding: 15px 84px;
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
