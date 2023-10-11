import styled from 'styled-components';
import { Field } from 'formik';

export const RadioField = styled(Field)`
    position: absolute;
    opacity: 0;
    cursor: pointer;
`;

export const RadioLabel = styled.label`
    position: relative;
    padding-left: 16px;
    display: flex;
    align-items: center;
    margin-top: 16px;

    font-size: 12px;
    font-family: Inter;
    font-weight: 600;
    line-height: 14px;
    cursor: pointer;

    @media (min-width: 768px) {
        font-size: 14px;
        line-height: 18px;
        margin-top: 28px;
    }
`;

export const RadioSpan = styled.span`
    position: absolute;
    left: 0;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: ${({ value }) => {
        switch (value) {
            case 'low':
                return '#72C2F8';
            case 'medium':
                return '#F3B249';
            case 'high':
                return '#EA3D65';
            default:
                return 'black';
        }
    }};

    ${RadioLabel}:nth-child(1) ${RadioField}:checked + & {
        outline: 1.2px solid #72c2f8;
        outline-offset: 1px;
    }

    ${RadioLabel}:nth-child(2) ${RadioField}:checked + & {
        outline: 1.2px solid #f3b249;
        outline-offset: 1px;
    }

    ${RadioLabel}:nth-child(3) ${RadioField}:checked + & {
        outline: 1.2px solid #ea3d65;
        outline-offset: 1px;
    }
`;
