import styled from '@emotion/styled';

export const WeekdaysList = styled.ul`
  display: flex;
  justify-content: space-around;
  padding: 14px 0;
  color: ${({ theme }) => theme.colors.textTitleHeader};
  background: ${({ theme }) => theme.colors.backgroundSecondary};
  border: 1px solid rgba(220, 227, 229, 0.8);
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 15px;
`;

export const WeekdaysItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center; /* Выравнивание по центру по горизонтали */
  text-align: center; /* Выравнивание текста по центру */
  font-family: Inter;
  font-size: 16px;
  font-weight: 600;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: left;
  text-transform: uppercase;
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
  &.current-day {
    border-radius: 8px;
    color: white;
    ${'' /* width: 45px; */}
    padding: 4px 8px;
    background-color: #3e85f3; /* Цвет выделения */
    font-weight: bold; /* Жирный шрифт для текущего дня */
  }
`;

export const Day = styled.div`
  color: #343434;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px; /* 128.571% */
  text-transform: uppercase;

  margin-bottom: 4px;
`;
