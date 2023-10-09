import styled from '@emotion/styled';
import { tablet, min } from '../../../styles/media';

export const ButtonLogout = styled.button`
    width: 131px;
    height: 46px;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 6px;
    padding: 16px 23px;
    margin-bottom: 24xp;

    color: ${({ theme }) => theme.colors.white};
    font-family: Inter;
    font-size: ${({ theme }) => theme.fontSizes.s};
    font-style: normal;
    font-weight: ${({ theme }) => theme.fontWeight.sb};
    line-height: 1.333;
    letter-spacing: -0.36px;

    border: none;
    border-radius: 16px;
    background-color: ${({ theme }) => theme.colors.brand};
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 4px 2px 16px 0px rgba(136, 165, 191, 0.48);

    &:hover,
    &:focus {
        background-color: ${({ theme }) => theme.colors.backgroundBtnHover};
    }

    ${min(tablet)} {
        width: 141px;
        height: 56px;
        font-size: ${({ theme }) => theme.fontSizes.l};
        gap: 11px;
    }
`;

export const Icon = styled.svg`
    width: 18px;
    height: 18px;
    stroke: rgba(255, 255, 255, 1);
    fill: none;

    ${min(tablet)} {
        width: 20px;
        height: 20px;
    }
`;
