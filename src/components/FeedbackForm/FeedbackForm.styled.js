import styled from '@emotion/styled';
import { tablet, min, desktop } from '../../styles/media';

import { Field, ErrorMessage as FormikErrorMessage } from 'formik';

export const Wrap = styled.div`
    position: relative;
    text-align: left;
    padding: 28px 20px;
    border: 1px solid rgba(220, 227, 229, 0.8);
    border-radius: 8px;
    width: 335px;
    background: ${({ theme }) => theme.colors.backgroundModal};
    box-shadow: ${({ theme }) => theme.shadows.feedbackForm};

    ${min(tablet)} {
        width: 468px;
        padding: 32px;
    }
`;

export const Label = styled.label`
    color: ${({ theme }) => theme.colors.textTitleModalTask};
    /* background: ${({ theme }) => theme.colors.backgroundPrimary}; */
    display: block;
    margin-bottom: 8px;
    font-weight: ${({ theme }) => theme.fontWeight.m};
    font-size: ${({ theme }) => theme.fontSizes.xs};
    line-height: calc((14 / 12) * 100%);
`;

export const WrapForReview = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    margin-bottom: 8px;
`;

export const WrapForEdit = styled.div`
    display: flex;
    gap: 8px;
`;

export const EditBtn = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.backgroundPencil};
    border: none;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    stroke: ${({ theme }) => theme.colors.editBtn};
    background-color: ${({ theme }) => theme.colors.backgroundEditBtn};

    transition: ${({ theme }) =>
        `background-color ${theme.animations.duration} ${theme.animations.cubicBezier}, stroke ${theme.animations.duration} ${theme.animations.cubicBezier}`};

    &:hover,
    &:focus {
        stroke: ${({ theme }) => theme.colors.editBtnHover};
        background-color: ${({ theme }) => theme.colors.backgroundEditBtnHover};
    }
`;

export const DeleteBtn = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: ${({ theme }) => theme.fontFamily.fontInter};
    width: 30px;
    height: 30px;
    background-color: ${({ theme }) =>
        theme.colors.backgroundDeleteFeedbackBtn};
    fill: ${({ theme }) => theme.colors.backgroundDeleteFeedbackBtn};
    stroke: ${({ theme }) => theme.colors.deleteFeedbackBtn};
    border: none;
    border-radius: 50%;
    cursor: pointer;

    transition: ${({ theme }) =>
        `background-color ${theme.animations.duration} ${theme.animations.cubicBezier}, stroke ${theme.animations.duration} ${theme.animations.cubicBezier}`};

    &:hover,
    &:focus {
        stroke: ${({ theme }) => theme.colors.white};
        background-color: ${({ theme }) => theme.colors.deleteFeedbackBtn};
    }
`;

export const WrapForInput = styled.div`
    margin-bottom: 14px;
`;

export const Input = styled(Field)`
    resize: none;
    padding: 14px 18px 14px 18px;
    width: 295px;
    box-sizing: border-box;
    height: 127px;
    font-family: ${({ theme }) => theme.fontFamily.fontInter};
    font-weight: ${({ theme }) => theme.fontWeight.sb};
    font-size: ${({ theme }) => theme.fontSizes.s};
    line-height: calc((18 / 14) * 100%);
    font-style: normal;
    background: ${({ theme }) => theme.colors.backgroundFeedbackInput};
    color: ${({ theme }) => theme.colors.textPrimary};
    border: ${({ theme }) => theme.borders.feedbackInput};
    border-radius: 8px;

    ${min(tablet)} {
        width: 404px;
    }

    ${min(desktop)} {
        margin-bottom: 18px;
    }

    &:disabled {
        cursor: not-allowed;
    }

    ::placeholder {
        opacity: 1;
        color: rgba(52, 52, 52, 1);
        font-weight: ${({ theme }) => theme.fontWeight.sb};
        font-size: ${({ theme }) => theme.fontSizes.s};
    }
`;

export const ErrorMessage = styled(FormikErrorMessage)`
    margin-left: 18px;
    max-width: 100%;
    color: ${({ theme }) => theme.colors.errorMessage};
    max-width: 240px;
    font-size: ${({ theme }) => theme.fontSizes.xs};
    font-weight: ${({ theme }) => theme.fontWeight.m};

    ${min(tablet)} {
        max-width: 330px;
    }
`;

export const FormBtnWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
`;

export const FormBtn = styled.button`
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.backgroundBtn};
    text-transform: none;
    width: 262px;
    height: 48px;
    font-family: ${({ theme }) => theme.fontFamily.fontInter};
    font-weight: ${({ theme }) => theme.fontWeight.sb};
    font-size: ${({ theme }) => theme.fontSizes.s};
    border: none;
    border-radius: 16px;
    cursor: pointer;
    transition: ${({ theme }) =>
        `background-color ${theme.animations.duration} ${theme.animations.cubicBezier}`};

    &:hover,
    &:focus {
        background-color: ${({ theme }) => theme.colors.backgroundBtnHover};
    }

    &:disabled {
        cursor: not-allowed;
    }
`;

export const FormBtnCancel = styled.button`
    color: ${({ theme }) => theme.colors.textPrimary};
    background-color: ${({ theme }) => theme.colors.backgroundBtnCancel};
    text-transform: none;
    width: 262px;
    height: 48px;
    font-family: ${({ theme }) => theme.fontFamily.fontInter};
    font-weight: ${({ theme }) => theme.fontWeight.sb};
    font-size: ${({ theme }) => theme.fontSizes.s};
    border: none;
    border-radius: 16px;
    cursor: pointer;
    transition: ${({ theme }) =>
        `background-color ${theme.animations.duration} ${theme.animations.cubicBezier}, color ${theme.animations.duration} ${theme.animations.cubicBezier}`};
    &:hover,
    &:focus {
        background-color: ${({ theme }) =>
            theme.colors.backgroundBtnCancelHover};
        color: ${({ theme }) => theme.colors.buttonCancelHover};
    }
`;

export const BtnCloseWrap = styled.button`
    position: absolute;
    top: 18px;
    right: 18px;
    border-radius: 50%;
    border: none;
    background-color: transparent;
    cursor: pointer;
    stroke: ${({ theme }) => theme.colors.textTitleHeader};
    transform-origin: 0px 0px;
    transition: ${({ theme }) =>
        `stroke ${theme.animations.duration} ${theme.animations.cubicBezier}`};

    &:hover,
    &:focus {
        stroke: #2b78ef;
    }
`;
