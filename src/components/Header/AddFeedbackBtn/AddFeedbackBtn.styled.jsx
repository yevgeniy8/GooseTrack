import styled from '@emotion/styled';

export const Btn = styled.button`
    outline: none;
    border: none;
    cursor: pointer;
    text-align: center;
    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: calc(16 / 12);
    padding: 8px 20px;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.colors.backgroundBtn};
    color: ${({ theme }) => theme.colors.white};

    transition: ${({ theme }) =>
        `background-color ${theme.animations.duration} ${theme.animations.cubicBezier}`};

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.m}) {
        font-size: 14px;
        line-height: calc(18 / 14);
        padding: 12px 32px;
    }

    :hover,
    :focus {
        background-color: ${({ theme }) => theme.colors.backgroundBtnHover};
    }
`;
