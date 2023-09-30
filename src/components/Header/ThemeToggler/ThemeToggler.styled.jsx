import styled from '@emotion/styled';

export const ToggleBtn = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    outline: none;
    border: none;
    cursor: pointer;
    width: 24px;
    height: 24px;
    background-color: transparent;
    fill: ${({ theme }) => theme.colors.brand};
    transition: ${({ theme }) =>
        `fill ${theme.animations.duration} ${theme.animations.cubicBezier}`};

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.m}) {
        width: 32px;
        height: 32px;
    }
    :hover,
    :focus {
        fill: ${({ theme }) => theme.colors.backgroundBtnHover};
    }
`;

export const Svg = styled.svg`
    width: 100%;
    height: 100%;
`;
