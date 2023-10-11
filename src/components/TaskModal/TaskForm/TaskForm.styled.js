import styled from '@emotion/styled';

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

    @media (min-width: 768px) {
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

    @media (min-width: 768px) {
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
`;

export const TimeWrapper = styled.div`
    display: flex;
    gap: 14px;
    margin-top: 16px;

    @media (min-width: 768px) {
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

    color: ${({ theme }) => theme.colors.textPrimary};
    font-size: 14px;
    font-family: Inter;
    font-weight: 600;
    line-height: 18px;

    @media (min-width: 768px) {
        width: 163px;
        height: 46px;
        padding: 14px 18px;
    }

    &::-webkit-calendar-picker-indicator {
        display: none;
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

    transition: background-color 250ms linear;

    &:hover,
    &:focus {
        background-color: ${({ theme }) => theme.colors.backgroundBtnHover};
    }

    @media (min-width: 768px) {
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

    transition: background-color 250ms linear;

    &:hover,
    &:focus {
        background-color: ${({ theme }) => theme.colors.buttonAddTaskHover};
    }

    @media (min-width: 768px) {
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

    transition: stroke 300ms cubic-bezier(0.4, 0, 0.2, 1);

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
