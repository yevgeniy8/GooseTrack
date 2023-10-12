import styled from '@emotion/styled';

export const ToolbarContainer = styled.div`
    margin-bottom: 24px;

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.m}) {
        display: flex;
        justify-content: space-between;
    }
`;

export const PeriodTypeSelect = styled.div`
    display: flex;
    justify-content: space-between;
    /* margin-bottom: 18px; */
    /* gap: 8px; */
    @media screen and (min-width: 768px) {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 8px;
    }
    @media screen and (min-width: 1440px) {
        margin-right: 46px;
    }
`;

export const DateBox = styled.div`
    background-color: #3e85f3;
    width: 148px;
    display: flex;
    padding: 6px 10px;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
`;

export const Date = styled.span`
    text-transform: uppercase;
    color: white;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 18px;
    @media screen and (min-width: 768px) {
        font-size: 16px;
    }
    @media screen and (min-width: 1440px) {
        font-size: 16px;
    }
`;

export const ToggleBox = styled.div`
    display: flex;
    background-color: #fff;
    border: 1px solid rgba(220, 227, 229, 0.8);
    border-radius: 8px;
    gap: 1px;
    overflow: hidden;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const ToggleBtn = styled.div`
    padding: 7px 10px;
    background-color: #fff;
`;

export const Icon = styled.svg`
    /* stroke: #dce3e5;
    &:hover {
        stroke: ${({ theme }) => theme.colors.nameDay};
    } */
`;

export const BtnLeft = styled.button`
    padding: 6px;
    width: 36px;
    height: 30px;
    background-color: ${({ theme }) => theme.colors.backgroundSecondary};
    border: ${({ theme }) => theme.borders.calendar};
    border-radius: 8px 0 0 8px;
    transition: ${({ theme }) =>
        `stroke ${theme.animations.duration} ${theme.animations.cubicBezier}`};
    stroke: ${({ theme }) => theme.colors.sliderMonthDay};
    fill: none;
    &:hover {
        stroke: ${({ theme }) => theme.colors.sliderMonthDayHover};
    }
`;

export const BtnRight = styled.button`
    padding: 6px 8px;
    width: 36px;
    height: 30px;
    background-color: ${({ theme }) => theme.colors.backgroundSecondary};
    border: ${({ theme }) => theme.borders.calendar};
    border-radius: 0 8px 8px 0;
    transition: ${({ theme }) =>
        `stroke ${theme.animations.duration} ${theme.animations.cubicBezier}`};
    stroke: ${({ theme }) => theme.colors.sliderMonthDay};
    fill: none;
    &:hover {
        stroke: ${({ theme }) => theme.colors.sliderMonthDayHover};
    }
`;
