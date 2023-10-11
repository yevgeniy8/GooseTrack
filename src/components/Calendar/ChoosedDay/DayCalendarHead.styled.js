import styled from '@emotion/styled';

export const WeekdaysList = styled.ul`
    display: flex;
    justify-content: space-around;
    padding: 14px 18px;
    color: ${({ theme }) => theme.colors.textTitleHeader};
    background: ${({ theme }) => theme.colors.backgroundSecondary};
    border: ${({ theme }) => theme.borders.calendar};
    border-radius: 8px;
    overflow: hidden;
    margin-bottom: 14px;
`;

export const WeekdaysItem = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center; /* Выравнивание по центру по горизонтали */
    text-align: center; /* Выравнивание текста по центру */
    justify-content: center; /* Вирівнювання по центру по вертикалі */
    font-family: Inter;
    font-size: 16px;
    font-weight: 600;
    line-height: 18px;
    letter-spacing: 0em;
    text-align: left;
    text-transform: uppercase;

    cursor: pointer;
    /* &:nth-last-child(-n + 2) {
        color: #3e85f3;
    } */

    /* &:nth-last-of-type(-n + 2) {
    color: #3e85f3;
  } */

    /* &.current-day {
        border-radius: 8px;
        color: white;
        width: 45px;
        padding: 2px;
        background-color: #3e85f3; /* Цвет выделения 
        font-weight: bold; /* Жирный шрифт для текущего дня 
    } */
`;

export const Number = styled.div`
    padding: 4px 6px;
    &.current-day {
        border-radius: 8px;
        color: white;
        ${'' /* width: 45px; */}

        background-color: #3e85f3; /* Цвет выделения */
        font-weight: bold; /* Жирный шрифт для текущего дня */
    }
`;

export const Day = styled.div`
    color: ${({ theme }) => theme.colors.nameDay};
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 18px; /* 128.571% */
    text-transform: uppercase;

    margin-bottom: 6px;
`;
