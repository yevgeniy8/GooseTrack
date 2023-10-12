import styled from '@emotion/styled';

export const WeekdaysList = styled.ul`
  display: flex;
  justify-content: space-around;

  border-radius: 8px;
  padding: 14px 18px;
  margin-bottom: 14px;

  overflow: hidden;

  color: ${({ theme }) => theme.colors.textTitleHeader};
  background: ${({ theme }) => theme.colors.backgroundSecondary};
  border: ${({ theme }) => theme.borders.calendar};
`;

export const WeekdaysItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  font-size: 16px;
  font-weight: 600;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: center;
  text-transform: uppercase;

  cursor: pointer;
`;

export const Number = styled.div`
  padding: 4px 6px;
  &.current-day {
    font-weight: bold;

    border-radius: 8px;

    color: white;
    background-color: #3e85f3;
  }
`;

export const Day = styled.div`
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px;
  text-transform: uppercase;

  margin-bottom: 6px;

  color: ${({ theme }) => theme.colors.nameDay};
`;
