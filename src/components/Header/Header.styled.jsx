import styled from '@emotion/styled';
import { tablet, desktop, min } from 'styles/media';

export const BurgerMenuBtn = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    outline: none;
    border: none;
    cursor: pointer;
    background-color: transparent;
    text-align: center;
    width: 24px;
    height: 24px;
    stroke: ${({ theme }) => theme.colors.textPrimary};

    transition: ${({ theme }) =>
        `stroke ${theme.animations.duration} ${theme.animations.cubicBezier}`};

    ${min(tablet)} {
        width: 34px;
        height: 34px;
    }

    ${min(desktop)} {
        display: none;
    }

    &:hover,
    &:focus {
        stroke: ${({ theme }) => theme.colors.iconActive};
    }
`;

export const Svg = styled.svg`
    width: 100%;
    height: 100%;
`;

export const ImgWrapper = styled.div`
    display: none;

    ${min(desktop)} {
        display: flex;
        margin-right: 8px;
    }
`;

export const HeaderContainer = styled.div`
    max-width: 1087px;
    display: flex;
    align-items: center;
    margin-bottom: 64px;
    background-color: transparent;

    ${min(desktop)} {
        margin-bottom: 32px;
    }
`;

export const TextDiv = styled.div`
    display: none;

    ${min(desktop)} {
        display: flex;
        align-items: start;
        flex-direction: column;
        gap: 8px;
    }
`;

export const TitleH2 = styled.h2`
    font-size: ${({ theme }) => theme.fontSizes.xxxl};
    font-weight: ${({ theme }) => theme.fontWeight.b};
    line-height: calc(32 / 32);
    text-shadow: ${({ theme }) => theme.shadows.text};
    color: ${({ theme }) => theme.colors.textTitleHeader};
`;

export const MotivationTextP = styled.p`
    font-size: ${({ theme }) => theme.fontSizes.s};
    font-weight: ${({ theme }) => theme.fontWeight.sb};
    line-height: calc(18 / 14);
    color: ${({ theme }) => theme.colors.textTitleHeader};
`;

export const Span = styled.span`
    color: ${({ theme }) => theme.colors.brand};
`;

export const UIComponentsWrapperDiv = styled.div`
    display: flex;
    margin-left: auto;
    gap: 8px;

    ${min(tablet)} {
        gap: 14px;
    }
`;

export const MenuWrapperDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 18px;

    ${min(tablet)} {
        gap: 24px;
    }
`;
