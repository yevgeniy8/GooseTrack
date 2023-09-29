import styled from '@emotion/styled';
import { Field, ErrorMessage } from 'formik';

export const ContainerForm = styled.div`
    width: 100%;
    max-width: 480px;
    max-height: 521px;
    padding: 40px;
    border-radius: 8px;
    background-color: #fff;
`;

export const Title = styled.h1`
    margin-bottom: 40px;
    color: #3e85f3;
    text-shadow: 0px 9.399999618530273px 57.6875px rgba(0, 0, 0, 0.04),
        0px 47px 355px rgba(0, 0, 0, 0.07);
    font-family: Inter;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px; /* 100% */
`;

export const Label = styled.label`
    position: relative;
`;

export const Span = styled.span`
    display: block;
    color: #111;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;

    margin-bottom: 8px;
`;

export const InputForm = styled(Field)`
    width: 100%;
    padding: 18px;
    border-radius: 8px;
    border: 1px solid rgba(220, 227, 229, 0.6);

    color: #111;
    outline: none;
    font-family: Inter;
    margin-bottom: 18px;

    font-size: 16px;
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
`;

export const InputFormMargin0 = styled(InputForm)`
    margin-bottom: 0;
`;

export const Button = styled.button`
    margin-top: 48px;

    display: flex;
    width: 400px;
    padding: 16px 152px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 11px;

    border: none;
    outline: none;

    border-radius: 16px;
    background: #3e85f3;
    box-shadow: 4px 2px 16px 0px rgba(136, 165, 191, 0.48);

    color: #fff;
    font-family: Inter;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px; /* 133.333% */
    letter-spacing: -0.36px;
`;

export const Svg = styled.svg`
    stroke: white;
    fill: #3e85f3;
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
    line-height: 14px; /* 116.667% */
`;
