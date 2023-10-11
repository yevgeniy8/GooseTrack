import styled from '@emotion/styled/macro';
import { tablet, min } from 'styles/media';
import {
    Form as FormikForm,
    Field,
    ErrorMessage as FormikErrorMessage,
} from 'formik';

export const Form = styled(FormikForm)`
    position: relative;
    width: 303px;
    max-height: 420px;
    padding: 48px 18px 40px;
    background-color: ${({ theme }) => theme.colors.backgroundModalTask};

    border-radius: 8px;
    border: ${({ theme }) => theme.borders.modalTask};
    box-shadow: ${({ theme }) => theme.shadows.modalTask};

    ${min(tablet)} {
        width: 396px;
        padding: 40px 28px;
    }
`;

export const Label = styled.label`
    display: flex;
    flex-direction: column;
    gap: 8px;

    color: ${({ theme }) => theme.colors.textTitleModalTask};

    font-size: 12px;
    font-family: Inter;
    font-weight: 500;
    line-height: 14px;
`;

export const InputTitle = styled(Field)`
    width: 267px;
    height: 42px;
    padding: 12px 14px;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.colors.backgroundModalTaskForm};
    border: ${({ theme }) => theme.borders.feedbackInput};

    color: ${({ theme }) => theme.colors.textPrimary};
    font-size: 14px;
    font-family: Inter;
    font-weight: 600;
    line-height: 18px;
    outline: none;

    transition: ${({ theme }) =>
        `border ${theme.animations.duration} ${theme.animations.cubicBezier}`};

    ${min(tablet)} {
        width: 340px;
        height: 46px;
        padding: 14px 18px;
    }

    &::placeholder {
        opacity: 1;
        color: ${({ theme }) => theme.colors.textPrimary};
        font-size: 14px;
        font-family: Inter;
        font-weight: 600;
        line-height: 18px;
    }

    &:hover,
    &:focus {
        border: ${({ theme }) => theme.borders.inputHover};
    }
`;

export const TimeWrapper = styled.div`
    display: flex;
    gap: 14px;
    margin-top: 16px;

    ${min(tablet)} {
        margin-top: 18px;
    }
`;

export const InputTime = styled(Field)`
    width: 126px;
    height: 42px;
    padding: 12px 14px;
    border-radius: 8px;
    background: ${({ theme }) => theme.colors.backgroundModalTaskForm};
    border: ${({ theme }) => theme.borders.feedbackInput};
    cursor: pointer;
    outline: none;

    color: ${({ theme }) => theme.colors.textPrimary};
    font-size: 14px;
    font-family: Inter;
    font-weight: 600;
    line-height: 18px;

    transition: ${({ theme }) =>
        `border ${theme.animations.duration} ${theme.animations.cubicBezier}`};

    ${min(tablet)} {
        width: 163px;
        height: 46px;
        padding: 14px 18px;
    }

    &::-webkit-calendar-picker-indicator {
        display: none;
    }

    &:hover,
    &:focus {
        border: ${({ theme }) => theme.borders.inputHover};
    }
`;

export const RadioWrapper = styled.div`
    display: flex;
    gap: 16px;
`;

export const ButtonWrapper = styled.div`
    display: flex;
    gap: 14px;
    margin-top: 32px;
`;

export const ButtonAction = styled.button`
    display: flex;
    width: 135px;
    height: 42px;
    justify-content: center;
    align-items: center;
    gap: 8px;
    padding: 12px;

    border-radius: 8px;
    border: none;
    background-color: ${({ theme }) => theme.colors.brand};
    cursor: pointer;

    color: ${({ theme }) => theme.colors.white};
    text-align: center;
    font-size: 14px;
    font-family: Inter;
    font-weight: 600;
    line-height: 18px;

    transition: ${({ theme }) =>
        `background-color ${theme.animations.duration} ${theme.animations.cubicBezier}`};

    &:hover,
    &:focus {
        background-color: ${({ theme }) => theme.colors.backgroundBtnHover};
    }

    ${min(tablet)} {
        width: 182px;
        height: 48px;
        padding: 15px;
    }
`;

export const ButtonCancel = styled.button`
    width: 118px;
    height: 42px;
    padding: 12px;

    border-radius: 8px;
    border: none;
    background: ${({ theme }) => theme.colors.backgroundModalTaskCanceled};
    cursor: pointer;

    color: ${({ theme }) => theme.colors.black};
    text-align: center;
    font-size: 14px;
    font-family: Inter;
    font-weight: 600;
    line-height: 18px;

    transition: ${({ theme }) =>
        `background-color ${theme.animations.duration} ${theme.animations.cubicBezier}`};

    &:hover,
    &:focus {
        background-color: ${({ theme }) =>
            theme.colors.backgroundBtnCancelHover};
    }

    ${min(tablet)} {
        width: 182px;
        height: 48px;
        padding: 15px;
    }
`;

export const ButtonCloseWrap = styled.button`
    position: absolute;
    top: 14px;
    right: 18px;

    width: 24px;
    height: 24px;
    border-radius: 50%;
    border: none;
    background-color: transparent;
    cursor: pointer;
    stroke: ${({ theme }) => theme.colors.textTitleHeader};

    transition: ${({ theme }) =>
        `stroke ${theme.animations.duration} ${theme.animations.cubicBezier}`};

    &:hover,
    &:focus {
        stroke: ${({ theme }) => theme.colors.backgroundBtnHover};
    }
`;

export const ErrorMessage = styled(FormikErrorMessage)`
    margin-left: 18px;
    max-width: 100%;
    color: ${({ theme }) => theme.colors.error};
    font-size: 12px;
    font-family: Inter;
    line-height: 14px;
`;
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
    color: ${({ theme }) => theme.colors.textPrimary};
    font-size: 12px;
    font-family: Inter;
    font-weight: 600;
    line-height: 14px;
    cursor: pointer;

    ${min(tablet)} {
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

    ${RadioLabel} ${RadioField}:checked + & {
        outline-offset: 1px;
        outline: 1.2px solid
            ${({ value }) => {
                const colors = {
                    low: '#72C2F8',
                    medium: '#F3B249',
                    high: '#EA3D65',
                    default: 'black',
                };
                return colors[value] || colors['default'];
            }};
    }
`;
