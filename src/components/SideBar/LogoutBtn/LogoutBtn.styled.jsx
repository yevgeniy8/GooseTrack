import styled from '@emotion/styled';

export const ButtonLogout = styled.button`
    width: 131px;
    height: 46px;
    padding: 16px 23px;
    border: none;
    border-radius: 16px;
    color: #ffffff;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 1.333;
    letter-spacing: -0.36px;

    background-color: #3e85f3;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 4px 2px 16px 0px rgba(136, 165, 191, 0.48);
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 6px;
    margin-bottom: 24xp;
    &:hover,
    &:focus {
        background-color: #2b78ef;
    }

    @media (min-width: 768px) {
        width: 141px;
        height: 56px;
        font-size: 18px;
        gap: 11px;
    }
`;

export const Icon = styled.svg`
    width: 18px;
    height: 18px;
    stroke: rgba(255, 255, 255, 1);
    fill: none;

    @media (min-width: 768px) {
        width: 20px;
        height: 20px;
    }
`;
