import styled from '@emotion/styled';

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
    fill: ${({ theme }) => theme.colors.textPrimary};

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.m}) {
        width: 34px;
        height: 34px;
    }

    @media screen and (min-width: 1200px) {
        display: none;
    }
`;

export const Svg = styled.svg`
    width: 100%;
    height: 100%;
`;

export const MotivationContent = styled.div`
    display: none;

    @media screen and (min-width: 1200px) {
        display: flex;
        align-items: center;
        gap: 8px;
    }
`;

export const Img = styled.img`
    width: 64px;
    height: 60px;
`;

export const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 24px 20px;
    background-color: ${({ theme }) => theme.colors.backgroundPrimary};

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.m}) {
        padding: 24px 32px;
    }

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.l}) {
        padding: 40px 32px 32px;
    }
`;

export const TextDiv = styled.div`
    display: none;

    @media screen and (min-width: 1200px) {
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

export const TextP = styled.p`
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

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.m}) {
        gap: 14px;
    }
`;

export const MenuWrapperDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 18px;

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.m}) {
        gap: 24px;
    }
`;

export const AddFeedbackBtn = styled.button`
    padding: 0;
    outline: none;
    border: none;
    cursor: pointer;
    text-align: center;
    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: calc(16 / 12);
    padding: 12px 32px;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.colors.backgroundBtn};
    color: ${({ theme }) => theme.colors.white};

    transition: ${({ theme }) =>
        `background-color ${theme.animations.duration} ${theme.animations.cubicBezier}`};

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.m}) {
        font-size: 14px;
        line-height: calc(18 / 14);
    }

    :hover,
    :focus {
        background-color: ${({ theme }) => theme.colors.backgroundBtnHover};
    }
`;
