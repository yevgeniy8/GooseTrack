import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

import { tablet, min } from 'styles/media';

export const ToolbarContainer = styled.div`
    margin-bottom: 24px;

    ${min(tablet)} {
        display: flex;
        justify-content: space-between;
    }
`;

export const PeriodTypeSelect = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 18px;
    gap: 8px;
`;

export const DateBox = styled.div`
    background-color: ${({ theme }) => theme.colors.brand};
    width: 146px;
    display: flex;
    padding: 6px 10px;
    justify-content: center;
    align-items: center;
    border-radius: 8px;

    ${min(tablet)} {
        width: 165px;
    }
`;

export const Date = styled.span`
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.white};
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 18px;

    ${min(tablet)} {
        font-size: 16px;
    }
`;

export const Icon = styled.svg`
    /* stroke: ${({ theme }) => theme.colors.sliderMonthDay};
    fill: none;

    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
    &:hover {
        stroke: ${({ theme }) => theme.colors.sliderMonthDayHover};
    } */
`;

export const BtnLeft = styled.button`
    padding: 8px 10px;
    width: 38px;
    height: 34px;
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
    padding: 8px 10px;
    width: 38px;
    height: 34px;
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
//якщо не потрібно прибрати PeriodPaginator Period
export const PeriodPaginator = styled.div`
    display: flex;
    border-radius: 8px;
    overflow: hidden;
    height: 34px;
`;

export const Period = styled.div`
    width: 76px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px 0;
    background-color: rgba(62, 133, 243, 0.2);
`;

export const BtnMonth = styled.button`
    width: 76px;
    height: 34px;
    padding: 8px 16px;
    border: none;
    border-radius: 8px 0 0 8px;
    color: ${({ theme }) => theme.colors.brand};
    border-right: ${({ theme }) => theme.borders.rightMonth};
    background-color: ${({ theme }) => theme.colors.backgroundMonthDay};
    font-family: Inter;
    font-size: 14px;
    font-weight: 500;
    line-height: 18px;
    letter-spacing: 0em;
    text-align: center;
    transition: ${({ theme }) =>
        `background-color ${theme.animations.duration} ${theme.animations.cubicBezier}, color ${theme.animations.duration} ${theme.animations.cubicBezier}`};
    &:hover,
    &:focus,
    &:active {
        background-color: ${({ theme }) =>
            theme.colors.backgroundMonthDayActive};
        color: ${({ theme }) => theme.colors.textMonthDayActive};
    }
    ${min(tablet)} {
        font-size: 16px;
        width: 82px;
    }
`;
// кнопка не виконуе сбою функцію, тож її можна прибрати а стилізувати посилання
export const BtnDay = styled.button`
    width: 76px;
    height: 34px;
    padding: 8px 16px;
    border: none;
    border-radius: 0 8px 8px 0;
    /* border-left: 1px solid rgba(62, 133, 243, 0.2); */
    background-color: ${({ theme }) => theme.colors.backgroundMonthDay};
    font-family: Inter;
    font-size: 14px;
    font-weight: 500;
    line-height: 18px;
    letter-spacing: 0em;
    text-align: center;
    color: ${({ theme }) => theme.colors.brand};
    transition: ${({ theme }) =>
        `background-color ${theme.animations.duration} ${theme.animations.cubicBezier}, color ${theme.animations.duration} ${theme.animations.cubicBezier}`};
    &:hover,
    &:focus,
    &:active {
        background-color: ${({ theme }) =>
            theme.colors.backgroundMonthDayActive};
        color: ${({ theme }) => theme.colors.textMonthDayActive};
    }
    ${min(tablet)} {
        font-size: 16px;
        width: 82px;
    }
`;
// візьми стилі з кнопок на задай клас актів як нижче у тебе буде LinkDay та LinkMonth
export const TypeLink = styled(NavLink)`
    &.active {
        background-color: ${({ theme }) =>
            theme.colors.backgroundMonthDayActive};
        color: ${({ theme }) => theme.colors.textMonthDayActive};
    }
`;
