import styled from '@emotion/styled';

export const WeekdaysList = styled.ul`
    display: flex;
    justify-content: space-around;
    padding: 14px 0;
    background-color: ${({ theme }) => theme.colors.backgroundSecondary};
    border: ${({ theme }) => theme.borders.calendar};
    border-radius: 8px;
    overflow: hidden;
    margin-bottom: 15px;

    transition: ${({ theme }) =>
        `background-color ${theme.animations.duration} ${theme.animations.cubicBezier}, border ${theme.animations.duration} ${theme.animations.cubicBezier}`};
`;

export const WeekdaysItem = styled.li`
    font-family: Inter;
    font-size: 16px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.textPrimary};
    line-height: 18px;
    letter-spacing: 0em;
    text-align: left;
    text-transform: uppercase;

    transition: ${({ theme }) =>
        `color ${theme.animations.duration} ${theme.animations.cubicBezier}`};
    /* &:nth-last-child(-n + 2) {
        color: #3e85f3;
    } */

    &:nth-last-of-type(-n + 2) {
        color: ${({ theme }) => theme.colors.brand};
    }
`;
